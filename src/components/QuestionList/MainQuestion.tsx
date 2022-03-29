import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'dva';
import { history } from 'umi';
import axios from 'axios';
import { stringify } from 'qs';

//@ts-ignore
import Question from '../qAndA/question';
import { Progress, Button, message } from 'antd';
import {
  FieldTimeOutlined,
  ReloadOutlined,
  UnorderedListOutlined,
  HomeOutlined,
  HeartOutlined,
  HeartFilled,
  StopFilled,
} from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';

import styles from './QuestionList.less';
import ShowTimer from './timer';
//@ts-ignore
import EndShow from './ShowEnd';
// import EndShow from './endShow';
import StoryShow from './StoryShow';

import {
  passRightNum,
  Menu,
  LifeNum,
  QuestionNum,
  Question_point,
  Main_point,
} from '../../utils/globalData';
import { getUser, changePoint } from '@/utils/getFuction';

const modeId = localStorage.getItem('modeId') || '0';

const MainQuestion = (props: any) => {
  const { dispatch, questions, user, checkpoint, setCheckpoint, setStartGame } =
    props;

  console.log('user', user);
  const [index, setIndex] = useState(0);
  const [totalNum, setTotalNum] = useState(NaN);
  const [end, setEnd] = useState(false);
  const [right, setRight] = useState(0); //答对数量
  const [result, setResult] = useState<boolean | null>(null); // 是否答对
  const [showStory, setShowStory] = useState(false); // 展示故事
  const [life, setLife] = useState(LifeNum);
  const [wrongNote, setWrongNote] = useState([]); // 错题记录

  const isLastGame = _.get(checkpoint, 'end') || false;

  useEffect(() => {
    getUser(dispatch);
  }, []);
  function getData(params: {
    checkpoint?: any;
    chapterId?: any;
    pageSize?: any;
  }) {
    const { checkpoint, chapterId, pageSize } = params;
    dispatch({
      type: `questions/getQuestions`,
      payload: {
        chapterId,
        pageNum: checkpoint,
        pageSize,
      },
    });
  }

  useEffect(() => {
    setShowStory(true);
  }, []);

  useEffect(() => {
    if (isLastGame) {
      openEndlessMode({ mode: 1 });
    }
  }, []);

  useEffect(() => {
    switch (modeId) {
      case '0':
        getData({
          checkpoint: checkpoint?.checkpoint,
          chapterId: checkpoint?.chapterId,
          pageSize: QuestionNum,
        });
        setShowStory(true);

        break;
      case '1':
        dispatch({
          type: `questions/getQuestionAll`,
          payload: {
            isAll: true,
          },
        });
        break;
    }
  }, []);
  useEffect(() => {
    const list = questions?.data || [];

    setTotalNum(list?.length);
    setIndex(0);
  }, [questions]);

  //判断游戏模式
  useEffect(() => {
    if (Number(modeId) === 1) {
      setShowStory(false);
    }
  }, [modeId]);

  useEffect(() => {
    if (result === true) {
      setRight(right + 1);
    } else if (result === false) {
      const newLife = life - 1;
      setLife(newLife);

      //错题记录
      const newNoteId = questions?.data[index].id;
      const noteList = wrongNote;
      //@ts-ignore
      noteList.push(newNoteId);
      setWrongNote(noteList);

      if (newLife === 0) {
        setEnd(true);
        setLife(LifeNum);
        setResult(null);
        if (Number(modeId) !== 0) {
          addRecord();
          judgeAchieve();
          addPoint(right * Question_point);
        }
        addWrongNote();
      }
    }
    if (index === questions?.data.length && index) {
      setEnd(true);
      addPoint(Main_point);
      addWrongNote();
    }

    //解锁新模式
    //    openEndlessMode(2)
  }, [index]);

  const addWrongNote = () => {
    const list = wrongNote;
    console.log('addWrongNote', list);
    // list?.map(item => {
    //   dispatch({
    //     type: `wrongNote/add`,
    //     payload: {
    //       questionId:item
    //     },
    //   }).then(() => {
    //     console.log('wrongNote/add')
    //   })
    // })
    dispatch({
      type: `wrongNote/add`,
      payload: {
        questionId: list,
      },
    }).then(() => {
      console.log('wrongNote/add');
    });

    setWrongNote([]);
  };

  const addPoint = (point: number) => {
    const newPoint = user.data.point + point;
    changePoint(dispatch, newPoint);
  };

  // 添加游戏记录（非主线模式
  const addRecord = () => {
    dispatch({
      type: `questions/successGame`,
      payload: {
        modeId: Number(modeId),
        grade: right * 20,
        number: index,
      },
    });

    if (right > 10) {
      openEndlessMode(2);
    }
    if (right > 20) {
      openEndlessMode(3);
    }
  };

  //判断成就是否存在
  const judgeAchieve = () => {
    dispatch({
      type: `user/getUserAchieve`,
      payload: {},
    }).then((res: any) => {
      const achieveList = res?.filter((x: any) => {
        return x?.modeID === modeId && !x?.userId && x?.number <= right;
      });
      if (achieveList?.length) {
        achieveList?.map((item: any) => {
          addAchieve(item?.id);
        });
      }
    });
  };

  //无尽模式游戏成就
  const addAchieve = (id: number) => {
    dispatch({
      type: `user/addUserAchieves`,
      payload: {
        achieveId: id,
      },
    }).then(() => {
      message.success('新的成就解锁了✿✿ヽ(°▽°)ノ✿');
    });
  };
  const returnMap = () => {
    setStartGame(false);
  };

  //停止游戏
  const stopGame = () => {
    addRecord();
    setEnd(true);
  };

  // 主线模式通关，修改进度
  const userPassGame = async () => {
    const URL = 'http://localhost:3000';
    const userId = user.data.id;
    if (
      user.data?.chapterId === checkpoint?.chapterId &&
      user.data?.checkpoint === checkpoint?.checkpoint &&
      right > passRightNum
    ) {
      //通关
      const newProgress = Menu[checkpoint?.index + 1];
      const data = {
        chapterId: newProgress?.chapterId,
        checkpoint: newProgress?.checkpoint,
      };
      const incomingData = await axios
        .put(`${URL}/user/over?userId=${userId}&${stringify(data)}`)
        .then(() => {
          axios
            .get(`${URL}/user/info?userId=${userId}`)
            .then((res: { data: any[] }) => {
              localStorage.setItem('user', JSON.stringify(res?.data[0]));
            });
        });
    }
  };

  //解锁新模式
  const openEndlessMode = (params: any) => {
    const { mode } = params;
    dispatch({
      type: 'user/getUSerMode',
      payload: {},
    }).then((res: any[]) => {
      if (res && res.length) {
        res.forEach((item: { id: number; userId: null }) => {
          if (item.id === mode && item.userId === null) {
            dispatch({
              type: 'user/unlockUserMode',
              payload: {
                modeId: mode,
              },
            }).then(() => {
              message.success('新的模式解锁了ლ(╹◡╹ლ)');
            });
          }
        });
      }
    });
  };

  const onBtnClick = (option: any, current_option: any) => {
    setIndex(index + 1);
    option === current_option ? setResult(true) : setResult(false);
  };

  const nextGame = () => {
    setIndex(0);

    const newProgress = Menu[checkpoint?.index + 1];
    //@ts-ignore
    newProgress['index'] = checkpoint?.index + 1;
    setCheckpoint(newProgress);

    dispatch({
      type: `questions/getQuestions`,
      payload: {
        chapterId: newProgress.chapterId,
        pageSize: 5,
        pageNum: newProgress.checkpoint,
      },
    });
  };

  const handleAgain = () => {
    setIndex(0);
    setEnd(false);
    setRight(0);
    setLife(LifeNum);
  };
  return (
    <div className={styles.box}>
      {end && (
        <EndShow
          modeId={modeId}
          updateGrade={userPassGame}
          right={right}
          nextGame={nextGame}
          again={handleAgain}
          returnMap={returnMap}
        />
      )}

      {!end && !showStory && (
        <div className={styles.content} key="content">
          <div className={styles.tool}>
            <div className={styles.process}>
              <Progress percent={(index * 100) / totalNum} showInfo={false} />
              <div className={styles.desc}>
                {index} {Number(modeId) === 0 ? `/${totalNum}` : ''}
              </div>
            </div>

            <div className={styles.timer}>
              <div className={styles.stop} onClick={stopGame}>
                <StopFilled />
              </div>
              <HeartFilled />
              <span
                style={{
                  marginLeft: '8px',
                }}
              >
                {life}
              </span>
            </div>
          </div>
          <Question question={questions?.data[index]} onBtnClick={onBtnClick} />
          <div className={styles.footer}>
            <div className={styles.btns}>
              <Button type="text" onClick={() => setShowStory(true)}>
                {/* 重新开始 */}
                <ReloadOutlined />
              </Button>
              <Button
                type="text"
                onClick={() => {
                  setStartGame(false);
                }}
              >
                {/* 返回列表 */}
                <UnorderedListOutlined />
              </Button>
              <Button
                type="text"
                onClick={() => {
                  history.push('/');
                }}
              >
                {/* 返回首页 */}
                <HomeOutlined />
              </Button>
            </div>
          </div>
          {/* <Question question={questionList[index]} onBtnClick={onBtnClick} /> */}
        </div>
      )}

      {/* todo 解决传入dispatch导致重复渲染的问题？ */}
      {showStory && (
        <StoryShow
          story={checkpoint?.story}
          setShowStory={setShowStory}
          isLastGame={isLastGame}
          // openEndlessMode={openEndlessMode({modeId:1})}
        />
      )}
    </div>
  );
};

function mapStateToProps(state: any) {
  // const questions = state.questions.data;
  return {
    // loading: state.loading.models.questions,
    // questions
    ...state,
    // ...listSelector(state, ownProps),
  };
}

export default connect(mapStateToProps)(MainQuestion);

/* eslint-disable jsx-a11y/href-no-hash */
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { history } from 'umi';
import axios from 'axios';
import URL from '../../utils/url';
import { stringify } from 'qs';
import _ from 'lodash';

import Question from '../qAndA/question';
import { Card, Progress, Button } from 'antd';
import { FieldTimeOutlined } from '@ant-design/icons';
import styles from './QuestionList.less';
import ShowTimer from './timer';
import EndShow from './ShowEnd';
import StoryShow from './StoryShow';

import { passRightNum, Menu, LifeNum } from '../../utils/globalData';
const user =
  JSON.parse(localStorage.getItem('user'))[0] ||
  JSON.parse(localStorage.getItem('user'));

const QuestionList = ({
  questionList,
  dispatch,
  questions,
  loading,
  checkpoint,
  setCheckpoint,
  setStartGame,
}) => {
  const [index, setIndex] = useState(0);
  const [totalNum, setTotalNum] = useState(NaN);
  const [end, setEnd] = useState(false);
  const [right, setRight] = useState(0); //答对数量
  const [result, setResult] = useState(null); // 是否答对
  const [showStory, setShowStory] = useState(true); // 展示故事
  const [life, setLife] = useState(LifeNum);

  const modeId = localStorage.getItem('modeId');
  const userId = localStorage.getItem('userId');

  const isLastGame = _.get(checkpoint, 'end');

  // 判断游戏模式
  useEffect(() => {
    if (Number(modeId) === 1) {
      // setStartGame(true)
      setShowStory(false);
    }
  }, [modeId]);
  useEffect(() => {
    setTotalNum(questionList.length);
    setIndex(0);
    // }, [])
  }, [questionList]);

  useEffect(() => {
    if (result === true) {
      setRight(right + 1);
    } else if (result === false) {
      const newLife = life - 1;
      setLife(newLife);
      if (newLife === 0) {
        setEnd(true);
        setLife(LifeNum);
        setResult(null);
        if (Number(modeId) === 1) {
          addRecord();
        }
      }
    }

    if (index === questionList.length && index) {
      setEnd(true);
    }
  }, [index]);

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
  };

  const returnMap = () => {
    setStartGame(false);
  };
  // 主线模式通关，修改进度
  const userPassGame = async () => {
    if (
      user?.chapterId === checkpoint?.chapterId &&
      user?.checkpoint === checkpoint?.checkpoint &&
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
          axios.get(`${URL}/user/info?userId=${userId}`).then((res) => {
            localStorage.setItem('user', JSON.stringify(res?.data[0]));
          });
        });
    }
  };

  const openEndlessMode = () => {
    dispatch({
      type: 'user/getUSerMode',
      payload: {},
    }).then((res) => {
      if (res && res.length) {
        res.forEach((item) => {
          if (item.id === 1 && item.userId === null) {
            dispatch({
              type: 'user/unlockUserMode',
              payload: {
                modeId: 1,
              },
            });
          }
        });
      }
    });
  };

  const onBtnClick = (option, current_option) => {
    setIndex(index + 1);
    option === current_option ? setResult(true) : setResult(false);
  };

  const nextGame = () => {
    setIndex(0);

    const newProgress = Menu[checkpoint?.index + 1];
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

  return (
    <div className={styles.box}>
      {end && (
        <div>
          <EndShow
            modeId={'0'}
            updateGrade={userPassGame}
            right={right}
            nextGame={nextGame}
            again={() => {
              setIndex(0);
              setEnd(false);
              setRight(0);
            }}
            returnMap={returnMap}
          />
        </div>
      )}

      {!end && !showStory && (
        <div>
          <div className={styles.tool}>
            <div className={styles.process}>
              <Progress percent={(index * 100) / totalNum} showInfo={false} />
              <div className={styles.desc}>
                {index} / {totalNum}
              </div>
            </div>
            <div className={styles.btns}>
              <Button type="text" onClick={() => setShowStory(true)}>
                重新开始
              </Button>
              <Button
                type="text"
                onClick={() => {
                  setStartGame(false);
                }}
              >
                返回列表
              </Button>
              <Button
                type="text"
                onClick={() => {
                  history.push('/');
                }}
              >
                返回首页
              </Button>
            </div>
            <div className={styles.timer}>
              <FieldTimeOutlined />
              {life}
            </div>
          </div>
          <Question question={questionList[index]} onBtnClick={onBtnClick} />
        </div>
      )}

      {showStory && (
        <div>
          <StoryShow
            story={checkpoint?.story}
            setShowStory={setShowStory}
            isLastGame={isLastGame}
            openEndlessMode={openEndlessMode}
          />
        </div>
      )}
    </div>
  );
};

QuestionList.propTypes = {};

function mapStateToProps(state) {
  // const questions = state.questions.data;
  return {
    // loading: state.loading.models.questions,
    // questions
    ...state,
    // ...listSelector(state, ownProps),
  };
}

export default connect(mapStateToProps)(QuestionList);

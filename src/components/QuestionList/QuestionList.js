/* eslint-disable jsx-a11y/href-no-hash */
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { history } from 'umi';
import Question from '../qAndA/question';
import { Card, Progress, Button } from 'antd';
import {
  FieldTimeOutlined,
} from '@ant-design/icons';
import styles from './QuestionList.less';
import ShowTimer from './timer';
import GameOver from './GameOver';
import EndShow from './endShow';

import MaxCheckpoint from '../../utils/globalData'


const QuestionList = ({ questionList, dispatch, questions, loading }) => {
  const [index, setIndex] = useState(0);
  const [totalNum, setTotalNum] = useState(NaN);
  const [end, setEnd] = useState(false)
  const [right, setRight] = useState(0);//答对数量
  const [result, setResult] = useState(null) // 是否答对


  const modeId = localStorage.getItem('modeId')


  useEffect(() => {
    setTotalNum(questionList.length);
    setIndex(0)
  // }, [])
}, [questionList])



  // 添加游戏记录（非主线模式
  const addRecord = () => {
    dispatch({
      type: `questions/successGame`,
      payload: {
        modeId: Number(modeId),
        grade: right * 20,
        number: index,
      }
    }).then(() => {
      setEnd(true)
    })
  }

  // 主线模式通关，修改进度
  const userPassGame = () => {
    const user = JSON.parse(localStorage.getItem('user'))[0] || JSON.parse(localStorage.getItem('user'));
    const nextCheckpoint = Number(user?.checkpoint) === MaxCheckpoint ? 1 : Number(user?.checkpoint) + 1;
    const nextChapterId = Number(user?.checkpoint) === MaxCheckpoint ? Number(user?.chapterId) + 1 : Number(user?.chapterId);

    dispatch({
      type: `user/userPassGame`,
      payload:{
        chapterId:nextChapterId,
        checkpoint:nextCheckpoint
      }
    }).then(() =>{
      dispatch({
        type: `user/getUserInfo`,
        payload:{
        }
      })
    })
  }


  const onBtnClick = (option, current_option) => {

    setIndex(index + 1);
    option === current_option ? setResult(true) : setResult(false);
  }

  const nextGame = () => {
    setIndex(0);
    dispatch({
      type: `questions/getQuestions`,
      payload: {
        chapterId: JSON.parse(localStorage.getItem('user')).chapterId,
        pageSize: 5,
        pageNum: JSON.parse(localStorage.getItem('user')).checkpoint
      }
    })
  }



  return (
    <div className={styles.box}>
      {(end) && <div>
        <EndShow 
        modeId={'0'}
        updateGrade={userPassGame}
        right={right}
        nextGame={nextGame}
        again={() => {setIndex(0); setEnd(false)}}
        />
      </div>}

      {(!end) && <div>
        <div className={styles.tool}>
          <div className={styles.process}>
            <Progress percent={index * 100 / totalNum} showInfo={false} />
            <div className={styles.desc}>{index} / {totalNum}</div>
          </div>
          <div className={styles.timer}>
            <FieldTimeOutlined />
            <ShowTimer />
          </div>
        </div>
        <Question question={questionList[index]} onBtnClick={onBtnClick} />
      </div>}

      <GameOver
        right={right}
        setRight={setRight}
        quizLength={questionList.length}
        setGameOver={setEnd}
        result={result}
        index={index}
      />

    </div>
  );
};

QuestionList.propTypes = {
};

function mapStateToProps(state) {
  // const questions = state.questions.data;
  return {
    // loading: state.loading.models.questions,
    // questions
    ...state
    // ...listSelector(state, ownProps),
  };
}

export default connect(mapStateToProps)(QuestionList);


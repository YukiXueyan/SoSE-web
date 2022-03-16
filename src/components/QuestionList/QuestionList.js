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
import ShowTimer from './timer'

import MaxCheckpoint from '../../utils/globalData'


const QuestionList = ({ questionList, dispatch, questions, loading }) => {
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [newQuestion, setQuestion] = useState();
  const [grade, setGrade] = useState(0);
  const [totalNum, setTotalNum] = useState(NaN);
  const [end, setEnd] = useState(false)
  
  const modeId = localStorage.getItem('modeId')


  useEffect(() => {
    setTotalNum(questionList.length);
    setQuestion(questionList[0])
    setIndex(0)
  }, [questionList])


  useEffect(() => {
    setQuestion(questionList[index])
  }, [index])

  // 添加游戏记录（非主线模式
  const addRecord = () => {
    dispatch({
      type: `questions/successGame`,
      payload:{
        modeId:Number(modeId),
        grade:grade,
        number:index,
      }
    }).then(() =>{
      setEnd(true)
    })
  }

  // 主线模式通关，修改进度
  const userPassGame = () => {
    
    const user = JSON.parse(localStorage.getItem('user'))[0] || JSON.parse(localStorage.getItem('user'));
    const nextCheckpoint = Number(user?.checkpoint) === MaxCheckpoint ? 1 :Number(user?.checkpoint)+1;
    const nextChapterId = Number(user?.checkpoint) === MaxCheckpoint ? Number(user?.chapterId)+1:Number(user?.chapterId);

    console.log(nextCheckpoint, nextChapterId)
    setEnd(true)
    dispatch({
      type: `user/userPassGame`,
      payload:{
        chapterId:nextChapterId,
        checkpoint:nextCheckpoint
      }
    }).then(() =>{
      // dispatch({
      //   type: `user/getUserInfo`,
      //   payload:{
      //   }
      // }).then(() =>{
      //   setEnd(false)
      // })
    })
  }

  const onBtnClick = (option, current_option) => {

    if (option === current_option) {
      setGrade(grade + 20);
    }
    if(index+1 === totalNum){
      setEnd(true)
      if(String(modeId) === '0'){
        userPassGame()
      }
     }
    setIndex(index + 1)
  }

  const nextGame = () => {
    setIndex(0);
    setGrade(0);
    dispatch({
      type: `questions/getQuestions`,
      payload:{
        chapterId:JSON.parse(localStorage.getItem('user')).chapterId,
        pageSize:5,
        pageNum:JSON.parse(localStorage.getItem('user')).checkpoint
      }
    })
  }


  console.log('end', end)
  return (
    <div className={styles.box}>
      {(end) && <div>
        <Card title="游戏结束" extra={<Button onClick={nextGame} type='link'>下一关</Button>} style={{ width: 300 }}>
          <p>本次得分为：{grade}</p>
          <a onClick={() => {
            setIndex(0);
            setGrade(0);
            setEnd(false)
          }}>再试一次</a>
        </Card>
      </div>}

      {(!end) && <div>
        <div className={styles.tool}>
          <div className={styles.process}>
            <Progress percent={index*100 / totalNum} showInfo={false} />
            <div className={styles.desc}>{index} / {totalNum}</div>
          </div>
          <div className={styles.timer}>
          <FieldTimeOutlined />
          <ShowTimer />
          </div>
        </div>
        <Question question={questionList[index]} onBtnClick={onBtnClick} />
      </div>}



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


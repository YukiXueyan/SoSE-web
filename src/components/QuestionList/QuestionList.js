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


const QuestionList = ({ questionList, dispatch, questions, loading }) => {
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [newQuestion, setQuestion] = useState();
  const [grade, setGrade] = useState(0);
  const [totalNum, setTotalNum] = useState(NaN);
  
  const modeId = localStorage.getItem('modeId')


  useEffect(() => {
    setTotalNum(questionList.length);
    setQuestion(questionList[0])
    setIndex(0)
  }, [questionList])
  

  useEffect(() => {
    setQuestion(questionList[index])
  }, [index])
  console.log('QuestionList', questionList, modeId, questions)

  const onBtnClick = (option, current_option) => {
    if (option === current_option) {
      setGrade(grade + 20);
    }else if(modeId !== '0'){
      dispatch({
        type: `user/successGame`,
        payload:{
          modeId:Number(modeId),
          grade:grade,
          number:index,
        }
      })
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
        pageNum:JSON.parse(localStorage.getItem('user')).checkpoint+1
      }
    })
  }

  // useEffect(() => {
  //   // if(index === totalNum && index !== 0) {
  //   //   if(String(modeId) === '0'){
  //   //     dispatch({
  //   //       type: `user/userPassGame`,
  //   //       payload:{
  //   //         chapterId:JSON.parse(localStorage.getItem('user')).chapterId,
  //   //         checkpoint:JSON.parse(localStorage.getItem('user')).checkpoint+1
  //   //       }
  //   //     }).then(() => {
  //   //       dispatch({
  //   //         type: `user/getUserInfo`,
  //   //       })
  //   //     });
  //   //   }


  //   // }
  // },[index])

  return (
    <div className={styles.box}>
      {(index === totalNum && index !== 0) && <div>
        <Card title="游戏结束" extra={<Button onClick={nextGame} type='link'>下一关</Button>} style={{ width: 300 }}>
          <p>本次得分为：{grade}</p>
          <a href={window.location.href} onClick={() => {
            setIndex(0);
            setGrade(0);
          }}>再试一次</a>
        </Card>
      </div>}

      {(index !== totalNum) && <div>
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


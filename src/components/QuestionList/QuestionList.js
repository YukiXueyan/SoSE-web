/* eslint-disable jsx-a11y/href-no-hash */
import React, { useState, useEffect } from 'react';
import Question from '../qAndA/question';

import { Card, Progress } from 'antd';
import {
  FieldTimeOutlined,
} from '@ant-design/icons';
import styles from './QuestionList.less';
import ShowTimer from './timer'


const QuestionList = ({ questionList, mode }) => {
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [newQuestion, setQuestion] = useState();
  const [grade, setGrade] = useState(0);
  const [totalNum, setTotalNum] = useState(NaN);


  useEffect(() => {
    setTotalNum(questionList.length);
    setQuestion(questionList[0])
    setIndex(0)
  }, [questionList])

  useEffect(() => {
    setQuestion(questionList[index])
  }, [index])

  const onBtnClick = (option, current_option) => {
    if (option === current_option) {
      setGrade(grade + 20);
    }
    setIndex(index + 1)

  }

  const duration = () => {
    const { rowValues } = this.props
    const createTime = new Date(rowValues.create_time).getTime() // 建单时间戳
    const currentTime = new Date().getTime() // 当前时间戳
    const durTime = currentTime - createTime
    let hour = Math.floor(durTime / 1000 / 3600)
    let minute = Math.floor(durTime / 1000 % 3600 / 60)
    let second = Math.floor(durTime / 1000 % 3600 % 60)
    if (hour.toString().length === 1) {
      hour = `0${hour}`
    }
    if (minute.toString().length === 1) {
      minute = `0${minute}`
    }
    if (second.toString().length === 1) {
      second = `0${second}`
    }
    return `${hour} : ${minute} : ${second}`
  }

  return (
    <div className={styles.box}>
      {(index === totalNum && index !== 0) && <div>
        <Card title="游戏结束" extra={<a href="#">下一关</a>} style={{ width: 300 }}>
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

export default QuestionList;

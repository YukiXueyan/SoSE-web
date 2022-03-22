/* eslint-disable jsx-a11y/href-no-hash */
import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './IndexGame.less';
import QuestionList from '../components/QuestionList/QuestionList';
import TopNav from '../components/TopNav/TopNav';
import Map from '../components/Map/Map'
// import { LoadingOutlined } from 'antd';
// import {
//   LoadingOutlined
// } from '@ant-design/icons';
import { Spin } from 'antd';


const namespace = 'questions';
const user = JSON.parse(localStorage.getItem('user'))[0] || JSON.parse(localStorage.getItem('user'))

const Game = ({ dispatch, questions, loading }) => {
  const [title, setTitle] = useState('');
  const [startGame, setStartGame] = useState(false); // 是否开始游戏。true：显示游戏列表；false：显示地图列表
  const [newCheckpoint, setCheckpoint] = useState(null); // 判断当前关卡

  useEffect(() => {
    const location = window.location.href;

    if (location.indexOf('testMode') !== -1) {
      setTitle('测试模式')
      getData(10)
    } else if (location.indexOf('endlessMode') !== -1) {
      setTitle('无尽模式')
      setStartGame(true)
     getData(5)
    } else {
      getData(5, user.chapterId)
    }
  }, [])

  // useEffect(() => {
  //   if(loading){
  //     const hide = message.loading('Action in progress..', 0);
  //     setTimeout(hide, 2500);
  //   }
  // },[])
  useEffect(() => {
    if(newCheckpoint && newCheckpoint !== null){
      getData(newCheckpoint?.checkpoint,newCheckpoint?.chapterId,6)
    }
  },[newCheckpoint])



  function getData(checkpoint, chapterId,pageSize) {
    dispatch({
      type: `${namespace}/getQuestions`,
      payload: {
        chapterId,
        pageNum: checkpoint,
        pageSize
      }
    })
  }
  // useEffect(() => {
  //   getData(amount)
  // },[])
  return (
    <>
      {startGame ? <div className={styles.box}>
        <TopNav />
        <h2 className={styles.title}>{title}</h2>
        {loading && loading.global ? <div>
          <Spin size="large" />
        </div> : <QuestionList 
          questionList={questions.data} 
          setCheckpoint={setCheckpoint} 
          checkpoint={newCheckpoint} 
          setStartGame={setStartGame}/>}

      </div> : <div>
        <Map 
        user={user}
        setStartGame={setStartGame}
        setCheckpoint={setCheckpoint}
        />
        </div>}
    </>
  );
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

export default connect(mapStateToProps)(Game);
// export default connect(({ questions }) => ({
//   questions,
// }))(Game);
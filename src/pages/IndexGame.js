/* eslint-disable jsx-a11y/href-no-hash */
import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './IndexGame.less';
import QuestionList from '../components/QuestionList/QuestionList';
import TopNav from '../components/TopNav/TopNav';
// import { LoadingOutlined } from 'antd';
// import {
//   LoadingOutlined
// } from '@ant-design/icons';
import { Spin } from 'antd';


const namespace = 'questions';

const Game = ({ dispatch, questions, loading }) => {
  const [title, setTitle] = useState('');
  
  useEffect(() => {
    const location = window.location.href;

    if (location.indexOf('testMode') !== -1) {
      setTitle('测试模式')
      getData(10)
    } else if (location.indexOf('endlessMode') !== -1) {
      setTitle('无尽模式')
      getData(4)
    } else {
      getData(5)
    }
  }, [])

  // useEffect(() => {
  //   if(loading){
  //     const hide = message.loading('Action in progress..', 0);
  //     setTimeout(hide, 2500);
  //   }
  // },[])


  function getData(amount ) {
    const user = JSON.parse(localStorage.getItem('user'))[0] || JSON.parse(localStorage.getItem('user'))
    dispatch({
      type: `${namespace}/getQuestions`,
      payload:{
        chapterId:user.chapterId,
        pageSize:amount
      }
    })
  }
  // useEffect(() => {
  //   getData(amount)
  // },[])
  return (
    <div className={styles.box}>
      <TopNav />
      <h2 className={styles.title}>{title}</h2>
      {loading && loading.global ? <div>
        <Spin size="large" />
      </div>:<QuestionList questionList={questions.data} />}
      
    </div>
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
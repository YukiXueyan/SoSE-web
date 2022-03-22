import React, { useState, useEffect } from 'react';

import _ from 'lodash';
import {Button} from 'antd'

import { connect } from 'dva';

const TestEffect = (props: any) => {
  const {dispatch, questions} = props;

  useEffect(() => {
    console.log('init', props)
    getData(1,1,10)
  },[])
  useEffect(() => {
    console.log('questions', questions)
  },[questions])
  function getData(checkpoint: any, chapterId: any,pageSize: any) {
    console.log('test, getData')
    dispatch({
      type: `questions/getQuestions`,
      payload: {
        chapterId,
        pageNum: checkpoint,
        pageSize
      }
    })
  }

  return <div  >
    <Button onClick={()=>{getData(1,1,10)}}>
      测试。。。
    </Button>
  </div>
}

function mapStateToProps(state:any) {
  // const questions = state.questions.data;
  return {
    // loading: state.loading.models.questions,
    // questions
    ...state
    // ...listSelector(state, ownProps),
  };
}

export default connect(mapStateToProps)(TestEffect);

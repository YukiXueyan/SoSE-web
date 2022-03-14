import React, { useEffect, useState } from 'react';
import { connect } from 'dva';

import styles from './index.less';
const namespace = 'questions';

// export default function IndexPage({ dispatch, questions, loading }:any) {
const Game = ({ dispatch, questions, loading }: any) => {
  const getData = (amount: any) => {
    dispatch({
      type: `${namespace}/testGet`,
      payload: {
        amount,
        category: 18
      },
    });
  }
  useEffect(() => {
    getData(10)
    console.log('useEffect')
  },[])

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
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

export default connect(mapStateToProps)(Game);
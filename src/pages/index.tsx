import React, { useEffect, useState } from 'react';
import { connect } from 'dva';

import styles from './index.less';
import MainQuestion from '@/components/QuestionList/MainQuestion';

// export default function IndexPage({ dispatch, questions, loading }:any) {
const Game = ({ dispatch, questions, loading }: any) => {

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <MainQuestion />
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
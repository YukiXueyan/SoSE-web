import request from '../utils/request';

// const delay = (millisecond) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, millisecond);
//   });
// };

import {
  questionList,
  questionListAll,
  addRecord,
  updateQ,
  deleteQ,
} from '../services/questions';

export default {
  namespace: 'questions',
  state: {
    data: [],
    mode: 0,
    checkpoint: 1,
    chapterId: 1,
  },
  reducers: {
    addNewQuestion(state, { payload: data, param }) {
      return {
        ...state,
        data: data,
      };
    },
    changeMode(state, { payload: data }) {
      return {
        ...state,
        mode: data,
      };
    },
  },
  effects: {
    *getQuestions({ payload }, { call, put }) {
      const { status, data } = yield call(questionList, payload);
      yield put({ type: 'addNewQuestion', payload: data, param: payload });
      return data;
    },
    *getQuestionAll({ payload }, { call, put }) {
      const { status, data } = yield call(questionListAll, payload);
      yield put({ type: 'addNewQuestion', payload: data, param: payload });
      return data;
    },
    *successGame({ payload }, { call, put }) {
      const { status, data } = yield call(addRecord, payload);
      return data;
    },
    *choiceMode({ payload }, { call, put }) {
      const { status, data } = yield put({ type: 'changeMode', payload: data });
      return data;
    },
    *updateQuestion({ payload }, { call, put }) {
      const { status, data } = yield call(updateQ, payload);
      return data;
    },
    *deleteQuestion({ payload }, { call, put }) {
      const { status, data } = yield call(deleteQ, payload);
      return data;
    },
  },
};

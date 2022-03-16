import request from '../utils/request'; 
// import {URL} from '../utils/url';
const URL = 'http://localhost:3000/'
import { stringify } from 'qs'

// const delay = (millisecond) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, millisecond);
//   });
// };

import {
  questionList,
  addRecord
} from '../services/questions'

export default {
    namespace: 'questions',
    state: {
      data:[],
      mode:0
    },
    reducers: {
      addNewQuestion(state, { payload: data }) {
        console.log('addNewQuestion',data)
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
        
        const { status, data } = yield call(questionList, payload)
        yield put({ type: 'addNewQuestion', payload: data });
        return data;
      },
      *successGame({ payload }, { call, put }) {
        
        const { status, data } = yield call(addRecord, payload)
        return data;
      },
      *choiceMode({ payload }, { call, put }) {
        yield put({ type: 'changeMode', payload: data });
      },
      
    },
  };
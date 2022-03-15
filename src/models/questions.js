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
} from '../services/questions'

export default {
    namespace: 'questions',
    state: {
      data:[]
    },
    reducers: {
      'search'(state, { payload: id }) {
        return state;
      },
      addNewQuestion(state, { payload: data }) {
        return {
          data: data,
        };
      },
    },
    effects: {
      // *getQuestions({ payload }, { call, put }) {  // eslint-disable-line
      //   // const { call, put } = sagaEffects;
      //   const {amount, category} = payload;
      //   const endPointURI = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=easy&type=multiple`;
  
      //   const data = yield call(request, endPointURI);
      //   yield put({ type: 'addNewQuestion', payload: data });
      // },
      *getQuestions({ payload }, { call, put }) {
        
        const { status, data } = yield call(questionList, payload)
        yield put({ type: 'addNewQuestion', payload: data });
        return data;
      },
      
    },
  };
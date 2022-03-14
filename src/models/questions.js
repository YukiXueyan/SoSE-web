import request from '../utils/request'; 
// import {URL} from '../utils/url';
const URL = 'http://localhost:3000/'
// const delay = (millisecond) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, millisecond);
//   });
// };

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
          data: data.data.results,
        };
      },
      addNewCard(state, { payload: newCard }) {
        return {
          data: newCard,
        };
      }
    },
    effects: {
      *getQuestions({ payload }, { call, put }) {  // eslint-disable-line
        // const { call, put } = sagaEffects;
        const {amount, category} = payload;
        const endPointURI = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=easy&type=multiple`;
  
        const data = yield call(request, endPointURI);
        yield put({ type: 'addNewQuestion', payload: data });
      },
      // test方法
      *queryInitCards(_, sagaEffects) {
        const { call, put } = sagaEffects;
        const endPointURI = `${URL}/user/select`;
        // const endPointURI = 'http://jsonplaceholder.typicode.com/users';
  
        const puzzle = yield call(request, endPointURI);
        console.log('queryInitCards', puzzle)
        // yield put({ type: 'addNewCard', payload: puzzle });
      },
      *testGet({ payload }, { call, put }) {  // eslint-disable-line
        // const { call, put } = sagaEffects;
        const {amount, category} = payload;
        const endPointURI = `http://localhost:3000/user/info?userId=1`;
  
        const data = yield call(request, endPointURI);
        // yield put({ type: 'addNewQuestion', payload: data });
        return data;
      },
    },
  };
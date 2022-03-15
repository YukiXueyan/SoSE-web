// import request from '../utils/request'; 
// import {URL} from '../utils/url';

// const delay = (millisecond) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, millisecond);
//   });
// };

import {
  userInfo,
  passGame,
  userMode,
  userAchieve,
  addUserPoint,
  addNewUser
} from '../services/user'

export default {
    namespace: 'user',
    state: {
      data:[]
    },
    reducers: {

    },
    effects: {
      *getUserInfo({ payload }, { call, put }) {
        
        const { status, data } = yield call(userInfo, payload)
        return data;
      },
      *userPassGame({ payload }, { call, put }) {
        
        const { status, data } = yield call(passGame, payload)
        return data;
      },
      *getUSerMode({ payload }, { call, put }) {
        
        const { status, data } = yield call(userMode, payload)
        return data;
      },
      *getUserAchieve({ payload }, { call, put }) {
        
        const { status, data } = yield call(userAchieve, payload)
        return data;
      },
      *addUserPoints({ payload }, { call, put }) {
        
        const { status, data } = yield call(addUserPoint, payload)
        return data;
      },
      *addUser({ payload }, { call, put }) {
        
        const { status, data } = yield call(addNewUser, payload)
        return data;
      },
    },
  };
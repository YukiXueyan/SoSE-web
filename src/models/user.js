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
  addNewUser,
  updateUser,
  deleteUser,
  unlockMode,
  userRecord,
  addUserAchieve,
  addUserAchievePrize,
} from '../services/user';

export default {
  namespace: 'user',
  state: {
    data: {},
    achieveList: [],
  },
  reducers: {
    save(state, { payload: user }) {
      console.log('save-User', user[0]);
      return {
        ...state,
        data: user[0],
      };
    },
    saveAchieve(state, { payload: data }) {
      return {
        ...state,
        achieveList: data,
      };
    },
  },
  effects: {
    *getUserInfo({ payload }, { call, put }) {
      const { status, data } = yield call(userInfo, payload);
      if (data) {
        localStorage.setItem('user', JSON.stringify(data));
      }
      yield put({ type: 'save', payload: data });
      return data;
    },
    *userPassGame({ payload }, { call, put }) {
      const { status, data } = yield call(passGame, payload);
      return data;
    },
    *getUSerMode({ payload }, { call, put }) {
      const { status, data } = yield call(userMode, payload);
      return data;
    },
    *unlockUserMode({ payload }, { call, put }) {
      const { status, data } = yield call(unlockMode, payload);
      return data;
    },
    *getUserAchieve({ payload }, { call, put }) {
      const { status, data } = yield call(userAchieve, payload);
      yield put({ type: 'saveAchieve', payload: data });
      return data;
    },
    *addUserPoints({ payload }, { call, put }) {
      const { status, data } = yield call(addUserPoint, payload);
      return data;
    },
    *addUser({ payload }, { call, put }) {
      const { status, data } = yield call(addNewUser, payload);
      return data;
    },
    *updateUserinfo({ payload }, { call, put }) {
      const { status, data } = yield call(updateUser, payload);
      return data;
    },
    *deleteUser({ payload }, { call, put }) {
      const { status, data } = yield call(deleteUser, payload);
      return data;
    },
    *getRecord({ payload }, { call, put }) {
      const { status, data } = yield call(userRecord, payload);
      return data;
    },
    //addUserAchieve
    *addUserAchieves({ payload }, { call, put }) {
      const { status, data } = yield call(addUserAchieve, payload);
      // yield call(userAchieve, payload)
      return { status, data };
    },
    //获取成就奖励
    *unlockUserAchievePrize({ payload }, { call, put }) {
      const { status, data } = yield call(addUserAchievePrize, payload);
      // yield call(userAchieve, payload)
      return { status, data };
    },
  },
};

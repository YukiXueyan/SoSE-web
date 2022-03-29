import { userInfo, addUserAchieve } from '../services/user';

export default {
  namespace: 'example',
  state: {
    data: {},
    achieveList: [],
  },
  reducers: {
    save(state, { payload: user }) {
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

    *addUserAchieves({ payload }, { call, put }) {
      const { status, data } = yield call(addUserAchieve, payload);
      // yield call(userAchieve, payload)
      return { status, data };
    },
  },
};

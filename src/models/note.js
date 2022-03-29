import {
  addNote,
  deleteNote,
  forkNote,
  unforkNote,
  unlockNote,
  selectNotes,
} from '../services/note';

export default {
  namespace: 'wrongNote',
  state: {},
  reducers: {},
  effects: {
    *add({ payload }, { call, put }) {
      const { status, data } = yield call(addNote, payload);
      // yield call(userAchieve, payload)
      return { status, data };
    },
    *delete({ payload }, { call, put }) {
      const { status, data } = yield call(deleteNote, payload);
      // yield call(userAchieve, payload)
      return { status, data };
    },
    *fork({ payload }, { call, put }) {
      const { status, data } = yield call(forkNote, payload);
      // yield call(userAchieve, payload)
      return { status, data };
    },
    *unfork({ payload }, { call, put }) {
      const { status, data } = yield call(unforkNote, payload);
      // yield call(userAchieve, payload)
      return { status, data };
    },
    *unlock({ payload }, { call, put }) {
      const { status, data } = yield call(unlockNote, payload);
      // yield call(userAchieve, payload)
      return { status, data };
    },
    *list({ payload }, { call, put }) {
      const { status, data } = yield call(selectNotes, payload);
      // yield call(userAchieve, payload)
      return { status, data };
    },
  },
};

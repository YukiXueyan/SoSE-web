'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _user = require('../services/user');

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var _default = {
  namespace: 'user',
  state: {
    data: {},
    achieveList: [],
  },
  reducers: {
    save: function save(state, _ref) {
      var user = _ref.payload;
      return _objectSpread({}, state, {
        data: user[0],
      });
    },
    saveAchieve: function saveAchieve(state, _ref2) {
      var data = _ref2.payload;
      return _objectSpread({}, state, {
        achieveList: data,
      });
    },
  },
  effects: {
    getUserInfo:
      /*#__PURE__*/
      regeneratorRuntime.mark(function getUserInfo(_ref3, _ref4) {
        var payload, call, put, _ref5, status, data;

        return regeneratorRuntime.wrap(function getUserInfo$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                payload = _ref3.payload;
                (call = _ref4.call), (put = _ref4.put);
                _context.next = 4;
                return call(_user.userInfo, payload);

              case 4:
                _ref5 = _context.sent;
                status = _ref5.status;
                data = _ref5.data;

                if (data) {
                  localStorage.setItem('user', JSON.stringify(data));
                }

                _context.next = 10;
                return put({
                  type: 'save',
                  payload: data,
                });

              case 10:
                return _context.abrupt('return', data);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, getUserInfo);
      }),
    userPassGame:
      /*#__PURE__*/
      regeneratorRuntime.mark(function userPassGame(_ref6, _ref7) {
        var payload, call, put, _ref8, status, data;

        return regeneratorRuntime.wrap(function userPassGame$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                payload = _ref6.payload;
                (call = _ref7.call), (put = _ref7.put);
                _context2.next = 4;
                return call(_user.passGame, payload);

              case 4:
                _ref8 = _context2.sent;
                status = _ref8.status;
                data = _ref8.data;
                return _context2.abrupt('return', data);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, userPassGame);
      }),
    getUSerMode:
      /*#__PURE__*/
      regeneratorRuntime.mark(function getUSerMode(_ref9, _ref10) {
        var payload, call, put, _ref11, status, data;

        return regeneratorRuntime.wrap(function getUSerMode$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                payload = _ref9.payload;
                (call = _ref10.call), (put = _ref10.put);
                _context3.next = 4;
                return call(_user.userMode, payload);

              case 4:
                _ref11 = _context3.sent;
                status = _ref11.status;
                data = _ref11.data;
                return _context3.abrupt('return', data);

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, getUSerMode);
      }),
    unlockUserMode:
      /*#__PURE__*/
      regeneratorRuntime.mark(function unlockUserMode(_ref12, _ref13) {
        var payload, call, put, _ref14, status, data;

        return regeneratorRuntime.wrap(function unlockUserMode$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                payload = _ref12.payload;
                (call = _ref13.call), (put = _ref13.put);
                _context4.next = 4;
                return call(_user.unlockMode, payload);

              case 4:
                _ref14 = _context4.sent;
                status = _ref14.status;
                data = _ref14.data;
                return _context4.abrupt('return', data);

              case 8:
              case 'end':
                return _context4.stop();
            }
          }
        }, unlockUserMode);
      }),
    getUserAchieve:
      /*#__PURE__*/
      regeneratorRuntime.mark(function getUserAchieve(_ref15, _ref16) {
        var payload, call, put, _ref17, status, data;

        return regeneratorRuntime.wrap(function getUserAchieve$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                payload = _ref15.payload;
                (call = _ref16.call), (put = _ref16.put);
                _context5.next = 4;
                return call(_user.userAchieve, payload);

              case 4:
                _ref17 = _context5.sent;
                status = _ref17.status;
                data = _ref17.data;
                _context5.next = 9;
                return put({
                  type: 'saveAchieve',
                  payload: data,
                });

              case 9:
                return _context5.abrupt('return', data);

              case 10:
              case 'end':
                return _context5.stop();
            }
          }
        }, getUserAchieve);
      }),
    addUserPoints:
      /*#__PURE__*/
      regeneratorRuntime.mark(function addUserPoints(_ref18, _ref19) {
        var payload, call, put, _ref20, status, data;

        return regeneratorRuntime.wrap(function addUserPoints$(_context6) {
          while (1) {
            switch ((_context6.prev = _context6.next)) {
              case 0:
                payload = _ref18.payload;
                (call = _ref19.call), (put = _ref19.put);
                _context6.next = 4;
                return call(_user.addUserPoint, payload);

              case 4:
                _ref20 = _context6.sent;
                status = _ref20.status;
                data = _ref20.data;
                return _context6.abrupt('return', data);

              case 8:
              case 'end':
                return _context6.stop();
            }
          }
        }, addUserPoints);
      }),
    addUser:
      /*#__PURE__*/
      regeneratorRuntime.mark(function addUser(_ref21, _ref22) {
        var payload, call, put, _ref23, status, data;

        return regeneratorRuntime.wrap(function addUser$(_context7) {
          while (1) {
            switch ((_context7.prev = _context7.next)) {
              case 0:
                payload = _ref21.payload;
                (call = _ref22.call), (put = _ref22.put);
                _context7.next = 4;
                return call(_user.addNewUser, payload);

              case 4:
                _ref23 = _context7.sent;
                status = _ref23.status;
                data = _ref23.data;
                return _context7.abrupt('return', data);

              case 8:
              case 'end':
                return _context7.stop();
            }
          }
        }, addUser);
      }),
    updateUserinfo:
      /*#__PURE__*/
      regeneratorRuntime.mark(function updateUserinfo(_ref24, _ref25) {
        var payload, call, put, _ref26, status, data;

        return regeneratorRuntime.wrap(function updateUserinfo$(_context8) {
          while (1) {
            switch ((_context8.prev = _context8.next)) {
              case 0:
                payload = _ref24.payload;
                (call = _ref25.call), (put = _ref25.put);
                _context8.next = 4;
                return call(_user.updateUser, payload);

              case 4:
                _ref26 = _context8.sent;
                status = _ref26.status;
                data = _ref26.data;
                return _context8.abrupt('return', data);

              case 8:
              case 'end':
                return _context8.stop();
            }
          }
        }, updateUserinfo);
      }),
    deleteUser:
      /*#__PURE__*/
      regeneratorRuntime.mark(function deleteUser(_ref27, _ref28) {
        var payload, call, put, _ref29, status, data;

        return regeneratorRuntime.wrap(function deleteUser$(_context9) {
          while (1) {
            switch ((_context9.prev = _context9.next)) {
              case 0:
                payload = _ref27.payload;
                (call = _ref28.call), (put = _ref28.put);
                _context9.next = 4;
                return call(_user.deleteUser, payload);

              case 4:
                _ref29 = _context9.sent;
                status = _ref29.status;
                data = _ref29.data;
                return _context9.abrupt('return', data);

              case 8:
              case 'end':
                return _context9.stop();
            }
          }
        }, deleteUser);
      }),
    getRecord:
      /*#__PURE__*/
      regeneratorRuntime.mark(function getRecord(_ref30, _ref31) {
        var payload, call, put, _ref32, status, data;

        return regeneratorRuntime.wrap(function getRecord$(_context10) {
          while (1) {
            switch ((_context10.prev = _context10.next)) {
              case 0:
                payload = _ref30.payload;
                (call = _ref31.call), (put = _ref31.put);
                _context10.next = 4;
                return call(_user.userRecord, payload);

              case 4:
                _ref32 = _context10.sent;
                status = _ref32.status;
                data = _ref32.data;
                return _context10.abrupt('return', data);

              case 8:
              case 'end':
                return _context10.stop();
            }
          }
        }, getRecord);
      }),
  },
};
exports['default'] = _default;

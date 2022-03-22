"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = require("../services/user");

// import request from '../utils/request'; 
// import {URL} from '../utils/url';
// const delay = (millisecond) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, millisecond);
//   });
// };
var _default = {
  namespace: 'user',
  state: {
    data: {}
  },
  reducers: {
    save: function save(state, _ref) {
      var user = _ref.payload;
      return {
        data: user[0]
      };
    }
  },
  effects: {
    getUserInfo:
    /*#__PURE__*/
    regeneratorRuntime.mark(function getUserInfo(_ref2, _ref3) {
      var payload, call, put, _ref4, status, data;

      return regeneratorRuntime.wrap(function getUserInfo$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref2.payload;
              call = _ref3.call, put = _ref3.put;
              _context.next = 4;
              return call(_user.userInfo, payload);

            case 4:
              _ref4 = _context.sent;
              status = _ref4.status;
              data = _ref4.data;

              if (data) {
                localStorage.setItem('user', JSON.stringify(data));
              }

              _context.next = 10;
              return put({
                type: 'save',
                payload: data
              });

            case 10:
              return _context.abrupt("return", data);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, getUserInfo);
    }),
    userPassGame:
    /*#__PURE__*/
    regeneratorRuntime.mark(function userPassGame(_ref5, _ref6) {
      var payload, call, put, _ref7, status, data;

      return regeneratorRuntime.wrap(function userPassGame$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref5.payload;
              call = _ref6.call, put = _ref6.put;
              _context2.next = 4;
              return call(_user.passGame, payload);

            case 4:
              _ref7 = _context2.sent;
              status = _ref7.status;
              data = _ref7.data;
              return _context2.abrupt("return", data);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, userPassGame);
    }),
    getUSerMode:
    /*#__PURE__*/
    regeneratorRuntime.mark(function getUSerMode(_ref8, _ref9) {
      var payload, call, put, _ref10, status, data;

      return regeneratorRuntime.wrap(function getUSerMode$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref8.payload;
              call = _ref9.call, put = _ref9.put;
              _context3.next = 4;
              return call(_user.userMode, payload);

            case 4:
              _ref10 = _context3.sent;
              status = _ref10.status;
              data = _ref10.data;
              return _context3.abrupt("return", data);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, getUSerMode);
    }),
    unlockUserMode:
    /*#__PURE__*/
    regeneratorRuntime.mark(function unlockUserMode(_ref11, _ref12) {
      var payload, call, put, _ref13, status, data;

      return regeneratorRuntime.wrap(function unlockUserMode$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = _ref11.payload;
              call = _ref12.call, put = _ref12.put;
              _context4.next = 4;
              return call(_user.unlockMode, payload);

            case 4:
              _ref13 = _context4.sent;
              status = _ref13.status;
              data = _ref13.data;
              return _context4.abrupt("return", data);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, unlockUserMode);
    }),
    getUserAchieve:
    /*#__PURE__*/
    regeneratorRuntime.mark(function getUserAchieve(_ref14, _ref15) {
      var payload, call, put, _ref16, status, data;

      return regeneratorRuntime.wrap(function getUserAchieve$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              payload = _ref14.payload;
              call = _ref15.call, put = _ref15.put;
              _context5.next = 4;
              return call(_user.userAchieve, payload);

            case 4:
              _ref16 = _context5.sent;
              status = _ref16.status;
              data = _ref16.data;
              return _context5.abrupt("return", data);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, getUserAchieve);
    }),
    addUserPoints:
    /*#__PURE__*/
    regeneratorRuntime.mark(function addUserPoints(_ref17, _ref18) {
      var payload, call, put, _ref19, status, data;

      return regeneratorRuntime.wrap(function addUserPoints$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              payload = _ref17.payload;
              call = _ref18.call, put = _ref18.put;
              _context6.next = 4;
              return call(_user.addUserPoint, payload);

            case 4:
              _ref19 = _context6.sent;
              status = _ref19.status;
              data = _ref19.data;
              return _context6.abrupt("return", data);

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, addUserPoints);
    }),
    addUser:
    /*#__PURE__*/
    regeneratorRuntime.mark(function addUser(_ref20, _ref21) {
      var payload, call, put, _ref22, status, data;

      return regeneratorRuntime.wrap(function addUser$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              payload = _ref20.payload;
              call = _ref21.call, put = _ref21.put;
              _context7.next = 4;
              return call(_user.addNewUser, payload);

            case 4:
              _ref22 = _context7.sent;
              status = _ref22.status;
              data = _ref22.data;
              return _context7.abrupt("return", data);

            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, addUser);
    }),
    updateUserinfo:
    /*#__PURE__*/
    regeneratorRuntime.mark(function updateUserinfo(_ref23, _ref24) {
      var payload, call, put, _ref25, status, data;

      return regeneratorRuntime.wrap(function updateUserinfo$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              payload = _ref23.payload;
              call = _ref24.call, put = _ref24.put;
              _context8.next = 4;
              return call(_user.updateUser, payload);

            case 4:
              _ref25 = _context8.sent;
              status = _ref25.status;
              data = _ref25.data;
              return _context8.abrupt("return", data);

            case 8:
            case "end":
              return _context8.stop();
          }
        }
      }, updateUserinfo);
    }),
    deleteUser:
    /*#__PURE__*/
    regeneratorRuntime.mark(function deleteUser(_ref26, _ref27) {
      var payload, call, put, _ref28, status, data;

      return regeneratorRuntime.wrap(function deleteUser$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              payload = _ref26.payload;
              call = _ref27.call, put = _ref27.put;
              _context9.next = 4;
              return call(_user.deleteUser, payload);

            case 4:
              _ref28 = _context9.sent;
              status = _ref28.status;
              data = _ref28.data;
              return _context9.abrupt("return", data);

            case 8:
            case "end":
              return _context9.stop();
          }
        }
      }, deleteUser);
    })
  }
};
exports["default"] = _default;
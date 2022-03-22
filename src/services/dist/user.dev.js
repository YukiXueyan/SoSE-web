"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passGame = passGame;
exports.userMode = userMode;
exports.unlockMode = unlockMode;
exports.userInfo = userInfo;
exports.userAchieve = userAchieve;
exports.addUserPoint = addUserPoint;
exports.addNewUser = addNewUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;

var _request = _interopRequireDefault(require("../utils/request"));

var _url = _interopRequireDefault(require("../utils/url"));

var _qs = require("qs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userId = localStorage.getItem('userId'); // 用户通关

function passGame(data) {
  return regeneratorRuntime.async(function passGame$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", (0, _request["default"])("".concat(_url["default"], "/user/over?userId=").concat(userId, "&").concat((0, _qs.stringify)(data)), {
            method: 'PUT',
            data: data
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
} // 获取用户已解锁的模式
// userId


function userMode(data) {
  return regeneratorRuntime.async(function userMode$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", (0, _request["default"])("".concat(_url["default"], "/user/mode/list?userId=").concat(userId), {
            method: 'GET',
            data: data
          }));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
} // 解锁模式


function unlockMode(data) {
  return regeneratorRuntime.async(function unlockMode$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", (0, _request["default"])("".concat(_url["default"], "/user/mode/unlock?userId=").concat(userId, "&").concat((0, _qs.stringify)(data)), {
            method: 'POST',
            data: data
          }));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
} //获取用户信息
// userId


function userInfo() {
  return (0, _request["default"])("".concat(_url["default"], "/user/info?userId=").concat(userId));
} //获取用户成就列表
// userId


function userAchieve() {
  return (0, _request["default"])("".concat(_url["default"], "/user/achieve?userId=").concat(userId));
} // 增加用户积分
// point


function addUserPoint(data) {
  return regeneratorRuntime.async(function addUserPoint$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", (0, _request["default"])("".concat(_url["default"], "/user/addPoint?userId=").concat(userId, "&").concat((0, _qs.stringify)(data)), {
            method: 'POST',
            data: data
          }));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
} // 解锁用户成就
// 添加新用户


function addNewUser() {
  return regeneratorRuntime.async(function addNewUser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", (0, _request["default"])("".concat(_url["default"], "/user/add"), {
            method: 'POST'
          }));

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
} // 修改用户名 // name


function updateUser(data) {
  return regeneratorRuntime.async(function updateUser$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", (0, _request["default"])("".concat(_url["default"], "/user/changeInfo?userId=").concat(userId, "&").concat((0, _qs.stringify)(data)), {
            method: 'PUT',
            data: data
          }));

        case 1:
        case "end":
          return _context6.stop();
      }
    }
  });
} // 删除数据


function deleteUser(data) {
  return regeneratorRuntime.async(function deleteUser$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", (0, _request["default"])("".concat(_url["default"], "/user/delete?userId=").concat(userId), {
            method: 'delete'
          }));

        case 1:
        case "end":
          return _context7.stop();
      }
    }
  });
}
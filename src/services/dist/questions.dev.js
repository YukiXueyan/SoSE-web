'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.questionList = questionList;
exports.questionListAll = questionListAll;
exports.passGame = passGame;
exports.getRecord = getRecord;
exports.addRecord = addRecord;
exports.updateQ = updateQ;
exports.deleteQ = deleteQ;

var _request = _interopRequireDefault(require('../utils/request'));

var _url = _interopRequireDefault(require('../utils/url'));

var _qs = require('qs');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var userId = localStorage.getItem('userId');
var user = JSON.parse(localStorage.getItem('user')); // 获取题目

function questionList(data) {
  var pageNum, pageSize, chapterId, param;
  return regeneratorRuntime.async(function questionList$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          (pageNum = data.pageNum),
            (pageSize = data.pageSize),
            (chapterId = data.chapterId);
          param = {
            pageNum: pageNum,
            pageSize: pageSize,
            chapterId: chapterId,
          };
          return _context.abrupt(
            'return',
            (0, _request['default'])(
              ''
                .concat(_url['default'], '/question/list?')
                .concat((0, _qs.stringify)(param)),
            ),
          );

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  });
} // questionListAll

function questionListAll(data) {
  return regeneratorRuntime.async(function questionListAll$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          return _context2.abrupt(
            'return',
            (0, _request['default'])(
              ''
                .concat(_url['default'], '/question/list2?')
                .concat((0, _qs.stringify)(data)),
            ),
          );

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  });
}

function passGame(data) {
  var pageNum, pageSize, chapterId, param;
  return regeneratorRuntime.async(function passGame$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          (pageNum = data.pageNum),
            (pageSize = data.pageSize),
            (chapterId = data.chapterId);
          param = {
            pageNum: pageNum || 0,
            pageSize: pageSize || 20,
            chapterId: chapterId,
          };
          return _context3.abrupt(
            'return',
            (0, _request['default'])(
              ''
                .concat(_url['default'], '/question/list?')
                .concat((0, _qs.stringify)(param)),
              {
                method: 'POSt',
                data: data,
              },
            ),
          );

        case 3:
        case 'end':
          return _context3.stop();
      }
    }
  });
} //userId, modeId
//获取用户记录

function getRecord(data) {
  return regeneratorRuntime.async(function getRecord$(_context4) {
    while (1) {
      switch ((_context4.prev = _context4.next)) {
        case 0:
          return _context4.abrupt(
            'return',
            (0, _request['default'])(
              ''
                .concat(_url['default'], '/record?userId=')
                .concat(userId, '&')
                .concat((0, _qs.stringify)(data)),
              {
                method: 'GET',
                data: data,
              },
            ),
          );

        case 1:
        case 'end':
          return _context4.stop();
      }
    }
  });
} //添加记录
//modeId,grade,number

function addRecord(data) {
  return regeneratorRuntime.async(function addRecord$(_context5) {
    while (1) {
      switch ((_context5.prev = _context5.next)) {
        case 0:
          return _context5.abrupt(
            'return',
            (0, _request['default'])(
              ''
                .concat(_url['default'], '/question/success?userId=')
                .concat(userId, '&')
                .concat((0, _qs.stringify)(data)),
              {
                method: 'POST',
                data: data,
              },
            ),
          );

        case 1:
        case 'end':
          return _context5.stop();
      }
    }
  });
} // update question

function updateQ(data) {
  return regeneratorRuntime.async(function updateQ$(_context6) {
    while (1) {
      switch ((_context6.prev = _context6.next)) {
        case 0:
          return _context6.abrupt(
            'return',
            (0, _request['default'])(
              ''
                .concat(_url['default'], '/question/update?')
                .concat((0, _qs.stringify)(data)),
              {
                method: 'PUT',
                data: data,
              },
            ),
          );

        case 1:
        case 'end':
          return _context6.stop();
      }
    }
  });
} // delete question
// id

function deleteQ(data) {
  return regeneratorRuntime.async(function deleteQ$(_context7) {
    while (1) {
      switch ((_context7.prev = _context7.next)) {
        case 0:
          return _context7.abrupt(
            'return',
            (0, _request['default'])(
              ''
                .concat(_url['default'], '/question/add?')
                .concat((0, _qs.stringify)(data)),
              {
                method: 'delete',
                data: data,
              },
            ),
          );

        case 1:
        case 'end':
          return _context7.stop();
      }
    }
  });
}

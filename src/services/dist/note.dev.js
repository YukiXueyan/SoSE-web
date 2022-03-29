'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.addNote = addNote;
exports.deleteNote = deleteNote;
exports.forkNote = forkNote;
exports.unforkNote = unforkNote;
exports.unlockNote = unlockNote;
exports.selectNotes = selectNotes;

var _request = _interopRequireDefault(require('../utils/request'));

var _url = _interopRequireDefault(require('../utils/url'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import { stringify } from 'qs';
var userId = localStorage.getItem('userId'); // export async function passGame(data) {
//   return request(`${URL}/note/add?userId=${userId}&${stringify(data)}`, {
//     method: 'PUT',
//     data,
//   });
// }
//添加错题
// questionId

function addNote(data) {
  var questionId, param;
  return regeneratorRuntime.async(function addNote$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          questionId = data.questionId;
          param = JSON.stringify(questionId);
          return _context.abrupt(
            'return',
            (0, _request['default'])(
              ''
                .concat(_url['default'], '/note/add?userId=')
                .concat(userId, '&questionId=')
                .concat(param),
              {
                method: 'POST',
                data: data,
              },
            ),
          );

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  });
} // 删除错题

function deleteNote(data) {
  var noteId;
  return regeneratorRuntime.async(function deleteNote$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          noteId = data.noteId;
          return _context2.abrupt(
            'return',
            (0, _request['default'])(
              ''.concat(_url['default'], '/note/delete?noteId=').concat(noteId),
              {
                method: 'DELETE',
                data: data,
              },
            ),
          );

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  });
} //收藏

function forkNote(data) {
  var noteId;
  return regeneratorRuntime.async(function forkNote$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          noteId = data.noteId;
          return _context3.abrupt(
            'return',
            (0, _request['default'])(
              ''.concat(_url['default'], '/note/fork?noteId=').concat(noteId),
              {
                method: 'PUT',
                data: data,
              },
            ),
          );

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  });
} //取消收藏

function unforkNote(data) {
  var noteId;
  return regeneratorRuntime.async(function unforkNote$(_context4) {
    while (1) {
      switch ((_context4.prev = _context4.next)) {
        case 0:
          noteId = data.noteId;
          return _context4.abrupt(
            'return',
            (0, _request['default'])(
              ''.concat(_url['default'], '/note/unfork?noteId=').concat(noteId),
              {
                method: 'PUT',
                data: data,
              },
            ),
          );

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  });
} //解锁

function unlockNote(data) {
  var noteId;
  return regeneratorRuntime.async(function unlockNote$(_context5) {
    while (1) {
      switch ((_context5.prev = _context5.next)) {
        case 0:
          noteId = data.noteId;
          return _context5.abrupt(
            'return',
            (0, _request['default'])(
              ''.concat(_url['default'], '/note/unlock?noteId=').concat(noteId),
              {
                method: 'PUT',
                data: data,
              },
            ),
          );

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  });
} //显示用户错题

function selectNotes(data) {
  return regeneratorRuntime.async(function selectNotes$(_context6) {
    while (1) {
      switch ((_context6.prev = _context6.next)) {
        case 0:
          return _context6.abrupt(
            'return',
            (0, _request['default'])(
              ''.concat(_url['default'], '/note/select?userId=').concat(userId),
            ),
          );

        case 1:
        case 'end':
          return _context6.stop();
      }
    }
  });
}

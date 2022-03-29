'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.query = query;
exports.passGame = passGame;

var _request = _interopRequireDefault(require('../utils/request'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function query() {
  return (0, _request['default'])('/api/users');
}

function passGame(data) {
  return regeneratorRuntime.async(function passGame$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          return _context.abrupt(
            'return',
            (0, _request['default'])(
              ''
                .concat(URL, '/user/over?userId=')
                .concat(userId, '&')
                .concat(stringify(data)),
              {
                method: 'PUT',
                data: data,
              },
            ),
          );

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  });
}

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _note = require('../services/note');

var _default = {
  namespace: 'wrongNote',
  state: {},
  reducers: {},
  effects: {
    add:
      /*#__PURE__*/
      regeneratorRuntime.mark(function add(_ref, _ref2) {
        var payload, call, put, _ref3, status, data;

        return regeneratorRuntime.wrap(function add$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                payload = _ref.payload;
                (call = _ref2.call), (put = _ref2.put);
                _context.next = 4;
                return call(_note.addNote, payload);

              case 4:
                _ref3 = _context.sent;
                status = _ref3.status;
                data = _ref3.data;
                return _context.abrupt('return', {
                  status: status,
                  data: data,
                });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, add);
      }),
    delete:
      /*#__PURE__*/
      regeneratorRuntime.mark(function _delete(_ref4, _ref5) {
        var payload, call, put, _ref6, status, data;

        return regeneratorRuntime.wrap(function _delete$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                payload = _ref4.payload;
                (call = _ref5.call), (put = _ref5.put);
                _context2.next = 4;
                return call(_note.deleteNote, payload);

              case 4:
                _ref6 = _context2.sent;
                status = _ref6.status;
                data = _ref6.data;
                return _context2.abrupt('return', {
                  status: status,
                  data: data,
                });

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _delete);
      }),
    fork:
      /*#__PURE__*/
      regeneratorRuntime.mark(function fork(_ref7, _ref8) {
        var payload, call, put, _ref9, status, data;

        return regeneratorRuntime.wrap(function fork$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                payload = _ref7.payload;
                (call = _ref8.call), (put = _ref8.put);
                _context3.next = 4;
                return call(_note.forkNote, payload);

              case 4:
                _ref9 = _context3.sent;
                status = _ref9.status;
                data = _ref9.data;
                return _context3.abrupt('return', {
                  status: status,
                  data: data,
                });

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, fork);
      }),
    unfork:
      /*#__PURE__*/
      regeneratorRuntime.mark(function unfork(_ref10, _ref11) {
        var payload, call, put, _ref12, status, data;

        return regeneratorRuntime.wrap(function unfork$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                payload = _ref10.payload;
                (call = _ref11.call), (put = _ref11.put);
                _context4.next = 4;
                return call(_note.unforkNote, payload);

              case 4:
                _ref12 = _context4.sent;
                status = _ref12.status;
                data = _ref12.data;
                return _context4.abrupt('return', {
                  status: status,
                  data: data,
                });

              case 8:
              case 'end':
                return _context4.stop();
            }
          }
        }, unfork);
      }),
    unlock:
      /*#__PURE__*/
      regeneratorRuntime.mark(function unlock(_ref13, _ref14) {
        var payload, call, put, _ref15, status, data;

        return regeneratorRuntime.wrap(function unlock$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                payload = _ref13.payload;
                (call = _ref14.call), (put = _ref14.put);
                _context5.next = 4;
                return call(_note.unlockNote, payload);

              case 4:
                _ref15 = _context5.sent;
                status = _ref15.status;
                data = _ref15.data;
                return _context5.abrupt('return', {
                  status: status,
                  data: data,
                });

              case 8:
              case 'end':
                return _context5.stop();
            }
          }
        }, unlock);
      }),
    list:
      /*#__PURE__*/
      regeneratorRuntime.mark(function list(_ref16, _ref17) {
        var payload, call, put, _ref18, status, data;

        return regeneratorRuntime.wrap(function list$(_context6) {
          while (1) {
            switch ((_context6.prev = _context6.next)) {
              case 0:
                payload = _ref16.payload;
                (call = _ref17.call), (put = _ref17.put);
                _context6.next = 4;
                return call(_note.selectNotes, payload);

              case 4:
                _ref18 = _context6.sent;
                status = _ref18.status;
                data = _ref18.data;
                return _context6.abrupt('return', {
                  status: status,
                  data: data,
                });

              case 8:
              case 'end':
                return _context6.stop();
            }
          }
        }, list);
      }),
  },
};
exports['default'] = _default;

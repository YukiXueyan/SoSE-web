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
  namespace: 'example',
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
    addUserAchieves:
      /*#__PURE__*/
      regeneratorRuntime.mark(function addUserAchieves(_ref6, _ref7) {
        var payload, call, put, _ref8, status, data;

        return regeneratorRuntime.wrap(function addUserAchieves$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                payload = _ref6.payload;
                (call = _ref7.call), (put = _ref7.put);
                _context2.next = 4;
                return call(_user.addUserAchieve, payload);

              case 4:
                _ref8 = _context2.sent;
                status = _ref8.status;
                data = _ref8.data;
                return _context2.abrupt('return', {
                  status: status,
                  data: data,
                });

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, addUserAchieves);
      }),
  },
};
exports['default'] = _default;

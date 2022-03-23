"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _request = _interopRequireDefault(require("../utils/request"));

var _qs = require("qs");

var _questions = require("../services/questions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import {URL} from '../utils/url';
var URL = 'http://localhost:3000/';
var _default = {
  namespace: 'questions',
  state: {
    data: [],
    mode: 0,
    checkpoint: 1,
    chapterId: 1
  },
  reducers: {
    addNewQuestion: function addNewQuestion(state, _ref) {
      var data = _ref.payload,
          param = _ref.param;
      return _objectSpread({}, state, {
        data: data
      });
    },
    changeMode: function changeMode(state, _ref2) {
      var data = _ref2.payload;
      return _objectSpread({}, state, {
        mode: data
      });
    }
  },
  effects: {
    getQuestions:
    /*#__PURE__*/
    regeneratorRuntime.mark(function getQuestions(_ref3, _ref4) {
      var payload, call, put, _ref5, status, data;

      return regeneratorRuntime.wrap(function getQuestions$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref3.payload;
              call = _ref4.call, put = _ref4.put;
              _context.next = 4;
              return call(_questions.questionList, payload);

            case 4:
              _ref5 = _context.sent;
              status = _ref5.status;
              data = _ref5.data;
              _context.next = 9;
              return put({
                type: 'addNewQuestion',
                payload: data,
                param: payload
              });

            case 9:
              return _context.abrupt("return", data);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, getQuestions);
    }),
    successGame:
    /*#__PURE__*/
    regeneratorRuntime.mark(function successGame(_ref6, _ref7) {
      var payload, call, put, _ref8, status, data;

      return regeneratorRuntime.wrap(function successGame$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref6.payload;
              call = _ref7.call, put = _ref7.put;
              _context2.next = 4;
              return call(_questions.addRecord, payload);

            case 4:
              _ref8 = _context2.sent;
              status = _ref8.status;
              data = _ref8.data;
              return _context2.abrupt("return", data);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, successGame);
    }),
    choiceMode:
    /*#__PURE__*/
    regeneratorRuntime.mark(function choiceMode(_ref9, _ref10) {
      var payload, call, put, _ref11, status, data;

      return regeneratorRuntime.wrap(function choiceMode$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref9.payload;
              call = _ref10.call, put = _ref10.put;
              _context3.next = 4;
              return put({
                type: 'changeMode',
                payload: data
              });

            case 4:
              _ref11 = _context3.sent;
              status = _ref11.status;
              data = _ref11.data;
              return _context3.abrupt("return", data);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, choiceMode);
    })
  }
};
exports["default"] = _default;
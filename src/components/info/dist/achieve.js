'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
var react_1 = require('react');
var dva_1 = require('dva');
var info_less_1 = require('./info.less');
var icons_1 = require('@ant-design/icons');
// import { IconStar } from ''
var Achieve = function (params) {
  var dispatch = params.dispatch,
    questions = params.questions,
    loading = params.loading;
  var _a = react_1.useState([]),
    achieveList = _a[0],
    setAchieveList = _a[1];
  react_1.useEffect(function () {
    console.log('params', params);
    dispatch({
      type: 'user/getUserAchieve',
      payload: {},
    }).then(function (res) {
      setAchieveList(res);
    });
  }, []);
  console.log(params);
  var renderItem = function (item) {
    return react_1['default'].createElement(
      'div',
      { className: info_less_1['default'].item },
      react_1['default'].createElement(
        'div',
        { className: info_less_1['default'].left },
        react_1['default'].createElement(
          'div',
          { className: info_less_1['default'].icon },
          (item === null || item === void 0 ? void 0 : item.userId)
            ? react_1['default'].createElement('img', {
                src: require('@/assets/star.svg'),
                style: { width: '100%' },
              })
            : react_1['default'].createElement(icons_1.QuestionOutlined, {
                style: { fontSize: '4rem', color: '#adb5bd' },
              }),
        ),
      ),
      react_1['default'].createElement(
        'div',
        { className: info_less_1['default'].right },
        react_1['default'].createElement(
          'div',
          { className: info_less_1['default'].title },
          (item === null || item === void 0 ? void 0 : item.userId)
            ? item === null || item === void 0
              ? void 0
              : item.name
            : '也许这是一个秘密',
        ),
        react_1['default'].createElement(
          'div',
          { className: info_less_1['default'].desc },
          (item === null || item === void 0 ? void 0 : item.userId)
            ? item === null || item === void 0
              ? void 0
              : item.desc
            : '继续玩下去就知道了',
        ),
      ),
    );
  };
  return react_1['default'].createElement(
    'div',
    { className: info_less_1['default'].achieve },
    react_1['default'].createElement(
      'div',
      { className: info_less_1['default'].box },
      (achieveList === null || achieveList === void 0
        ? void 0
        : achieveList.length) &&
        react_1['default'].createElement(
          react_1['default'].Fragment,
          null,
          achieveList === null || achieveList === void 0
            ? void 0
            : achieveList.map(function (item) {
                return renderItem(item);
              }),
        ),
      (achieveList === null || achieveList === void 0
        ? void 0
        : achieveList.length) === 0 &&
        react_1['default'].createElement('div', null, 'empty'),
    ),
  );
};
function mapStateToProps(state) {
  return __assign({}, state);
}
exports['default'] = dva_1.connect(mapStateToProps)(Achieve);

'use strict';
exports.__esModule = true;
var react_1 = require('react');
var info_less_1 = require('./info.less');
// import {
//   QuestionCircleOutlined,
// } from '@ant-design/icons';
var About = function (_a) {
  react_1.useEffect(function () {}, []);
  return react_1['default'].createElement(
    'div',
    { className: info_less_1['default'].about },
    react_1['default'].createElement('p', null, '\u5F00\u53D1\u8005\uFF1Aqxy'),
    react_1['default'].createElement(
      'p',
      null,
      '\u5E0C\u671B\u8FD9\u4E2A\u5C0F\u6E38\u620F\u53EF\u4EE5\u5E2E\u52A9\u4F60\u66F4\u597D\u66F4\u5FEB\u7406\u89E3\u8F6F\u4EF6\u5DE5\u7A0B~',
    ),
    react_1['default'].createElement(
      'p',
      null,
      '\u5F53\u524D\u7248\u672C\uFF1A1.0.0',
    ),
  );
};
exports['default'] = About;

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
var antd_1 = require('antd');
var Header = antd_1.Layout.Header,
  Content = antd_1.Layout.Content,
  Footer = antd_1.Layout.Footer;
var dva_1 = require('dva');
var query_string_1 = require('query-string');
var axios_1 = require('axios');
var globalData_1 = require('../utils/globalData');
var qs_1 = require('qs');
var AdminDetail = function (props) {
  var query = window.location.search;
  var key = query_string_1['default'].parse(query).key;
  console.log('key', key, typeof key);
  var onFinish = function (values) {
    console.log('Success:', values);
    switch (key) {
      case '1':
        break;
      case '2':
        var feature = values.feature;
        var feature2 = JSON.parse(feature);
        var data = __assign(__assign({}, values), { feature: feature2 });
        axios_1['default'].post(
          globalData_1.URL + '/achieve/addAchieve?' + qs_1.stringify(data),
        );
        break;
    }
  };
  var onFinishFailed = function (errorInfo) {
    console.log('Failed:', errorInfo);
  };
  return react_1['default'].createElement(
    antd_1.Layout,
    { className: 'layout' },
    react_1['default'].createElement(Header, null),
    react_1['default'].createElement(
      Content,
      { style: { padding: '0 16px' } },
      react_1['default'].createElement(
        'div',
        { className: 'site-layout-content' },
        react_1['default'].createElement(
          antd_1.Form,
          {
            name: 'basic',
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
            initialValues: { remember: true },
            onFinish: onFinish,
            onFinishFailed: onFinishFailed,
            autoComplete: 'off',
          },
          key === '1' &&
            react_1['default'].createElement(
              react_1['default'].Fragment,
              null,
              react_1['default'].createElement(
                antd_1.Form.Item,
                {
                  label: '\u9898\u76EE\u4FE1\u606F',
                  name: 'question',
                  rules: [{ required: true, message: '请输入题目' }],
                },
                react_1['default'].createElement(antd_1.Input.TextArea, null),
              ),
              react_1['default'].createElement(
                antd_1.Form.Item,
                {
                  label: '\u6B63\u786E\u7B54\u6848',
                  name: 'currentAnswer',
                  rules: [{ required: true, message: '请输入答案' }],
                },
                react_1['default'].createElement(antd_1.Input, null),
              ),
              react_1['default'].createElement(
                antd_1.Form.Item,
                {
                  label: '\u9009\u9879',
                  name: 'options',
                  rules: [{ message: '请输入选项, 选项之间用英文逗号隔开' }],
                },
                react_1['default'].createElement(antd_1.Input, {
                  placeholder: '\u8BF7\u8F93\u5165\u9009\u9879',
                }),
              ),
              react_1['default'].createElement(
                antd_1.Form.Item,
                {
                  label: '\u7AE0\u8282',
                  name: 'chapterId',
                  rules: [{ required: true, message: '请输入章节' }],
                },
                react_1['default'].createElement(antd_1.InputNumber, {
                  defaultValue: 1,
                  max: 4,
                  min: 1,
                }),
              ),
              react_1['default'].createElement(
                antd_1.Form.Item,
                {
                  label: '\u7C7B\u578B',
                  name: 'type',
                  rules: [{ required: true, message: '请选择类型' }],
                },
                react_1['default'].createElement(
                  antd_1.Radio.Group,
                  null,
                  react_1['default'].createElement(
                    antd_1.Radio,
                    { value: 1 },
                    '\u5355\u9009',
                  ),
                  react_1['default'].createElement(
                    antd_1.Radio,
                    { value: 2 },
                    '\u591A\u9009',
                  ),
                  react_1['default'].createElement(
                    antd_1.Radio,
                    { value: 3 },
                    '\u5224\u65AD',
                  ),
                ),
              ),
            ),
          key === '2' &&
            react_1['default'].createElement(
              react_1['default'].Fragment,
              null,
              react_1['default'].createElement(
                antd_1.Form.Item,
                {
                  label: '\u6210\u5C31\u540D\u79F0',
                  name: 'name',
                  rules: [{ required: true, message: '请输入成就名称' }],
                },
                react_1['default'].createElement(antd_1.Input, null),
              ),
              react_1['default'].createElement(
                antd_1.Form.Item,
                {
                  label: '\u6210\u5C31\u63CF\u8FF0',
                  name: 'desc',
                  rules: [{ required: true, message: '请输入成就描述' }],
                },
                react_1['default'].createElement(antd_1.Input.TextArea, null),
              ),
              react_1['default'].createElement(
                antd_1.Form.Item,
                {
                  label: '\u89E3\u9501\u6240\u9700\u7B54\u9898\u6B21\u6570',
                  name: 'number',
                },
                react_1['default'].createElement(antd_1.InputNumber, {
                  defaultValue: 0,
                }),
              ),
              react_1['default'].createElement(
                antd_1.Form.Item,
                { label: '\u6E38\u620F\u6A21\u5F0F', name: 'modeId' },
                react_1['default'].createElement(antd_1.InputNumber, {
                  defaultValue: 0,
                  max: 3,
                  min: 0,
                }),
              ),
              react_1['default'].createElement(
                antd_1.Form.Item,
                { label: '\u9644\u52A0\u53C2\u6570', name: 'feature' },
                react_1['default'].createElement(antd_1.Input.TextArea, null),
              ),
            ),
          react_1['default'].createElement(
            antd_1.Form.Item,
            { wrapperCol: { offset: 8, span: 16 } },
            react_1['default'].createElement(
              antd_1.Button,
              { type: 'primary', htmlType: 'submit' },
              '\u786E\u5B9A',
            ),
          ),
        ),
      ),
    ),
  );
};
function mapStateToProps(state) {
  // const questions = state.questions.data;
  return __assign({}, state);
}
exports['default'] = dva_1.connect(mapStateToProps)(AdminDetail);

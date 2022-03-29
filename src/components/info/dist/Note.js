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
var antd_1 = require('antd');
var icons_1 = require('@ant-design/icons');
var globalData_1 = require('@/utils/globalData');
var getFuction_1 = require('@/utils/getFuction');
var data1 = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
var Note = function (params) {
  var dispatch = params.dispatch,
    user = params.user;
  var _a = react_1.useState([]),
    data = _a[0],
    setData = _a[1];
  var isLocked = function (item) {
    return (
      String(item === null || item === void 0 ? void 0 : item.unlock) === '0'
    );
  };
  console.log('user', user);
  react_1.useEffect(function () {
    initData();
    var usere = getFuction_1['default'](dispatch);
    console.log(usere);
  }, []);
  var initData = function () {
    dispatch({
      type: 'wrongNote/list',
      payload: {},
    }).then(function (res) {
      setData(res === null || res === void 0 ? void 0 : res.data);
    });
  };
  var fork = function (id) {
    dispatch({
      type: 'wrongNote/fork',
      payload: {
        noteId: id,
      },
    }).then(function (res) {
      antd_1.message.success('收藏成功！');
      initData();
    });
  };
  var unfork = function (id) {
    dispatch({
      type: 'wrongNote/unfork',
      payload: {
        noteId: id,
      },
    }).then(function (res) {
      antd_1.message.success('取消收藏成功！');
      initData();
    });
  };
  var ondelete = function (id) {
    dispatch({
      type: 'wrongNote/delete',
      payload: {
        noteId: id,
      },
    }).then(function (res) {
      antd_1.message.success('删除成功');
      initData();
    });
  };
  var unlock = function (id) {
    var _a;
    var point =
      ((_a = user.data) === null || _a === void 0 ? void 0 : _a.point) -
      globalData_1.unLockPoint;
    if (point < 0) {
      antd_1.message.error('目前积分还不够哦');
      return;
    }
    dispatch({
      type: 'user/addUserPoints',
      payload: {
        point: point,
      },
    }).then(function () {
      dispatch({
        type: 'wrongNote/unlock',
        payload: {
          noteId: id,
        },
      }).then(function (res) {
        antd_1.message.success('解锁成功！');
        initData();
      });
      getFuction_1['default'](dispatch);
    });
  };
  var renderItem = function (item) {
    var optionList = JSON.parse(
      item === null || item === void 0 ? void 0 : item.options,
    );
    var optionStr = optionList.join('   ,   ');
    return react_1['default'].createElement(
      'div',
      { className: info_less_1['default'].item },
      react_1['default'].createElement(
        'div',
        { className: info_less_1['default'].content },
        item === null || item === void 0 ? void 0 : item.question,
      ),
      react_1['default'].createElement(
        'div',
        { className: info_less_1['default'].options },
        optionStr,
      ),
      react_1['default'].createElement(
        'div',
        { className: info_less_1['default'].tools },
        react_1['default'].createElement(
          'div',
          {
            className: info_less_1['default'].left,
            style: isLocked(item) ? { visibility: 'hidden' } : {},
          },
          '\u6B63\u786E\u7B54\u6848\uFF1A',
          react_1['default'].createElement(
            antd_1.Tag,
            { color: 'blue' },
            '            ',
            item === null || item === void 0 ? void 0 : item.currentAnswer,
          ),
        ),
        react_1['default'].createElement(
          'div',
          { className: info_less_1['default'].right },
          String(item === null || item === void 0 ? void 0 : item.isStar) ===
            '1' &&
            react_1['default'].createElement(
              react_1['default'].Fragment,
              null,
              react_1['default'].createElement(
                antd_1.Button,
                {
                  type: 'text',
                  onClick: function () {
                    unfork(
                      item === null || item === void 0 ? void 0 : item.noteId,
                    );
                  },
                },
                react_1['default'].createElement(icons_1.StarFilled, {
                  style: { color: '#235fff' },
                }),
                '\u53D6\u6D88\u6536\u85CF',
              ),
            ),
          String(item === null || item === void 0 ? void 0 : item.isStar) !==
            '1' &&
            react_1['default'].createElement(
              react_1['default'].Fragment,
              null,
              react_1['default'].createElement(
                antd_1.Button,
                {
                  type: 'link',
                  onClick: function () {
                    fork(
                      item === null || item === void 0 ? void 0 : item.noteId,
                    );
                  },
                },
                react_1['default'].createElement(icons_1.StarOutlined, {
                  style: { color: '#235fff' },
                }),
                '\u6536\u85CF',
              ),
            ),
          isLocked(item) &&
            react_1['default'].createElement(
              antd_1.Popconfirm,
              {
                title:
                  '\u89E3\u9501\u9700\u8981\u6D88\u8017' +
                  globalData_1.unLockPoint +
                  '\u4E2A\u79EF\u5206\u54E6',
                cancelText: '取消',
                okText: '确定',
                onConfirm: function () {
                  unlock(
                    item === null || item === void 0 ? void 0 : item.noteId,
                  );
                },
                icon: react_1['default'].createElement(
                  icons_1.QuestionCircleOutlined,
                  null,
                ),
              },
              react_1['default'].createElement(
                antd_1.Button,
                { type: 'link' },
                '\u89E3\u9501',
              ),
            ),
          react_1['default'].createElement(
            antd_1.Popconfirm,
            {
              title: '\u786E\u8BA4\u8981\u5220\u9664\u5417\uFF1F',
              cancelText: '取消',
              okText: '确定',
              onConfirm: function () {
                ondelete(
                  item === null || item === void 0 ? void 0 : item.noteId,
                );
              },
              icon: react_1['default'].createElement(
                icons_1.QuestionCircleOutlined,
                null,
              ),
            },
            react_1['default'].createElement(
              antd_1.Button,
              { type: 'link' },
              '\u5220\u9664',
            ),
          ),
        ),
      ),
    );
  };
  return react_1['default'].createElement(
    'div',
    { className: info_less_1['default'].note },
    react_1['default'].createElement(antd_1.List, {
      dataSource: data,
      locale: {
        emptyText: '',
      },
      renderItem: function (item) {
        return react_1['default'].createElement(
          antd_1.List.Item,
          null,
          renderItem(item),
        );
      },
    }),
  );
};
function mapStateToProps(state) {
  return __assign({}, state);
}
exports['default'] = dva_1.connect(mapStateToProps)(Note);

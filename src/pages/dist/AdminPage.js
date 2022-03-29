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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
exports.__esModule = true;
var react_1 = require('react');
var dva_1 = require('dva');
var axios_1 = require('axios');
var globalData_1 = require('../utils/globalData');
var qs_1 = require('qs');
var umi_1 = require('umi');
// 1-问题，2-成就，3-用户
var antd_1 = require('antd');
var icons_1 = require('@ant-design/icons');
var Header = antd_1.Layout.Header,
  Content = antd_1.Layout.Content,
  Footer = antd_1.Layout.Footer,
  Sider = antd_1.Layout.Sider;
var EditableCell = function (_a) {
  var editing = _a.editing,
    dataIndex = _a.dataIndex,
    title = _a.title,
    inputType = _a.inputType,
    record = _a.record,
    index = _a.index,
    children = _a.children,
    restProps = __rest(_a, [
      'editing',
      'dataIndex',
      'title',
      'inputType',
      'record',
      'index',
      'children',
    ]);
  var inputNode =
    inputType === 'number'
      ? react_1['default'].createElement(antd_1.InputNumber, null)
      : react_1['default'].createElement(antd_1.Input, null);
  return react_1['default'].createElement(
    'td',
    __assign({}, restProps),
    editing
      ? react_1['default'].createElement(
          antd_1.Form.Item,
          {
            name: dataIndex,
            style: { margin: 0 },
            rules: [
              {
                required: false,
                message: 'Please Input ' + title + '!',
              },
            ],
          },
          inputNode,
        )
      : children,
  );
};
var Admin = function (params) {
  var dispatch = params.dispatch,
    questions = params.questions,
    loading = params.loading;
  var _a = react_1.useState('null'),
    manager = _a[0],
    setManager = _a[1];
  var _b = react_1.useState(false),
    collapsed = _b[0],
    setcollapsed = _b[1];
  var _c = react_1.useState([]),
    dataSource = _c[0],
    setDataSource = _c[1];
  var _d = react_1.useState([]),
    columns = _d[0],
    setColumns = _d[1];
  var _e = react_1.useState(20),
    pageSize = _e[0],
    setPageSize = _e[1];
  var _f = react_1.useState(0),
    pageNum = _f[0],
    setpageNum = _f[1];
  var _g = react_1.useState(null),
    chapterId = _g[0],
    setChapterId = _g[1];
  var _h = react_1.useState('1'),
    defaultMenuKey = _h[0],
    setDefaultMenuKey = _h[1];
  var form = antd_1.Form.useForm()[0];
  var _j = react_1.useState(''),
    editingKey = _j[0],
    setEditingKey = _j[1];
  var isEditing = function (record) {
    return String(record.id) === String(editingKey);
  };
  var edit = function (record) {
    form.setFieldsValue(__assign({}, record));
    setEditingKey(
      String(record === null || record === void 0 ? void 0 : record.id),
    );
  };
  //删除
  var onDelete = function (record) {
    switch (defaultMenuKey) {
      case '1':
        dispatch({
          type: 'questions/deleteQuestion',
          payload: {
            id: record.id,
          },
        }).then(function () {
          getQData({ pageSize: pageSize, pageNum: pageNum });
        });
        break;
      case '3':
        dispatch({
          type: 'user/deleteUser',
          payload: {
            id: record.id,
          },
        }).then(function () {
          getUserData();
        });
        break;
      case '2':
        axios_1['default']
          ['delete'](globalData_1.URL + '/achieve/delete?id=' + record.id)
          .then(function () {
            getAData();
          });
        break;
    }
  };
  var cancel = function () {
    setEditingKey('');
  };
  var save = function (val) {
    return __awaiter(void 0, void 0, void 0, function () {
      var row, errInfo_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, form.validateFields()];
          case 1:
            row = _a.sent();
            onUpdate(row, val);
            return [3 /*break*/, 3];
          case 2:
            errInfo_1 = _a.sent();
            console.log('Validate Failed:', errInfo_1);
            return [3 /*break*/, 3];
          case 3:
            return [2 /*return*/];
        }
      });
    });
  };
  react_1.useEffect(function () {
    var admin = localStorage.getItem('admin');
    setManager(admin);
    getQData({ pageSize: pageSize, pageNum: pageNum });
  }, []);
  react_1.useEffect(
    function () {
      changeColumns();
    },
    [editingKey],
  );
  react_1.useEffect(
    function () {
      changeData();
      changeColumns();
    },
    [defaultMenuKey],
  );
  var changeData = function () {
    switch (defaultMenuKey) {
      case '1':
        getQData({ pageSize: pageSize, pageNum: pageNum });
        break;
      case '3':
        getUserData();
        break;
      case '2':
        getAData();
        break;
    }
  };
  var changeColumns = function () {
    switch (defaultMenuKey) {
      case '1':
        renderQuestions();
        break;
      case '3':
        renderUsers();
        break;
      case '2':
        renderAchieve();
        break;
    }
  };
  var onUpdate = function (data, val) {
    var newData = __assign(__assign({}, val), data);
    switch (defaultMenuKey) {
      case '1':
        dispatch({
          type: 'questions/updateQuestion',
          payload: newData,
        }).then(function () {
          getQData({ pageSize: pageSize, pageNum: pageNum });
        });
        break;
      case '3':
        console.log('newData', newData);
        axios_1['default']
          .put(
            globalData_1.URL + '/user/updateAdmin?' + qs_1.stringify(newData),
          )
          .then(function () {
            getUserData();
          });
        break;
      case '2':
        axios_1['default']
          .put(globalData_1.URL + '/achieve/update?' + qs_1.stringify(newData))
          .then(function () {
            getAData();
          });
        break;
    }
    setEditingKey('');
  };
  function getQData(params) {
    var pageNum = params.pageNum,
      chapterId = params.chapterId,
      pageSize = params.pageSize;
    dispatch({
      type: 'questions/getQuestionAll',
      payload: {
        chapterId: chapterId,
        pageNum: pageNum,
        pageSize: pageSize,
        rand: false,
        isAll: true,
      },
    }).then(function (res) {
      setDataSource(res || []);
      renderQuestions();
    });
  }
  var getUserData = function () {
    axios_1['default']
      .get('http://localhost:3000/user/allUsers')
      .then(function (res) {
        setDataSource(res === null || res === void 0 ? void 0 : res.data);
      });
  };
  var getAData = function () {
    axios_1['default']
      .get('http://localhost:3000/achieve/listAll')
      .then(function (res) {
        setDataSource(res === null || res === void 0 ? void 0 : res.data);
      });
  };
  var onCollapse = function (value) {
    setcollapsed(value);
  };
  // 题目配置
  var renderQuestions = function () {
    var column = [
      {
        title: '题目',
        dataIndex: 'question',
        key: 'question',
        editable: true,
      },
      {
        title: '正确答案',
        dataIndex: 'currentAnswer',
        key: 'currentAnswer',
        editable: true,
      },
      {
        title: '选项',
        dataIndex: 'options',
        key: 'options',
        editable: true,
        render: function (value) {
          return String(value);
        },
      },
      {
        title: '章节',
        dataIndex: 'chapterId',
        key: 'chapterId',
        editable: true,
      },
      {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        editable: true,
        render: function (value) {
          switch (String(value)) {
            case '1':
              return '单选';
            case '3':
              return '判断';
          }
        },
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: function (_, record) {
          // const editable = true;
          var editable = String(record.id) === editingKey;
          return editable
            ? react_1['default'].createElement(
                'span',
                null,
                react_1['default'].createElement(
                  antd_1.Typography.Link,
                  {
                    onClick: function () {
                      return save(record);
                    },
                    style: { marginRight: 8 },
                  },
                  '\u4FDD\u5B58',
                ),
                react_1['default'].createElement(
                  antd_1.Popconfirm,
                  {
                    title: '\u4E0D\u4FDD\u5B58\u5C31\u9000\u51FA\u5417?',
                    onConfirm: cancel,
                  },
                  react_1['default'].createElement('a', null, '\u53D6\u6D88'),
                ),
              )
            : react_1['default'].createElement(
                'span',
                null,
                react_1['default'].createElement(
                  antd_1.Typography.Link,
                  {
                    disabled: editingKey !== '',
                    onClick: function () {
                      return edit(record);
                    },
                    style: { marginRight: 8 },
                  },
                  '\u7F16\u8F91',
                ),
                react_1['default'].createElement(
                  antd_1.Popconfirm,
                  {
                    title: '\u786E\u8BA4\u5220\u9664\u5417?',
                    onConfirm: function () {
                      return onDelete(record);
                    },
                    onCancel: cancel,
                  },
                  react_1['default'].createElement('a', null, '\u5220\u9664'),
                ),
              );
        },
      },
    ];
    setColumns(column);
    // return <div>
    //   <Table columns={columns} dataSource={dataSource} />
    // </div>
  };
  // 用户配置
  var renderUsers = function () {
    var column = [
      {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
        editable: true,
      },
      {
        title: '积分',
        dataIndex: 'point',
        key: 'point',
        editable: true,
      },
      {
        title: '章节进度',
        dataIndex: 'chapterId',
        key: 'chapterId',
        editable: true,
      },
      {
        title: '关卡',
        dataIndex: 'checkpoint',
        key: 'checkpoint',
        editable: true,
        render: function (val) {
          return react_1['default'].createElement(
            'span',
            null,
            '\u7B2C',
            val,
            '\u5173',
          );
        },
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: function (_, record) {
          // const editable = true;
          var editable = String(record.id) === editingKey;
          return editable
            ? react_1['default'].createElement(
                'span',
                null,
                react_1['default'].createElement(
                  antd_1.Typography.Link,
                  {
                    onClick: function () {
                      return save(record);
                    },
                    style: { marginRight: 8 },
                  },
                  '\u4FDD\u5B58',
                ),
                react_1['default'].createElement(
                  antd_1.Popconfirm,
                  {
                    title: '\u4E0D\u4FDD\u5B58\u5C31\u9000\u51FA\u5417?',
                    onConfirm: cancel,
                  },
                  react_1['default'].createElement('a', null, '\u53D6\u6D88'),
                ),
              )
            : react_1['default'].createElement(
                'span',
                null,
                react_1['default'].createElement(
                  antd_1.Typography.Link,
                  {
                    disabled: editingKey !== '',
                    onClick: function () {
                      return edit(record);
                    },
                    style: { marginRight: 8 },
                  },
                  '\u7F16\u8F91',
                ),
                react_1['default'].createElement(
                  antd_1.Popconfirm,
                  {
                    title: '\u786E\u8BA4\u5220\u9664\u5417?',
                    onConfirm: function () {
                      return onDelete(record);
                    },
                    onCancel: cancel,
                  },
                  react_1['default'].createElement('a', null, '\u5220\u9664'),
                ),
              );
        },
      },
    ];
    setColumns(column);
  };
  // 成就配置
  var renderAchieve = function () {
    var column = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        editable: true,
      },
      {
        title: '描述',
        dataIndex: 'desc',
        key: 'desc',
        editable: true,
      },
      {
        title: '解锁所需答题次数',
        dataIndex: 'number',
        key: 'number',
        editable: true,
      },
      {
        title: '游戏模式',
        dataIndex: 'modeID',
        key: 'modeID',
        editable: true,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: function (_, record) {
          // const editable = true;
          var editable = String(record.id) === editingKey;
          return editable
            ? react_1['default'].createElement(
                'span',
                null,
                react_1['default'].createElement(
                  antd_1.Typography.Link,
                  {
                    onClick: function () {
                      return save(record);
                    },
                    style: { marginRight: 8 },
                  },
                  '\u4FDD\u5B58',
                ),
                react_1['default'].createElement(
                  antd_1.Popconfirm,
                  {
                    title: '\u4E0D\u4FDD\u5B58\u5C31\u9000\u51FA\u5417?',
                    onConfirm: cancel,
                  },
                  react_1['default'].createElement('a', null, '\u53D6\u6D88'),
                ),
              )
            : react_1['default'].createElement(
                'span',
                null,
                react_1['default'].createElement(
                  antd_1.Typography.Link,
                  {
                    disabled: editingKey !== '',
                    onClick: function () {
                      return edit(record);
                    },
                    style: { marginRight: 8 },
                  },
                  '\u7F16\u8F91',
                ),
                react_1['default'].createElement(
                  antd_1.Popconfirm,
                  {
                    title: '\u786E\u8BA4\u5220\u9664\u5417?',
                    onConfirm: function () {
                      return onDelete(record);
                    },
                    onCancel: cancel,
                  },
                  react_1['default'].createElement('a', null, '\u5220\u9664'),
                ),
              );
        },
      },
    ];
    setColumns(column);
  };
  var mergedColumns = columns.map(function (col) {
    if (!col.editable) {
      return col;
    }
    return __assign(__assign({}, col), {
      onCell: function (record) {
        return {
          record: record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        };
      },
    });
  });
  var onCreateItem = function () {
    console.log('onCreateItem');
    if (defaultMenuKey === '3') {
      dispatch({
        type: 'user/addUser',
        payload: {},
      }).then(function (res) {
        getUserData();
        antd_1.message.success('新建成功');
      });
    } else {
      umi_1.history.push('/admin/detail?key=' + defaultMenuKey);
    }
  };
  return react_1['default'].createElement(
    antd_1.Layout,
    { style: { minHeight: '100vh' } },
    react_1['default'].createElement(
      Sider,
      { collapsible: true, collapsed: collapsed, onCollapse: onCollapse },
      react_1['default'].createElement(
        antd_1.Menu,
        {
          theme: 'dark',
          defaultSelectedKeys: ['1'],
          mode: 'inline',
          onClick: function (val) {
            setEditingKey('');
            setDefaultMenuKey(
              val === null || val === void 0 ? void 0 : val.key,
            );
          },
        },
        react_1['default'].createElement(
          antd_1.Menu.Item,
          {
            key: '1',
            icon: react_1['default'].createElement(
              icons_1.PieChartOutlined,
              null,
            ),
          },
          '\u5173\u5361\u9898\u76EE\u914D\u7F6E',
        ),
        react_1['default'].createElement(
          antd_1.Menu.Item,
          {
            key: '2',
            icon: react_1['default'].createElement(
              icons_1.DesktopOutlined,
              null,
            ),
          },
          '\u6E38\u620F\u6210\u5C31\u914D\u7F6E',
        ),
        react_1['default'].createElement(
          antd_1.Menu.Item,
          {
            key: '3',
            icon: react_1['default'].createElement(icons_1.FileOutlined, null),
          },
          '\u7528\u6237\u7BA1\u7406',
        ),
      ),
    ),
    react_1['default'].createElement(
      antd_1.Layout,
      { className: 'site-layout' },
      react_1['default'].createElement(
        Content,
        { style: { margin: '0 16px' } },
        react_1['default'].createElement(
          'div',
          {
            className: 'site-layout-background',
            style: { padding: 24, minHeight: 360 },
          },
          react_1['default'].createElement(
            Header,
            {
              className: 'site-layout-background',
              style: { padding: '0 8', background: '#fff' },
            },
            react_1['default'].createElement(
              antd_1.Button,
              { onClick: onCreateItem },
              '\u65B0\u5EFA',
            ),
          ),
          react_1['default'].createElement(
            antd_1.Form,
            { form: form, component: false },
            react_1['default'].createElement(antd_1.Table, {
              components: {
                body: {
                  cell: EditableCell,
                },
              },
              bordered: true,
              dataSource: dataSource,
              columns: mergedColumns,
              rowClassName: 'editable-row',
              pagination: {
                onChange: cancel,
              },
            }),
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
exports['default'] = dva_1.connect(mapStateToProps)(Admin);

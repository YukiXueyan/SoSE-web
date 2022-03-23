"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var dva_1 = require("dva");
var info_less_1 = require("./info.less");
var antd_1 = require("antd");
var Search = antd_1.Input.Search;
var UserInfo = function (_a) {
    var _b, _c, _d, _e;
    var dispatch = _a.dispatch, user = _a.user, loading = _a.loading;
    var _f = react_1.useState(false), changeUserName = _f[0], setChangeUSerName = _f[1];
    var _g = react_1.useState(''), userName = _g[0], setUserName = _g[1];
    react_1.useEffect(function () {
        getInfo();
    }, []);
    react_1.useEffect(function () {
        var _a;
        setUserName((_a = user === null || user === void 0 ? void 0 : user.data) === null || _a === void 0 ? void 0 : _a.name);
    }, [user === null || user === void 0 ? void 0 : user.data]);
    var getInfo = function () {
        dispatch({
            type: 'user/getUserInfo',
            payload: {}
        }).then(function (res) {
            if (res && res.length > 0) {
                localStorage.setItem('user', JSON.stringify(res[0]));
                user = res[0];
            }
        });
    };
    var updateName = function (name) {
        dispatch({
            type: 'user/updateUserinfo',
            payload: {
                name: String(name)
            }
        }).then(function () {
            getInfo();
            setChangeUSerName(false);
        });
    };
    var deleteUser = function () {
        dispatch({
            type: 'user/deleteUser',
            payload: {}
        });
    };
    var renderItem = function (title, desc) {
        return react_1["default"].createElement("div", { className: info_less_1["default"].item },
            react_1["default"].createElement("div", { className: info_less_1["default"].title }, title),
            react_1["default"].createElement("div", { className: info_less_1["default"].desc }, desc || '-'));
    };
    var onFinish = function (value) {
        updateName(value);
    };
    return (react_1["default"].createElement("div", { className: info_less_1["default"].userInfo },
        changeUserName ? react_1["default"].createElement("div", { style: { display: 'flex' } },
            react_1["default"].createElement(Search
            //   placeholder={userName}
            , { 
                //   placeholder={userName}
                defaultValue: userName, 
                //   allowClear
                enterButton: "\u786E\u5B9A", size: "small", onSearch: onFinish })) : react_1["default"].createElement("div", { style: { display: 'flex' } },
            renderItem('用户名', (_b = user === null || user === void 0 ? void 0 : user.data) === null || _b === void 0 ? void 0 : _b.name),
            react_1["default"].createElement(antd_1.Button, { size: 'small', style: { marginLeft: '8px' }, onClick: function () {
                    setChangeUSerName(true);
                } }, "\u4FEE\u6539\u7528\u6237\u540D")),
        renderItem('积分', (_c = user === null || user === void 0 ? void 0 : user.data) === null || _c === void 0 ? void 0 : _c.point),
        renderItem('目前进度', "\u7B2C" + (((_d = user === null || user === void 0 ? void 0 : user.data) === null || _d === void 0 ? void 0 : _d.chapterId) || '-') + "\u7AE0-\u7B2C" + (((_e = user === null || user === void 0 ? void 0 : user.data) === null || _e === void 0 ? void 0 : _e.checkpoint) || '-') + "\u8282"),
        react_1["default"].createElement(antd_1.Popconfirm, { title: "\u6CE8\u9500\u540E\u7528\u6237\u4FE1\u606F\u5C06\u88AB\u6E05\u7A7A\uFF0C\u65E0\u6CD5\u6062\u590D\u3002\u786E\u5B9A\u6CE8\u9500\u5417\uFF1F", onConfirm: function () {
                deleteUser();
            }, okText: "Yes", cancelText: "No" },
            react_1["default"].createElement(antd_1.Button, { size: 'small' }, "\u6CE8\u9500\u7528\u6237\u4FE1\u606F"))));
};
function mapStateToProps(state) {
    return __assign({}, state
    // ...listSelector(state, ownProps),
    );
}
// export default UserInfo;
exports["default"] = dva_1.connect(mapStateToProps)(UserInfo);

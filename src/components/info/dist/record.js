"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dva_1 = require("dva");
var moment_1 = require("moment");
var info_less_1 = require("./info.less");
var antd_1 = require("antd");
var TabPane = antd_1.Tabs.TabPane;
var mode = [
    '无尽模式', '测试模式', '限时模式'
];
var Record = function (props) {
    var dispatch = props.dispatch;
    var _a = react_1.useState(), modeList = _a[0], setModeList = _a[1];
    var _b = react_1.useState(), recordData = _b[0], setRecordData = _b[1];
    react_1.useEffect(function () {
        dispatch({
            type: 'user/getUSerMode',
            payload: {}
        }).then(function (res) {
            if (res && res.length > 0) {
                setModeList(res);
            }
        });
        getUserRecords({});
    }, []);
    var getUserRecords = function (params) {
        var modeId = params.modeId;
        dispatch({
            type: 'user/getRecord',
            payload: {
                modeId: modeId
            }
        }).then(function (res) {
            setRecordData(res || []);
        });
    };
    var tabContent = function () {
        return react_1["default"].createElement("div", { className: info_less_1["default"].tabContent },
            react_1["default"].createElement(antd_1.Timeline, { mode: 'left' },
                react_1["default"].createElement(antd_1.Timeline.Item, null, "\u6A21\u5F0F - \u6E38\u73A9\u65F6\u95F4 - \u6210\u7EE9"), recordData === null || recordData === void 0 ? void 0 :
                recordData.map(function (v) {
                    return react_1["default"].createElement(antd_1.Timeline.Item, { label: moment_1["default"](Date(v === null || v === void 0 ? void 0 : v.time)).format('YYYY-MM-DD hh:mm') },
                        mode[v.modeId - 1],
                        "-",
                        v.playTime,
                        "-", v === null || v === void 0 ? void 0 :
                        v.number);
                })));
    };
    return (react_1["default"].createElement("div", { className: info_less_1["default"].Record },
        react_1["default"].createElement(antd_1.Tabs, { defaultActiveKey: "0", onChange: function (item) {
                if (Number(item) !== 0) {
                    getUserRecords({ modeId: item });
                }
                else {
                    getUserRecords({});
                }
            } },
            react_1["default"].createElement(TabPane, { tab: "\u5168\u90E8", key: "0" }, tabContent()), modeList === null || modeList === void 0 ? void 0 :
            modeList.map(function (item) {
                return react_1["default"].createElement(TabPane, { tab: item === null || item === void 0 ? void 0 : item.name, disabled: (item === null || item === void 0 ? void 0 : item.userId) === null, key: item === null || item === void 0 ? void 0 : item.id }, tabContent());
            }))));
};
exports["default"] = dva_1.connect()(Record);

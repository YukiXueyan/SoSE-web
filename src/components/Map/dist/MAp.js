"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var globalData_1 = require("../../utils/globalData");
var Map_less_1 = require("./Map.less");
var Map = function (_a) {
    var user = _a.user, setStartGame = _a.setStartGame, setCheckpoint = _a.setCheckpoint;
    var judge = function (item) {
        return (user === null || user === void 0 ? void 0 : user.chapterId) > (item === null || item === void 0 ? void 0 : item.chapterId) || ((user === null || user === void 0 ? void 0 : user.chapterId) === (item === null || item === void 0 ? void 0 : item.chapterId) && (user === null || user === void 0 ? void 0 : user.checkpoint) >= (item === null || item === void 0 ? void 0 : item.checkpoint));
    };
    var onClick = function (item, index) {
        var item2 = item;
        item2['index'] = index;
        setCheckpoint(item2);
        setStartGame(true);
    };
    var nodeBtn = function () {
        return react_1["default"].createElement("div", { className: Map_less_1["default"].node },
            react_1["default"].createElement(antd_1.Timeline, { mode: "alternate" }, globalData_1.Menu === null || globalData_1.Menu === void 0 ? void 0 : globalData_1.Menu.map(function (item, index) { return (react_1["default"].createElement(antd_1.Timeline.Item, { dot: react_1["default"].createElement(icons_1.DownCircleOutlined, { style: judge(item) ? { fontSize: '24px' } : { fontSize: '24px', color: '#e3e3e3' }, key: index }) }, judge(item) ? react_1["default"].createElement("span", { className: Map_less_1["default"].title, onClick: function () { onClick(item, index); } }, item === null || item === void 0 ? void 0 : item.title) : react_1["default"].createElement("span", { className: Map_less_1["default"].title2 }, item === null || item === void 0 ? void 0 : item.title))); })));
    };
    return react_1["default"].createElement("div", { className: Map_less_1["default"].map }, nodeBtn());
};
exports["default"] = Map;

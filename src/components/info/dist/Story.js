"use strict";
exports.__esModule = true;
var react_1 = require("react");
var info_less_1 = require("./info.less");
var antd_1 = require("antd");
var globalData_1 = require("@/utils/globalData");
var Story = function (_a) {
    var _b = react_1.useState(), storyList = _b[0], setStoryList = _b[1];
    var _c = react_1.useState(true), reverse = _c[0], setReverse = _c[1];
    var changeTimeLine = function () {
        var re = reverse;
        setReverse(!re);
    };
    react_1.useEffect(function () {
        var list = globalData_1.Menu.filter(function (item) {
            return globalData_1.user.chapterId > (item === null || item === void 0 ? void 0 : item.chapterId) || (globalData_1.user.checkpoint >= (item === null || item === void 0 ? void 0 : item.checkpoint) && item.chapterId === (globalData_1.user === null || globalData_1.user === void 0 ? void 0 : globalData_1.user.chapterId));
        }) || [];
        setStoryList(list);
    }, []);
    return (react_1["default"].createElement("div", { className: info_less_1["default"].Story },
        react_1["default"].createElement(antd_1.Timeline, { pending: (storyList === null || storyList === void 0 ? void 0 : storyList.length) > 0 ? '未完待续......' : '还未解锁故事哦，继续去探索吧', reverse: reverse }, storyList === null || storyList === void 0 ? void 0 : storyList.map((function (item) { return react_1["default"].createElement(antd_1.Timeline.Item, null, item === null || item === void 0 ? void 0 : item.story); }))),
        (storyList === null || storyList === void 0 ? void 0 : storyList.length) > 0 && react_1["default"].createElement(antd_1.Button, { type: "primary", style: { marginTop: 16 }, onClick: changeTimeLine }, "\u5012\u5E8F\u67E5\u770B")));
};
exports["default"] = Story;

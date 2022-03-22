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
var index_less_1 = require("./index.less");
var MainQuestion_1 = require("@/components/QuestionList/MainQuestion");
// export default function IndexPage({ dispatch, questions, loading }:any) {
var Game = function (_a) {
    var dispatch = _a.dispatch, questions = _a.questions, loading = _a.loading;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", { className: index_less_1["default"].title }, "Page index"),
        react_1["default"].createElement(MainQuestion_1["default"], null)));
};
function mapStateToProps(state) {
    // const questions = state.questions.data;
    return __assign({}, state
    // ...listSelector(state, ownProps),
    );
}
exports["default"] = dva_1.connect(mapStateToProps)(Game);

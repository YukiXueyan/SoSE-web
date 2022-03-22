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
var antd_1 = require("antd");
var dva_1 = require("dva");
var TestEffect = function (props) {
    var dispatch = props.dispatch, questions = props.questions;
    react_1.useEffect(function () {
        console.log('init', props);
        getData(1, 1, 10);
    }, []);
    react_1.useEffect(function () {
        console.log('questions', questions);
    }, [questions]);
    function getData(checkpoint, chapterId, pageSize) {
        console.log('test, getData');
        dispatch({
            type: "questions/getQuestions",
            payload: {
                chapterId: chapterId,
                pageNum: checkpoint,
                pageSize: pageSize
            }
        });
    }
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement(antd_1.Button, { onClick: function () { getData(1, 1, 10); } }, "\u6D4B\u8BD5\u3002\u3002\u3002"));
};
function mapStateToProps(state) {
    // const questions = state.questions.data;
    return __assign({}, state
    // ...listSelector(state, ownProps),
    );
}
exports["default"] = dva_1.connect(mapStateToProps)(TestEffect);

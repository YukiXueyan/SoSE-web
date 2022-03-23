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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var lodash_1 = require("lodash");
var dva_1 = require("dva");
var umi_1 = require("umi");
var axios_1 = require("axios");
var qs_1 = require("qs");
//@ts-ignore
var question_1 = require("../qAndA/question");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var QuestionList_less_1 = require("./QuestionList.less");
//@ts-ignore
var endShow_1 = require("./endShow");
var globalData_1 = require("../../utils/globalData");
var user = JSON.parse(localStorage.getItem('user') || '')[0] || JSON.parse(localStorage.getItem('user') || '');
var modeId = localStorage.getItem('modeId') || '0';
var MainQuestion = function (props) {
    var dispatch = props.dispatch, questions = props.questions, checkpoint = props.checkpoint, setCheckpoint = props.setCheckpoint, setStartGame = props.setStartGame;
    var _a = react_1.useState(0), index = _a[0], setIndex = _a[1];
    var _b = react_1.useState(NaN), totalNum = _b[0], setTotalNum = _b[1];
    var _c = react_1.useState(false), end = _c[0], setEnd = _c[1];
    var _d = react_1.useState(0), right = _d[0], setRight = _d[1]; //答对数量
    var _e = react_1.useState(null), result = _e[0], setResult = _e[1]; // 是否答对
    var _f = react_1.useState(false), showStory = _f[0], setShowStory = _f[1]; // 展示故事
    var _g = react_1.useState(globalData_1.LifeNum), life = _g[0], setLife = _g[1];
    var isLastGame = lodash_1["default"].get(checkpoint, 'end') || false;
    function getData(params) {
        var checkpoint = params.checkpoint, chapterId = params.chapterId, pageSize = params.pageSize;
        console.log('getDAta', params);
        dispatch({
            type: "questions/getQuestions",
            payload: {
                chapterId: chapterId,
                pageNum: checkpoint,
                pageSize: pageSize
            }
        });
    }
    react_1.useEffect(function () {
        setShowStory(true);
    }, []);
    react_1.useEffect(function () {
        console.log('props', props);
        switch (modeId) {
            case '0':
                getData({
                    checkpoint: checkpoint === null || checkpoint === void 0 ? void 0 : checkpoint.checkpoint, chapterId: checkpoint === null || checkpoint === void 0 ? void 0 : checkpoint.chapterId,
                    pageSize: globalData_1.QuestionNum
                });
                break;
            case '1':
                getData({
                    pageSize: 10
                });
                setShowStory(false);
                break;
        }
    }, []);
    react_1.useEffect(function () {
        var list = (questions === null || questions === void 0 ? void 0 : questions.data) || [];
        setTotalNum(list === null || list === void 0 ? void 0 : list.length);
        setIndex(0);
    }, [questions]);
    //判断游戏模式
    react_1.useEffect(function () {
        if (Number(modeId) === 1) {
            // setStartGame(true) //todo
            setShowStory(false);
        }
    }, [modeId]);
    react_1.useEffect(function () {
        if (result === true) {
            setRight(right + 1);
        }
        else if (result === false) {
            var newLife = life - 1;
            setLife(newLife);
            if (newLife === 0) {
                setEnd(true);
                setLife(globalData_1.LifeNum);
                setResult(null);
                if (Number(modeId) === 1) {
                    addRecord();
                }
            }
        }
        if (index === (questions === null || questions === void 0 ? void 0 : questions.data.length) && index) {
            setEnd(true);
        }
        //解锁新模式
        //    openEndlessMode(2)
    }, [index]);
    // 添加游戏记录（非主线模式
    var addRecord = function () {
        dispatch({
            type: "questions/successGame",
            payload: {
                modeId: Number(modeId),
                grade: right * 20,
                number: index
            }
        });
    };
    var returnMap = function () {
        setStartGame(false);
    };
    // 主线模式通关，修改进度
    var userPassGame = function () { return __awaiter(void 0, void 0, void 0, function () {
        var URL, userId, newProgress, data, incomingData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = 'http://localhost:3000';
                    userId = user.id;
                    if (!((user === null || user === void 0 ? void 0 : user.chapterId) === (checkpoint === null || checkpoint === void 0 ? void 0 : checkpoint.chapterId) && (user === null || user === void 0 ? void 0 : user.checkpoint) === (checkpoint === null || checkpoint === void 0 ? void 0 : checkpoint.checkpoint) && right > globalData_1.passRightNum)) return [3 /*break*/, 2];
                    newProgress = globalData_1.Menu[(checkpoint === null || checkpoint === void 0 ? void 0 : checkpoint.index) + 1];
                    data = {
                        chapterId: newProgress === null || newProgress === void 0 ? void 0 : newProgress.chapterId,
                        checkpoint: newProgress === null || newProgress === void 0 ? void 0 : newProgress.checkpoint
                    };
                    return [4 /*yield*/, axios_1["default"].put(URL + "/user/over?userId=" + userId + "&" + qs_1.stringify(data)).then(function () {
                            axios_1["default"].get(URL + "/user/info?userId=" + userId).then(function (res) {
                                localStorage.setItem('user', JSON.stringify(res === null || res === void 0 ? void 0 : res.data[0]));
                            });
                        })];
                case 1:
                    incomingData = _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    //解锁新模式
    var openEndlessMode = function (modeId) {
        dispatch({
            type: 'user/getUSerMode',
            payload: {}
        }).then(function (res) {
            if (res && res.length) {
                res.forEach(function (item) {
                    if (item.id === modeId && item.userId === null) {
                        dispatch({
                            type: 'user/unlockUserMode',
                            payload: {
                                modeId: modeId
                            }
                        });
                    }
                });
            }
        });
    };
    var onBtnClick = function (option, current_option) {
        setIndex(index + 1);
        option === current_option ? setResult(true) : setResult(false);
    };
    var nextGame = function () {
        setIndex(0);
        var newProgress = globalData_1.Menu[(checkpoint === null || checkpoint === void 0 ? void 0 : checkpoint.index) + 1];
        //@ts-ignore
        newProgress['index'] = (checkpoint === null || checkpoint === void 0 ? void 0 : checkpoint.index) + 1;
        setCheckpoint(newProgress);
        dispatch({
            type: "questions/getQuestions",
            payload: {
                chapterId: newProgress.chapterId,
                pageSize: 5,
                pageNum: newProgress.checkpoint
            }
        });
    };
    var handleAgain = function () {
        setIndex(0);
        setEnd(false);
        setRight(0);
        setLife(globalData_1.LifeNum);
    };
    return (react_1["default"].createElement("div", { className: QuestionList_less_1["default"].box },
        (end) && react_1["default"].createElement("div", null,
            react_1["default"].createElement(endShow_1["default"], { modeId: modeId, updateGrade: userPassGame, right: right, nextGame: nextGame, again: handleAgain, returnMap: returnMap })),
        (!end && !showStory) && react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: QuestionList_less_1["default"].tool },
                react_1["default"].createElement("div", { className: QuestionList_less_1["default"].process },
                    react_1["default"].createElement(antd_1.Progress, { percent: index * 100 / totalNum, showInfo: false }),
                    react_1["default"].createElement("div", { className: QuestionList_less_1["default"].desc },
                        index,
                        " / ",
                        totalNum)),
                react_1["default"].createElement("div", { className: QuestionList_less_1["default"].btns },
                    react_1["default"].createElement(antd_1.Button, { type: "text", onClick: function () { return setShowStory(true); } }, "\u91CD\u65B0\u5F00\u59CB"),
                    react_1["default"].createElement(antd_1.Button, { type: "text", onClick: function () {
                            setStartGame(false);
                        } }, "\u8FD4\u56DE\u5217\u8868"),
                    react_1["default"].createElement(antd_1.Button, { type: "text", onClick: function () {
                            umi_1.history.push('/');
                        } }, "\u8FD4\u56DE\u9996\u9875")),
                react_1["default"].createElement("div", { className: QuestionList_less_1["default"].timer },
                    react_1["default"].createElement(icons_1.FieldTimeOutlined, null),
                    life)),
            react_1["default"].createElement(question_1["default"], { question: questions === null || questions === void 0 ? void 0 : questions.data[index], onBtnClick: onBtnClick })),
        console.log({ showStory: showStory }),
        showStory && react_1["default"].createElement("div", null,
            react_1["default"].createElement(antd_1.Button, { onClick: function () {
                    setShowStory(false);
                } }, "\u5F00\u59CB"))));
};
function mapStateToProps(state) {
    // const questions = state.questions.data;
    return __assign({}, state
    // ...listSelector(state, ownProps),
    );
}
exports["default"] = dva_1.connect(mapStateToProps)(MainQuestion);

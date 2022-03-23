"use strict";
exports.__esModule = true;
var react_1 = require("react");
var StoryShow_less_1 = require("./StoryShow.less");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var umi_1 = require("umi");
var StoryShow = function (_a) {
    var story = _a.story, setShowStory = _a.setShowStory, isLastGame = _a.isLastGame, openEndlessMode = _a.openEndlessMode;
    var _b = react_1.useState([]), storyList = _b[0], setStoryList = _b[1];
    var _c = react_1.useState(0), index = _c[0], setIndex = _c[1];
    var _d = react_1.useState(false), btnWord = _d[0], setBtnWord = _d[1];
    var _e = react_1.useState(false), showEnding = _e[0], setShowEnding = _e[1];
    react_1.useEffect(function () {
        var list = String(story).split('\n');
        setStoryList(list);
        setIndex(0);
    }, [story]);
    // '监听点击事件
    // useEffect(() =>{
    //   document.addEventListener('click',() => {
    //     continueStory()
    //   })
    //   document.addEventListener('keydown',(e) => {
    //     console.log(e)
    //   })
    // },[storyList])
    // useEffect(() => {
    //   if(isLastGame){
    //     openEndlessMode()
    //   }
    // },[isLastGame])
    // 下一步劇情
    var continueStory = function () {
        var len = storyList.length;
        if (index + 1 >= len) {
            if (isLastGame) {
                setShowEnding(true);
                // 解锁更多模式
                // openEndlessMode()
            }
            else {
                setShowStory(false);
            }
        }
        else {
            setIndex(index + 1);
        }
        if (index === len - 2 && !isLastGame) {
            setBtnWord(true);
        }
    };
    var finallyGoBack = function () {
        umi_1.history.push('/');
        openEndlessMode();
    };
    return react_1["default"].createElement("div", { onClick: continueStory, className: StoryShow_less_1["default"].content },
        storyList[index],
        react_1["default"].createElement("div", { className: StoryShow_less_1["default"].btns },
            react_1["default"].createElement(antd_1.Button, { type: 'text' }, btnWord ? '开始' : react_1["default"].createElement(icons_1.DoubleRightOutlined, null)),
            react_1["default"].createElement(antd_1.Button, { type: 'text', style: { margin: '0 8px' }, onClick: function () {
                    console.log('click 跳过');
                    setShowStory(false);
                } }, "\u8DF3\u8FC7"),
            showEnding && react_1["default"].createElement("div", null,
                react_1["default"].createElement(antd_1.Button, { onClick: finallyGoBack }, "\u8FD4\u56DE\u4E3B\u9875"))));
};
exports["default"] = StoryShow;

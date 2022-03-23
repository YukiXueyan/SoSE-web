"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var umi_1 = require("umi");
//
var StoryShow = function (_a) {
    var story = _a.story, setShowStory = _a.setShowStory, isLastGame = _a.isLastGame, openEndlessMode = _a.openEndlessMode;
    var _b = react_1.useState([]), storyList = _b[0], setStoryList = _b[1];
    var _c = react_1.useState(0), index = _c[0], setIndex = _c[1];
    var _d = react_1.useState(false), btnWord = _d[0], setBtnWord = _d[1];
    var _e = react_1.useState(false), showEnding = _e[0], setShowEnding = _e[1];
    react_1.useEffect(function () {
        console.log('init StoryShow');
    }, []);
    // useEffect(() => {
    //   const list = String(story).split('\n');
    //   setStoryList(list)
    //   setIndex(0)
    // }, [])
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
        // openEndlessMode()
    };
    // return (
    //   <div className={styled.content}>
    //   {storyList[index]}
    //   <div className={styled.btns}>
    //     {/* <Button type='text' onClick={() => { continueStory() }}>
    //       {btnWord ? '开始' : <DoubleRightOutlined />}
    //     </Button> */}
    //     <Button type='text' style={{ margin: '0 8px' }} onClick={() => {
    //       console.log('click 跳过')
    //       setShowStory(false)
    //     }}>
    //       跳过
    //     </Button>
    //     {showEnding && <div>
    //       <Button onClick={()=>{finallyGoBack}}>
    //         返回主页
    //       </Button>
    //     </div>}
    //   </div>
    // </div>
    // )
    return (react_1["default"].createElement("div", null,
        story,
        react_1["default"].createElement(antd_1.Button, { onClick: function () {
                console.log('click test');
            } }, "\u6D4B\u8BD5")));
};
exports["default"] = StoryShow;

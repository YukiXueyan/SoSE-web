'use strict';
exports.__esModule = true;
var react_1 = require('react');
var StoryShow_less_1 = require('./StoryShow.less');
var antd_1 = require('antd');
var icons_1 = require('@ant-design/icons');
var umi_1 = require('umi');
var rc_queue_anim_1 = require('rc-queue-anim');
//
// const StoryShow = ({  }: any) => {
var StoryShow = function (_a) {
  var story = _a.story,
    setShowStory = _a.setShowStory,
    isLastGame = _a.isLastGame;
  var _b = react_1.useState([]),
    storyList = _b[0],
    setStoryList = _b[1];
  var _c = react_1.useState(0),
    index = _c[0],
    setIndex = _c[1];
  var _d = react_1.useState(false),
    btnWord = _d[0],
    setBtnWord = _d[1];
  var _e = react_1.useState(false),
    showEnding = _e[0],
    setShowEnding = _e[1];
  react_1.useEffect(function () {
    var list = String(story).split('\n');
    setStoryList(list);
    setIndex(0);
  }, []);
  // 下一步劇情
  var continueStory = function () {
    var len = storyList.length;
    if (index + 1 >= len) {
      if (isLastGame) {
        setShowEnding(true);
        umi_1.history.push('/');
      } else {
        setShowStory(false);
      }
    } else {
      setIndex(index + 1);
    }
    if (index === len - 2 && !isLastGame) {
      setBtnWord(true);
    }
  };
  var finallyGoBack = function () {
    umi_1.history.push('/');
  };
  return react_1['default'].createElement(
    rc_queue_anim_1['default'],
    {
      animConfig: [
        { opacity: [1, 0], translateY: [0, 50] },
        { opacity: [1, 0], translateY: [0, -50] },
      ],
      duration: 1000,
    },
    react_1['default'].createElement(
      'div',
      { className: StoryShow_less_1['default'].content, key: 'showStory' },
      storyList[index],
      react_1['default'].createElement(
        'div',
        { className: StoryShow_less_1['default'].btns },
        react_1['default'].createElement(
          antd_1.Tooltip,
          { placement: 'topLeft', title: btnWord ? '开始' : '继续' },
          react_1['default'].createElement(
            antd_1.Button,
            {
              type: 'text',
              onClick: function () {
                continueStory();
              },
            },
            btnWord
              ? react_1['default'].createElement(
                  icons_1.PlayCircleOutlined,
                  null,
                )
              : react_1['default'].createElement(
                  icons_1.DoubleRightOutlined,
                  null,
                ),
          ),
        ),
        react_1['default'].createElement(
          antd_1.Tooltip,
          { placement: 'topLeft', title: '跳过' },
          react_1['default'].createElement(
            antd_1.Button,
            {
              type: 'text',
              style: { margin: '0 8px' },
              onClick: function () {
                if (isLastGame) {
                  umi_1.history.push('/');
                } else {
                  setShowStory(false);
                }
              },
            },
            react_1['default'].createElement(icons_1.StepForwardOutlined, null),
          ),
        ),
        showEnding &&
          react_1['default'].createElement(
            'div',
            null,
            react_1['default'].createElement(
              antd_1.Button,
              {
                onClick: function () {
                  finallyGoBack;
                },
              },
              react_1['default'].createElement(icons_1.HomeOutlined, null),
            ),
          ),
      ),
    ),
  );
};
exports['default'] = StoryShow;

import React, { useState, useEffect } from 'react';

import _ from 'lodash';
import styled from './StoryShow.less';
import { Button, Tooltip } from 'antd';
import {
  DoubleRightOutlined,
  StepForwardOutlined,
  HomeOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';
import { history } from 'umi';
import QueueAnim from 'rc-queue-anim';
//
// const StoryShow = ({  }: any) => {
const StoryShow = ({ story, setShowStory, isLastGame }: any) => {
  const [storyList, setStoryList] = useState<any>([]);
  const [index, setIndex] = useState(0);
  const [btnWord, setBtnWord] = useState(false);
  const [showEnding, setShowEnding] = useState(false);

  useEffect(() => {
    const list = String(story).split('\n');
    setStoryList(list);
    setIndex(0);
  }, []);

  // 下一步劇情
  const continueStory = () => {
    const len = storyList.length;
    if (index + 1 >= len) {
      if (isLastGame) {
        setShowEnding(true);
        history.push('/');
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

  const finallyGoBack = () => {
    history.push('/');
  };
  return (
    <QueueAnim
      animConfig={[
        { opacity: [1, 0], translateY: [0, 50] },
        { opacity: [1, 0], translateY: [0, -50] },
      ]}
      duration={1000}
    >
      <div className={styled.content} key="showStory">
        {storyList[index]}
        <div className={styled.btns}>
          <Tooltip placement="topLeft" title={btnWord ? '开始' : '继续'}>
            <Button
              type="text"
              onClick={() => {
                continueStory();
              }}
            >
              {btnWord ? <PlayCircleOutlined /> : <DoubleRightOutlined />}
            </Button>
          </Tooltip>
          <Tooltip placement="topLeft" title={'跳过'}>
            <Button
              type="text"
              style={{ margin: '0 8px' }}
              onClick={() => {
                if (isLastGame) {
                  history.push('/');
                } else {
                  setShowStory(false);
                }
              }}
            >
              {/* 跳过 */}
              <StepForwardOutlined />
            </Button>
          </Tooltip>

          {showEnding && (
            <div>
              <Button
                onClick={() => {
                  finallyGoBack;
                }}
              >
                {/* 返回主页 */}
                <HomeOutlined />
              </Button>
            </div>
          )}
        </div>
      </div>
    </QueueAnim>
  );
};

export default StoryShow;

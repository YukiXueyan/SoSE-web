import React, { useState, useEffect } from 'react';

import _ from 'lodash';
import styled from './StoryShow.less'
import { Button } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';
import { history } from 'umi';

const StoryShow = ({ story, setShowStory, isLastGame, openEndlessMode }: any) => {

  const [storyList, setStoryList] = useState<any>([]);
  const [index, setIndex] = useState(0);
  const [btnWord, setBtnWord] = useState(false);
  const [showEnding, setShowEnding] = useState(false)

  useEffect(() => {
    const list = String(story).split('\n');
    setStoryList(list)
    setIndex(0)
  }, [story])
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
  const continueStory = () => {
    const len = storyList.length;
    if (index + 1 >= len) {
      if (isLastGame) {
        setShowEnding(true)
        // 解锁更多模式
        // openEndlessMode()
      } else {
        setShowStory(false)
      }
    } else {
      setIndex(index + 1)
    }
    if (index === len - 2 && !isLastGame) {
      setBtnWord(true)
    }

  }


  const finallyGoBack = () => {
    history.push('/')
    openEndlessMode()
  }
  return <div onClick={continueStory} className={styled.content}>
    {storyList[index]}
    <div className={styled.btns}>
    <Button type='text' >
      {btnWord ? '开始' : <DoubleRightOutlined />}
    </Button>
    <Button type='text' style={{ margin:'0 8px'}} onClick={() => {
      console.log('click 跳过')
      setShowStory(false)
    }}>
      跳过
    </Button>
    {showEnding && <div>
      <Button onClick={finallyGoBack}>
        返回主页
      </Button>
    </div>}
    </div>

  </div>
}



export default StoryShow;
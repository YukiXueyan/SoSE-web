import React, { useState, useEffect } from 'react';

import styles from './info.less';
import { Timeline, Button } from 'antd';
import { Menu, user } from '@/utils/globalData';

const Story = ({ }) => {
  const [storyList, setStoryList] = useState<any>();
  const [reverse, setReverse] = useState(true)

  const changeTimeLine = () => {
    const re = reverse;
    setReverse(!re)
  }

  useEffect(() => {
    const list = Menu.filter(item => {
      return user.chapterId > item?.chapterId || (user.checkpoint >= item?.checkpoint && item.chapterId === user?.chapterId)
    }) || [];
    setStoryList(list)
  }, [])
  return (
    <div className={styles.Story}>

      <Timeline pending={storyList?.length > 0 ? '未完待续......' : '还未解锁故事哦，继续去探索吧'} reverse={reverse}>
        {storyList?.map(((item:any) => <Timeline.Item>
          {item?.story}
        </Timeline.Item>))}
      </Timeline>

      {
        storyList?.length > 0 && <Button type="primary" style={{ marginTop: 16 }} onClick={changeTimeLine}>
          倒序查看
        </Button>
      }

    </div>
  );
};

export default Story;

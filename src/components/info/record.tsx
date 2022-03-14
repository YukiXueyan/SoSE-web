import React, { useState, useEffect } from 'react';

import styles from './info.less';
import { Tabs, Timeline } from 'antd';

const { TabPane } = Tabs;

const data = [
  {
    time: '2022-03-10',
    mode: 1,
    playTime: '3:40',
    grade: 15
  },
  {
    time: '2022-03-10',
    mode: 2,
    playTime: '3:40',
    grade: 15
  },
  {
    time: '2022-03-10',
    mode: 3,
    playTime: '3:40',
    grade: 15
  },
]

const mode = [
  '无尽模式','测试模式','限时模式'
]
const Record = ({ }) => {
  const [options, setOptions] = useState([]);
  const [current_option, setCurrentOption] = useState(null);


  useEffect(() => {
  }, [])

  const tabContent = () => {
    return <div className={styles.tabContent}>
      <Timeline mode={'left'}>
        <Timeline.Item>模式 - 游玩时间 - 成绩</Timeline.Item>
        {data?.map(v => {

          return <Timeline.Item label={v?.time}>{mode[v.mode-1]}-{v.playTime}-{v.grade}</Timeline.Item>
        })}

      </Timeline>
    </div>
  }
  return (
    <div className={styles.Record}>
      <Tabs defaultActiveKey="1" style={{ width: '100%' }}>
        <TabPane tab="全部" key="1">
          {tabContent()}
        </TabPane>
        <TabPane tab="测试模式" disabled key="2">
          {tabContent()}

        </TabPane>
        <TabPane tab="无尽模式" disabled={false} key="3">
          {tabContent()}

        </TabPane>
        <TabPane tab="限时模式" disabled={false} key="4">
          {tabContent()}

        </TabPane>
      </Tabs>
    </div>
  );
};

export default Record;

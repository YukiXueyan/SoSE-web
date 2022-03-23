import React, { useState, useEffect } from 'react';

import { connect } from 'dva';
import moment from 'moment';

import styles from './info.less';
import { Tabs, Timeline } from 'antd';

import { user } from '@/utils/globalData'
const { TabPane } = Tabs;


const mode = [
  '无尽模式', '测试模式', '限时模式'
]
const Record = (props: any) => {

  const { dispatch } = props;
  const [modeList, setModeList] = useState();
  const [recordData, setRecordData] = useState();


  useEffect(() => {
    dispatch({
      type: 'user/getUSerMode',
      payload: {}
    }).then((res: any) => {
      if (res && res.length > 0) {
        setModeList(res)
      }
    });
    getUserRecords({})

  }, [])

  const getUserRecords = (params:any) => {
    const {modeId} = params;
    dispatch({
      type: 'user/getRecord',
      payload: {
        modeId
      }
    }).then((res: any) => {
      setRecordData(res || [])
    });
  }

  const tabContent = () => {
    return <div className={styles.tabContent}>
      <Timeline mode={'left'}>
        <Timeline.Item>模式 - 游玩时间 - 成绩</Timeline.Item>
        {recordData?.map(v => {

          return <Timeline.Item label={moment(Date(v?.time)).format('YYYY-MM-DD hh:mm')}>{mode[v.modeId - 1]}-{v.playTime}-{v?.number}</Timeline.Item>
        })}

      </Timeline>
    </div>
  }
  return (
    <div className={styles.Record}>
      <Tabs defaultActiveKey="0"  onChange={(item) => {
            if(Number(item) !== 0){
              getUserRecords({modeId:item})
            }else{
              getUserRecords({})
            }
          }}>
        <TabPane tab="全部" key="0">
        {tabContent()}
        </TabPane>
        {modeList?.map((item: any) =>
          <TabPane tab={item?.name} disabled={item?.userId === null} key={item?.id} >
            {tabContent()}
          </TabPane>
        )}
      </Tabs>
    </div>
  );
};

export default connect()(Record);

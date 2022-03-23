import React, { useState, useEffect } from 'react';

import { Timeline } from 'antd';
import { DownCircleOutlined } from '@ant-design/icons';

import { Menu } from '../../utils/globalData'
import _ from 'lodash';
import styled from './Map.less'

const Map = ({ user,  setStartGame,setCheckpoint }: any) => {

  const judge = (item: any) => {
    return user?.chapterId > item?.chapterId || (user?.chapterId === item?.chapterId && user?.checkpoint >= item?.checkpoint)
  }
  

  const onClick = (item:any, index:number) => {
    const item2 = item;
    item2['index'] = index;
    setCheckpoint(item2)
    setStartGame(true)
  }
  const nodeBtn = () => {
    return <div className={styled.node}>
      <Timeline mode="alternate">
        {Menu?.map((item, index) => (

          <Timeline.Item dot={<DownCircleOutlined style={judge(item) ? { fontSize: '24px' } : { fontSize: '24px', color: '#e3e3e3' }} key={index} />}>
            {judge(item) || item?.open ? <span className={styled.title} onClick={() =>{onClick(item, index)}}>
              {item?.title}
            </span> : <span className={styled.title2}>
              {item?.title}
            </span>}

          </Timeline.Item>


        ))}


      </Timeline>
    </div>
  }

  return <div className={styled.map}>
    {nodeBtn()}

  </div>
}

export default Map;
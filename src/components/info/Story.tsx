import React, {useState, useEffect} from 'react';

import styles from './info.less';
import { Timeline, Button } from 'antd';

const Story = ({  }) => {
  const [storyList, setStoryList] = useState<any>();
  const [reverse, setReverse] = useState(true)

  const changeTimeLine = () => {
    const re = reverse;
    setReverse(!re)
  }

  useEffect(() =>{
    const list = [
      {
        desc:'Create a services site 2015-09-01'
      },
      {
        desc:'Solve initial network problems 2015-09-01'
      },
      {
        desc:'Technical testing 2015-09-011'
      },
    ]
    setStoryList(list)
  },[])
  return (
    <div className={styles.Story}>
      <Timeline pending="to be continue..." reverse={reverse}>
         {storyList?.map((item: { desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) =>  <Timeline.Item>{item?.desc}</Timeline.Item>)}
        </Timeline>
      
        <Button type="primary" style={{ marginTop: 16 }} onClick={changeTimeLine}>
          倒序查看
        </Button>
    </div>
  );
};

export default Story;

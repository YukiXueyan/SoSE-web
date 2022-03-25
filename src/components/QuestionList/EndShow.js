import React, { useEffect } from 'react';
import { Card, Button } from 'antd';
import { passRightNum } from '../../utils/globalData';
import styles from './QuestionList.less';

/**
 * 游戏结束面板
 * @param {*} param0
 * @returns
 */
const EndShow = ({
  modeId,
  updateGrade,
  right,
  nextGame,
  again,
  returnMap,
}) => {
  useEffect(() => {
    updateGrade();
  }, []);

  // return <div className={styles.endshow}>
  //   <div className={styles.title}>
  //     游戏结束
  //   </div>
  //   {/* {right > passRightNum && modeId === 0 ? <Button onClick={nextGame} type='link' className={styles.next}>下一关</Button> : null} style={{ width: 300 }} */}
  //   <div className={styles.main}>
  //     <div className={styles.points}>
  //       本次得分为：{right * 10}
  //       <br />
  //       <p>
  //         答对题目数为：{right}
  //       </p>
  //     </div>
  //     {/* <div className={styles.links}>
  //       <a onClick={again}>再试一次</a>
  //       {
  //         modeId === 0 && <a onClick={returnMap}>选择关卡</a>
  //       }

  //       <a href='/'>回到首页</a>
  //     </div> */}

  //   </div>
  // </div>;

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Card
        title="游戏结束"
        extra={
          right > passRightNum && modeId === 0 ? (
            <Button onClick={nextGame} type="link">
              下一关
            </Button>
          ) : null
        }
        style={{ width: '100%', height: '100%' }}
      >
        <p>本次得分为：{right * 20}</p>
        <a onClick={again}>再试一次</a>
        {modeId === 0 && <a onClick={returnMap}>选择关卡</a>}

        <a href="/">回到首页</a>
      </Card>
    </div>
  );
};

export default EndShow;

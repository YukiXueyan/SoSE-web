import React, { useEffect, useState } from 'react';
import { passRightNum } from '../../utils/globalData';
import styles from './QuestionList.less';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';

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
  life,
}) => {
  const [next, setNext] = useState(false);
  useEffect(() => {
    updateGrade();
  }, []);

  useEffect(() => {
    if (next) {
      nextGame();
    }
  }, [next]);

  return (
    <QueueAnim duration={1000}>
      <div className={styles.endshow} key="endshow">
        <div className={styles.title}>
          {/* 闯关成功 */}
          {life > 0 &&
            modeId === '0' &&
            right >= passRightNum &&
            '闯关成功(≧∇≦)ﾉ'}
          {/* 闯关失败 */}
          {modeId === '0' &&
            (right < passRightNum || life === 0) &&
            '闯关失败(((φ(◎ロ◎;)φ)))'}

          {modeId !== '0' && '游戏结束'}
        </div>

        {/* <Button onClick={()=>{
          setNext(true)
        }} type='link' className={styles.next}>下一关</Button> */}
        {/* {right > passRightNum && modeId === '0' ? <Button onClick={() => {}} type='link' className={styles.next}>下一关</Button> : null} style={{ width: 300 }} */}
        <div className={styles.main}>
          <div className={styles.points}>
            本次得分为：{right * 10}
            <br />
            <p>答对题目数为：{right}</p>
          </div>
          <div className={styles.links}>
            <a onClick={again}>再试一次</a>
            {modeId === '0' && <a onClick={returnMap}>选择关卡</a>}

            <a href="/">回到首页</a>

            {right > passRightNum && modeId === '0' && (
              <a onClick={nextGame}>下一关</a>
            )}
          </div>
        </div>
      </div>
    </QueueAnim>
  );
};

export default EndShow;

import React, { useEffect } from "react";
import { Card, Button } from 'antd';
import { passRightNum } from '../../utils/globalData'

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
  returnMap
}) => {
  useEffect(() => {
    updateGrade()

  }, []);

  return <div>
    <Card title="游戏结束" extra={right >passRightNum ?<Button onClick={nextGame} type='link'>下一关</Button>:null} style={{ width: 300 }}>
      <p>本次得分为：{right * 20}</p>
      <a onClick={again}>再试一次</a>
      <a onClick={returnMap}>选择关卡</a>
      <a href='/'>回到首页</a>
    </Card>
  </div>;
}

export default EndShow;
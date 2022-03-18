import React, { useEffect } from "react";
import { Card, Button } from 'antd';

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
}) => {
  useEffect(() => {
    console.log('endShow')
    updateGrade()

  }, []);

  return <div>
    <Card title="游戏结束" extra={<Button onClick={updateGrade} type='link'>下一关</Button>} style={{ width: 300 }}>
      <p>本次得分为：{right * 20}</p>
      <a onClick={again}>再试一次</a>
    </Card>
  </div>;
}

export default EndShow;
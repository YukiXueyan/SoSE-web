import React, { useEffect } from "react";
/**
 * 监听游戏是否结束，记录答对次数
 * @param {}} param0 
 * @returns 
 */
 import {  LifeNum } from '../../utils/globalData'
export default function GameOver({
  right,
  setRight,
  setGameOver,
  index,
  quizLength,
  result,
  setLife,
  life
}) {
  useEffect(() => {
    if (result === true) {
      setRight(right + 1);
    }else if(result === false){
      const newLife = life -1;
      setLife(newLife)
      if(newLife === 0){
        setGameOver(true);
      setLife(LifeNum)
      
      }
    }

    if (index === quizLength && index) {
      setGameOver(true);
    }
  }, [index]);

  return <div></div>;
}
import React, { useEffect } from "react";
/**
 * 监听游戏是否结束，记录答对次数
 * @param {}} param0 
 * @returns 
 */
export default function GameOver({
  right,
  setRight,
  setGameOver,
  index,
  quizLength,
  result,
}) {
  useEffect(() => {
    if (result === true) {
      setRight(right + 1);
    } 

    if (index === quizLength && index) {
      setGameOver(true);
    }
  }, [index]);

  return <div></div>;
}
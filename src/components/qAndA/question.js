import React, {useState, useEffect} from 'react';

import {Button} from 'antd';
import _ from 'lodash';
import styled from './question.less'


const Question = ({ question, onBtnClick }) => {
  const [options, setOptions] = useState([]);
  const [current_option, setCurrentOption] = useState(null);


  useEffect(() =>{
    setOptions([])
    const list = _.get(question, 'incorrect_answers')
    const optionList = [];
    if(list && list.length){
      optionList.push(_.get(question, 'correct_answer'))
      list.map(item => {
        optionList.push(item)
      })
    optionList.sort(() => {return Math.random() - 0.5});
    } else{
      return;
    }

    setOptions(optionList);
    // setCurrentOption(question.correct_answer);
    setCurrentOption(_.get(question, 'correct_answer'));

  },[question])

  return (
    <div className={styled.qbox}>
      <div className={styled.qdesc}>
        {_.get(question, 'question')}
      </div>
      <div className={styled.options}>
        {options.map(o => (
          <Button
          onClick={() => {
            onBtnClick(o, current_option)
          }}
          className={styled.optBtn}
          >{o}</Button>
        ))}
      </div>
    </div>
  );
};

Question.propTypes = {
};

export default Question;

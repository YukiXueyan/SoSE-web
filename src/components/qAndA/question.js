import React, {useState, useEffect} from 'react';

import {Button} from 'antd';
import _ from 'lodash';
import styled from './question.less'


const Question = ({ question, onBtnClick }) => {
  const [options, setOptions] = useState(['T','F']);
  const [current_option, setCurrentOption] = useState(null);


  useEffect(() =>{
    setOptions([])
    const list = _.get(question, 'options')
    const optionList = [];
    if(list && list.length){
      // optionList.push(_.get(question, 'currentAnswer'))
      list.map(item => {
        optionList.push(item)
      })
      
    optionList.sort(() => {return Math.random() - 0.5});
    setOptions(optionList);
    } else{
      setOptions(['T','F']);
    }
    
    
    // setCurrentOption(question.currentAnswer);
    setCurrentOption(_.get(question, 'currentAnswer'));

  },[question])

  return (
    <div className={styled.qbox}>
      <div className={styled.qdesc}>
        {_.get(question, 'question')}
      </div>
      <div className={styled.options}>
        {options.map((o,index) => (
          <Button
          onClick={() => {
            onBtnClick(o, current_option)
          }}
          key={index}
          className={styled.optBtn}
          >
            {o}
          </Button>
        ))}
      </div>
    </div>
  );
};

Question.propTypes = {
};

export default Question;

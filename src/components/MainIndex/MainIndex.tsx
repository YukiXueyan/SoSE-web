import React, {useState, useEffect} from 'react';

// import './MainIndex.less';
// import styles from './MainIndex.less';


const Question = ({ question }) => {
  const [options, setOptions] = useState([]);
  const [current_option, setCurrentOption] = useState(null);


  useEffect(() =>{
  },[])
  return (
    <div>
      {/* <div className={styles.title}>
        main
      </div> */}
    </div>
  );
};

Question.propTypes = {
};

export default Question;

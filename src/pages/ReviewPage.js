import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

function ReviewPage() {
  return (

      <div className={styles.box}>
          reviewPage
      </div>

  );
}

ReviewPage.propTypes = {
};

export default connect()(ReviewPage);

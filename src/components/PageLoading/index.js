import React from 'react';
import { Spin } from 'antd';

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default () => (
  <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size="large" />
    <br />
    <div
      style={{
        color: '#615ea8',
      }}
    >
      模块载入中...
    </div>
  </div>
);

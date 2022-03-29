'use strict';
exports.__esModule = true;
var antd_1 = require('antd');
var data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
var Index = function () {
  return React.createElement(antd_1.List, {
    grid: {
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    },
    dataSource: data,
    renderItem: function (item) {
      return React.createElement(
        antd_1.List.Item,
        null,
        React.createElement(antd_1.Card, { title: item.title }, 'Card content'),
      );
    },
  });
};
exports['default'] = Index;

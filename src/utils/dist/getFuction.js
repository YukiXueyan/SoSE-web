'use strict';
exports.__esModule = true;
function getUser(dispatch) {
  var userId = null,
    user = {};
  dispatch({
    type: 'user/getUserInfo',
    payload: {},
  }).then(function (res) {
    if (res && res.length > 0) {
      localStorage.setItem('user', JSON.stringify(res[0]));
      user = res[0];
    }
  });
  return user;
}
exports['default'] = getUser;

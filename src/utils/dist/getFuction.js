'use strict';
exports.__esModule = true;
exports.changePoint = exports.getUser = void 0;
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
exports.getUser = getUser;
var changePoint = function (dispatch, point) {
  dispatch({
    type: 'user/addUserPoints',
    payload: {
      point: point,
    },
  }).then(function () {
    getUser(dispatch);
  });
};
exports.changePoint = changePoint;

export default function getUser(dispatch) {
  let userId = null, user  = {};
  dispatch({
    type: 'user/getUserInfo',
    payload:{}
  }).then((res:any)=>{
    if(res && res.length>0){
      localStorage.setItem('user',JSON.stringify(res[0]))
      user = res[0]
    }
  });
  return {user}
}
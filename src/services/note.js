import request from '../utils/request';
import URL from '../utils/url';
// import { stringify } from 'qs';

const userId = localStorage.getItem('userId');

// export async function passGame(data) {
//   return request(`${URL}/note/add?userId=${userId}&${stringify(data)}`, {
//     method: 'PUT',
//     data,
//   });
// }

//添加错题
// questionId
export async function addNote(data) {
  const { questionId } = data;
  return request(`${URL}/note/add?userId=${userId}&questionId=${questionId}`, {
    method: 'POST',
    data,
  });
}
// 删除错题
export async function deleteNote(data) {
  const { noteId } = data;
  return request(`${URL}/note/delete?noteId=${noteId}`, {
    method: 'DELETE',
    data,
  });
}
//收藏
export async function forkNote(data) {
  const { noteId } = data;
  return request(`${URL}/note/fork?noteId=${noteId}`, {
    method: 'PUT',
    data,
  });
}
//取消收藏
export async function unforkNote(data) {
  const { noteId } = data;
  return request(`${URL}/note/unfork?noteId=${noteId}`, {
    method: 'PUT',
    data,
  });
}
//解锁
export async function unlockNote(data) {
  const { noteId } = data;
  return request(`${URL}/note/unlock?noteId=${noteId}`, {
    method: 'PUT',
    data,
  });
}
//显示用户错题

export async function selectNotes(data) {
  return request(`${URL}/note/select?userId=${userId}`);
}

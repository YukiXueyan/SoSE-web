import request from '../utils/request';
import URL from '../utils/url';
import { stringify } from 'qs';

const userId = localStorage.getItem('userId');
// 用户通关
export async function passGame(data) {
  return request(`${URL}/user/over?userId=${userId}&${stringify(data)}`, {
    method: 'PUT',
    data,
  });
}
// 获取用户已解锁的模式
// userId
export async function userMode(data) {
  return request(`${URL}/user/mode/list?userId=${userId}`, {
    method: 'GET',
    data,
  });
}
// 解锁模式
export async function unlockMode(data) {
  return request(
    `${URL}/user/mode/unlock?userId=${userId}&${stringify(data)}`,
    { method: 'POST', data },
  );
}
//获取用户信息
// userId
export function userInfo() {
  return request(`${URL}/user/info?userId=${userId}`);
}

//获取用户成就列表
// userId
export function userAchieve() {
  return request(`${URL}/achieve/list?userId=${userId}`);
}
// 增加用户积分
// point
export async function addUserPoint(data) {
  return request(`${URL}/user/addPoint?userId=${userId}&${stringify(data)}`, {
    method: 'POST',
    data,
  });
}
// 解锁用户成就
// achieveId
export async function addUserAchieve(data) {
  const { achieveId } = data;
  return request(`${URL}/achieve/add?userId=${userId}&achieveId=${achieveId}`, {
    method: 'POST',
    data,
  });
}
// 添加新用户
export async function addNewUser() {
  return request(`${URL}/user/add`, { method: 'POST' });
}
// 修改用户名 // name
export async function updateUser(data) {
  return request(`${URL}/user/changeInfo?userId=${userId}&${stringify(data)}`, {
    method: 'PUT',
    data,
  });
}
// 删除数据
export async function deleteUser(data) {
  return request(`${URL}/user/delete?userId=${userId}`, { method: 'delete' });
}

//获取用户信息
// userId
export function userRecord(data) {
  return request(`${URL}/record?userId=${userId}&${stringify(data)}`);
}

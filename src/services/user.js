import request from '../utils/request';
import URL from '../utils/url';
import { stringify } from 'qs'

const userId = localStorage.getItem('userId')
// 用户通关
export async function passGame(data) {
  return request(`${URL}/user/over?userId=${userId}&${stringify(data)}`, { method: 'PUT', data })
}
// 获取用户已解锁的模式
// userId
export async function userMode(data) {
  return request(`${URL}/user/mode/list?userId=${userId}`, { method: 'GET', data })
}
//获取用户信息
// userId
export function userInfo() {
  return request(`${URL}/user/info?userId=${userId}`);
}

//获取用户成就列表
// userId
export function userAchieve() {
  return request(`${URL}/user/achieve?userId=${userId}`);
}
// 增加用户积分
// point
export async function addUserPoint(data) {
  return request(`${URL}/user/addPoint?userId=${userId}&${stringify(data)}`, { method: 'POST', data })
}
// 解锁用户成就

// 添加新用户
export async function addNewUser() {
  return request(`${URL}/user/add`, { method: 'POST' })
}
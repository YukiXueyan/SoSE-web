import request from '../utils/request';
import URL from '../utils/url';
import { stringify } from 'qs'

const userId = localStorage.getItem('userId');
const user = JSON.parse(localStorage.getItem('user'))

// 获取题目
export async function questionList(data) {
  const {pageNum,pageSize, chapterId} = data;
  const param = {
    pageNum:pageNum || user.checkpoint|| 0,
    pageSize:pageSize || 10,
    chapterId:chapterId || 1
  }
  return request(`${URL}/question/list?${stringify(param)}`)
}

export async function passGame(data) {
  const {pageNum,pageSize, chapterId} = data;
  const param = {
    pageNum:pageNum  || 0,
    pageSize:pageSize || 20,
    chapterId
  }
  return request(`${URL}/question/list?${stringify(param)}`, { method: 'POSt', data })
}

//userId, modeId
//获取用户记录
export async function getRecord(data) {
  return request(`${URL}/record?userId=${userId}&${stringify(data)}`, { method: 'GET', data })
}


//添加记录
//modeId,grade,number
export async function addRecord(data) {
  return request(`${URL}/question/success?userId=${userId}&${stringify(data)}`, { method: 'POST', data })
}
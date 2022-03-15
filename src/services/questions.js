import request from '../utils/request';
import URL from '../utils/url';
import { stringify } from 'qs'

const userId = localStorage.getItem('userId')

// 获取题目
export async function questionList(data) {
  const {pageNum,pageSize, chapterId} = data;
  const param = {
    pageNum:pageNum || 0,
    pageSize:pageSize || 20,
    chapterId:chapterId || 1
  }
  console.log(param, stringify(param))
  return request(`${URL}/question/list?${stringify(param)}`)
}

export async function passGame(data) {
  const {pageNum,pageSize, chapterId} = data;
  const param = {
    pageNum:pageNum || 0,
    pageSize:pageSize || 20,
    chapterId
  }
  return request(`${URL}/question/list?${stringify(param)}`, { method: 'POSt', data })
}
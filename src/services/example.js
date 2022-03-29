import request from '../utils/request';

export function query() {
  return request('/api/users');
}
export async function passGame(data) {
  return request(`${URL}/user/over?userId=${userId}&${stringify(data)}`, {
    method: 'PUT',
    data,
  });
}

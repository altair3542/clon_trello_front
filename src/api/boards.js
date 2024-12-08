import api from './api';

export async function getBoards() {
  const response = await api.get('/boards/');
  return response.data;
}

export async function createBoard(name) {
  const response = await api.post('/boards/', { name });
  return response.data;
}

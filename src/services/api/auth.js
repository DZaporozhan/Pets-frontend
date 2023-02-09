import instance from './axiosConfige';

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const register = async data => {
  const { data: result } = await instance.post('/auth/register', data);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/auth/login', data);
  setToken(result.token);
  return result;
};

export const logout = async () => {
  const data = await instance.get('/auth/logout');
  setToken();
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/auth/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

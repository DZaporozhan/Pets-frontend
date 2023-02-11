import instance from './axiosConfige';

export const getAllServices = async () => {
  const { data } = await instance.get('/services');
  return data;
};

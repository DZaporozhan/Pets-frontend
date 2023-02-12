import instance from './axiosConfige';

export const getAllNews = async () => {
  const { data } = await instance.get( '/news'  );
  return data;
};

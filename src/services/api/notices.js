import instance from './axiosConfige';

export const getNoticeByCategory = async ({
  page = 1,
  category = 'sell',
  filter = '',
  limit = 8,
}) => {
  let result;

  switch (category) {
    case 'favorite':
      result = await getFavoriteNotices();
      break;

    case 'owner':
      result = await getUserNotices();
      break;
    default:
      result = await instance.get(
        `/notices?category=${category}&page=${page}&limit=${limit}&title=${filter}`
      );
      break;
  }

  return result;
};

export const getOneNotice = async id => {
  const { data } = await instance.get(`/notices/${id}`);
  return data;
};

export const addNoticeToFavorite = async id => {
  const { data } = await instance.post(`/notices/favorite/${id}`);
  return data;
};

export const getFavoriteNotices = async () => {
  const { data } = await instance.get(`/notices/favorite`);
  return data;
};

export const removeNoticeFromFavorite = async id => {
  const { data } = await instance.delete(`/notices/favorite/${id}`);
  return data;
};

export const addNotice = async data => {
  const { data: result } = await instance.post('/notices', data);
  return result;
};

export const getUserNotices = async () => {
  const { data } = await instance.get('/notices/owner');
  return data;
};

export const removeNotice = async id => {
  const { data } = await instance.delete(`/notices/owner/${id}`);
  return data;
};

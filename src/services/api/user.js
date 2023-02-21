import instance from './axiosConfige';

export const getUserData = async () => {
  const { data } = await instance.get('/user');
  return data;
};

export const updateUserData = async data => {
  const { data: result } = await instance.patch('/user', data);
  return result;
};

export const addUserPet = async data => {
  const { data: result } = await instance.post('/pets', data);
  return result;
};

export const removeUserPet = async id => {
  const { data } = await instance.delete(`/pets/${id}`);
  return data;
};

export const updatePetData = async (id, data) => {
  const { data: result } = await instance.patch(`/pets/${id}`, data);
  return result;
};

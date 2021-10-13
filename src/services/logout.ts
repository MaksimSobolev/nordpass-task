import { API } from '../constants';

const logout = async () => {
  const response = await fetch(API.Logout, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (response.status === 401) {
    throw Error('Auth token not found');
  } else if (response.status === 200) {
    localStorage.removeItem('token');
  }
};

export default logout;

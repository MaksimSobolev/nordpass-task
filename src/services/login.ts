import { API } from '../constants';
import getUrl from '../utils/getUrl';

const login = async (username: string, password: string) => {
  const url = getUrl(API.Login, {
    username,
    password,
  });

  const response = await fetch(url);

  if (response.status === 401) {
    throw Error('Wrong username or password');
  }
  if (response.status === 200) {
    const data = await response.json();
    const { token } = data;
    localStorage.setItem('token', token);
  }
};

export default login;

import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const signUpUserAPI = user => {
  return axios.post('/auth/register', user).then(({ data }) => {
    return data;
  });
};

export const logInUserAPI = user => {
  return axios.post('/auth/login', user).then(({ data }) => {
    return data;
  });
};

export const logOutUserAPI = () => {
  return axios.post('/auth/logout').then(({ data }) => {
    return data;
  });
};

export const fullUserInfoAPI = () => {
  return axios.get('/user').then(({ data }) => {
    return data;
  });
};

export const userBalanceAPI = body => {
  return axios.patch('/user/balance', body).then(({ data }) => {
    return data;
  });
};

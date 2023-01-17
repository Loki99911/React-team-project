import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

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
    token.unset();
    return data;
  });
};

// axios.interceptors.response.use(
//   response => response,
//   async error => {
//     if (error.response.status === 401) {
//       try {
//         const { data } = await axios.post('/auth/refresh', { sid });
//         token.set(data.newAccessToken);
//       } catch (error) {}
//     }
//   }
// );

import axios from 'axios';
// import AxiosMockAdapter from 'axios-mock-adapter';

// const axiosInt = axios.create();

// axiosInt.interceptors.response.use(
//   (response) => response,
//   (error) =>
//     Promise.reject(
//       (error.response && error.response.data) || 'There is an error!'
//     )
// );

// export const mock = new AxiosMockAdapter(axiosInt, { delayResponse: 0 });

// export default axiosInt;
const responseBody = (res) => res.data;

const tokenPlugin = (token) => (config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const httpClient = (url) => {
  const instance = axios.create({
    baseURL: 'http://61.47.81.110:3001'
  });

  const whitelistUrl = ['/api/V1/users/login'];
  if (!whitelistUrl.includes(url)) {
    const token = localStorage.getItem('accessToken');
    instance.interceptors.request.use(tokenPlugin(token));
  }
  return instance;
};

const requests = {
  get: (url, headers = {}, options = {}) =>
    httpClient(url)
      .get(url, { headers, ...options })
      .then(responseBody).catch(err=>err),
  post: (url, body = {}, headers = {}, options = {}) =>
    httpClient(url)
      .post(url, body, { headers, ...options })
      .then(responseBody),
  patch: (url, body = {}, headers = {}) =>
    httpClient(url)
      .patch(url, body, { headers })
      .then(responseBody),
  delete: (url, headers = {}) =>
    httpClient(url)
      .delete(url, { headers })
      .then(responseBody)
};

export default requests;

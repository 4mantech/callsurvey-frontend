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
const responseBody = (res) => res;


const handleErrors = () => (err) => {
  switch (err.response.status) {
    case 400:
      return err.response;
    case 401:
      window.localStorage.removeItem('accessToken');
      window.localStorage.removeItem('user');
      return err.response;
    case 403:
      return err.response;
    case 404:
      return err.response;
    default:
      return err.response;
  }
  
};


const httpClient = (url, token = '') => {
  const instance = axios.create({
    baseURL: 'http://61.47.81.110:3001'
  });

  const whitelistUrl = ['/api/v1/users/login'];
  if (!whitelistUrl.includes(url)) {
    instance.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${token}`;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  return instance;
};

const requests = {
  get: (url, token, headers = {}, options = {}) =>
    httpClient(url, token)
      .get(url, { headers, ...options })
      .then(responseBody)
      .catch(handleErrors),
  post: (url, token, body = {}, headers = {}, options = {}) =>
    httpClient(url, token)
      .post(url, body, { headers, ...options })
      .then(responseBody)
      .catch(handleErrors),
  patch: (url, token, body = {}, headers = {}) =>
    httpClient(url, token)
      .patch(url, body, { headers })
      .then(responseBody)
      .catch(handleErrors),
  delete: (url, token, headers = {}) =>
    httpClient(url, token)
      .delete(url, { headers })
      .then(responseBody)
      .catch(handleErrors)
};

export default requests;

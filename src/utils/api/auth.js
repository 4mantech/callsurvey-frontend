import requests from '../axios';

const authAPI = {
  v1: {
    logIn: async (body = {}, option = {}) => {
      return requests.post('/api/V1/auth/login', body, option);
    }
  }
};

export default authAPI;

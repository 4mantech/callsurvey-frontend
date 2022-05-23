import requests from '../axios';

const authAPI = {
  v1: {
    logIn: async (body = {}, token = null) => {
      return requests.post('/api/V1/users/login', token, body);
    }
  }
};

export default authAPI
import requests from '../axios';

const Users = {
  v1: {
    FindAll: async () => {
      return requests.get('/api/V1/users');
    }
  }
};

export default Users;

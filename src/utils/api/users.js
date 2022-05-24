import requests from '../axios';

const options = {
  headers:{
    'Content-Type': 'application/json', 
  }
}

const Users = {
  v1: {
    FindAll: async () => {
      return requests.get('/api/V1/users',options);
    },
    Update: async (id, body) => {
      return requests.patch(`/api/V1/users/${id}`,body,options);
    },
    Create: async (body) => {
      return requests.post(`api/V1/users/`,body,options)
    },
    Destroy: async (id) => {
      return requests.delete(`/api/V1/users/${id}`,options);
    },
    Profile: async () => {
      return requests.get('/api/V1/users/profile',options);
    },
    Dnis: async () => {
      return requests.get('/api/V1/users/dnis',options);
    }
  }
};

export default Users;

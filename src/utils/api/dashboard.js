import requests from '../axios';

const options = {
  headers:{
    'Content-Type': 'application/json', 
  }
}

const Dashboard = {
  v1: {
    Dnis: async () => {
      return requests.get('/api/v1/dashboard/dnis',options);
    },
    index: async (search,dnis) => {
      return requests.get(`/api/v1/dashboard?search=${search}&dnis=${dnis}`,options);
    }
  }
};

export default Dashboard;


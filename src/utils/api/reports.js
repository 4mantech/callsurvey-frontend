import requests from '../axios';

const Reports = {
  v1: {
    All: async (option) => {
      return requests.get('/api/v1/reports',option);
    }
  }
};

export default Reports;

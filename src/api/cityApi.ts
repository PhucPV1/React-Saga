import axiosClient from './axiosClient';

const cityApi = {
  getAll() {
    const url = '/city';
    return axiosClient.get(url);
  },
};

export default cityApi;

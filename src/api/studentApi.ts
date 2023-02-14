import axiosClient from './axiosClient';

const studentApi = {
  getAll() {
    const url = '/student';
    return axiosClient.get(url);
  },
};

export default studentApi;

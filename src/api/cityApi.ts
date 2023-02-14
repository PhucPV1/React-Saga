import { ICity } from 'interface/city.interface';
import { IListResponse } from 'interface/common.interface';
import axiosClient from './axiosClient';

const cityApi = {
  getAll(): Promise<IListResponse<ICity>> {
    const url = '/city';
    return axiosClient.get(url,{params:{
      _page:1,
      _limit:10
    }});
  },
};

export default cityApi;

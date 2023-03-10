import { IListParams, IListResponse } from 'interface/common.interface';
import { IStudent } from 'interface/student.interface';
import axiosClient from './axiosClient';

const studentApi = {
  getAll(params:IListParams):Promise<IListResponse<IStudent>> {
    const url = '/students';
    return axiosClient.get(url,{params});
  },
  getById(id:string):Promise<IStudent> {
    const url = `/students${id}`;
    return axiosClient.get(url);
  },
  add(data:IStudent):Promise<IStudent> {
    const url = '/students';
    return axiosClient.post(url,data);
  },
  update(data:IStudent):Promise<IStudent> {
    const url = '/students';
    return axiosClient.patch(url,data);
  },
  remove(id:string):Promise<IListResponse<any>> {
    const url = `/students${id}`;
    return axiosClient.delete(url);
  },
};

export default studentApi;

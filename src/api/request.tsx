import axios, {AxiosRequestConfig} from 'axios';
import path from 'path';

const baseUrl = process.env.REACT_APP_API_URL;

const request = {
  "get": (url: string, config: AxiosRequestConfig = {}) => {
    return axios.get(path.join(baseUrl??'', url), config);
  },
  "post": (url: string, data: any = null, config: AxiosRequestConfig = {}) => {
    return axios.post(path.join(baseUrl??'', url), data, config);
  },
  "put": (url: string, data: any = null, config: AxiosRequestConfig = {}) => {
    return axios.put(path.join(baseUrl??'', url), data, config);
  },
  "delete": (url: string, config: AxiosRequestConfig = {}) => {
    return axios.delete(path.join(baseUrl??'', url), config);
  }
};

export default request;

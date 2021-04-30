import axios, {AxiosRequestConfig} from 'axios';
const baseUrl = 'http://192.168.0.37:8000';

const request = {
  "get": (url: string, config: AxiosRequestConfig = {}) => {
    return axios.get(new URL(url, baseUrl).href, config);
  },
  "post": (url: string, data: any = null, config: AxiosRequestConfig = {}) => {
    return axios.post(new URL(url, baseUrl).href, data, config);
  },
  "put": (url: string, data: any = null, config: AxiosRequestConfig = {}) => {
    return axios.put(new URL(url, baseUrl).href, data, config);
  },
  "delete": (url: string, config: AxiosRequestConfig = {}) => {
    return axios.delete(new URL(url, baseUrl).href, config);
  }
};

export default request;

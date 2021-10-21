import axios, {AxiosRequestConfig} from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const request = {
  "get": (url: string, config: AxiosRequestConfig = {}) => {
    return axios.get(url, { ...config, baseURL });
  },
  "post": (url: string, data: any = null, config: AxiosRequestConfig = {}) => {
    return axios.post(url, data, { ...config, baseURL });
  },
  "put": (url: string, data: any = null, config: AxiosRequestConfig = {}) => {
    return axios.put(url, data, { ...config, baseURL });
  },
  "delete": (url: string, config: AxiosRequestConfig = {}) => {
    return axios.delete(url, { ...config, baseURL });
  }
};

export default request;

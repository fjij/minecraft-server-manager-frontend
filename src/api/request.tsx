import axios, {AxiosRequestConfig} from 'axios';
const baseUrl = process.env.REACT_APP_API_URL;

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

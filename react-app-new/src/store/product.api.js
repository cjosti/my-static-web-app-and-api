import axios from 'axios';
import { parseItem, parseList } from './action-utils';
import API from './config';

const captains = console;

axios.interceptors.request.use(cfg => {
  console.log('[API][request]', { baseURL: cfg.baseURL, url: cfg.url, method: cfg.method });
  return cfg;
});
axios.interceptors.response.use(
  res => {
    console.log('[API][response]', { url: res.config.url, status: res.status });
    return res;
  },
  err => {
    console.error('[API][error]', err?.response?.status, err?.message);
    return Promise.reject(err);
  }
);

export const deleteProductApi = (id) => axios.delete(`${API}/products/${id}`).then(r => r.data);

export const updateProductApi = async (product) => {
  captains.log(product.id);
  const response = await axios.put(`${API}/products/${product.id}`, product);
  return parseItem(response, 200);
};

export const addProductApi = async (product) => {
  const response = await axios.post(`${API}/products`, product);
  return parseItem(response, 201);
};

export const loadProductsApi = async () => {
  const response = await axios.get(`${API}/products`);
  return parseList(response, 200);
};

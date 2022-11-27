import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
  timeout: 10000,

});

// --------------------------------------------------------------
// USER REQUESTS

export const userToken = (parameter: string) => {
  api.defaults.headers.common.Authorization = parameter;
};

export const userLogin = async (body: object) => {
  try {
    const { data } = await api.post('/login', body);
    return data;
  } catch (error) {
    return error;
  }
};

export const userRegister = async (body: object) => {
  try {
    const { data } = await api.post('/register', body);
    return data;
  } catch (error) {
    return error;
  }
};

// --------------------------------------------------------------
// ACCOUNT REQUESTS

export const accountById = async (id: string, token: string) => {
  try {
    const { data } = await api.get(`/account/${id}`, { headers: { 'Authorization': token } });
    return data;
  } catch (error) {
    return error;
  }
};

// --------------------------------------------------------------
// TRANSACTION REQUESTS

export const allTransactions = async (token: string) => {
  try {
    const { data } = await api.get('/transactions', { headers: { 'Authorization': token } });
    return data;
  } catch (error) {
    return error;
  }
};

export const cashInTransactions = async (token: string) => {
  try {
    const { data } = await api.get('/transactions/cashin', { headers: { 'Authorization': token } });
    return data;
  } catch (error) {
    return error;
  }
};

export const cashOutTransactions = async (token: string) => {
  try {
    const { data } = await api.get('/transactions/cashout', { headers: { 'Authorization': token } });
    return data;
  } catch (error) {
    return error;
  }
};

export const createTransaction = async (body: object, token: string) => {
  try {
    const { data } = await api.post('/transactions/new', body, { headers: { 'Authorization': token } });
    return data;
  } catch (error) {
    return error;
  }
};

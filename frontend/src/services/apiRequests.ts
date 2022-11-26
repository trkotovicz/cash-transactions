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

export const accountById = async (id: number) => {
  try {
    const { data } = await api.get(`/account/${id}`);
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

export const cashInTransactions = async () => {
  try {
    const { data } = await api.get('/transactions/cashin');
    return data;
  } catch (error) {
    return error;
  }
};

export const cashOutTransactions = async () => {
  try {
    const { data } = await api.get('/transactions/cashout');
    return data;
  } catch (error) {
    return error;
  }
};

export const createTransaction = async () => {
  try {
    const { data } = await api.post('/transactions/new');
    return data;
  } catch (error) {
    return error;
  }
};

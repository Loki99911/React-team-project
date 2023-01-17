import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

//  ----------------- INCOME ---------------------

export const addIncomeAPI = income => {
  return axios.post('/transaction/income', income).then(({ data }) => {
    return data;
  });
};

export const getIncomeStatsAPI = () => {
  return axios.get('/transaction/income').then(({ data }) => {
    return data;
  });
};

export const getIncomeCategoriesAPI = () => {
  return axios.get('/transaction/income-categories').then(({ data }) => {
    return data;
  });
};

//  ----------------- EXPENSE ---------------------

export const addExpenseAPI = expense => {
  return axios.post('/transaction/expense', expense).then(({ data }) => {
    return data;
  });
};

export const getExpenseStatsAPI = () => {
  return axios.get('/transaction/expense').then(({ data }) => {
    return data;
  });
};

export const getExpenseCategoriesAPI = () => {
  return axios.get('/transaction/expense-categories').then(({ data }) => {
    return data;
  });
};

//  ----------------- DELETE TRANSACTION ---------------------

export const removeTransactionApi = id => {
  return axios.delete(`/transaction/${id}`).then(({ data }) => {
    return data;
  });
};

//  ----------------- Data for a specific period ---------------------

export const getSpecificPeriodTransAPI = date => {
  return axios.get(`/transaction/period-data?date=${date}`).then(({ data }) => {
    return data;
  });
};

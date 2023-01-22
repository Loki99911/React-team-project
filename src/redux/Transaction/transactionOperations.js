import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addIncomeAPI,
  getIncomeStatsAPI,
  getIncomeCategoriesAPI,
  addExpenseAPI,
  getExpenseStatsAPI,
  getExpenseCategoriesAPI,
  removeTransactionApi,
  getSpecificPeriodTransAPI,
} from 'service/API/kapustaTransactionApi';

//  ----------------- INCOME ---------------------

export const addIncome = createAsyncThunk(
  'transaction/addIncome',
  async (income, { rejectWithValue }) => {
    try {
      const data = await addIncomeAPI(income);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getIncomeStats = createAsyncThunk(
  'transaction/getIncomeStats',
  async (_, thunkAPI) => {
    try {
      const data = await getIncomeStatsAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIncomeCategories = createAsyncThunk(
  'transaction/getIncomeCategories',
  async (_, thunkAPI) => {
    try {
      const data = await getIncomeCategoriesAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  ----------------- EXPENSE ---------------------

export const addExpense = createAsyncThunk(
  'transaction/addExpense',
  async (expense, { rejectWithValue }) => {
    try {
      const data = await addExpenseAPI(expense);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getExpenseStats = createAsyncThunk(
  'transaction/getExpenseStats',
  async (_, thunkAPI) => {
    try {
      const data = await getExpenseStatsAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExpenseCategories = createAsyncThunk(
  'transaction/getExpenseCategories',
  async (_, thunkAPI) => {
    try {
      const data = await getExpenseCategoriesAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  ----------------- DELETE TRANSACTION ---------------------

export const removeTransaction = createAsyncThunk(
  'transaction/removeTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeTransactionApi(id);
      return { data, id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//  ----------------- Data for a specific period ---------------------
//  ----------------- !!!!!!!!  FORMAT: YYYY-MM  !!!!!!!! ------------

export const getSpecificPeriodTrans = createAsyncThunk(
  'transaction/getTransactionPeriod',
  async (date, { rejectWithValue }) => {
    try {
      const data = await getSpecificPeriodTransAPI(date);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

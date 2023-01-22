//  --------------- INCOME -----------------
export const getIncomesTransactions = state =>
  state.transactions.incomes.transactions;
export const getIncomesMonthStats = state => state.transactions.incomes.stats;
export const getIncomesCategories = state =>
  state.transactions.incomes.categories;

//  --------------- EXPENCE -----------------
export const getExpencesTransactions = state =>
  state.transactions.expences.transactions;
export const getExpencesMonthStats = state => state.transactions.expences.stats;
export const getExpencesCategories = state =>
  state.transactions.expences.categories;

//  ------------- FOR REPORT --------------
export const getExpencesReportData = state =>
  state.transactions.transactionsByPeriod.expenses;
export const getIncomesReportData = state =>
  state.transactions.transactionsByPeriod.incomes;

//   ---------- BALANCE ---------------
export const getBalance = state => state.transactions.newBalance;

// ------------- Additional -----------
export const getAllTransactions = state => state.transactions.allTransactions;
export const getError = state => state.transactions.error;
export const getIsLoading = state => state.transactions.isLoading;
export const getCurrentDate = state => state.transactions.date;

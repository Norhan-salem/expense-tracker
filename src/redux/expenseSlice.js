import { createSlice } from "@reduxjs/toolkit";

/**
 * Initial state for the expenses slice.
 * Loads saved expenses from localStorage if available.
 */
const initialState = {
  items: JSON.parse(localStorage.getItem("expenses")) || [],
};

/**
 * Redux slice for managing expense-related actions.
 * Includes adding, deleting, and loading expenses from localStorage.
 */
const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    /**
     * Adds a new expense to the state and updates localStorage.
     * @param {Object} state - The current state of the expenses.
     * @param {Object} action - The action payload containing the new expense.
     */
    addExpense: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("expenses", JSON.stringify(state.items));
    },

    /**
     * Deletes an expense based on its ID and updates localStorage.
     * @param {Object} state - The current state of the expenses.
     * @param {Object} action - The action payload containing the expense ID to delete.
     */
    deleteExpense: (state, action) => {
      state.items = state.items.filter((expense) => expense.id !== action.payload);
      localStorage.setItem("expenses", JSON.stringify(state.items));
    },

    /**
     * Reloads expenses from localStorage.
     * Useful for initializing state or restoring data after a page refresh.
     * @param {Object} state - The current state of the expenses.
     */
    loadExpenses: (state) => {
      state.items = JSON.parse(localStorage.getItem("expenses")) || [];
    },
  },
});

export const { addExpense, deleteExpense, loadExpenses } = expenseSlice.actions;

export default expenseSlice.reducer;

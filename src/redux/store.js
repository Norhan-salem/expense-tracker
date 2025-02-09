import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice";

/**
 * Redux store configuration.
 * Manages global state using reducers.
 */
const store = configureStore({
  reducer: {
    /**
     * Expense reducer manages expense-related state.
     * Located in expenseSlice.js.
     */
    expenses: expenseReducer,
  },
});

export default store;

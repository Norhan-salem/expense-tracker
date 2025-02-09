import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadExpenses } from "./redux/expenseSlice";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";
import "./styles/style.css";
import { motion } from "framer-motion";

/**
 * Main application component for the Expense Tracker.
 * Manages global state, handles expense loading, and renders the form & expense list.
 */
const App = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.items);
  const [showList, setShowList] = useState(false);

  // Load stored expenses on initial render
  useEffect(() => {
    dispatch(loadExpenses());
  }, [dispatch]);

  // Show the expense list only when there are expenses
  useEffect(() => {
    if (expenses.length > 0) {
      setShowList(true);
    }
  }, [expenses]);

  return (
    <div className="container mt-4">
      {/* Title with fade-in animation */}
      <motion.h1 
        className="text-center title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Expense Tracker
      </motion.h1>
      
      {/* Expense Form with smooth entry animation */}
      <motion.div 
        className="form-container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ExpenseForm />
      </motion.div>
      
      {/* Render Expense List if there are expenses */}
      {showList && <ExpenseList expenses={expenses} />}
    </div>
  );
};

export default App;

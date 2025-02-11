import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadExpenses } from "./redux/expenseSlice";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Footer from "./components/Footer";
import "./App.css";
import "./styles/style.css";
import { motion } from "framer-motion";

const App = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.items);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    dispatch(loadExpenses());
  }, [dispatch]);

  useEffect(() => {
    if (expenses.length > 0) {
      setShowList(true);
    }
  }, [expenses]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-4 flex-grow-1">
        <motion.h1 
          className="text-center title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Expense Tracker
        </motion.h1>

        <motion.div 
          className="form-container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ExpenseForm />
        </motion.div>

        {showList && <ExpenseList expenses={expenses} />}
      </div>

      <Footer />
    </div>
  );
};

export default App;

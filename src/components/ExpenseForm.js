import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../redux/expenseSlice";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMoneyBillWave, FaTags, FaDollarSign, FaPlus } from "react-icons/fa";
import "../styles/style.css";

const categories = ["Food", "Transport", "Shopping", "Entertainment", "Bills", "Other"];

/**
 * ExpenseForm Component
 * Handles user input for adding new expenses, including name, amount, and category.
 * Utilizes animations and Redux for state management.
 */
const ExpenseForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.items);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  /**
   * Handles form submission and dispatches new expense to Redux store.
   * Prevents submission of empty fields.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && category) {
      dispatch(addExpense({ id: Date.now(), name, amount: parseFloat(amount), category }));
      setName("");
      setAmount("");
      setCategory("");
    }
  };

  return (
    <motion.div 
      className="expense-container"
      initial={{ y: expenses.length > 0 ? -100 : 0 }}
      animate={{ y: expenses.length > 0 ? -50 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Expense Form */}
      <motion.form 
        onSubmit={handleSubmit} 
        className="expense-form container p-4" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        data-aos="fade-up"
      >
        {/* Expense Name Input */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <FaMoneyBillWave />
          </span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Expense Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        
        {/* Expense Amount Input */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <FaDollarSign />
          </span>
          <input 
            type="number" 
            className="form-control" 
            placeholder="Amount" 
            value={amount} 
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              if (value >= 0 || e.target.value === "") {
                setAmount(e.target.value);
              }
            }} 
            required 
          />
        </div>
        
        {/* Expense Category Selection */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <FaTags />
          </span>
          <select 
            className="form-select" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        {/* Submit Button */}
        <button type="submit" className="btn add-btn">
          <FaPlus className="me-2" /> Add Expense
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ExpenseForm;
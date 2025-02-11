import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../redux/expenseSlice";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMoneyBillWave, FaTags, FaDollarSign, FaPlus } from "react-icons/fa";
import ExpenseInput from "./ExpenseInput";
import ExpenseSelect from "./ExpenseSelect";
import "../styles/style.css";

const categories = ["Food", "Transport", "Shopping", "Entertainment", "Bills", "Other"];

/**
 * ExpenseForm Component
 *
 * Handles user input for adding a new expense, including name, amount, and category.
 * Uses Redux for state management and animations via Framer Motion & AOS.
 *
 * @returns {JSX.Element} Expense form UI.
 */
const ExpenseForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.items);

  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  /**
   * Handles form submission to add a new expense.
   * Validates the amount field before dispatching the action.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      setErrorMessage("Amount must be greater than zero.");
      return;
    }

    setErrorMessage("");
    dispatch(addExpense({ id: Date.now(), name, amount: parseFloat(amount), category }));
    setName("");
    setAmount("");
    setCategory("");
  };

  return (
    <motion.div 
      className="expense-container"
      initial={{ y: expenses.length > 0 ? -100 : 0 }}
      animate={{ y: expenses.length > 0 ? -50 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.form 
        onSubmit={handleSubmit} 
        className="expense-form container p-4" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        data-aos="fade-up"
      >
        {/* Expense Name Input */}
        <ExpenseInput 
          icon={<FaMoneyBillWave />} 
          type="text" 
          placeholder="Expense Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />

        {/* Expense Amount Input */}
        <ExpenseInput 
          icon={<FaDollarSign />} 
          type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={(e) => {
            const value = e.target.value;
            setAmount(value);
            setErrorMessage(value && parseFloat(value) <= 0 ? "Amount must be greater than zero." : "");
          }} 
          required 
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Expense Category Dropdown */}
        <ExpenseSelect 
          icon={<FaTags />} 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          options={categories} 
        />

        {/* Submit Button */}
        <button type="submit" className="btn add-btn">
          <FaPlus className="me-2" /> Add Expense
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ExpenseForm;

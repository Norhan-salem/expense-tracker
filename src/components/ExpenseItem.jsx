import React from "react";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

/**
 * ExpenseItem Component
 *
 * Displays an individual expense item with details and a delete button.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.expense - Expense object containing name, amount, and category.
 * @param {Function} props.handleDeleteClick - Function to handle deleting an expense.
 *
 * @returns {JSX.Element} A styled expense item with animation.
 */
const ExpenseItem = ({ expense, handleDeleteClick }) => {
  return (
    <motion.li 
      className="list-group-item expense-item d-flex justify-content-between align-items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="expense-details">
        <strong>{expense.name}</strong>
        <p className="expense-meta">${expense.amount} - {expense.category}</p>
      </div>

      <button className="delete-btn" onClick={() => handleDeleteClick(expense)}>
        <FaTrash className="text-dark-teal" size={18} />
      </button>
    </motion.li>
  );
};

export default ExpenseItem;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../redux/expenseSlice";
import { motion } from "framer-motion";
import { FaTrash, FaSortAlphaDown, FaSortNumericDown } from "react-icons/fa";
import "../styles/style.css";

/**
 * ExpenseList Component
 * Displays a list of expenses with options to filter by category and sort by name or amount.
 * Uses animations and Redux for state management.
 */
const ExpenseList = ({ expenses }) => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState("");
    const [sortBy, setSortBy] = useState("name");
  
    // Filter expenses based on selected category
    const filteredExpenses = filter 
      ? expenses.filter((expense) => expense.category === filter) 
      : expenses;
  
    // Sort expenses based on selected criteria
    const sortedExpenses = [...filteredExpenses].sort((a, b) => {
        if (sortBy === "amount") {
            return a.amount - b.amount;
        }
        return a.name.localeCompare(b.name);
    });
  
    if (expenses.length === 0) return null;
  
    return (
      <motion.div 
        className="expense-list container p-4 expense-container" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        {/* Expense List Header */}
        <h2 className="text-center mb-4">Expense List</h2>
        
        {/* Filters and Sorting */}
        <div className="filters row g-2 mb-3 align-items-center">
            {/* Filter Dropdown */}
            <div className="col-12 col-sm-auto">
                <select className="form-select filter-dropdown" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Bills">Bills</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            {/* Sorting Buttons */}
            <div className="col-12 col-sm d-flex flex-wrap gap-2 justify-content-sm-end">
                <button className="sort-btn btn d-flex align-items-center" onClick={() => setSortBy("name")}>
                    <FaSortAlphaDown className="me-2" /> Sort by Name
                </button>
                <button className="sort-btn btn d-flex align-items-center" onClick={() => setSortBy("amount")}>
                    <FaSortNumericDown className="me-2" /> Sort by Amount
                </button>
            </div>
        </div>

        
        {/* Expense Items */}
        <ul className="list-group">
          {sortedExpenses.map((expense) => (
            <motion.li 
              key={expense.id} 
              className="list-group-item expense-item d-flex justify-content-between align-items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Expense Details */}
              <div className="expense-details">
                <strong>{expense.name}</strong>
                <p className="expense-meta">${expense.amount} - {expense.category}</p>
              </div>
              
              {/* Delete Button */}
              <button 
                className="delete-btn" 
                onClick={() => dispatch(deleteExpense(expense.id))}
              >
                <FaTrash className="text-dark-teal" size={18} />
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
};

export default ExpenseList;

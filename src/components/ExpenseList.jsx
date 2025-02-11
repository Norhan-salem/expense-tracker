import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../redux/expenseSlice";
import { motion } from "framer-motion";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseSort from "./ExpenseSort";
import ExpenseItem from "./ExpenseItem";
import DeleteModal from "./DeleteModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";

/**
 * ExpenseList Component
 *
 * Displays a list of expenses with filtering, sorting, and delete functionality.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.expenses - Array of expense objects.
 *
 * @returns {JSX.Element} A container displaying the list of expenses.
 */
const ExpenseList = ({ expenses }) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [showModal, setShowModal] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  // Filter expenses based on selected category
  const filteredExpenses = filter 
    ? expenses.filter((expense) => expense.category === filter) 
    : expenses;

  // Sort expenses based on selected criteria
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    return sortBy === "amount" ? a.amount - b.amount : a.name.localeCompare(b.name);
  });

  if (expenses.length === 0) return null;

  /**
   * Handles delete button click, opening the confirmation modal.
   * @param {Object} expense - The expense to be deleted.
   */
  const handleDeleteClick = (expense) => {
    setSelectedExpense(expense);
    setShowModal(true);
  };

  /**
   * Confirms and deletes the selected expense.
   */
  const confirmDelete = () => {
    if (selectedExpense) {
      dispatch(deleteExpense(selectedExpense.id));
    }
    setShowModal(false);
    setSelectedExpense(null);
  };

  return (
    <>
      <motion.div 
        className="expense-list container p-4 expense-container" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center mb-4">Expense List</h2>

        {/* Filters and Sorting */}
        <div className="filters row g-2 mb-3 align-items-center">
          <div className="col-12 col-sm-auto">
            <ExpenseFilter filter={filter} setFilter={setFilter} />
          </div>
          <div className="col-12 col-sm">
            <ExpenseSort setSortBy={setSortBy} />
          </div>
        </div>

        {/* Expense Items */}
        {sortedExpenses.length > 0 ? (
          <ul className="list-group">
            {sortedExpenses.map((expense) => (
              <ExpenseItem key={expense.id} expense={expense} handleDeleteClick={handleDeleteClick} />
            ))}
          </ul>
        ) : (
          <p className="text-center text-muted mt-3">No expenses found for this category.</p>
        )}
      </motion.div>

      {/* Delete Confirmation Modal */}
      <DeleteModal 
        showModal={showModal} 
        setShowModal={setShowModal} 
        confirmDelete={confirmDelete} 
        selectedExpense={selectedExpense} 
      />
    </>
  );
};

export default ExpenseList;

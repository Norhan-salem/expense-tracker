import React from "react";

/**
 * ExpenseFilter Component
 * 
 * A dropdown filter to select an expense category.
 * 
 * @param {string} filter - The currently selected category.
 * @param {Function} setFilter - Function to update the selected category.
 * 
 * @returns {JSX.Element} A dropdown component for filtering expenses.
 */
const ExpenseFilter = ({ filter, setFilter }) => {
  return (
    <select
      className="form-select filter-dropdown"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="">All Categories</option>
      {["Food", "Transport", "Shopping", "Entertainment", "Bills", "Other"].map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
};

export default ExpenseFilter;

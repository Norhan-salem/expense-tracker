import React from "react";
import { FaSortAlphaDown, FaSortNumericDown } from "react-icons/fa";

/**
 * ExpenseSort Component
 *
 * Provides sorting options for the expense list by name or amount.
 *
 * @param {Object} props - Component props.
 * @param {Function} props.setSortBy - Function to update the sorting criteria.
 *
 * @returns {JSX.Element} Buttons to toggle sorting by name or amount.
 */
const ExpenseSort = ({ setSortBy }) => {
  return (
    <div className="d-flex flex-wrap gap-2 justify-content-sm-end">
      <button className="sort-btn btn d-flex align-items-center" onClick={() => setSortBy("name")}>
        <FaSortAlphaDown className="me-2" /> Sort by Name
      </button>
      <button className="sort-btn btn d-flex align-items-center" onClick={() => setSortBy("amount")}>
        <FaSortNumericDown className="me-2" /> Sort by Amount
      </button>
    </div>
  );
};

export default ExpenseSort;

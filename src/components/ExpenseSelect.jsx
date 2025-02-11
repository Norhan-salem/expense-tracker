import React from "react";

/**
 * ExpenseSelect Component
 *
 * A dropdown select input for choosing an expense category.
 *
 * @param {Object} props - Component props.
 * @param {JSX.Element} props.icon - Icon displayed inside the input group.
 * @param {string} props.value - Current selected category.
 * @param {Function} props.onChange - Function to handle category selection change.
 * @param {Array<string>} props.options - List of category options.
 *
 * @returns {JSX.Element} A styled select dropdown for category selection.
 */
const ExpenseSelect = ({ icon, value, onChange, options }) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{icon}</span>
      <select className="form-select" value={value} onChange={onChange} required>
        <option value="" disabled>Select Category</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseSelect;

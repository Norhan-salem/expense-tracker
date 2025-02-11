import React from "react";

/**
 * ExpenseInput Component
 *
 * A reusable input field with an icon, designed for the expense form.
 *
 * @param {Object} props - Component props.
 * @param {JSX.Element} props.icon - Icon displayed inside the input field.
 * @param {string} props.type - Type of the input field (e.g., "text", "number").
 * @param {string} props.placeholder - Placeholder text for the input field.
 * @param {string | number} props.value - Controlled input value.
 * @param {Function} props.onChange - Event handler for input value change.
 * @param {boolean} [props.required=false] - Specifies whether the input is required.
 *
 * @returns {JSX.Element} A styled input field with an icon.
 */
const ExpenseInput = ({ icon, type, placeholder, value, onChange, required = false }) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{icon}</span>
      <input 
        type={type} 
        className="form-control" 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        required={required} 
      />
    </div>
  );
};

export default ExpenseInput;

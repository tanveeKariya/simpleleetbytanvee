import React from 'react';

const Dropdown = ({ label, options, value, onChange }) => (
  <>
    <label>{label}</label>
    <select className="dropdown" value={value} onChange={onChange}>
      {options.map(option => (
        <option key={option} value={option}>
          {option || '-- Select --'}
        </option>
      ))}
    </select>
  </>
);

export default Dropdown;
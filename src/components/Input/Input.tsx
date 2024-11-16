import React from "react";
import './Input.scss';

interface propInput {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<propInput> = ({
  label,
  type,
  name,
  value,
  onChange,
  required = true,

}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      <input className="form-control"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      
    </div>
  );
}

export default Input
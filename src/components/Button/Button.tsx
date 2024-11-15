import React from "react";
import './Button.scss';

interface ButtonPros {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    
}

const Button: React.FC<ButtonPros> = ({ label, disabled = false, onClick }) => {


    return (
        <button 
            className={`button ${disabled ? 'button--disabled' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default Button;
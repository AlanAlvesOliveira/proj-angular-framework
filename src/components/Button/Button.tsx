import React from "react";
import './Button.scss';

interface ButtonPros {    
    children: React.ReactNode
    onClick?: () => void;
    disabled?: boolean;    
}

const Button: React.FC<ButtonPros> = ({children, disabled = false, onClick }) => {


    return (
        <button 
            className={`button ${disabled ? 'button--disabled' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;
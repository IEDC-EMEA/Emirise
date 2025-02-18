import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  className = "", 
  type = "button",
  disabled = false 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 
        py-2 
        rounded-lg 
        font-medium 
        transition-all 
        duration-200 
        inline-flex 
        items-center 
        justify-center
        disabled:opacity-50 
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
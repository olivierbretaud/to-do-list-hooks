import React from "react";

const Button = ({ disabled, children, onClick, type }) => (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
    >
     {children}
    </button>
);

export default Button;
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, children, color, hoverColor }) => {
  return (
    <Link
      to={to}
      className={`inline-block text-white rounded-lg px-4 py-2 bg-${color} hover:bg-${hoverColor} transition-transform duration-300`}
    >
      {children}
    </Link>
  );
};

export default Button;

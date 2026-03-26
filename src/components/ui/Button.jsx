import React from "react";

function Button({
  children,
  onClick,
  variant = "default",
  disabled = false,
  className = "",
}) {
  // Requirement 9: Conditional logic for classes
  const variantClass =
    variant === "primary" ? "primary" : variant === "danger" ? "danger" : "";

  return (
    <button
      className={`btn ${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

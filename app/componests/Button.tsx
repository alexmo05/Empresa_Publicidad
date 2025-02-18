import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary", disabled = false }) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2";

  const variants = {
    primary: "bg-[var(--color-black)] hover:bg-[var(--color-gray)] text-white focus:ring-[var(--color-gray)]",
    secondary: "bg-[var(--color-brown)] hover:bg-[var(--color-gray)] text-white focus:ring-[var(--color-gray)]",
    danger: "bg-[var(--color-red)] hover:bg-[var(--color-black)] text-white focus:ring-[var(--color-red)]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

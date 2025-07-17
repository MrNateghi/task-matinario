import React from "react";
import styles from "@/app/components/modules/scss/elements/button.module.scss";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const Button = ({
  onClick,
  disabled,
  type = "submit",
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

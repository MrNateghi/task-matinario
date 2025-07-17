import React from "react";
import styles from "@/app/components/modules/scss/elements/input.module.scss";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label: string;
  error?: string;
}

const Input = ({
  value,
  onChange,
  label,
  error,
  placeholder = "",
}: InputProps) => {
  return (
    <div className={styles.inputGroup}>
      <input
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.error : ""}`}
      />
      <label className={styles.inputLabel}>{label}</label>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Input;

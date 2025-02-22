import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  label: React.ReactNode;
}

export function Button({ label }: ButtonProps) {
  return <button className={styles.button}>{label}</button>;
}

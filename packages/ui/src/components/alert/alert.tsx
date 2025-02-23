import styles from "./alert.module.css";

interface AlertProps {
  children: React.ReactNode;
}

export function Alert({ children }: AlertProps) {
  return <div className={styles.alert}>{children}</div>;
}

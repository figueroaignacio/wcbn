import styles from "./badge.module.css";

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return <div className={styles.badge}>{children}</div>;
}

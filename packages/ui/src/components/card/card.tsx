import "../styles/custom-properties.css";
import styles from "./card.module.css";

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return <div className={styles.card}>{children}</div>;
}

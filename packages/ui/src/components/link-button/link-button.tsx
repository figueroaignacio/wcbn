import styles from "./link-button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href: string | undefined;
}

export function LinkButton({ children, onClick, href }: ButtonProps) {
  return (
    <a
      href={href}
      className={styles.linkButton}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

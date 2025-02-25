import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        visit my{" "}
        <a href="https://ignaciofigueroa.vercel.app" target="blank">
          porfolio ↗
        </a>
      </div>
    </header>
  );
}

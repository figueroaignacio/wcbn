import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <p>
          visit my{" "}
          <a href="https://ignaciofigueroa.vercel.app" target="_blank">
            porfolio ↗
          </a>
          {" - "}
          check the{" "}
          <a href="https://github.com/figueroaignacio/wcbn" target="_blank">
            source code ↗
          </a>
        </p>
      </div>
    </header>
  );
}

import { ArrowDownIcon } from "@radix-ui/react-icons";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Web Challenges by Nacho</h1>
      <p>
        This site showcases the web challenges I completed throughout my
        journey.
      </p>
      <div className={styles.arrowWrapper}>
        <ArrowDownIcon className={styles.arrow} width={34} height={34} />
      </div>
    </section>
  );
}

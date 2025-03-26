import { Challenges } from "../../sections/challenges/challenges";
import { Hero } from "../../sections/hero/hero";
import styles from "./home.module.css";

export function Home() {
  return (
    <main className={styles.app}>
      <Hero />
      <Challenges />
    </main>
  );
}

import styles from "./app.module.css";
import { Header } from "./components/header/header";
import { Challenges } from "./sections/challenges/challenges";
import { Hero } from "./sections/hero/hero";

export default function App() {
  return (
    <div>
      <Header />
      <main className={styles.app}>
        <Hero />
        <Challenges />
      </main>
    </div>
  );
}

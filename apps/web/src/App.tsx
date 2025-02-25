import styles from "./app.module.css";
import { Header } from "./components/header/header";
import { Seo } from "./components/seo";
import { Challenges } from "./sections/challenges/challenges";
import { Hero } from "./sections/hero/hero";

export default function App() {
  return (
    <div>
      <Seo
        title="WCBN - Completed Challenges Collection"
        description="Fullstack site that showcases my completed web challenges"
      />
      <Header />
      <main className={styles.app}>
        <Hero />
        <Challenges />
      </main>
    </div>
  );
}

import styles from "./hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src="https://giffiles.alphacoders.com/215/215911.gif"
        alt="gif"
        className={styles.heroGif}
      />
      <h1 className={styles.heroTitle}>Web Challenges by Nacho</h1>
      <p className={styles.heroDescription}>
        This site showcases the web challenges I completed throughout my
        journey.
      </p>
    </section>
  );
}

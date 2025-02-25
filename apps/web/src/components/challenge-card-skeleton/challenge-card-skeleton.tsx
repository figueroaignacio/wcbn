import styles from "./challenge-card.module.css";

export function ChallengeCardSkeleton() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonImage} />
      <div className={styles.challengeInfo}>
        <div>
          <div className={styles.skeletonTitle} />
          <div className={styles.skeletonText} />
        </div>
        <ul className={styles.skeletonTech}>
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index}>
              <div className={styles.skeletonBadge} />
            </li>
          ))}
        </ul>
        <div className={styles.skeletonActions}>
          <div className={styles.skeletonButton} />
          <div className={styles.skeletonButton} />
        </div>
      </div>
    </div>
  );
}

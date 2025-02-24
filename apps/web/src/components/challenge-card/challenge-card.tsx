import { Button, Card } from "@wcbn/ui";
import { Challenge } from "../../lib/definitions";
import styles from "./challenge-card.module.css";

type ChallengeCardProps = Partial<Challenge>;

export function ChallengeCard({
  title,
  description,
  image,
}: ChallengeCardProps) {
  return (
    <Card>
      <img src={image} alt="" />
      <div className={styles.challengeInfo}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.challengeActions}>
          <Button>Live URL</Button>
          <Button>Source Code</Button>
        </div>
      </div>
    </Card>
  );
}

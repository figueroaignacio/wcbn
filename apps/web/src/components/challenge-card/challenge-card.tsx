import { Badge, Card, LinkButton } from "@wcbn/ui";
import { Challenge } from "../../lib/definitions";
import styles from "./challenge-card.module.css";

type ChallengeCardProps = Partial<Challenge>;

export function ChallengeCard({
  title = "Untitled Challenge",
  description = "No description available.",
  image,
  liveDemo = "#",
  sourceCode = "#",
  tech = [],
}: ChallengeCardProps) {
  return (
    <Card>
      {image && (
        <img
          src={image}
          alt={title}
          className={styles.challengeImage}
          loading="lazy"
        />
      )}
      <div className={styles.challengeInfo}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <ul className={styles.challengeTech}>
          {tech.map((item) => (
            <li key={item}>
              <Badge>{item}</Badge>
            </li>
          ))}
        </ul>
        <div className={styles.challengeActions}>
          <LinkButton href={liveDemo}>Live URL</LinkButton>
          <LinkButton href={sourceCode}>Source Code</LinkButton>
        </div>
      </div>
    </Card>
  );
}

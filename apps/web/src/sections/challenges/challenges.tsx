import { useEffect, useState } from "react";
import { ChallengeCardSkeleton } from "../../components/challenge-card-skeleton/challenge-card-skeleton";
import { ChallengeCard } from "../../components/challenge-card/challenge-card";
import { API_URL } from "../../lib/constants";
import { Challenge } from "../../lib/definitions";
import styles from "./challenges.module.css";

export function Challenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getChallenges() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`${API_URL}/challenges`);

        if (!response.ok) {
          throw new Error(
            `Error ${response.status}: The challenges could not be obtained.`
          );
        }

        const data = await response.json();
        setChallenges(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong"
        );
      } finally {
        setIsLoading(false);
      }
    }

    getChallenges();
  }, []);

  if (isLoading) {
    return (
      <ul className={styles.challenges}>
        {Array.from({ length: 6 }).map((_, index) => (
          <ChallengeCardSkeleton key={index} />
        ))}
      </ul>
    );
  }

  if (error) {
    return <h2 className={styles.error}>Error: {error}</h2>;
  }

  return (
    <ul className={styles.challenges}>
      {challenges.map((challenge) => (
        <li key={challenge.id}>
          <ChallengeCard
            image={challenge.image}
            title={challenge.title}
            description={challenge.description}
            liveDemo={challenge.liveDemo}
            sourceCode={challenge.sourceCode}
            tech={challenge.tech}
          />
        </li>
      ))}
    </ul>
  );
}

import { useEffect, useState } from "react";
import { ChallengeCard } from "../../components/challenge-card";
import { API_URL } from "../../lib/constants";
import { Challenge } from "../../lib/definitions";

export function Challenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  useEffect(() => {
    async function getChallenges() {
      const response = await fetch(`${API_URL}/challenges`);
      const data = await response.json();
      setChallenges(data);
    }

    getChallenges();
  }, []);

  return (
    <ul>
      {challenges.map((challenge) => (
        <li key={challenge.id}>
          <ChallengeCard
            image={challenge.image}
            title={challenge.title}
            description={challenge.description}
          />
        </li>
      ))}
    </ul>
  );
}

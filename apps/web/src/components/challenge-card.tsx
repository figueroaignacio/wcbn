import { Button, Card } from "@wcbn/ui";
import { Challenge } from "../lib/definitions";

type ChallengeCardProps = Partial<Challenge>;

export function ChallengeCard({
  title,
  description,
  image,
}: ChallengeCardProps) {
  return (
    <Card>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <Button>Live URL</Button>
        <Button>Source Code</Button>
      </div>
    </Card>
  );
}

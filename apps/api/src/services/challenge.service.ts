import { db } from "../config/db";

// dto's
import { CreateChallengeDTO } from "../dtos/challenge.dto";

export async function getChallenges() {
  const challenges = await db.challenge.findMany();
  return challenges;
}

export async function createChallenge(data: CreateChallengeDTO) {
  const challenge = await db.challenge.create({ data });
  return challenge;
}

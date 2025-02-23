import { db } from "../config/db";

// dto's
import { CreateChallengeDTO } from "../dtos/challenge.dto";

export async function getChallenges() {
  return await db.challenge.findMany();
}

export async function createChallenge(data: CreateChallengeDTO) {
  return await db.challenge.create({ data });
}

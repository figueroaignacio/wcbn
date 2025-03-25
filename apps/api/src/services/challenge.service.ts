import { db } from "../config/db";
import { CreateChallengeDTO } from "../dtos/challenge.dto";

export class ChallengeService {
  constructor(private readonly database = db) {}

  async getChallenges() {
    return this.database.challenge.findMany();
  }

  async createChallenge(createChallengeDto: CreateChallengeDTO) {
    return await this.database.challenge.create({ data: createChallengeDto });
  }
}

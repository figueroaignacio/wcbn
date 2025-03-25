import { NextFunction, Request, Response } from "express";
import { CreateChallengeDTO } from "../dtos/challenge.dto";
import { ChallengeService } from "../services/challenge.service";

export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  async getAllChallenges(req: Request, res: Response, next: NextFunction) {
    try {
      const challenges = await this.challengeService.getChallenges();
      res.status(200).json(challenges);
    } catch (error) {
      next(error);
    }
  }

  async createNewChallenge(req: Request, res: Response, next: NextFunction) {
    try {
      const data: CreateChallengeDTO = req.body;
      const challenge = await this.challengeService.createChallenge(data);
      res.status(201).json(challenge);
    } catch (error) {}
  }
}

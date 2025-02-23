import { NextFunction, Request, Response } from "express";

// dto's
import { CreateChallengeDTO } from "../dtos/challenge.dto";

// Services
import { createChallenge, getChallenges } from "../services/challenge.service";

export async function getAllChallenges(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const challenges = await getChallenges();
    res.status(200).json(challenges);
  } catch (error) {
    next(error);
  }
}

export async function createNewChallenge(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: CreateChallengeDTO = req.body;
    const challenge = await createChallenge(data);
    res.status(201).json(challenge);
  } catch (error) {
    next(error);
  }
}

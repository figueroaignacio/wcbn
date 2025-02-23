import { Router } from "express";
import {
  createNewChallenge,
  getAllChallenges,
} from "../controllers/challenge.controller";

const challengeRouter = Router();

challengeRouter.get("/", getAllChallenges);
challengeRouter.put("/", createNewChallenge);

export default challengeRouter;

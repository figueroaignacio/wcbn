import { Router } from "express";
import { ChallengeController } from "../controllers/challenge.controller";
import { ChallengeService } from "../services/challenge.service";

const router = Router();
const challengeService = new ChallengeService();
const challengeController = new ChallengeController(challengeService);

router.get("/", challengeController.getAllChallenges.bind(challengeController));
router.post(
  "/",
  challengeController.createNewChallenge.bind(challengeController)
);

export default router;

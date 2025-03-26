import { Router } from "express";
import { ChallengeController } from "../controllers/challenge.controller";
import { verifySecretKey } from "../middleware/auth-middleware";
import { ChallengeService } from "../services/challenge.service";

const router = Router();
const challengeService = new ChallengeService();
const challengeController = new ChallengeController(challengeService);

router.get("/", challengeController.getAllChallenges.bind(challengeController));
router.post(
  "/",
  verifySecretKey,
  challengeController.createNewChallenge.bind(challengeController)
);

export default router;

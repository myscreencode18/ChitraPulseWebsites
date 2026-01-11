import express from "express";
import { submitProposal } from "../controllers/proposal.controller.js";
import { validate } from "../middleware/validate.js";
import { proposalSchema } from "../validators/proposal.schema.js";
import { proposalRateLimit } from "../middleware/rateLimit.js";
const router = express.Router();

router.post("/", proposalRateLimit, validate(proposalSchema), submitProposal);

export default router;

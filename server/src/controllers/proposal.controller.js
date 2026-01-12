import Proposal from "../models/Proposal.js";
import {
  sendStudioNotification,
  sendClientConfirmation,
} from "../services/proposal.mail.js";

export const submitProposal = async (req, res) => {
  const {
  role,
  name,
  email,
  platform,
  audienceSize,
  goals,
  problem,
  feeling,
  budget,
  deadline,
  agreed,
} = req.body;

  try {
    
    const proposal = await Proposal.create({
  role,
  name,
  email,
  platform,
  audienceSize,
  goals,
  problem,
  feeling,
  budget,
  deadline,
  agreed,
  ip:
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.ip,
  userAgent: req.headers["user-agent"],
});

  sendStudioNotification(proposal).catch(console.error);
    sendClientConfirmation(proposal).catch(console.error);

   return res.status(201).json({
  success: true,
  message: "Proposal received",
});

  } catch (err) {
   console.error("Proposal Save Error:", err);
    res.status(500).json({
      success: false,
      message: "Submission failed",
    });
  }
};

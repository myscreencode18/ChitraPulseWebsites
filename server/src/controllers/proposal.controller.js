import Proposal from "../models/Proposal.js";
import {
  sendStudioNotification,
  sendClientConfirmation,
} from "../services/proposal.mail.js";

export const submitProposal = async (req, res) => {
  try {
    const proposal = await Proposal.create(req.body);

     await sendStudioNotification(proposal);
    await sendClientConfirmation(proposal);

    res.status(201).json({
      success: true,
      id: proposal._id,
    });
  } catch (err) {
   console.error("Email / Save Error:", err);
    res.status(500).json({
      success: false,
      message: "Submission failed",
    });
  }
};

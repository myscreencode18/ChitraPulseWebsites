import mongoose from "mongoose";

const proposalSchema = new mongoose.Schema(
  {
    role: String,
    name: String,
    email: String,
    platform: String,
    audienceSize: String,
    goals: [String],
    problem: String,
    feeling: String,
    budget: String,
    deadline: String,
    agreed: Boolean,
  },
  { timestamps: true }
);

export default mongoose.model("Proposal", proposalSchema);

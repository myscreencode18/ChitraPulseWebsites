import { z } from "zod";

export const proposalSchema = z.object({
  role: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  platform: z.string().url(),
  audienceSize: z.string().min(1),

  goals: z.array(z.string()).min(1),

  problem: z.string().min(100, "Problem must be at least 100 characters"),
  feeling: z.string().min(2),

  budget: z.string().refine(
    (val) => val !== "Not Yet Defined",
    { message: "Budget must be defined" }
  ),

  deadline: z.string(),
  agreed: z.literal(true)
});

import express from "express";
import cors from "cors";

import proposalRoutes from "./routes/proposal.routes.js";

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",                  // dev
    ],
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

app.use("/api/proposals", proposalRoutes);

app.get("/", (req, res) => {
  res.send("Studio API is running 🎬");
});

export default app;

import express from "express";
import cors from "cors";

import proposalRoutes from "./routes/proposal.routes.js";

const app = express();
app.set("trust proxy", 1);

app.use(
  cors({
    origin: [
       "https://chitrapulse.com",
      "https://www.chitrapulse.com",
      "http://localhost:5173",   
      "https://chitra-pulse-websites.vercel.app"               // dev
    ],
    methods: ["GET", "POST" , "OPTIONS"],
  })
);
app.use(express.json());

app.use("/api/proposals", proposalRoutes);

app.get("/", (req, res) => {
  res.send("Studio API is running 🎬");
});

export default app;

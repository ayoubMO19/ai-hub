import express from "express";
import jobsRoutes from "./routes/jobs.routes";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/jobs", jobsRoutes);

export default app;
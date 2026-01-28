import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import explain from "./routes/explain.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/explain", explain);

app.listen(8080, () => {
  console.log("✅ Server running on port 8080");
});

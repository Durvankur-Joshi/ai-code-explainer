import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import explain from "./routes/explain.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/explain", explain);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

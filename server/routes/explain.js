import express from "express";
import { explainCode } from "../controller/explainController.js";

const router = express.Router();

router.post("/", explainCode);

export default router;

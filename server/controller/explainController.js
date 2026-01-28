import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export const explainCode = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ message: "Code is required" });
    }

    // Build a prompt for the AI
    const prompt = `
You are a teacher for programming beginners.
Explain the following code line by line in simple language.
Highlight any errors and suggest improvements.
Code:
${code}
`;

    // Generate explanation
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview", // latest preview model
      contents: prompt,
    });

    // Send the explanation text
    res.status(200).json({ explanation: response.text });

  } catch (error) {
    console.error("Google GenAI Error:", error);
    res.status(500).json({ message: "AI explanation failed" });
  }
};

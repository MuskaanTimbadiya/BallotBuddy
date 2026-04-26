import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function checkModels() {
    console.log("Using API key:", process.env.GEMINI_API_KEY.substring(0, 5) + "...");
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
        const data = await response.json();
        console.log("Available models:", data.models.map(m => m.name));
    } catch (e) {
        console.error("Error:", e);
    }
}
checkModels();

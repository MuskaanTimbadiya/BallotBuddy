import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup environment and paths
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Chatbot Endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, language, context } = req.body;
        console.log(`[Chat] Query: "${message}" | Lang: ${language}`);

        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({ error: "Gemini API Key is missing on the server." });
        }

        const systemInstruction = `You are Ballot Buddy, a formal, highly accurate, and helpful Indian Election Assistant. 
Your goal is to help citizens understand the electoral process, voter registration, EVM/VVPAT machines, and their rights.

Here is the current timeline data and site context you must use to answer specific questions:
${context || 'No specific context provided.'}

CRITICAL RULES:
1. You MUST respond in the following language: ${language}.
2. Keep your answers concise, informative, and professional. 
3. If the user asks something completely unrelated to elections, democracy, or civic duties in India, politely decline to answer and guide them back to election topics.
4. Use clear formatting, but avoid excessive markdown. Use bullet points for lists.`;

        const model = genAI.getGenerativeModel({ 
            model: "gemini-2.0-flash",
            systemInstruction: systemInstruction 
        });

        const result = await model.generateContent(message);
        const response = await result.response;
        if (!response || !response.candidates || response.candidates.length === 0) {
            throw new Error("No response generated (possibly blocked by safety filters).");
        }

        const responseText = response.text();
        res.json({ reply: responseText });

    } catch (error) {
        console.error("Error communicating with Gemini API:", error.message);
        
        let errorMessage = "Sorry, I am having trouble connecting to the election database right now.";
        let statusCode = 500;

        if (error.status === 429 || error.message?.includes('429')) {
            errorMessage = "The Election Database is currently very busy (Rate Limit Exceeded). Please wait a minute and try again.";
            statusCode = 429;
        } else if (error.status === 401 || error.status === 403) {
            errorMessage = "Authentication error with the Election Database. Please check server configuration.";
            statusCode = error.status;
        }
        
        res.status(statusCode).json({ error: errorMessage });
    }
});

// Start Server
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Ballot Buddy server running at http://localhost:${port}`);
    });
}

export default app;

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

// Serve minified CSS instead of raw CSS
app.get('/style.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.setHeader('Cache-Control', 'public, max-age=604800'); // 1 week
  res.sendFile(path.join(__dirname, 'style.min.css'));
});

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

        /**
         * Prompt Engineering Strategy:
         * - Role assignment: Defines the model as a neutral civic educator aligned with ECI guidelines.
         * - Topic-locking: CRITICAL RULES explicitly reject off-topic queries and redirect users.
         * - Context injection: Live timeline/site data is appended so answers are grounded in real content.
         * - Language enforcement: Multilingual output is mandated in the same instruction turn.
         * - Format control: Instructs concise bullet-point output to prevent verbose or hallucinated text.
         */
        const systemInstruction = `You are BallotBuddy, a neutral civic educator and official Indian Election Assistant. 
Your responses are based strictly on the guidelines and data published by the Election Commission of India (ECI).

Context from the application (use this to answer specific questions):
${context || 'No specific context provided.'}

CRITICAL RULES — you must follow all of these without exception:
1. LANGUAGE: You MUST respond exclusively in ${language}. Do not mix languages.
2. TOPIC-LOCK: You are ONLY permitted to discuss Indian elections, democracy, voter registration, EVM/VVPAT, election timelines, candidates, and civic rights. If the user asks about anything else (sports, entertainment, general knowledge, etc.), politely refuse and redirect them to election topics.
3. NEUTRALITY: Never favour or criticize any political party, candidate, or ideology. Remain strictly factual and impartial.
4. ACCURACY: If you do not know a specific fact, say so clearly rather than guessing.
5. FORMAT: Keep answers concise (under 150 words unless detail is requested). Use bullet points for lists. Avoid heavy markdown.`;

        // Fetches a response from Google Gemini API using the configured system instruction and user message
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
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

// Manifesto Summarizer Endpoint
app.post('/api/summarize', async (req, res) => {
    try {
        const { parties, topic, language } = req.body;
        console.log(`[Summarize] Parties: ${parties} | Topic: ${topic} | Lang: ${language}`);

        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({ error: "Gemini API Key is missing on the server." });
        }

        const systemInstruction = `You are a neutral political analyst for the Indian Elections 2026. 
Your task is to provide a concise, factual summary of the political platforms for the requested parties on a specific topic.

CRITICAL RULES:
1. Respond ONLY in a valid JSON format: {"comparisons": [{"party": "NAME", "summary": "3-sentence summary"}]}.
2. Use the language: ${language}.
3. Be strictly neutral. Do not favor any party.
4. If a party's specific stance on a future 2026 topic is unknown, provide a summary based on their historical platform and general policy direction.
5. Do not include any markdown formatting or text outside the JSON.`;

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: systemInstruction,
            generationConfig: { responseMimeType: "application/json" }
        });

        const prompt = `Compare the following parties: ${parties.join(', ')} on the topic: ${topic}.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;

        const responseText = response.text();
        const jsonResponse = JSON.parse(responseText);
        res.json(jsonResponse);

    } catch (error) {
        console.error("Error with Manifesto Summarizer:", error.message);
        res.status(500).json({ error: "Failed to generate comparison. Please try again later." });
    }
});

// Ink Verification Endpoint
app.post('/api/verify-ink', async (req, res) => {
    try {
        const { image } = req.body;
        if (!image) return res.status(400).json({ error: "Image data is required" });

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = "Analyze this image. Does it show a human finger with the purple indelible ink mark used in Indian elections? Reply ONLY with a JSON object: {\"verified\": true/false, \"reason\": \"brief explanation\"}. If the image is not clear or doesn't show a finger, set verified to false.";

        const result = await model.generateContent([
            prompt,
            { inlineData: { data: image, mimeType: "image/jpeg" } }
        ]);

        const response = await result.response;
        const text = response.text();
        
        // Clean markdown if AI includes it
        const cleanedText = text.replace(/```json|```/g, "").trim();
        const jsonResponse = JSON.parse(cleanedText);
        
        res.json(jsonResponse);

    } catch (error) {
        console.error("Verification Error:", error);
        res.status(500).json({ error: "Failed to verify ink mark" });
    }
});

// Start Server
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Ballot Buddy server running at http://localhost:${port}`);
    });
}

export default app;

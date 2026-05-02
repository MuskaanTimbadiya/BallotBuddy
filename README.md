# Ballot Buddy | Indian Election Assistant 🇮🇳

**Live Deployment:** [https://ballotbuddy-843080848499.asia-south1.run.app/](https://ballotbuddy-843080848499.asia-south1.run.app/)

Ballot Buddy is a formal, multilingual, and highly interactive web platform designed to simplify the complex Indian electoral process for citizens. It provides authoritative, government-standard educational content regarding voter registration, EVM/VVPAT mechanics, and election hierarchy.

---

### Chosen Vertical
**Election Process Education**

---

### Features

| Feature | Description |
|---|---|
| 🌐 **Multilingual Support** | Full UI in **English, Hindi, Bengali, Tamil, Telugu** with instant switching and regional font optimization |
| 🤖 **AI Chatbot (Ask Buddy)** | Powered by **Google Gemini 1.5 Flash** with context-aware responses and local FAQ fallback |
| 📋 **Interactive Guide** | Personalized 6-step voter guide based on first-time/returning voter profile |
| 🗳️ **Know Your Candidate** | **Interactive Leaflet Map** to explore candidates, their education, assets, and criminal records in key constituencies |
| 🗳️ **My Ballot Preview** | Shows state-specific candidates, parties, and key ballot measures (WB, TN, MH, DL) |
| ✨ **Manifesto Summarizer** | **AI-powered** side-by-side comparison of party promises on topics like Education, Healthcare, and Economy |
| 🏅 **Democracy Badges** | **AI Vision (Multi-modal)** verification of inked fingers to unlock and share digital voter badges |
| 🔊 **Multilingual TTS** | **Text-to-Speech** toggle for all chatbot messages, guide steps, and timelines in the selected language |
| 📅 **Regional Timelines** | Filterable election schedules by state with dates and counting day info |
| 📶 **Offline Mode** | Service Worker caches core assets and chat history for access in low-connectivity areas |
| 🧠 **Knowledge Quiz** | Multilingual quiz with instant feedback to test understanding of the electoral process |
| 🔗 **Share Feature** | Native Web Share API with clipboard fallback for easy app distribution |

---

### Approach and Logic
The application was built with the following core principles in mind:

1. **Lightweight & Accessible:** The frontend is built using vanilla HTML, CSS, and JavaScript. No heavy frameworks ensure fast load times on low-bandwidth networks. **Multilingual Text-to-Speech** (via `SpeechSynthesis` API) ensures audio accessibility for diverse literacy levels.
2. **Multilingual Architecture:** A centralized translation engine supports **5 major languages**. The system uses a master-fallback strategy where non-English content gracefully falls back to English for any missing keys, ensuring zero UI breakage.
3. **AI-Driven Insights:** 
   - **Ask Buddy:** Uses a **Node.js/Express backend proxy** to route queries to the **Google Gemini API**, providing real-time answers.
   - **Manifesto Summarizer:** Leverages AI to distill complex party manifestos into comparable, topic-specific summaries.
   - **Ink Verification:** Utilizes Gemini 1.5 Flash's **multi-modal capabilities** to analyze user-uploaded photos for official election marks (inked fingers).
4. **Interactive Mapping:** Integrates **Leaflet.js** to provide a geographical interface for candidate discovery, making complex constituency data visually accessible.
5. **Institutional Aesthetics:** The design follows a formal "Official White" theme with Indian tricolor accents. It uses high-contrast typography (Inter & Outfit) and subtle micro-animations to create a premium, trustworthy user experience.
6. **Offline Resilience:** A Service Worker (`sw.js`) implements a cache-first strategy for static assets and handles offline UI states. Local/Session storage is used to persist user preferences (language, region) and chat history.

---

### How the solution works

1. **Installation:**
   - Ensure you have Node.js installed.
   - Clone the repository and run `npm install`.
   - Create a `.env` file in the root directory: `GEMINI_API_KEY=your_actual_key_here`

2. **Starting the App Locally:**
   - Run `node server.js` to boot the backend proxy and serve the static files.
   - Open your browser to `http://localhost:8080/`

3. **Cloud Deployment:**
   - The application is containerized via `Dockerfile` and optimized for Google Cloud Run.
   - The backend auto-detects the `PORT` environment variable provided by the host.

4. **Using Ballot Buddy:**
    - **Language Switcher:** Select your language from the top nav. The entire interface, including AI responses and TTS, adapts instantly.
    - **Voter Tools Dropdown:** Access specialized tools:
        - **Know Your Candidate:** Use the map to select a constituency (e.g., Varanasi) and view candidate affidavits.
        - **Knowledge Quiz:** Test your electoral understanding with a multilingual quiz.
        - **My Ballot:** See a preview of what your actual ballot will look like in your state.
        - **Democracy Badges:** Upload a photo of your inked finger for AI verification.
    - **Manifesto Summarizer:** Select parties and a focus topic to get an AI-generated comparison.
    - **Interactive Guide:** Click "Access Guide" to get a walkthrough personalized to your voter status.
    - **Ask Buddy:** Use the floating chat button for natural language assistance in any supported language.

---

### Key Files

| File | Purpose |
|---|---|
| `index.html` | App shell, semantic layout, and component containers |
| `main.js` | Core logic: Translations, Leaflet map, AI integrations, TTS, and state management |
| `style.css` | Design system: Official theme tokens, responsive layouts, and animations |
| `server.js` | Secure Node.js/Express backend proxy for Gemini API endpoints |
| `sw.js` | PWA Service Worker for offline asset caching |
| `Dockerfile` | Configuration for containerized cloud deployment |

---

### Assumptions made

- Assumed the user is looking for upcoming **2026 Assembly Election data** (West Bengal, Tamil Nadu, Maharashtra, Delhi).
- Assumed the user provides their own valid Gemini API key (via `.env` or environment variables).
- Assumed the target demographic includes a mix of first-time voters and existing voters requiring polling assistance.
- Ballot data (candidates, affidavits, manifestos) used in features like KYC and the Summarizer is illustrative/educational and based on provided mock datasets.
- Modern browser support is required for features like Web Share API and Speech Synthesis.

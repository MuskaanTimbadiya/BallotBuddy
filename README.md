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
| 🌐 **Multilingual Support** | Full UI in **English, Hindi, Bengali, Tamil, Telugu** with instant switching |
| 🤖 **AI Chatbot (Ask Buddy)** | Powered by **Google Gemini API** via a secure Node.js backend proxy |
| 📋 **Interactive Guide** | Personalized 6-step voter guide based on first-time/returning voter profile |
| 🗳️ **My Ballot Preview** | Shows candidates, parties, and key ballot measures by state (WB, TN, MH, DL) |
| 📅 **Regional Timelines** | Filterable election schedules by state with dates and counting day info |
| 🔊 **Text-to-Speech** | Read-aloud toggle on all chatbot messages, guide steps, and timelines |
| 📶 **Offline Mode** | Service Worker caches core assets for access in low-connectivity areas |
| 🔗 **Share Feature** | Native Web Share API with clipboard fallback to share the app |
| 🧠 **Knowledge Quiz** | Multilingual quiz to test understanding of the election process |

---

### Approach and Logic
The application was built with the following core principles in mind:

1. **Lightweight & Accessible:** The frontend is built entirely using vanilla HTML, CSS, and JavaScript. No frameworks — ensuring fast load times and cross-platform compatibility. Text-to-Speech (via `SpeechSynthesis` API) ensures audio accessibility across all major content sections.
2. **Multilingual Architecture:** A centralized translation engine supports **5 major languages** with full translations for all UI strings, guide steps (6 per language), and regional election timelines. Non-English content gracefully falls back to English for any missing keys.
3. **Institutional Aesthetics:** The design uses a clean formal "Light Theme" with Indian tricolor accents (Saffron `#FF9933`, White, Green `#138808`, and Ashoka Blue `#000080`) to invoke authority and trust.
4. **AI Integration:** A lightweight **Node.js/Express backend proxy** securely routes queries to the **Google Gemini API**, enabling the "Ask Buddy" chatbot to answer hyper-specific questions without exposing API keys.
5. **Offline Resilience:** A Service Worker (`sw.js`) caches essential assets using a cache-first strategy with network fallback, keeping core features accessible without an internet connection.

---

### How the solution works

1. **Installation:**
   - Ensure you have Node.js installed.
   - Clone the repository and run `npm install` in the project directory.
   - Create a `.env` file in the root directory: `GEMINI_API_KEY=your_actual_key_here`

2. **Starting the App Locally:**
   - Run `node server.js` to boot the backend proxy and serve the static files.
   - Open your browser to `http://localhost:8080/`

3. **Cloud Deployment:**
   - The application is containerized via `Dockerfile` and optimized for Google Cloud Run.
   - The backend auto-detects the `PORT` environment variable provided by the host.

4. **Using Ballot Buddy:**
   - **Language Switcher:** Select your language from the top navigation bar. The entire interface — guide, timelines, quiz, and chat — adapts instantly.
   - **My Ballot:** Click "🗳️ My Ballot" in the nav to preview candidates and key measures for your state.
   - **Regional Timelines:** Use the "Select your Region" dropdown to filter election schedules by state.
   - **Interactive Guide:** Click "Start Guide". Answer two quick questions to receive a personalized voter walkthrough.
   - **Ask Buddy:** Click the floating chat button to ask natural language questions in your language.
   - **Read Aloud:** Click 🔊 on any bot message, guide step, or timeline card. Click again to stop.
   - **Share:** Click the saffron "Share" button in the nav to share the app via the native share dialog or clipboard.
   - **Knowledge Check:** Scroll to the Timelines section and click "Take Quiz" in the nav.

---

### Key Files

| File | Purpose |
|---|---|
| `index.html` | App shell, navbar, modals, and section layout |
| `main.js` | All app logic — translations, guide, quiz, chatbot, TTS, ballot preview, share |
| `style.css` | Complete design system — theme tokens, components, animations |
| `sw.js` | Service Worker for offline caching |
| `server.js` | Node.js/Express backend proxy for the Gemini API |
| `Dockerfile` | Container config for Cloud Run deployment |

---

### Assumptions made

- Assumed the user is looking for upcoming **2026 Assembly Election data** (West Bengal, Tamil Nadu, Maharashtra, Delhi).
- Assumed the user provides their own valid Gemini API key (via `.env` or environment variables).
- Assumed the target demographic includes a mix of first-time voters (Form 6) and existing voters (Form 8 or polling assistance).
- Assumed modern browser support (ES Modules, Fetch API, CSS Grid/Flexbox, Web Share API, SpeechSynthesis).
- Ballot data (candidates, measures) is illustrative/educational and should be verified against official ECI sources before elections.

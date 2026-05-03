# Ballot Buddy | Indian Election Assistant 🇮🇳

**Live Deployment:** [https://ballotbuddy-843080848499.asia-south1.run.app/](https://ballotbuddy-843080848499.asia-south1.run.app/)

Ballot Buddy is a formal, multilingual, and highly interactive web platform designed to simplify the complex Indian electoral process for citizens. It provides authoritative, government-standard educational content regarding voter registration, EVM/VVPAT mechanics, and election hierarchy.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Vanilla HTML5, CSS3, JavaScript (ES6+) |
| **Backend** | Node.js + Express.js |
| **AI / ML** | Google Gemini 2.5 Flash API (text + multimodal) |
| **Cloud Platform** | Google Cloud Run (containerized, auto-scaling) |
| **Containerization** | Docker |
| **Maps** | Leaflet.js |
| **Fonts** | Inter + Outfit (Google Fonts, async loaded) |
| **PWA** | Service Worker (cache-first offline strategy) |
| **Speech** | Web Speech API (SpeechSynthesis + SpeechRecognition) |

---

## Security

All sensitive credentials are managed exclusively through **environment variables** and are **never hard-coded** into the source code.

- **`GEMINI_API_KEY`** is stored in a `.env` file locally (excluded from version control via `.gitignore`) and injected at runtime via `process.env.GEMINI_API_KEY` in `server.js`.
- **API calls to Google Gemini are proxied server-side** via a Node.js/Express backend. The frontend never holds or transmits the API key directly — all AI requests go through `/api/chat` and `/api/summarize` endpoints on the server.
- On **Google Cloud Run**, the key is set as a [Secret Manager](https://cloud.google.com/secret-manager) environment variable — not stored in the container image.
- The `.gitignore` explicitly excludes `.env` files to prevent accidental key exposure in the repository.

```bash
# .env (local development only — never committed)
GEMINI_API_KEY=your_actual_key_here
```

---

## Prompt Engineering Strategy

BallotBuddy uses a carefully structured **system instruction** to keep the Gemini model on-topic and produce high-quality, neutral responses:

```javascript
const systemInstruction = `You are BallotBuddy, a neutral civic educator aligned with
the Election Commission of India (ECI) guidelines.

CRITICAL RULES:
1. LANGUAGE: Respond exclusively in the user's selected language.
2. TOPIC-LOCK: Only discuss Indian elections, voter registration, EVM/VVPAT,
   election timelines, candidates, and civic rights. Refuse all off-topic queries.
3. NEUTRALITY: Never favour or criticize any party, candidate, or ideology.
4. ACCURACY: State clearly when a specific fact is unknown — never hallucinate.
5. FORMAT: Keep answers under 150 words. Use bullet points for lists.`;
```

### Key techniques used:
| Technique | Implementation |
|---|---|
| **Role Assignment** | Model is defined as a "neutral civic educator" aligned with ECI — sets the persona and authority |
| **Topic-Locking** | Explicit `TOPIC-LOCK` rule enumerates permitted topics and mandates refusal of all others |
| **Context Injection** | Live site data (timelines, constituency info) is appended to the system instruction each request |
| **Language Enforcement** | Multilingual output is mandated in the same instruction — ensures responses match the user's UI language |
| **Neutrality Guardrail** | Explicit rule prevents the model from expressing political opinions or bias |
| **Format Control** | Word limit and bullet-point instructions prevent verbose or hallucinated responses |

---

## Chosen Vertical
**Election Process Education**

---

## Features

| Feature | Description |
|---|---|
| 🌐 **Multilingual Support** | Full UI in **English, Hindi, Bengali, Tamil, Telugu** with instant switching |
| 🤖 **AI Chatbot (Ask Buddy)** | Powered by **Google Gemini 1.5 Flash** with context-aware responses and local FAQ fallback |
| 📍 **Find Your Booth** | PIN code search tool to locate designated polling stations |
| 📋 **Interactive Guide** | Personalized 6-step voter guide based on first-time/returning voter profile |
| 🗳️ **Know Your Candidate** | **Interactive Leaflet Map** to explore candidates, assets, and criminal records |
| 🗳️ **My Ballot Preview** | State-specific ballot preview for WB, TN, MH, DL |
| ✨ **Manifesto Summarizer** | **AI-powered** side-by-side comparison of party promises |
| 🏅 **Democracy Badges** | **AI Vision (Multimodal)** verification of inked fingers for voter badges |
| 🔊 **Multilingual TTS** | Text-to-Speech for all chatbot messages, guide steps, and timelines |
| 📅 **Regional Timelines** | Filterable election schedules by state |
| 📖 **Why Your Vote Matters** | Interactive slideshow of real Indian elections decided by 1–44 votes |
| 📶 **Offline Mode** | Service Worker caches core assets for low-connectivity areas |
| 🧠 **Knowledge Quiz** | Multilingual quiz with instant feedback |
| 🔍 **Election Glossary Search** | Instant keyword search for Indian electoral terms and definitions |
| 🔔 **Smart Election Reminders** | Set notifications for specific regional election dates with one click |
| 🛡️ **Bias-Proof AI** | Advanced system prompting ensures 100% political neutrality and fact-checked responses |

---

## Code Quality

### Error Handling
All API calls are wrapped in `try-catch` blocks with contextual error messages:

```javascript
try {
  const result = await model.generateContent(message);
  const response = await result.response;
  res.json({ reply: response.text() });
} catch (error) {
  // Specific handling for rate limits (429), auth errors (401/403), and generic failures
  console.error("Error communicating with Gemini API:", error.message);
  res.status(statusCode).json({ error: errorMessage });
}
```

### Code Comments
Key functions are documented with JSDoc-style comments explaining their purpose:
- **`/api/chat`** — Routes user queries through the Gemini API with topic-locked system instruction
- **`/api/summarize`** — Fetches neutral manifesto comparisons from Gemini in structured JSON format
- **`/api/verify-badge`** — Sends multimodal prompt to Gemini Vision to verify inked finger photos
- **`/api/glossary`** — (Optional) AI-powered fallback for election terminology

---

## Unique Selling Points (USPs)

1. **Hyper-Localized UX:** Unlike generic civic tools, BallotBuddy adapts its entire interface, timelines, and candidate data to the user's specific state (WB, TN, MH, DL).
2. **AI-First Civic Education:** Leverages Gemini's multimodal capabilities to not just answer questions, but verify real-world civic actions (inked finger verification).
3. **Accessibility Without Compromise:** Combines multilingual support (5 languages) with screen-reader optimization and integrated Text-to-Speech (TTS) for non-literate or visually impaired users.
4. **Resilient Architecture:** Implements a PWA strategy with Service Workers and local fallbacks, ensuring voters in low-connectivity areas still have access to the Interactive Voter Guide.

## Accessibility

BallotBuddy implements WCAG 2.1 AA accessibility standards:

- ✅ `<html lang="en">` declared on all pages
- ✅ All icon buttons have descriptive `aria-label` attributes (menu, chat, close, send, navigation arrows)
- ✅ All form inputs have `aria-label` or associated `<label>` elements
- ✅ Dropdown menus use `aria-haspopup`, `aria-expanded`, and `role="menu"`
- ✅ Offline status announced via `role="status"` and `aria-live="polite"`
- ✅ Visually-hidden labels for screen-reader-only content
- ✅ Text-to-Speech support for all dynamic content sections

---

## How It Works

1. **Installation:**
   - Ensure you have Node.js installed.
   - Clone the repository and run `npm install`.
   - Create a `.env` file: `GEMINI_API_KEY=your_actual_key_here`

2. **Starting Locally:**
   ```bash
   node server.js
   # Open http://localhost:8080/
   ```

3. **Build (CSS minification):**
   ```bash
   npm run build
   # Generates style.min.css (served automatically by server.js)
   ```

4. **Cloud Deployment:**
   - Containerized via `Dockerfile` for **Google Cloud Run**.
   - `PORT` environment variable is auto-detected from the Cloud Run runtime.

---

## Key Files

| File | Purpose |
|---|---|
| `index.html` | App shell, semantic layout, and accessible component containers |
| `main.js` | Core logic: translations, Leaflet map, AI integrations, TTS, state management |
| `style.css` | Design system: theme tokens, responsive layouts, animations (source) |
| `style.min.css` | Minified CSS served in production (~22% smaller than source) |
| `server.js` | Secure Node.js/Express backend proxy for Gemini API endpoints |
| `sw.js` | PWA Service Worker for offline asset caching |
| `Dockerfile` | Configuration for containerized Google Cloud Run deployment |

---

## Assumptions

- The app targets upcoming **2026 Assembly Elections** (West Bengal, Tamil Nadu, Maharashtra, Delhi).
- Users provide their own valid Gemini API key via `.env`.
- Target demographic includes first-time voters and returning citizens requiring polling assistance.
- Ballot data (candidates, affidavits, manifestos) is illustrative/educational, based on mock datasets.
- Modern browser support required for Web Share API and Speech Synthesis.

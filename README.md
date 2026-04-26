# Ballot Buddy | Indian Election Assistant 🇮🇳

Ballot Buddy is a formal, multilingual, and highly interactive web platform designed to simplify the complex Indian electoral process for citizens. It provides authoritative, government-standard educational content regarding voter registration, EVM/VVPAT mechanics, and election hierarchy.

---

### Chosen Vertical
**Election Process Education**

### Approach and Logic
The application was built with the following core principles in mind:
1.  **Lightweight & Accessible:** The frontend is built entirely using vanilla HTML, CSS, and JavaScript. This ensures incredibly fast load times and seamless cross-platform compatibility across desktops, tablets, and small mobile devices, without the overhead of heavy web frameworks.
2.  **Multilingual Architecture:** India's democratic strength lies in its diversity. A centralized, dynamic translation engine was built from scratch to support 5 major languages (**English, Hindi, Bengali, Tamil, and Telugu**), allowing the entire interface to toggle instantly.
3.  **Institutional Aesthetics:** The design language strictly adheres to a clean, formal "Light Theme" using standard Saffron, White, and Green accents to invoke authority and trust.
4.  **AI Integration for Edge Cases:** Instead of a rigid keyword system, a lightweight **Node.js/Express backend proxy** was implemented to securely route queries to the **Google Gemini API**. This empowers the "Ask Buddy" chatbot to dynamically answer hyper-specific user questions with formal accuracy, without exposing API keys to the frontend.

### How the solution works
1.  **Installation:** 
    - Ensure you have Node.js installed.
    - Clone the repository and run `npm install` in the project directory.
    - Create a `.env` file in the root directory and add your Gemini API key: `GEMINI_API_KEY=your_actual_key_here`.
2.  **Starting the App:**
    - Run `node server.js` to boot the backend proxy and serve the static files.
    - Open your browser to `http://localhost:3000/`.
3.  **Using Ballot Buddy:**
    - **Language Switcher:** Select your preferred language from the top-right navigation bar. The entire interface, including AI chat, will adapt.
    - **Interactive Guide:** Click "Start Guide". A modal will ask if you are a first-time voter and if you have an EPIC card to dynamically tailor the step-by-step guidance.
    - **Ask Buddy:** Click the floating chat button in the bottom right to ask natural language questions (e.g., "What is the Model Code of Conduct?" or "I lost my ID card, what do I do?"). The AI will respond securely based on the selected language.
    - **Knowledge Check:** Scroll to the Quiz section to test your understanding of the democratic process.

### Assumptions made
*   Assumed the user is looking for upcoming **2026 Assembly Election Data** (specifically incorporating placeholder timelines for West Bengal and Tamil Nadu).
*   Assumed the user runs the application locally and provides their own valid Gemini API key (via `.env`).
*   Assumed the target demographic includes a mix of first-time voters (requiring Form 6 assistance) and existing voters (requiring Form 8 or polling station assistance).
*   Assumed modern browser support (ES Modules, Fetch API, CSS Grid/Flexbox) for the frontend architecture.

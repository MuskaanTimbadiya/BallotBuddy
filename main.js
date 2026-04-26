// --- Translations (i18n) ---
const translations = {
  en: {
    logoText: "Ballot<span class='highlight'>Buddy</span>",
    navAbout: "About",
    navTimelines: "Timelines",
    navQuiz: "Knowledge Quiz",
    navGuide: "Access Guide",
    navShare: "Share",
    heroTitle: "A Guide to the <br/><span class='gradient-text'>Indian Elections</span>",
    heroSubtitle: "Navigate the world's largest democratic process with confidence. Learn how to register, verify your details, and cast your vote officially.",
    heroBtn: "Access the Guide",
    heroCard1: "Voter ID",
    heroCard2: "EVM System",
    heroCard3: "Cast Vote",
    aboutTitle: "About Ballot Buddy",
    aboutText1: "Democracy thrives when its citizens are informed and engaged. Ballot Buddy is an initiative designed to simplify the complex election process in India. Whether you are a first-time voter learning how to register, or an experienced citizen verifying your polling booth, this guide provides clear, actionable, and official information.",
    aboutText2: "Our objective is to ensure electoral participation is accessible to all eligible citizens, reinforcing the foundation of the world's largest democracy.",
    timelinesHeading: "Upcoming Election Timelines",
    onboardingTitle: "Personalize Your Guide",
    onboardingQ1: "Are you a first-time voter?",
    onboardingQ2: "Do you already possess a Voter ID (EPIC)?",
    btnYes: "Yes",
    btnNo: "No",
    btnBack: "Previous",
    btnContinue: "Continue",
    btnFinish: "Complete Guide",
    quizTitle: "Knowledge Check",
    chatTitle: "Election Assistant",
    chatGreeting: "Namaste. I am your Election Assistant. Please ask your questions regarding the voting process (e.g., 'lost ID', 'age criteria', 'Lok Sabha').",
    chatSugg1: "Lost Voter ID?",
    chatSugg2: "Voting Age?",
    chatSugg3: "Lok Sabha vs Vidhan Sabha?",
    chatPlaceholder: "Enter your query here...",
    footerText: "Created for informational purposes. For official details, visit the Election Commission of India website.",
    footerNavHead: "Navigation",
    footerHome: "Home",
    footerResources: "Resources",
    alertFinish: "You are fully prepared to exercise your democratic right. Jai Hind! 🇮🇳",
    selectRegionLabel: "Select your Region:",
    regionAll: "All India",
    regionWB: "West Bengal",
    regionTN: "Tamil Nadu",
    regionMH: "Maharashtra",
    regionDL: "Delhi",
    navMyBallot: "My Ballot",
    ballotTitle: "🗳️ My Ballot Preview",
    ballotSelectLabel: "Select your State:",
    ballotCandidatesHeading: "Candidates on Your Ballot",
    ballotMeasuresHeading: "Key Ballot Measures",
    ballotParty: "Party",
    ballotSymbol: "Symbol",
    timelines: [
      {
        id: "wb",
        title: "Kolkata Assembly Elections",
        content: `Official schedule for the West Bengal Assembly Elections 2026 (Kolkata Region):<ul><li>🗓️ <strong>Phase I (April 23, 2026):</strong> First phase of polling.</li><li>🗓️ <strong>Phase II (April 29, 2026):</strong> Second phase of polling.</li><li>⌚ <strong>Polling Hours:</strong> 7:00 AM to 6:00 PM.</li><li>📊 <strong>Counting of Votes:</strong> May 4, 2026.</li><li><small><em>Disclaimer: Please verify your specific constituency details on the ECI portal.</em></small></li></ul>`
      },
      {
        id: "tn",
        title: "Tamil Nadu Assembly Elections",
        content: `Official schedule for the Tamil Nadu Legislative Assembly Election 2026:<ul><li>🗓️ <strong>Polling Date:</strong> April 23, 2026 (Single phase across 234 constituencies).</li><li>📍 <strong>Nomination Deadline:</strong> April 6, 2026.</li><li>🏢 <strong>Authority:</strong> State Election Commission TN.</li><li>📝 <strong>Rules:</strong> Strict monitoring of cash-for-votes.</li><li><small><em>Disclaimer: Refer to official notifications.</em></small></li></ul>`
      },
      {
        id: "mh",
        title: "Maharashtra Local Body Elections",
        content: `Official schedule for the Maharashtra Municipal Corporation Elections 2026:<ul><li>🗓️ <strong>Polling Date:</strong> October 15, 2026.</li><li>🏢 <strong>Authority:</strong> State Election Commission (SEC) Maharashtra.</li><li>📝 <strong>Rules:</strong> Ward-wise candidate system applies.</li></ul>`
      },
      {
        id: "dl",
        title: "Delhi Legislative Assembly",
        content: `Official schedule for the Delhi Assembly Elections 2026:<ul><li>🗓️ <strong>Polling Date:</strong> February 8, 2026.</li><li>🏢 <strong>Authority:</strong> Chief Electoral Officer, Delhi.</li><li>📝 <strong>Rules:</strong> Full state model code of conduct enforcement.</li></ul>`
      }
    ],
    steps: [
      {
        id: "eligibility",
        title: "Step 1: Verify Eligibility",
        content: `Prior to voting, ensure you fulfill the criteria mandated by the Election Commission of India (ECI):<ul><li>🇮🇳 You must be a citizen of India.</li><li>🎂 You must be 18 years of age or older on the qualifying date (typically Jan 1st).</li><li>🏠 You must be an ordinary resident of the polling area where you wish to enroll.</li><li>✅ You must not be disqualified from enrolling as an elector under any law.</li></ul>`
      },
      {
        id: "register",
        title: "Step 2: Voter Registration (EPIC)",
        content: `Eligible citizens must register to obtain an Electors Photo Identity Card (EPIC).<ul><li>💻 <strong>Form 6:</strong> For new voters turning 18. Apply via the Voters' Services Portal (voters.eci.gov.in) or the <strong>Voter Helpline App</strong>.</li><li>🔄 <strong>Form 8:</strong> For shifting your residence or correcting details on your existing ID.</li><li>🏢 <strong>Offline Registration:</strong> Submit physical forms to your Electoral Registration Officer (ERO).</li></ul>`
      },
      {
        id: "verify",
        title: "Step 3: Electoral Roll Verification",
        content: `Possession of an EPIC does not guarantee voting rights. Your name must be present on the current electoral roll.<ul><li>🔍 Verify your inclusion online at <strong>electoralsearch.eci.gov.in</strong>.</li><li>📞 If omitted, contact your Booth Level Officer (BLO) immediately.</li><li>📍 Note your designated polling booth and serial number for election day.</li></ul>`
      },
      {
        id: "candidates",
        title: "Step 4: Candidate Information",
        content: `Voters are encouraged to make informed decisions.<ul><li>📱 Utilize the <strong>KYC (Know Your Candidate) Application</strong> provided by the ECI.</li><li>📄 Review candidate affidavits detailing educational qualifications, assets, and any criminal antecedents.</li><li>📖 Evaluate the manifestos published by participating political parties.</li></ul>`
      },
      {
        id: "booth",
        title: "Step 5: Polling Station Procedures",
        content: `Guidelines for election day conduct at the polling station:<ul><li>🚪 Carry your Voter ID (EPIC) or an ECI-approved alternative photo ID (e.g., Aadhaar, Passport).</li><li>🚫 <strong>Prohibited Items:</strong> Mobile phones and recording devices are strictly forbidden inside the booth.</li><li>✍️ Officials will verify your identity, apply indelible ink to your finger, and obtain your signature.</li></ul>`
      },
      {
        id: "evm",
        title: "Step 6: Voting via EVM/VVPAT",
        content: `Procedure for casting your ballot securely using Electronic Voting Machines:<ul><li>🗳️ Proceed to the voting compartment containing the EVM.</li><li>🔵 Press the <strong>blue button</strong> corresponding to your preferred candidate's symbol. Wait for the red indicator light.</li><li>👀 Observe the <strong>VVPAT (Voter Verifiable Paper Audit Trail)</strong> machine. A printed slip verifying your choice will be visible through the glass for 7 seconds before securely dropping into the sealed ballot box. This ensures your vote was recorded exactly as you intended.</li><li>🎉 Your vote has been officially recorded.</li></ul>`
      }
    ],
    faqs: [
      { q: ["mcc", "model code of conduct", "code of conduct", "rules for parties", "model code"], a: "The Model Code of Conduct (MCC) is a set of guidelines issued by the Election Commission of India for candidates and political parties during elections to ensure free and fair polling." },
      { q: ["lok sabha", "vidhan sabha", "panchayat", "municipal", "hierarchy", "types of elections", "difference"], a: "India has three main tiers of elections: Lok Sabha (National elections to elect Members of Parliament and the Prime Minister's government), Vidhan Sabha (State Assembly elections to elect MLAs and the Chief Minister), and Local Body elections (Panchayats for villages, Municipalities for cities)." },
      { q: ["lost", "don't have id", "no voter id", "misplaced", "epic", "forgot", "documents", "alternative", "without voter id"], a: "If your EPIC is lost, you may still vote provided your name is on the electoral roll. You must present an approved alternative photo ID, such as an Aadhaar card, PAN card, or Passport, at the polling station." }
    ],
    quiz: [
      { q: "What is the minimum qualifying age for voting in India?", options: ["16 Years", "18 Years", "21 Years"], ans: 1 },
      { q: "Which electronic system is currently utilized for casting votes?", options: ["Paper Ballots", "EVM (Electronic Voting Machine)", "Digital Tablets"], ans: 1 },
      { q: "Which document conclusively verifies your right to vote at a specific booth?", options: ["Aadhaar Card", "Passport", "The Electoral Roll"], ans: 2 },
      { q: "What is the function of the VVPAT system?", options: ["Voter Registration", "Prints a verifiable paper audit trail slip", "Electronic Vote Tabulation"], ans: 1 },
    ],
    quizResultScore: "Score:",
    quizResultPerfect: "Excellent. You demonstrate a thorough understanding of the electoral process.",
    quizResultGood: "Satisfactory. Please refer to the guide for comprehensive details.",
    quizBtnClose: "Close Quiz"
  },
  hi: {
    logoText: "बैलेट<span class='highlight'>बडी</span>",
    navAbout: "परिचय",
    navTimelines: "समय सीमा",
    navQuiz: "ज्ञान प्रश्नोत्तरी",
    navGuide: "एक्सेस गाइड",
    navShare: "शेयर करें",
    heroTitle: "भारतीय चुनावों के लिए <br/><span class='gradient-text'>एक गाइड</span>",
    heroSubtitle: "आत्मविश्वास के साथ दुनिया की सबसे बड़ी लोकतांत्रिक प्रक्रिया को समझें। पंजीकरण कैसे करें, अपने विवरणों को सत्यापित कैसे करें और आधिकारिक तौर पर अपना वोट कैसे डालें, यह जानें।",
    heroBtn: "गाइड देखें",
    alertFinish: "आप अपने लोकतांत्रिक अधिकार का प्रयोग करने के लिए पूरी तरह तैयार हैं। जय हिंद! 🇮🇳",
    chatGreeting: "नमस्ते। मैं आपका चुनाव सहायक हूँ। कृपया मतदान प्रक्रिया के बारे में अपने प्रश्न पूछें (जैसे, 'खोया हुआ आईडी', 'आयु मानदंड', 'लोकसभा')।",
    quizResultScore: "स्कोर:",
    quizResultPerfect: "उत्कृष्ट। आप चुनावी प्रक्रिया की पूरी समझ प्रदर्शित करते हैं।",
    quizResultGood: "संतोषजनक। विस्तृत जानकारी के लिए कृपया गाइड देखें।",
    quizBtnClose: "क्विज बंद करें",
    timelines: [
      { id: "kolkata", title: "कोलकाता विधानसभा चुनाव", content: "पश्चिम बंगाल विधानसभा चुनाव 2026: 23 अप्रैल और 29 अप्रैल।" },
      { id: "tamilnadu", title: "तमिलनाडु विधानसभा चुनाव", content: "तमिलनाडु विधानसभा चुनाव 2026: 23 अप्रैल।" }
    ],
    steps: [
      { title: "चरण 1: पात्रता सत्यापित करें", content: "आप भारत के नागरिक होने चाहिए और आपकी आयु 18 वर्ष या उससे अधिक होनी चाहिए।" },
      { title: "चरण 2: मतदाता पंजीकरण", content: "मतदाता फोटो पहचान पत्र (EPIC) प्राप्त करने के लिए पंजीकरण करें।" }
    ],
    quiz: [
      { q: "भारत में मतदान के लिए न्यूनतम आयु क्या है?", options: ["16 वर्ष", "18 वर्ष", "21 वर्ष"], ans: 1 },
      { q: "वर्तमान में वोट डालने के लिए किस इलेक्ट्रॉनिक प्रणाली का उपयोग किया जाता है?", options: ["पेपर बैलेट", "ईवीएम", "डिजिटल टैबलेट"], ans: 1 }
    ]
  },
  bn: {
    logoText: "ব্যালট<span class='highlight'>বাডি</span>",
    navAbout: "সম্পর্কে",
    navTimelines: "সময়সীমা",
    navQuiz: "জ্ঞান কুইজ",
    navGuide: "অ্যাক্সেস গাইড",
    navShare: "শেয়ার করুন",
    heroTitle: "ভারতীয় নির্বাচনের জন্য <br/><span class='gradient-text'>একটি গাইড</span>",
    heroSubtitle: "বিশ্বের বৃহত্তম গণতান্ত্রিক প্রক্রিয়া আত্মবিশ্বাসের সাথে বুঝুন। কীভাবে নিবন্ধন করবেন, আপনার বিবরণ যাচাই করবেন এবং আনুষ্ঠানিকভাবে আপনার ভোট দেবেন তা জানুন।",
    heroBtn: "গাইড দেখুন",
    alertFinish: "আপনি আপনার গণতান্ত্রিক অধিকার প্রয়োগ করার জন্য সম্পূর্ণ প্রস্তুত। জয় হিন্দ! 🇮🇳",
    chatGreeting: "নমস্কার। আমি আপনার নির্বাচন সহায়ক। ভোটদান প্রক্রিয়া সম্পর্কে আপনার প্রশ্ন জিজ্ঞাসা করুন।",
    quizResultScore: "স্কোর:",
    quizResultPerfect: "চমৎকার। আপনি নির্বাচনী প্রক্রিয়া সম্পর্কে পুঙ্খানুপুঙ্খ ধারণা প্রদর্শন করেছেন।",
    quizResultGood: "সন্তোষজনক। বিস্তারিত জানার জন্য গাইডটি দেখুন।",
    quizBtnClose: "কুইজ বন্ধ করুন",
    timelines: [
      { title: "কলকাতা বিধানসভা নির্বাচন", content: "২০২৬ সালের পশ্চিমবঙ্গ বিধানসভা নির্বাচনের অফিসিয়াল সময়সূচী: ২৩ এপ্রিল এবং ২৯ এপ্রিল।" }
    ],
    steps: [
      { title: "ধাপ ১: যোগ্যতা যাচাই করুন", content: "আপনি ভারতের নাগরিক এবং ১৮ বছর বা তার বেশি বয়সী হতে হবে।" }
    ],
    quiz: [
      { q: "ভারতে ভোট দেওয়ার জন্য সর্বনিম্ন বয়স কত?", options: ["১৬ বছর", "১৮ বছর", "২১ বছর"], ans: 1 }
    ]
  },
  ta: {
    logoText: "பேலட்<span class='highlight'>பட்யீ</span>",
    navAbout: "பற்றி",
    navTimelines: "காலக்கெடு",
    navQuiz: "அறிவு வினாடி வினா",
    navGuide: "வழிகாட்டி",
    navShare: "பகிர்க",
    heroTitle: "இந்தியத் தேர்தல்களுக்கான <br/><span class='gradient-text'>ஒரு வழிகாட்டி</span>",
    heroSubtitle: "உலகின் மிகப்பெரிய ஜனநாயக செயல்முறையை நம்பிக்கையுடன் அணுகுங்கள்.",
    heroBtn: "வழிகாட்டியை அணுகவும்",
    alertFinish: "உங்கள் ஜனநாயக உரிமையை நிலைநாட்ட நீங்கள் முழுமையாக தயாராக உள்ளீர்கள். ஜெய் ஹிந்த்! 🇮🇳",
    chatGreeting: "வணக்கம். நான் உங்கள் தேர்தல் உதவியாளர்.",
    quizResultScore: "மதிப்பெண்:",
    quizResultPerfect: "மிக நன்று. தேர்தல் செயல்முறை குறித்த முழுமையான புரிதலை நீங்கள் கொண்டுள்ளீர்கள்.",
    quizResultGood: "திருப்திகரம். கூடுதல் விவரங்களுக்கு வழிகாட்டியைப் பார்க்கவும்.",
    quizBtnClose: "மூடு",
    timelines: [
      { title: "கொல்கத்தா சட்டசபை தேர்தல்கள்", content: "மேற்கு வங்க சட்டசபை தேர்தல்கள் 2026: ஏப்ரல் 23 மற்றும் ஏப்ரல் 29." }
    ],
    steps: [
      { title: "படி 1: தகுதியை சரிபார்க்கவும்", content: "நீங்கள் இந்திய குடிமகனாகவும் 18 வயது பூர்த்தியடைந்தவராகவும் இருக்க வேண்டும்." }
    ],
    quiz: [
      { q: "இந்தியாவில் வாக்களிக்க குறைந்தபட்ச வயது என்ன?", options: ["16 வயது", "18 வயது", "21 வயது"], ans: 1 }
    ]
  },
  te: {
    logoText: "బ్యాలెట్<span class='highlight'>బడ్డీ</span>",
    navAbout: "గురించి",
    navTimelines: "సమయపాలన",
    navQuiz: "జ్ఞాన క్విజ్",
    navGuide: "గైడ్",
    navShare: "షేర్ చేయండి",
    heroTitle: "భారత ఎన్నికల కోసం <br/><span class='gradient-text'>ఒక గైడ్</span>",
    heroSubtitle: "ప్రపంచంలోని అతిపెద్ద ప్రజాస్వామ్య ప్రక్రియను నమ్మకంతో అర్థం చేసుకోండి.",
    heroBtn: "గైడ్ చూడండి",
    alertFinish: "మీ ప్రజాస్వామ్య హక్కును వినియోగించుకోవడానికి మీరు పూర్తిగా సిద్ధంగా ఉన్నారు. జై హింద్! 🇮🇳",
    chatGreeting: "నమస్తే. నేను మీ ఎన్నికల సహాయకుడిని.",
    quizResultScore: "స్కోరు:",
    quizResultPerfect: "అద్భుతం. ఎన్నికల ప్రక్రియపై మీకు పూర్తి అవగాహన ఉంది.",
    quizResultGood: "సంతృప్తికరం. మరిన్ని వివరాల కోసం గైడ్‌ను చూడండి.",
    quizBtnClose: "మూసివేయి",
    timelines: [
      { title: "కోల్‌కతా అసెంబ్లీ ఎన్నికలు", content: "పశ్చిమ బెంగాల్ అసెంబ్లీ ఎన్నికలు 2026: ఏప్రిల్ 23 మరియు ఏప్రిల్ 29." }
    ],
    steps: [
      { title: "దశ 1: అర్హతను తనిఖీ చేయండి", content: "మీరు భారత పౌరులై ఉండాలి మరియు 18 ఏళ్లు నిండి ఉండాలి." }
    ],
    quiz: [
      { q: "భారతదేశంలో ఓటు వేయడానికి కనీస వయస్సు ఎంత?", options: ["16 ఏళ్లు", "18 ఏళ్లు", "21 ఏళ్లు"], ans: 1 }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'en';
  let currentSpokenText = "";

  function toggleSpeech(textToRead) {
    if (window.speechSynthesis.speaking && currentSpokenText === textToRead) {
      window.speechSynthesis.cancel();
      currentSpokenText = "";
      return;
    }
    window.speechSynthesis.cancel();
    currentSpokenText = textToRead;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    const langMap = { "en": "en-IN", "hi": "hi-IN", "bn": "bn-IN", "ta": "ta-IN", "te": "te-IN" };
    utterance.lang = langMap[currentLang] || "en-IN";
    utterance.onend = () => { if (currentSpokenText === textToRead) currentSpokenText = ""; };
    window.speechSynthesis.speak(utterance);
  }

  // --- 1. Language Toggle Logic ---
  const langSelect = document.getElementById('lang-select');

  function updateI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    const chatInput = document.getElementById('chat-input');
    if (chatInput) chatInput.placeholder = translations[currentLang].chatPlaceholder || "Enter your query...";
    
    renderTimelines();
  }

  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      currentLang = e.target.value;
      updateI18n();
    });
  }

  // --- 2. Onboarding Logic ---
  const startGuideBtn = document.getElementById('start-guide-btn');
  const heroSection = document.querySelector('.hero');
  const guideSection = document.getElementById('guide');
  const onboardingModal = document.getElementById('onboarding-modal');
  const onboardingOptions = document.querySelectorAll('.option-btn');
  
  let userProfile = { firstTime: null, hasEpic: null };
  let activeSteps = [];
  let currentStepIndex = 0;

  if (startGuideBtn) {
    startGuideBtn.addEventListener('click', () => {
      onboardingModal.classList.remove('hidden');
    });
  }

  onboardingOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.getAttribute('data-answer');
      const isQ1 = btn.closest('#q-first-time') !== null;

      if (isQ1) {
        userProfile.firstTime = (answer === 'yes');
        document.getElementById('q-first-time').classList.add('hidden');
        document.getElementById('q-has-id').classList.remove('hidden');
      } else {
        userProfile.hasEpic = (answer === 'yes');
        onboardingModal.classList.add('hidden');
        // Reset modal for next time
        document.getElementById('q-first-time').classList.remove('hidden');
        document.getElementById('q-has-id').classList.add('hidden');
        generateGuide();
      }
    });
  });

  function generateGuide() {
    activeSteps = [];
    const allSteps = translations[currentLang].steps || translations['en'].steps;

    if (userProfile.firstTime) {
      activeSteps.push(allSteps[0]);
      activeSteps.push(allSteps[1]);
    } else if (!userProfile.hasEpic) {
      activeSteps.push(allSteps[1]);
    }

    activeSteps.push(allSteps[2]);
    activeSteps.push(allSteps[3]);
    activeSteps.push(allSteps[4]);
    activeSteps.push(allSteps[5]);

    heroSection.classList.add('hidden');
    document.getElementById('about').classList.add('hidden');
    document.getElementById('timelines').classList.add('hidden');
    guideSection.classList.remove('hidden');
    
    currentStepIndex = 0;
    goToStep(0);
  }

  // --- 3. Timeline Logic ---
  const regionSelect = document.getElementById('region-select');
  if (regionSelect) {
    regionSelect.addEventListener('change', renderTimelines);
  }

  function renderTimelines() {
    const timelinesGrid = document.getElementById('timelines-container');
    if (!timelinesGrid) return;
    
    timelinesGrid.innerHTML = '';
    const timelineData = translations[currentLang].timelines || translations['en'].timelines;
    
    let selectedRegion = regionSelect ? regionSelect.value : 'all';
    const filteredData = selectedRegion === 'all' 
      ? timelineData 
      : timelineData.filter(item => item.id === selectedRegion);

    filteredData.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'glass-card timeline-card';
      card.innerHTML = `
        <h3 style="display:flex; justify-content:space-between; align-items:center;">
          ${item.title}
          <button class="tts-btn" id="timeline-tts-${idx}" aria-label="Read aloud" title="Read aloud" style="background:none;border:none;font-size:1.2rem;cursor:pointer;">🔊</button>
        </h3>
        <div>${item.content}</div>
      `;
      timelinesGrid.appendChild(card);
      
      setTimeout(() => {
        const btn = document.getElementById(`timeline-tts-${idx}`);
        if (btn) {
          btn.addEventListener('click', () => {
            const textToRead = item.title + ". " + item.content.replace(/<[^>]*>?/gm, '');
            toggleSpeech(textToRead);
          });
        }
      }, 0);
    });
  }

  // Guide Navigation
  const stepContainer = document.getElementById('steps-container');
  const progressBar = document.getElementById('progress-bar');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  function goToStep(index) {
    const step = activeSteps[index];
    stepContainer.innerHTML = `
      <div class="step-card glass-card active">
        <div class="step-number">${index + 1}</div>
        <h2 class="step-title" style="display:flex; justify-content:space-between; align-items:center;">
          ${step.title}
          <button class="tts-btn" id="step-tts-btn" aria-label="Read aloud" title="Read aloud" style="background:none;border:none;font-size:1.2rem;cursor:pointer;">🔊</button>
        </h2>
        <div class="step-content">${step.content}</div>
      </div>
    `;

    const ttsBtn = document.getElementById('step-tts-btn');
    if (ttsBtn) {
      ttsBtn.addEventListener('click', () => {
        const titleText = step.title;
        const contentText = step.content.replace(/<[^>]*>?/gm, ''); // Remove HTML tags
        const fullText = titleText + ". " + contentText;
        toggleSpeech(fullText);
      });
    }

    if (index === 0) prevBtn.classList.add('hidden');
    else prevBtn.classList.remove('hidden');

    nextBtn.innerText = index === activeSteps.length - 1 ? translations[currentLang].btnFinish : translations[currentLang].btnContinue;
    
    const progress = ((index + 1) / activeSteps.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    currentStepIndex = index;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStepIndex < activeSteps.length - 1) {
        goToStep(currentStepIndex + 1);
      } else {
        alert(translations[currentLang].alertFinish);
        guideSection.classList.add('hidden');
        heroSection.classList.remove('hidden');
        document.getElementById('about').classList.remove('hidden');
        document.getElementById('timelines').classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStepIndex > 0) goToStep(currentStepIndex - 1);
    });
  }

  // Global Navigation Logic
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#guide' || targetId === '#') return;

      e.preventDefault();
      guideSection.classList.add('hidden');
      heroSection.classList.remove('hidden');
      document.getElementById('about').classList.remove('hidden');
      document.getElementById('timelines').classList.remove('hidden');

      const targetElement = document.querySelector(targetId);
      if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // --- 4. Chatbot Q&A ---
  const chatFab = document.getElementById('chat-fab');
  const chatWindow = document.getElementById('chat-window');
  const closeChat = document.getElementById('close-chat');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatMessages = document.getElementById('chat-messages');

  let chatInitialized = false;

  function addMessage(text, isBot) {
    const msg = document.createElement('div');
    msg.className = isBot ? 'bot-msg' : 'user-msg';
    if (isBot) {
      msg.innerHTML = text.replace(/\n/g, '<br/>');
      
      // Add TTS button for accessibility
      const speakBtn = document.createElement('button');
      speakBtn.innerHTML = '🔊';
      speakBtn.className = 'tts-btn';
      speakBtn.setAttribute('aria-label', 'Read aloud');
      speakBtn.setAttribute('title', 'Read aloud');
      speakBtn.style.marginLeft = '8px';
      speakBtn.style.background = 'none';
      speakBtn.style.border = 'none';
      speakBtn.style.cursor = 'pointer';
      
      speakBtn.onclick = () => {
        const plainText = text.replace(/<[^>]*>?/gm, '');
        toggleSpeech(plainText);
      };
      
      msg.appendChild(speakBtn);
    } else {
      msg.innerText = text;
    }
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  async function handleChat() {
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, false);
    chatInput.value = '';

    const typingMsg = document.createElement('div');
    typingMsg.className = 'bot-msg typing-indicator';
    typingMsg.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(typingMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        const langMap = { "en": "English", "hi": "Hindi", "bn": "Bengali", "ta": "Tamil", "te": "Telugu" };
        const timelineData = translations[currentLang].timelines || translations['en'].timelines;
        const contextData = timelineData.map(t => `${t.title}: ${t.content.replace(/<[^>]*>?/gm, "")}`).join("\n\n");
        
        const response = await fetch("/api/chat", { 
            method: "POST", 
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify({ message: text, language: langMap[currentLang], context: contextData }) 
        });

        if (typingMsg.parentNode) chatMessages.removeChild(typingMsg);

        const data = await response.json();
        if (!response.ok || data.error) {
            addMessage(data.error || "An unknown error occurred.", true);
        } else {
            addMessage(data.reply, true);
        }
    } catch (error) {
        console.error("Chat error:", error);
        if (typingMsg.parentNode) chatMessages.removeChild(typingMsg);
        const errorMsgs = {
            en: "Sorry, I am having trouble connecting to the database.",
            hi: "क्षमा करें, मुझे डेटाबेस से जुड़ने में समस्या आ रही है।",
            bn: "দুঃখিত, ডাটাবেসের সাথে সংযোগ করতে সমস্যা হচ্ছে।",
            ta: "மன்னிக்கவும், தரவுத்தளத்துடன் இணைப்பதில் சிக்கல் உள்ளது.",
            te: "క్షమించండి, డేటాబేస్కు కనెక్ట్ చేయడంలో సమస్య ఉంది."
        };
        addMessage(errorMsgs[currentLang] || errorMsgs.en, true);
    }
  }

  if (chatFab) {
    chatFab.addEventListener('click', () => {
      chatWindow.classList.toggle('hidden');
      if (!chatWindow.classList.contains('hidden') && !chatInitialized) {
          chatMessages.innerHTML = '';
          addMessage(translations[currentLang].chatGreeting, true);
          chatInitialized = true;
      }
    });
  }

  if (closeChat) {
    closeChat.addEventListener('click', () => chatWindow.classList.add('hidden'));
  }

  if (chatSend) {
    chatSend.addEventListener('click', handleChat);
  }

  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') handleChat(); });
  }

  document.querySelectorAll('.suggestion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      chatInput.value = btn.innerText;
      handleChat();
    });
  });

  // --- 5. Quiz Logic ---
  const navQuizBtn = document.getElementById('nav-quiz-btn');
  const quizModal = document.getElementById('quiz-modal');
  const closeQuizBtn = document.getElementById('close-quiz');
  const quizContainer = document.getElementById('quiz-container');

  let currentQuizQ = 0;
  let score = 0;

  function renderQuiz() {
    const currentQuizData = translations[currentLang].quiz || translations['en'].quiz;
    if (currentQuizQ >= currentQuizData.length) {
      quizContainer.innerHTML = `
        <div class="quiz-result">
          <h3>🎉 ${translations[currentLang].quizResultScore} ${score}/${currentQuizData.length}</h3>
          <p>${score === currentQuizData.length ? translations[currentLang].quizResultPerfect : translations[currentLang].quizResultGood}</p>
          <button class="btn-primary" style="margin-top:20px" onclick="document.getElementById('quiz-modal').classList.add('hidden')">${translations[currentLang].quizBtnClose}</button>
        </div>
      `;
      return;
    }

    const q = currentQuizData[currentQuizQ];
    let html = `<div class="quiz-question">${currentQuizQ + 1}. ${q.q}</div><div class="quiz-options">`;
    q.options.forEach((opt, i) => {
      html += `<div class="quiz-option" data-idx="${i}">${opt}</div>`;
    });
    html += `</div>`;
    quizContainer.innerHTML = html;

    document.querySelectorAll('.quiz-option').forEach(optEl => {
      optEl.addEventListener('click', function() {
        const selected = parseInt(this.getAttribute('data-idx'));
        if (selected === q.ans) {
          this.classList.add('correct');
          score++;
        } else {
          this.classList.add('wrong');
          document.querySelector(`.quiz-option[data-idx="${q.ans}"]`).classList.add('correct');
        }
        document.querySelectorAll('.quiz-option').forEach(el => el.style.pointerEvents = 'none');
        setTimeout(() => {
          currentQuizQ++;
          renderQuiz();
        }, 1200);
      });
    });
  }

  if (navQuizBtn) {
    navQuizBtn.addEventListener('click', () => {
      currentQuizQ = 0;
      score = 0;
      quizModal.classList.remove('hidden');
      renderQuiz();
    });
  }

  if (closeQuizBtn) {
    closeQuizBtn.addEventListener('click', () => quizModal.classList.add('hidden'));
  }

  // Share Feature
  const shareBtn = document.getElementById('share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Ballot Buddy | Indian Election Assistant',
            text: 'Check out Ballot Buddy, your interactive guide to understanding the Indian election process!',
            url: window.location.href,
          });
          console.log('Successfully shared');
        } catch (error) {
          console.error('Error sharing', error);
        }
      } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(window.location.href);
        const originalText = shareBtn.innerHTML;
        shareBtn.innerHTML = 'Link Copied! ✅';
        setTimeout(() => { shareBtn.innerHTML = originalText; }, 2000);
      }
    });
  }

  // --- My Ballot Feature ---
  const ballotData = {
    wb: {
      election: "West Bengal Assembly Election 2026",
      constituency: "Kolkata South",
      pollingDate: "April 23 & 29, 2026",
      candidates: [
        { name: "Mamata Banerjee",       party: "Trinamool Congress (TMC)", symbol: "🌺", info: "Incumbent CM, seeking re-election in Bhowanipore constituency." },
        { name: "Suvendu Adhikari",     party: "Bharatiya Janata Party (BJP)", symbol: "💮", info: "Leader of Opposition, contesting from Nandigram." },
        { name: "Adhir Ranjan Chowdhury", party: "Indian National Congress (INC)", symbol: "✒️", info: "Senior Congress leader, contesting from Behrampore." },
      ],
      measures: [
        { title: "Kanyashree Expansion", desc: "Proposal to extend the girl-child welfare scheme benefits to include higher education grants." },
        { title: "Rural Job Guarantee", desc: "Vote on increased MGNREGS allocations for West Bengal districts." },
      ]
    },
    tn: {
      election: "Tamil Nadu Assembly Election 2026",
      constituency: "Chennai Central",
      pollingDate: "April 23, 2026",
      candidates: [
        { name: "M.K. Stalin",       party: "Dravida Munnetra Kazhagam (DMK)", symbol: "☀️", info: "Incumbent CM, seeking a second term." },
        { name: "Edappadi K. Palaniswami", party: "All India Anna DMK (AIADMK)", symbol: "🌊", info: "Leader of Opposition, contesting from Salem East." },
        { name: "Vijayakanth (DMDK)",  party: "Desiya Murpokku Dravida Kazhagam", symbol: "⚡", info: "DMDK candidate challenging in key constituencies." },
      ],
      measures: [
        { title: "Cauvery Water Sharing", desc: "Resolution on the inter-state river water sharing agreement with Karnataka." },
        { title: "Neet Exemption Bill", desc: "Vote on the TN state bill seeking permanent exemption from NEET for medical admissions." },
      ]
    },
    mh: {
      election: "Maharashtra Municipal Corporation Election 2026",
      constituency: "Mumbai Ward 42",
      pollingDate: "October 15, 2026",
      candidates: [
        { name: "Devendra Fadnavis",   party: "Bharatiya Janata Party (BJP)", symbol: "💮", info: "Incumbent CM, MahaYuti alliance leader." },
        { name: "Uddhav Thackeray",    party: "Shiv Sena (UBT)", symbol: "💠", info: "MVA alliance leader, former CM." },
        { name: "Nana Patole",         party: "Indian National Congress (INC)", symbol: "✒️", info: "Maharashtra Congress president, key MVA leader." },
      ],
      measures: [
        { title: "Mumbai Metro Expansion", desc: "Approval of Phase 3 metro expansion covering 35 new stations across suburban Mumbai." },
        { title: "Coastal Road Project", desc: "Vote on environmental clearances for the Mumbai Coastal Road Phase 2." },
      ]
    },
    dl: {
      election: "Delhi Legislative Assembly Election 2026",
      constituency: "New Delhi Constituency",
      pollingDate: "February 8, 2026",
      candidates: [
        { name: "Atishi Marlena",   party: "Aam Aadmi Party (AAP)", symbol: "🎟️", info: "Former Education Minister, key AAP leader." },
        { name: "Parvesh Verma",    party: "Bharatiya Janata Party (BJP)", symbol: "💮", info: "BJP's CM face for Delhi, contesting New Delhi seat." },
        { name: "Sandeep Dikshit",  party: "Indian National Congress (INC)", symbol: "✒️", info: "Congress Delhi president, former MP." },
      ],
      measures: [
        { title: "Free Electricity Subsidy", desc: "Vote on continuation of the 200-unit free electricity scheme for Delhi households." },
        { title: "Yamuna Cleanup Bill", desc: "Approval of the Rs. 8,000 crore Yamuna river rejuvenation project." },
      ]
    }
  };

  function renderBallot(region) {
    const data = ballotData[region];
    if (!data) return;
    const t = translations[currentLang] || translations['en'];
    document.getElementById('ballot-content').innerHTML = `
      <div class="ballot-meta">
        <span class="ballot-tag">${data.election}</span>
        <span class="ballot-tag ballot-tag-green">📍 ${data.constituency}</span>
        <span class="ballot-tag ballot-tag-orange">🗓️ ${data.pollingDate}</span>
      </div>

      <h3 class="ballot-section-heading">${t.ballotCandidatesHeading || 'Candidates on Your Ballot'}</h3>
      <div class="ballot-candidates">
        ${data.candidates.map(c => `
          <div class="ballot-candidate-card">
            <div class="candidate-symbol">${c.symbol}</div>
            <div class="candidate-info">
              <strong>${c.name}</strong>
              <span class="candidate-party">${c.party}</span>
              <p class="candidate-desc">${c.info}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <h3 class="ballot-section-heading" style="margin-top: var(--spacing-lg);">${t.ballotMeasuresHeading || 'Key Ballot Measures'}</h3>
      <div class="ballot-measures">
        ${data.measures.map(m => `
          <div class="ballot-measure-card">
            <div class="measure-title">📜 ${m.title}</div>
            <div class="measure-desc">${m.desc}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  const myBallotBtn = document.getElementById('my-ballot-btn');
  const ballotModal = document.getElementById('ballot-modal');
  const closeBallotBtn = document.getElementById('close-ballot');
  const ballotRegionSelect = document.getElementById('ballot-region-select');

  if (myBallotBtn) {
    myBallotBtn.addEventListener('click', () => {
      ballotModal.classList.remove('hidden');
      renderBallot(ballotRegionSelect ? ballotRegionSelect.value : 'wb');
    });
  }
  if (closeBallotBtn) {
    closeBallotBtn.addEventListener('click', () => ballotModal.classList.add('hidden'));
  }
  if (ballotRegionSelect) {
    ballotRegionSelect.addEventListener('change', () => renderBallot(ballotRegionSelect.value));
  }
  // Close modal on overlay click
  if (ballotModal) {
    ballotModal.addEventListener('click', (e) => { if (e.target === ballotModal) ballotModal.classList.add('hidden'); });
  }

  // Init
  updateI18n();
});

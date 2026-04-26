// --- Translations (i18n) ---
const translations = {
  en: {
    logoText: "Ballot<span class='highlight'>Buddy</span>",
    navAbout: "About",
    navTimelines: "Timelines",
    navQuiz: "Knowledge Quiz",
    navGuide: "Access Guide",
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
    timelines: [
      {
        id: "kolkata",
        title: "Kolkata Assembly Elections",
        content: `Official schedule for the West Bengal Assembly Elections 2026 (Kolkata Region):<ul><li>🗓️ <strong>Phase I (April 23, 2026):</strong> First phase of polling.</li><li>🗓️ <strong>Phase II (April 29, 2026):</strong> Second phase of polling.</li><li>⏰ <strong>Polling Hours:</strong> 7:00 AM to 6:00 PM.</li><li>📊 <strong>Counting of Votes:</strong> May 4, 2026.</li><li><small><em>Disclaimer: Please verify your specific constituency details on the ECI portal.</em></small></li></ul>`
      },
      {
        id: "tamilnadu",
        title: "Tamil Nadu Assembly Elections",
        content: `Official schedule for the Tamil Nadu Legislative Assembly Election 2026:<ul><li>🗓️ <strong>Polling Date:</strong> April 23, 2026 (Single phase across 234 constituencies).</li><li>📝 <strong>Nomination Deadline:</strong> April 6, 2026.</li><li>⏰ <strong>Polling Hours:</strong> 7:00 AM to 6:00 PM.</li><li>📊 <strong>Counting of Votes:</strong> May 4, 2026.</li><li><small><em>Disclaimer: Refer to official notifications for binding information.</em></small></li></ul>`
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
        content: `Possession of an EPIC does not guarantee voting rights. Your name must be present on the current electoral roll.<ul><li>🔍 Verify your inclusion online at <strong>electoralsearch.eci.gov.in</strong>.</li><li>📞 If omitted, contact your Booth Level Officer (BLO) immediately.</li><li>📝 Note your designated polling booth and serial number for election day.</li></ul>`
      },
      {
        id: "candidates",
        title: "Step 4: Candidate Information",
        content: `Voters are encouraged to make informed decisions.<ul><li>📱 Utilize the <strong>KYC (Know Your Candidate) Application</strong> provided by the ECI.</li><li>📄 Review candidate affidavits detailing educational qualifications, assets, and any criminal antecedents.</li><li>📖 Evaluate the manifestos published by participating political parties.</li></ul>`
      },
      {
        id: "booth",
        title: "Step 5: Polling Station Procedures",
        content: `Guidelines for election day conduct at the polling station:<ul><li>🪪 Carry your Voter ID (EPIC) or an ECI-approved alternative photo ID (e.g., Aadhaar, Passport).</li><li>📵 <strong>Prohibited Items:</strong> Mobile phones and recording devices are strictly forbidden inside the booth.</li><li>✍️ Officials will verify your identity, apply indelible ink to your finger, and obtain your signature.</li></ul>`
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
      { q: ["lost", "don't have id", "no voter id", "misplaced", "epic", "forgot", "documents", "alternative", "without voter id"], a: "If your EPIC is lost, you may still vote provided your name is on the electoral roll. You must present an approved alternative photo ID, such as an Aadhaar card, PAN card, or Passport, at the polling station." },
      { q: ["age", "how old", "18", "criteria"], a: "The minimum qualifying age is 18 years as of the qualifying date." },
      { q: ["nri", "overseas", "abroad", "citizen outside"], a: "Non-Resident Indians (NRIs) holding an Indian passport are eligible to vote. Registration via Form 6A as an Overseas Elector is required." },
      { q: ["where", "polling booth", "find booth", "location"], a: "To locate your polling station, utilize the portal electoralsearch.eci.gov.in or contact the Voter Helpline at 1950." },
      { q: ["online", "vote online", "digital"], a: "The Election Commission of India currently mandates in-person voting. Online voting is not permitted for the general electorate." }
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
    quizBtnClose: "Close"
  },
  hi: {
    logoText: "बैलट<span class='highlight'>बडी</span>",
    navAbout: "हमारे बारे में",
    navTimelines: "समयरेखा",
    navQuiz: "प्रश्नोत्तरी",
    navGuide: "गाइड शुरू करें",
    heroTitle: "भारतीय चुनावों के लिए <br/><span class='gradient-text'>एक मार्गदर्शिका</span>",
    heroSubtitle: "दुनिया की सबसे बड़ी लोकतांत्रिक प्रक्रिया को आत्मविश्वास के साथ समझें। पंजीकरण करना, विवरण सत्यापित करना और आधिकारिक रूप से अपना वोट डालना सीखें।",
    heroBtn: "गाइड देखें",
    heroCard1: "वोटर आईडी",
    heroCard2: "ईवीएम प्रणाली",
    heroCard3: "वोट डालें",
    aboutTitle: "बैलट बडी के बारे में",
    aboutText1: "लोकतंत्र तब पनपता है जब उसके नागरिक जागरूक होते हैं। बैलट बडी भारत में जटिल चुनाव प्रक्रिया को सरल बनाने की एक पहल है। चाहे आप पहली बार वोट दे रहे हों, या एक अनुभवी नागरिक हों, यह गाइड स्पष्ट और आधिकारिक जानकारी प्रदान करता है।",
    aboutText2: "हमारा उद्देश्य यह सुनिश्चित करना है कि चुनावी भागीदारी सभी पात्र नागरिकों के लिए सुलभ हो, जिससे दुनिया के सबसे बड़े लोकतंत्र की नींव मजबूत हो सके।",
    timelinesHeading: "आगामी चुनाव समयरेखा",
    onboardingTitle: "अपनी गाइड को पर्सनलाइज़ करें",
    onboardingQ1: "क्या आप पहली बार वोट दे रहे हैं?",
    onboardingQ2: "क्या आपके पास पहले से वोटर आईडी (EPIC) है?",
    btnYes: "हाँ",
    btnNo: "नहीं",
    btnBack: "पीछे",
    btnContinue: "जारी रखें",
    btnFinish: "पूरा करें",
    quizTitle: "ज्ञान की जाँच",
    chatTitle: "चुनाव सहायक",
    chatGreeting: "नमस्ते। मैं आपका चुनाव सहायक हूँ। कृपया मतदान प्रक्रिया के संबंध में अपने प्रश्न पूछें।",
    chatSugg1: "वोटर आईडी खो गई?",
    chatSugg2: "मतदान की आयु?",
    chatSugg3: "लोक सभा vs विधान सभा?",
    chatPlaceholder: "यहाँ अपना प्रश्न लिखें...",
    footerText: "केवल जानकारी के उद्देश्य से बनाया गया है। आधिकारिक जानकारी के लिए, देखें भारत निर्वाचन आयोग की वेबसाइट।",
    footerNavHead: "नेविगेशन",
    footerHome: "होम",
    footerResources: "संसाधन",
    alertFinish: "आप अपने लोकतांत्रिक अधिकार का प्रयोग करने के लिए पूरी तरह तैयार हैं। जय हिन्द! 🇮🇳",
    timelines: [
      {
        id: "kolkata",
        title: "कोलकाता विधानसभा चुनाव",
        content: `पश्चिम बंगाल विधानसभा चुनाव 2026 (कोलकाता क्षेत्र) का आधिकारिक कार्यक्रम:<ul><li>🗓️ <strong>चरण I (23 अप्रैल 2026):</strong> मतदान का पहला चरण।</li><li>🗓️ <strong>चरण II (29 अप्रैल 2026):</strong> मतदान का दूसरा चरण।</li><li>⏰ <strong>मतदान का समय:</strong> सुबह 7:00 बजे से शाम 6:00 बजे तक।</li><li>📊 <strong>वोटों की गिनती:</strong> 4 मई 2026।</li></ul>`
      },
      {
        id: "tamilnadu",
        title: "तमिलनाडु विधानसभा चुनाव",
        content: `तमिलनाडु विधानसभा चुनाव 2026 का आधिकारिक कार्यक्रम:<ul><li>🗓️ <strong>मतदान की तिथि:</strong> 23 अप्रैल 2026 (सभी 234 निर्वाचन क्षेत्रों में एक चरण)।</li><li>📝 <strong>नामांकन की अंतिम तिथि:</strong> 6 अप्रैल 2026।</li><li>⏰ <strong>मतदान का समय:</strong> सुबह 7:00 बजे से शाम 6:00 बजे तक।</li><li>📊 <strong>वोटों की गिनती:</strong> 4 मई 2026।</li></ul>`
      }
    ],
    steps: [
      {
        id: "eligibility",
        title: "चरण 1: पात्रता सत्यापित करें",
        content: `मतदान से पहले, सुनिश्चित करें कि आप भारत के चुनाव आयोग (ECI) के मानदंडों को पूरा करते हैं:<ul><li>🇮🇳 आपको भारत का नागरिक होना चाहिए।</li><li>🎂 1 जनवरी को आपकी आयु 18 वर्ष या उससे अधिक होनी चाहिए।</li><li>🏠 आपको उस मतदान क्षेत्र का सामान्य निवासी होना चाहिए जहां आप नामांकन करना चाहते हैं।</li></ul>`
      },
      {
        id: "register",
        title: "चरण 2: मतदाता पंजीकरण (EPIC)",
        content: `पात्र नागरिकों को वोटर आईडी प्राप्त करने के लिए पंजीकरण करना चाहिए।<ul><li>💻 <strong>फॉर्म 6:</strong> 18 वर्ष के नए मतदाताओं के लिए। मतदाता सेवा पोर्टल या <strong>वोटर हेल्पलाइन ऐप</strong> के माध्यम से आवेदन करें।</li><li>🔄 <strong>फॉर्म 8:</strong> निवास बदलने या मौजूदा आईडी में विवरण सुधारने के लिए।</li><li>🏢 <strong>ऑफ़लाइन:</strong> ईआरओ (ERO) को भौतिक फॉर्म जमा करें।</li></ul>`
      },
      {
        id: "verify",
        title: "चरण 3: मतदाता सूची सत्यापन",
        content: `EPIC होने से मतदान के अधिकार की गारंटी नहीं मिलती। आपका नाम वर्तमान मतदाता सूची में होना चाहिए।<ul><li>🔍 <strong>electoralsearch.eci.gov.in</strong> पर अपना नाम ऑनलाइन खोजें।</li><li>📞 यदि नाम नहीं है, तो तुरंत अपने बूथ लेवल ऑफिसर (BLO) से संपर्क करें।</li></ul>`
      },
      {
        id: "candidates",
        title: "चरण 4: उम्मीदवार की जानकारी",
        content: `मतदाताओं को सूचित निर्णय लेने के लिए प्रोत्साहित किया जाता है।<ul><li>📱 ECI द्वारा प्रदान किए गए <strong>KYC एप्लिकेशन</strong> का उपयोग करें।</li><li>📄 उम्मीदवारों के हलफनामे की समीक्षा करें।</li></ul>`
      },
      {
        id: "booth",
        title: "चरण 5: मतदान केंद्र की प्रक्रियाएं",
        content: `मतदान केंद्र पर चुनाव के दिन के आचरण के लिए दिशानिर्देश:<ul><li>🪪 अपना वोटर आईडी (EPIC) या ECI-अनुमोदित वैकल्पिक फोटो आईडी साथ रखें।</li><li>📵 <strong>निषिद्ध वस्तुएं:</strong> बूथ के अंदर मोबाइल फोन सख्त वर्जित हैं।</li></ul>`
      },
      {
        id: "evm",
        title: "चरण 6: EVM/VVPAT के माध्यम से मतदान",
        content: `अपना वोट सुरक्षित रूप से डालने की प्रक्रिया:<ul><li>🗳️ इलेक्ट्रॉनिक वोटिंग मशीन (EVM) वाले वोटिंग कम्पार्टमेंट में आगे बढ़ें।</li><li>🔵 अपने पसंदीदा उम्मीदवार के चुनाव चिह्न के अनुरूप <strong>नीला बटन</strong> दबाएं। लाल बत्ती की प्रतीक्षा करें।</li><li>👀 <strong>VVPAT मशीन</strong> का निरीक्षण करें। छपी हुई पर्ची 7 सेकंड तक दिखेगी, जिससे पुष्टि होती है कि आपका वोट सही दर्ज हुआ है।</li></ul>`
      }
    ],
    faqs: [
      { q: ["mcc", "आदर्श आचार संहिता", "आचार संहिता", "नियम", "model code"], a: "आदर्श आचार संहिता (MCC) चुनाव आयोग द्वारा जारी दिशा-निर्देशों का एक समूह है, जिसका उद्देश्य स्वतंत्र और निष्पक्ष चुनाव सुनिश्चित करना है।" },
      { q: ["लोक सभा", "विधान सभा", "पंचायत", "प्रकार", "lok sabha", "चुनाव"], a: "भारत में तीन मुख्य प्रकार के चुनाव होते हैं: लोक सभा (राष्ट्रीय चुनाव प्रधानमंत्री के लिए), विधान सभा (राज्य चुनाव मुख्यमंत्री के लिए), और स्थानीय निकाय चुनाव (गांवों के लिए पंचायत, शहरों के लिए नगर पालिका)।" },
      { q: ["खो", "आईडी नहीं", "वोटर आईडी नहीं", "epic", "गुम", "भूल", "दस्तावेज", "विकल्प", "बिना वोटर आईडी"], a: "यदि आपका EPIC खो गया है, तो आप अभी भी वोट कर सकते हैं बशर्ते आपका नाम मतदाता सूची में हो।" },
      { q: ["उम्र", "कितने साल", "18", "आयु"], a: "अर्हक तिथि के अनुसार न्यूनतम अर्हक आयु 18 वर्ष है।" },
      { q: ["nri", "प्रवासी", "विदेश", "एनआरआई"], a: "भारतीय पासपोर्ट रखने वाले अनिवासी भारतीय (NRI) मतदान करने के पात्र हैं। फॉर्म 6A आवश्यक है।" },
      { q: ["कहाँ", "मतदान केंद्र", "बूथ खोजें", "स्थान"], a: "अपने मतदान केंद्र का पता लगाने के लिए, electoralsearch.eci.gov.in पोर्टल का उपयोग करें।" },
      { q: ["ऑनलाइन", "ऑनलाइन वोट"], a: "भारत का चुनाव आयोग वर्तमान में व्यक्तिगत रूप से मतदान को अनिवार्य करता है। ऑनलाइन मतदान की अनुमति नहीं है।" }
    ],
    quiz: [
      { q: "भारत में मतदान के लिए न्यूनतम अर्हक आयु क्या है?", options: ["16 वर्ष", "18 वर्ष", "21 वर्ष"], ans: 1 },
      { q: "वर्तमान में वोट डालने के लिए किस इलेक्ट्रॉनिक प्रणाली का उपयोग किया जाता है?", options: ["पेपर बैलेट", "ईवीएम (इलेक्ट्रॉनिक वोटिंग मशीन)", "डिजिटल टैबलेट"], ans: 1 },
      { q: "कौन सा दस्तावेज़ किसी विशिष्ट बूथ पर आपके मतदान के अधिकार की पुष्टि करता है?", options: ["आधार कार्ड", "पासपोर्ट", "मतदाता सूची"], ans: 2 },
      { q: "VVPAT प्रणाली का कार्य क्या है?", options: ["मतदाता पंजीकरण", "एक सत्यापन योग्य पेपर ऑडिट ट्रेल पर्ची छापता है", "इलेक्ट्रॉनिक वोट सारणीकरण"], ans: 1 },
    ],
    quizResultScore: "स्कोर:",
    quizResultPerfect: "उत्कृष्ट। आप चुनाव प्रक्रिया की गहन समझ प्रदर्शित करते हैं।",
    quizResultGood: "संतोषजनक। कृपया विस्तृत जानकारी के लिए गाइड देखें।",
    quizBtnClose: "बंद करें"
  },
  bn: {
    logoText: "ব্যালট<span class='highlight'>বাডি</span>",
    navAbout: "আমাদের সম্পর্কে",
    navTimelines: "সময়সূচী",
    navQuiz: "কুইজ",
    navGuide: "গাইড শুরু করুন",
    heroTitle: "ভারতীয় নির্বাচনের জন্য <br/><span class='gradient-text'>একটি নির্দেশিকা</span>",
    heroSubtitle: "বিশ্বের বৃহত্তম গণতান্ত্রিক প্রক্রিয়াটি আত্মবিশ্বাসের সাথে নেভিগেট করুন। কীভাবে নিবন্ধন করবেন এবং আনুষ্ঠানিকভাবে ভোট দেবেন তা জানুন।",
    heroBtn: "গাইড দেখুন",
    heroCard1: "ভোটার আইডি",
    heroCard2: "ইভিএম সিস্টেম",
    heroCard3: "ভোট দিন",
    aboutTitle: "ব্যালট বাডি সম্পর্কে",
    aboutText1: "গণতন্ত্র তখন উন্নতি লাভ করে যখন তার নাগরিকরা সচেতন থাকে। ব্যালট বাডি হল ভারতের জটিল নির্বাচন প্রক্রিয়া সহজ করার একটি উদ্যোগ। এই গাইডটি স্পষ্ট এবং সরকারি তথ্য প্রদান করে।",
    aboutText2: "আমাদের উদ্দেশ্য হল নিশ্চিত করা যে নির্বাচনী অংশগ্রহণ সমস্ত যোগ্য নাগরিকদের জন্য অ্যাক্সেসযোগ্য।",
    timelinesHeading: "আসন্ন নির্বাচনের সময়সূচী",
    onboardingTitle: "আপনার গাইড ব্যক্তিগতকৃত করুন",
    onboardingQ1: "আপনি কি প্রথমবার ভোট দিচ্ছেন?",
    onboardingQ2: "আপনার কি ইতিমধ্যে ভোটার আইডি (EPIC) আছে?",
    btnYes: "হ্যাঁ",
    btnNo: "না",
    btnBack: "আগের",
    btnContinue: "চালিয়ে যান",
    btnFinish: "সম্পূর্ণ করুন",
    quizTitle: "জ্ঞান পরীক্ষা",
    chatTitle: "নির্বাচন সহকারী",
    chatGreeting: "নমস্কার। আমি আপনার নির্বাচন সহকারী। অনুগ্রহ করে ভোটদান প্রক্রিয়া সম্পর্কে আপনার প্রশ্ন জিজ্ঞাসা করুন।",
    chatSugg1: "ভোটার আইডি হারিয়েছেন?",
    chatSugg2: "ভোট দেওয়ার বয়স?",
    chatSugg3: "লোকসভা বনাম বিধানসভা?",
    chatPlaceholder: "এখানে আপনার প্রশ্ন লিখুন...",
    footerText: "তথ্যমূলক উদ্দেশ্যে তৈরি করা হয়েছে। অফিসিয়াল বিশদ বিবরণের জন্য ভারতের নির্বাচন কমিশনের ওয়েবসাইট দেখুন।",
    footerNavHead: "নেভিগেশন",
    footerHome: "হোম",
    footerResources: "সম্পদ",
    alertFinish: "আপনি আপনার গণতান্ত্রিক অধিকার প্রয়োগ করার জন্য সম্পূর্ণ প্রস্তুত। জয় হিন্দ! 🇮🇳",
    timelines: [
      {
        id: "kolkata",
        title: "কলকাতা বিধানসভা নির্বাচন",
        content: `পশ্চিমবঙ্গ বিধানসভা নির্বাচন 2026 এর অফিসিয়াল সময়সূচী:<ul><li>🗓️ <strong>প্রথম দফা (২৩ এপ্রিল ২০২৬):</strong> প্রথম দফার ভোটগ্রহণ।</li><li>🗓️ <strong>দ্বিতীয় দফা (২৯ এপ্রিল ২০২৬):</strong> দ্বিতীয় দফার ভোটগ্রহণ।</li><li>⏰ <strong>ভোটগ্রহণের সময়:</strong> সকাল ৭:০০ থেকে সন্ধ্যা ৬:০০।</li><li>📊 <strong>ভোট গণনা:</strong> ৪ মে ২০২৬।</li></ul>`
      },
      {
        id: "tamilnadu",
        title: "তামিলনাড়ু বিধানসভা নির্বাচন",
        content: `তামিলনাড়ু বিধানসভা নির্বাচন 2026 এর অফিসিয়াল সময়সূচী:<ul><li>🗓️ <strong>ভোটের তারিখ:</strong> ২৩ এপ্রিল ২০২৬।</li><li>📝 <strong>মনোনয়নের শেষ তারিখ:</strong> ৬ এপ্রিল ২০২৬।</li><li>⏰ <strong>ভোটগ্রহণের সময়:</strong> সকাল ৭:০০ থেকে সন্ধ্যা ৬:০০।</li><li>📊 <strong>ভোট গণনা:</strong> ৪ মে ২০২৬।</li></ul>`
      }
    ],
    steps: [
      {
        id: "eligibility",
        title: "ধাপ 1: যোগ্যতা যাচাই করুন",
        content: `ভোট দেওয়ার আগে, নিশ্চিত করুন যে আপনি ECI-এর মানদণ্ড পূরণ করেছেন:<ul><li>🇮🇳 আপনাকে ভারতের নাগরিক হতে হবে।</li><li>🎂 ১ জানুয়ারী তারিখে আপনার বয়স ১৮ বছর বা তার বেশি হতে হবে।</li><li>🏠 আপনাকে সেই ভোট এলাকার সাধারণ বাসিন্দা হতে হবে।</li></ul>`
      },
      {
        id: "register",
        title: "ধাপ 2: ভোটার নিবন্ধন (EPIC)",
        content: `যোগ্য নাগরিকদের ভোটার আইডি পেতে নিবন্ধন করতে হবে।<ul><li>💻 <strong>ফর্ম 6:</strong> 18 বছর বয়সী নতুন ভোটারদের জন্য। পোর্টাল বা <strong>ভোটার হেল্পলাইন অ্যাপে</strong> আবেদন করুন।</li><li>🔄 <strong>ফর্ম 8:</strong> বাসস্থান পরিবর্তন বা আইডি সংশোধন করার জন্য।</li><li>🏢 <strong>অফলাইন:</strong> ইআরও (ERO) এর কাছে শারীরিক ফর্ম জমা দিন।</li></ul>`
      },
      {
        id: "verify",
        title: "ধাপ 3: ভোটার তালিকা যাচাইকরণ",
        content: `আপনার নাম বর্তমান ভোটার তালিকায় (Electoral Roll) থাকতে হবে।<ul><li>🔍 <strong>electoralsearch.eci.gov.in</strong>-এ আপনার নাম অনলাইনে খুঁজুন।</li><li>📞 নাম না থাকলে, অবিলম্বে আপনার BLO-এর সাথে যোগাযোগ করুন।</li></ul>`
      },
      {
        id: "candidates",
        title: "ধাপ 4: প্রার্থীর তথ্য",
        content: `ভোটারদের সচেতন সিদ্ধান্ত নিতে উত্সাহিত করা হয়।<ul><li>📱 ECI দ্বারা প্রদত্ত <strong>KYC অ্যাপ্লিকেশন</strong> ব্যবহার করুন।</li><li>📄 প্রার্থীদের হলফনামা পর্যালোচনা করুন।</li></ul>`
      },
      {
        id: "booth",
        title: "ধাপ 5: পোলিং স্টেশনের পদ্ধতি",
        content: `ভোটকেন্দ্রে নির্বাচনের দিন আচরণের নির্দেশিকা:<ul><li>🪪 আপনার ভোটার আইডি (EPIC) বা ECI-অনুমোদিত বিকল্প ফটো আইডি সাথে রাখুন।</li><li>📵 <strong>নিষিদ্ধ বস্তু:</strong> বুথের ভিতরে মোবাইল ফোন কঠোরভাবে নিষিদ্ধ।</li></ul>`
      },
      {
        id: "evm",
        title: "ধাপ 6: EVM/VVPAT এর মাধ্যমে ভোটদান",
        content: `নিরাপদে আপনার ভোট দেওয়ার পদ্ধতি:<ul><li>🗳️ EVM সহ ভোটিং বগিতে এগিয়ে যান।</li><li>🔵 আপনার পছন্দের প্রার্থীর চিহ্নের সাথে সম্পর্কিত <strong>নীল বোতাম</strong> টিপুন। লাল আলোর জন্য অপেক্ষা করুন।</li><li>👀 <strong>VVPAT মেশিন</strong> পর্যবেক্ষণ করুন। মুদ্রিত স্লিপটি ৭ সেকেন্ডের জন্য দৃশ্যমান হবে, যা নিশ্চিত করে যে আপনার ভোট সঠিকভাবে রেকর্ড করা হয়েছে।</li></ul>`
      }
    ],
    faqs: [
      { q: ["mcc", "আদর্শ আচরণবিধি", "আচরণবিধি", "model code"], a: "আদর্শ আচরণবিধি (MCC) হল ভারতের নির্বাচন কমিশন দ্বারা জারি করা নির্দেশিকাগুলির একটি সেট, যা অবাধ ও সুষ্ঠু নির্বাচন নিশ্চিত করার জন্য প্রার্থীদের এবং রাজনৈতিক দলগুলির জন্য প্রযোজ্য।" },
      { q: ["লোকসভা", "বিধানসভা", "পঞ্চায়েত", "প্রকার", "পার্থক্য"], a: "ভারতে তিনটি প্রধান নির্বাচন রয়েছে: লোকসভা (জাতীয় নির্বাচন), বিধানসভা (রাজ্য নির্বাচন), এবং স্থানীয় নির্বাচন (গ্রামের জন্য পঞ্চায়েত, শহরের জন্য পৌরসভা)।" },
      { q: ["হারিয়ে", "আইডি নেই", "ভোটার আইডি নেই", "epic", "ভুলে", "নথি", "বিকল্প", "ভোটার আইডি ছাড়া"], a: "আপনার EPIC হারিয়ে গেলে, ভোটার তালিকায় নাম থাকলে আপনি ভোট দিতে পারবেন। একটি অনুমোদিত বিকল্প ফটো আইডি উপস্থাপন করতে হবে।" },
      { q: ["বয়স", "কত বছর", "18"], a: "ন্যূনতম যোগ্যতা বয়স ১৮ বছর।" },
      { q: ["nri", "প্রবাসী", "বিদেশ", "এনআরআই"], a: "ভারতীয় পাসপোর্টধারী অনাবাসী ভারতীয় (NRI) ভোট দেওয়ার যোগ্য। ফর্ম ৬এ প্রয়োজন।" },
      { q: ["কোথায়", "পোলিং স্টেশন", "বুথ খুঁজুন", "স্থান"], a: "আপনার পোলিং স্টেশন সনাক্ত করতে, electoralsearch.eci.gov.in পোর্টাল ব্যবহার করুন।" },
      { q: ["অনলাইন", "অনলাইন ভোট"], a: "ভারতের নির্বাচন কমিশন বর্তমানে ব্যক্তিগতভাবে ভোটদান বাধ্যতামূলক করে। অনলাইন ভোটদানের অনুমতি নেই।" }
    ],
    quiz: [
      { q: "ভারতে ভোট দেওয়ার ন্যূনতম যোগ্যতার বয়স কত?", options: ["১৬ বছর", "১৮ বছর", "২১ বছর"], ans: 1 },
      { q: "বর্তমানে ভোট দেওয়ার জন্য কোন ইলেকট্রনিক সিস্টেম ব্যবহার করা হয়?", options: ["পেপার ব্যালট", "ইভিএম", "ডিজিটাল ট্যাবলেট"], ans: 1 },
      { q: "কোন নথিটি কোনো নির্দিষ্ট বুথে আপনার ভোট দেওয়ার অধিকার নিশ্চিত করে?", options: ["আধার কার্ড", "পাসপোর্ট", "ভোটার তালিকা"], ans: 2 },
      { q: "VVPAT সিস্টেমের কাজ কী?", options: ["ভোটার নিবন্ধন", "একটি যাচাইযোগ্য পেপার অডিট ট্রেইল স্লিপ প্রিন্ট করে", "ইলেকট্রনিক ভোট গণনা"], ans: 1 },
    ],
    quizResultScore: "স্কোর:",
    quizResultPerfect: "চমৎকার। আপনি নির্বাচন প্রক্রিয়ার গভীর বোঝাপড়া প্রদর্শন করেছেন।",
    quizResultGood: "সন্তোষজনক। বিস্তারিত তথ্যের জন্য অনুগ্রহ করে গাইডটি দেখুন।",
    quizBtnClose: "বন্ধ করুন"
  },
  ta: {
    logoText: "வாக்குச்சீட்டு<span class='highlight'>நண்பன்</span>",
    navAbout: "எங்களை பற்றி",
    navTimelines: "காலக்கெடு",
    navQuiz: "வினாடி வினா",
    navGuide: "வழிகாட்டியைத் தொடங்கு",
    heroTitle: "இந்திய தேர்தல்களுக்கான <br/><span class='gradient-text'>ஒரு வழிகாட்டி</span>",
    heroSubtitle: "உலகின் மிகப்பெரிய ஜனநாயக செயல்முறையை நம்பிக்கையுடன் செல்லவும். அதிகாரப்பூர்வமாக எவ்வாறு பதிவு செய்வது மற்றும் வாக்களிப்பது என்பதை அறிக.",
    heroBtn: "வழிகாட்டியைப் பார்க்கவும்",
    heroCard1: "வாக்காளர் ஐடி",
    heroCard2: "EVM அமைப்பு",
    heroCard3: "வாக்களிக்கவும்",
    aboutTitle: "எங்களை பற்றி",
    aboutText1: "குடிமக்கள் விழிப்புடன் இருக்கும்போது ஜனநாயகம் செழித்து வளரும். இந்த வழிகாட்டி தெளிவான மற்றும் அதிகாரப்பூர்வ தகவல்களை வழங்குகிறது.",
    aboutText2: "தகுதியான அனைத்து குடிமக்களுக்கும் தேர்தல் பங்கேற்பு கிடைப்பதை உறுதி செய்வதே எங்கள் நோக்கம்.",
    timelinesHeading: "வரவிருக்கும் தேர்தல் காலக்கெடு",
    onboardingTitle: "உங்கள் வழிகாட்டியைத் தனிப்பயனாக்கவும்",
    onboardingQ1: "நீங்கள் முதல் முறையாக வாக்களிக்கிறீர்களா?",
    onboardingQ2: "உங்களிடம் ஏற்கனவே வாக்காளர் அடையாள அட்டை (EPIC) உள்ளதா?",
    btnYes: "ஆம்",
    btnNo: "இல்லை",
    btnBack: "முந்தைய",
    btnContinue: "தொடரவும்",
    btnFinish: "முடிக்கவும்",
    quizTitle: "அறிவு சோதனை",
    chatTitle: "தேர்தல் உதவியாளர்",
    chatGreeting: "வணக்கம். நான் உங்கள் தேர்தல் உதவியாளர். உங்கள் கேள்விகளைக் கேளுங்கள்.",
    chatSugg1: "ஐடி தொலைந்துவிட்டதா?",
    chatSugg2: "வாக்களிக்கும் வயது?",
    chatSugg3: "லோக்சபா vs விதான் சபா?",
    chatPlaceholder: "உங்கள் கேள்வியை இங்கே தட்டச்சு செய்யவும்...",
    footerText: "தகவல் நோக்கங்களுக்காக உருவாக்கப்பட்டது. அதிகாரப்பூர்வ விவரங்களுக்கு இந்திய தேர்தல் ஆணையத்தின் இணையதளத்தைப் பார்வையிடவும்.",
    footerNavHead: "வழிசெலுத்தல்",
    footerHome: "முகப்பு",
    footerResources: "வளங்கள்",
    alertFinish: "உங்கள் ஜனநாயக உரிமையைப் பயன்படுத்த நீங்கள் முழுமையாக தயாராக உள்ளீர்கள். ஜெய் ஹிந்த்! 🇮🇳",
    timelines: [
      {
        id: "kolkata",
        title: "கொல்கத்தா சட்டமன்றத் தேர்தல்",
        content: `மேற்கு வங்க சட்டமன்றத் தேர்தல் 2026 க்கான அதிகாரப்பூர்வ அட்டவணை:<ul><li>🗓️ <strong>கட்டம் I (ஏப்ரல் 23, 2026):</strong> வாக்குப்பதிவின் முதல் கட்டம்.</li><li>🗓️ <strong>கட்டம் II (ஏப்ரல் 29, 2026):</strong> வாக்குப்பதிவின் இரண்டாம் கட்டம்.</li><li>⏰ <strong>வாக்குப்பதிவு நேரம்:</strong> காலை 7:00 மணி முதல் மாலை 6:00 மணி வரை.</li><li>📊 <strong>வாக்கு எண்ணிக்கை:</strong> மே 4, 2026.</li></ul>`
      },
      {
        id: "tamilnadu",
        title: "தமிழ்நாடு சட்டமன்றத் தேர்தல்",
        content: `தமிழ்நாடு சட்டமன்றத் தேர்தல் 2026 க்கான அதிகாரப்பூர்வ அட்டவணை:<ul><li>🗓️ <strong>வாக்குப்பதிவு தேதி:</strong> ஏப்ரல் 23, 2026.</li><li>📝 <strong>வேட்புமனு தாக்கல் செய்ய கடைசி நாள்:</strong> ஏப்ரல் 6, 2026.</li><li>⏰ <strong>வாக்குப்பதிவு நேரம்:</strong> காலை 7:00 மணி முதல் மாலை 6:00 மணி வரை.</li><li>📊 <strong>வாக்கு எண்ணிக்கை:</strong> மே 4, 2026.</li></ul>`
      }
    ],
    steps: [
      {
        id: "eligibility",
        title: "படி 1: தகுதியைச் சரிபார்க்கவும்",
        content: `வாக்களிப்பதற்கு முன், ECI இன் நிபந்தனைகளை நீங்கள் பூர்த்தி செய்கிறீர்களா என்பதை உறுதிப்படுத்திக் கொள்ளுங்கள்:<ul><li>🇮🇳 நீங்கள் இந்தியாவின் குடிமகனாக இருக்க வேண்டும்.</li><li>🎂 ஜனவரி 1 ஆம் தேதியன்று உங்களுக்கு 18 வயது அல்லது அதற்கு மேற்பட்ட வயது இருக்க வேண்டும்.</li></ul>`
      },
      {
        id: "register",
        title: "படி 2: வாக்காளர் பதிவு (EPIC)",
        content: `தகுதியான குடிமக்கள் வாக்காளர் ஐடியைப் பெற பதிவு செய்ய வேண்டும்.<ul><li>💻 <strong>படிவம் 6:</strong> 18 வயதாகும் புதிய வாக்காளர்களுக்கு. போர்ட்டல் அல்லது <strong>வாக்காளர் உதவி ஆப் (Voter Helpline App)</strong> மூலம் விண்ணப்பிக்கவும்.</li><li>🔄 <strong>படிவம் 8:</strong> முகவரியை மாற்ற அல்லது ஐடியை திருத்த.</li><li>🏢 <strong>ஆஃப்லைன்:</strong> ERO விடம் படிவங்களை சமர்ப்பிக்கவும்.</li></ul>`
      },
      {
        id: "verify",
        title: "படி 3: வாக்காளர் பட்டியல் சரிபார்ப்பு",
        content: `தற்போதைய வாக்காளர் பட்டியலில் உங்கள் பெயர் இருக்க வேண்டும்.<ul><li>🔍 <strong>electoralsearch.eci.gov.in</strong> இல் உங்கள் பெயரை ஆன்லைனில் தேடுங்கள்.</li><li>📞 பெயர் இல்லையென்றால், உடனடியாக உங்கள் BLO வைத் தொடர்பு கொள்ளவும்.</li></ul>`
      },
      {
        id: "candidates",
        title: "படி 4: வேட்பாளர் தகவல்",
        content: `தகவலறிந்த முடிவுகளை எடுக்க வாக்காளர்கள் ஊக்குவிக்கப்படுகிறார்கள்.<ul><li>📱 ECI வழங்கிய <strong>KYC பயன்பாட்டைப்</strong> பயன்படுத்தவும்.</li><li>📄 வேட்பாளர்களின் பிரமாணப் பத்திரங்களை மதிப்பாய்வு செய்யவும்.</li></ul>`
      },
      {
        id: "booth",
        title: "படி 5: வாக்குச்சாவடி நடைமுறைகள்",
        content: `வாக்குச்சாவடியில் தேர்தல் நாள் நடத்தைக்கான வழிகாட்டுதல்கள்:<ul><li>🪪 உங்கள் வாக்காளர் ஐடி (EPIC) அல்லது அங்கீகரிக்கப்பட்ட மாற்று புகைப்பட ஐடியை வைத்திருக்கவும்.</li><li>📵 <strong>தடைசெய்யப்பட்ட பொருட்கள்:</strong> பூத்துக்குள் மொபைல் போன்கள் கண்டிப்பாக தடைசெய்யப்பட்டுள்ளன.</li></ul>`
      },
      {
        id: "evm",
        title: "படி 6: EVM/VVPAT மூலம் வாக்களித்தல்",
        content: `உங்கள் வாக்கை பாதுகாப்பாக செலுத்துவதற்கான நடைமுறை:<ul><li>🗳️ EVM உள்ள வாக்குப்பதிவு பெட்டிக்குச் செல்லவும்.</li><li>🔵 உங்கள் விருப்பமான வேட்பாளரின் சின்னத்திற்கு தொடர்புடைய <strong>நீல நிற பொத்தானை</strong> அழுத்தவும். சிவப்பு விளக்குக்காக காத்திருக்கவும்.</li><li>👀 <strong>VVPAT இயந்திரத்தை</strong> கவனிக்கவும். அச்சிடப்பட்ட சீட்டு 7 விநாடிகள் தெரியும், இது உங்கள் வாக்கு சரியாக பதிவு செய்யப்பட்டதை உறுதி செய்கிறது.</li></ul>`
      }
    ],
    faqs: [
      { q: ["mcc", "மாதிரி நடத்தை விதி", "நடத்தை விதிமுறைகள்", "model code"], a: "மாதிரி நடத்தை விதி (MCC) என்பது சுதந்திரமான மற்றும் நியாயமான தேர்தலை உறுதி செய்வதற்காக தேர்தல் ஆணையத்தால் வெளியிடப்பட்ட வழிகாட்டுதல்களின் தொகுப்பாகும்." },
      { q: ["லோக்சபா", "விதான் சபா", "பஞ்சாயத்து", "வகைகள்"], a: "இந்தியாவில் மூன்று முக்கிய தேர்தல்கள் உள்ளன: லோக்சபா (தேசிய தேர்தல்), விதான் சபா (மாநில தேர்தல்) மற்றும் உள்ளாட்சி தேர்தல் (கிராமங்களுக்கு பஞ்சாயத்து, நகரங்களுக்கு நகராட்சி)." },
      { q: ["தொலைந்து", "ஐடி இல்லை", "மறந்து", "ஆவணங்கள்", "மாற்று", "வாக்காளர் ஐடி இல்லாமல்"], a: "உங்கள் EPIC தொலைந்துவிட்டால், வாக்காளர் பட்டியலில் உங்கள் பெயர் இருந்தால் நீங்கள் வாக்களிக்கலாம். அங்கீகரிக்கப்பட்ட மாற்று புகைப்பட ஐடி அவசியம்." },
      { q: ["வயது", "18"], a: "குறைந்தபட்ச தகுதி வயது 18 ஆண்டுகள்." },
      { q: ["nri", "வெளிநாடு"], a: "இந்திய பாஸ்போர்ட் வைத்திருக்கும் வெளிநாடு வாழ் இந்தியர்கள் (NRI) வாக்களிக்க தகுதியுடையவர்கள். படிவம் 6A தேவை." },
      { q: ["எங்கே", "வாக்குச்சாவடி"], a: "உங்கள் வாக்குச்சாவடியைக் கண்டறிய, electoralsearch.eci.gov.in போர்ட்டலைப் பயன்படுத்தவும்." },
      { q: ["ஆன்லைன்", "ஆன்லைன் வாக்கு"], a: "இந்திய தேர்தல் ஆணையம் தற்போது நேரில் வாக்களிப்பதை கட்டாயமாக்குகிறது. ஆன்லைன் வாக்களிப்பு அனுமதிக்கப்படவில்லை." }
    ],
    quiz: [
      { q: "இந்தியாவில் வாக்களிப்பதற்கான குறைந்தபட்ச தகுதி வயது என்ன?", options: ["16 ஆண்டுகள்", "18 ஆண்டுகள்", "21 ஆண்டுகள்"], ans: 1 },
      { q: "தற்போது வாக்களிக்க எந்த மின்னணு அமைப்பு பயன்படுத்தப்படுகிறது?", options: ["காகித வாக்குச்சீட்டு", "EVM (மின்னணு வாக்குப்பதிவு இயந்திரம்)", "டிஜிட்டல் டேப்லெட்"], ans: 1 },
      { q: "எந்த ஆவணம் உங்கள் வாக்களிக்கும் உரிமையை உறுதிப்படுத்துகிறது?", options: ["ஆதார் அட்டை", "பாஸ்போர்ட்", "வாக்காளர் பட்டியல்"], ans: 2 },
      { q: "VVPAT அமைப்பின் செயல்பாடு என்ன?", options: ["வாக்காளர் பதிவு", "சரிபார்க்கக்கூடிய காகித தணிக்கை சீட்டை அச்சிடுகிறது", "மின்னணு வாக்கு எண்ணிக்கை"], ans: 1 },
    ],
    quizResultScore: "மதிப்பெண்:",
    quizResultPerfect: "சிறப்பானது. தேர்தல் செயல்முறையைப் பற்றிய ஆழமான புரிதலை நீங்கள் வெளிப்படுத்துகிறீர்கள்.",
    quizResultGood: "திருப்திகரமானது. விரிவான தகவலுக்கு வழிகாட்டியைப் பார்க்கவும்.",
    quizBtnClose: "மூடு"
  },
  te: {
    logoText: "బ్యాలెట్<span class='highlight'>బడ్డీ</span>",
    navAbout: "మా గురించి",
    navTimelines: "టైమ్‌లైన్స్",
    navQuiz: "క్విజ్",
    navGuide: "గైడ్ ప్రారంభించండి",
    heroTitle: "భారత ఎన్నికలకు <br/><span class='gradient-text'>ఒక మార్గదర్శి</span>",
    heroSubtitle: "ప్రపంచంలోనే అతిపెద్ద ప్రజాస్వామ్య ప్రక్రియను నమ్మకంతో నావిగేట్ చేయండి. ఎలా నమోదు చేయాలో, మీ వివరాలను ఎలా ధృవీకరించుకోవాలో మరియు అధికారికంగా ఓటు ఎలా వేయాలో తెలుసుకోండి.",
    heroBtn: "గైడ్ చూడండి",
    heroCard1: "ఓటర్ ఐడీ",
    heroCard2: "EVM సిస్టమ్",
    heroCard3: "ఓటు వేయండి",
    aboutTitle: "బ్యాలెట్ బడ్డీ గురించి",
    aboutText1: "పౌరులు సమాచారంతో ఉన్నప్పుడు ప్రజాస్వామ్యం వర్ధిల్లుతుంది. బ్యాలెట్ బడ్డీ అనేది భారతదేశంలోని సంక్లిష్ట ఎన్నికల ప్రక్రియను సులభతరం చేసే చొరవ.",
    aboutText2: "అర్హులైన పౌరులందరికీ ఎన్నికల భాగస్వామ్యం అందుబాటులో ఉండేలా చూడటమే మా లక్ష్యం.",
    timelinesHeading: "రాబోయే ఎన్నికల టైమ్‌లైన్‌లు",
    onboardingTitle: "మీ గైడ్‌ను వ్యక్తిగతీకరించండి",
    onboardingQ1: "మీరు మొదటిసారి ఓటు వేస్తున్నారా?",
    onboardingQ2: "మీకు ఇప్పటికే ఓటర్ ఐడీ (EPIC) ఉందా?",
    btnYes: "అవును",
    btnNo: "కాదు",
    btnBack: "వెనుకకు",
    btnContinue: "కొనసాగించండి",
    btnFinish: "పూర్తి చేయండి",
    quizTitle: "నాలెడ్జ్ చెక్",
    chatTitle: "ఎన్నికల సహాయకుడు",
    chatGreeting: "నమస్కారం. నేను మీ ఎన్నికల సహాయకుడిని. దయచేసి మీ ప్రశ్నలను అడగండి.",
    chatSugg1: "ఐడీ పోయిందా?",
    chatSugg2: "ఓటు వేసే వయస్సు?",
    chatSugg3: "లోక్ సభ vs విధాన సభ?",
    chatPlaceholder: "మీ ప్రశ్నను ఇక్కడ టైప్ చేయండి...",
    footerText: "సమాచార ప్రయోజనాల కోసం సృష్టించబడింది. అధికారిక వివరాల కోసం భారత ఎన్నికల సంఘం వెబ్‌సైట్‌ను సందర్శించండి.",
    footerNavHead: "నావిగేషన్",
    footerHome: "హోమ్",
    footerResources: "వనరులు",
    alertFinish: "మీ ప్రజాస్వామ్య హక్కును వినియోగించుకోవడానికి మీరు పూర్తిగా సిద్ధంగా ఉన్నారు. జై హింద్! 🇮🇳",
    timelines: [
      {
        id: "kolkata",
        title: "కోల్‌కతా అసెంబ్లీ ఎన్నికలు",
        content: `పశ్చిమ బెంగాల్ అసెంబ్లీ ఎన్నికలు 2026 కోసం అధికారిక షెడ్యూల్:<ul><li>🗓️ <strong>దశ I (ఏప్రిల్ 23, 2026):</strong> మొదటి దశ పోలింగ్.</li><li>🗓️ <strong>దశ II (ఏప్రిల్ 29, 2026):</strong> రెండవ దశ పోలింగ్.</li><li>⏰ <strong>పోలింగ్ సమయం:</strong> ఉదయం 7:00 నుండి సాయంత్రం 6:00 వరకు.</li><li>📊 <strong>ఓట్ల లెక్కింపు:</strong> మే 4, 2026.</li></ul>`
      },
      {
        id: "tamilnadu",
        title: "తమిళనాడు అసెంబ్లీ ఎన్నికలు",
        content: `తమిళనాడు అసెంబ్లీ ఎన్నికలు 2026 కోసం అధికారిక షెడ్యూల్:<ul><li>🗓️ <strong>పోలింగ్ తేదీ:</strong> ఏప్రిల్ 23, 2026.</li><li>📝 <strong>నామినేషన్ గడువు:</strong> ఏప్రిల్ 6, 2026.</li><li>⏰ <strong>పోలింగ్ సమయం:</strong> ఉదయం 7:00 నుండి సాయంత్రం 6:00 వరకు.</li><li>📊 <strong>ఓట్ల లెక్కింపు:</strong> మే 4, 2026.</li></ul>`
      }
    ],
    steps: [
      {
        id: "eligibility",
        title: "దశ 1: అర్హతను ధృవీకరించండి",
        content: `ఓటు వేయడానికి ముందు, మీరు ECI ప్రమాణాలకు అనుగుణంగా ఉన్నారో లేదో నిర్ధారించుకోండి:<ul><li>🇮🇳 మీరు భారతదేశ పౌరులై ఉండాలి.</li><li>🎂 జనవరి 1 నాటికి మీకు 18 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ వయస్సు ఉండాలి.</li></ul>`
      },
      {
        id: "register",
        title: "దశ 2: ఓటరు నమోదు (EPIC)",
        content: `ఓటర్ ఐడీని పొందేందుకు అర్హులైన పౌరులు నమోదు చేసుకోవాలి.<ul><li>💻 <strong>ఫారం 6:</strong> 18 ఏళ్లు నిండిన కొత్త ఓటర్ల కోసం. పోర్టల్ లేదా <strong>ఓటర్ హెల్ప్‌లైన్ యాప్</strong> ద్వారా దరఖాస్తు చేసుకోండి.</li><li>🔄 <strong>ఫారం 8:</strong> చిరునామా మార్చడానికి లేదా ఐడీని సవరించడానికి.</li><li>🏢 <strong>ఆఫ్‌లైన్:</strong> ఫారమ్‌లను మీ ERO కి సమర్పించండి.</li></ul>`
      },
      {
        id: "verify",
        title: "దశ 3: ఓటరు జాబితా ధృవీకరణ",
        content: `ప్రస్తుత ఓటరు జాబితాలో మీ పేరు ఉండాలి.<ul><li>🔍 <strong>electoralsearch.eci.gov.in</strong> లో మీ పేరును ఆన్‌లైన్‌లో వెతకండి.</li><li>📞 పేరు లేకపోతే, వెంటనే మీ BLO ని సంప్రదించండి.</li></ul>`
      },
      {
        id: "candidates",
        title: "దశ 4: అభ్యర్థి సమాచారం",
        content: `సమాచారంతో కూడిన నిర్ణయాలు తీసుకోవాలని ఓటర్లను ప్రోత్సహిస్తున్నాము.<ul><li>📱 ECI అందించిన <strong>KYC అప్లికేషన్‌ను</strong> ఉపయోగించండి.</li><li>📄 అభ్యర్థుల అఫిడవిట్‌లను సమీక్షించండి.</li></ul>`
      },
      {
        id: "booth",
        title: "దశ 5: పోలింగ్ స్టేషన్ విధానాలు",
        content: `పోలింగ్ స్టేషన్‌లో ఎన్నికల రోజు ప్రవర్తన కోసం మార్గదర్శకాలు:<ul><li>🪪 మీ ఓటర్ ఐడీ (EPIC) లేదా ఆమోదించబడిన ప్రత్యామ్నాయ ఫోటో ఐడీని తీసుకెళ్లండి.</li><li>📵 <strong>నిషేధించబడిన వస్తువులు:</strong> బూత్ లోపల మొబైల్ ఫోన్లు ఖచ్చితంగా నిషేధించబడ్డాయి.</li></ul>`
      },
      {
        id: "evm",
        title: "దశ 6: EVM/VVPAT ద్వారా ఓటు వేయడం",
        content: `సురక్షితంగా ఓటు వేయడానికి విధానం:<ul><li>🗳️ EVM ఉన్న పోలింగ్ కంపార్ట్‌మెంట్‌కు వెళ్లండి.</li><li>🔵 మీకు ఇష్టమైన అభ్యర్థి గుర్తుకు సంబంధించిన <strong>నీలిరంగు బటన్‌ను</strong> నొక్కండి. ఎరుపు దీపం వెలిగే వరకు వేచి ఉండండి.</li><li>👀 <strong>VVPAT యంత్రాన్ని</strong> గమనించండి. మీ ఓటు సరిగ్గా నమోదైందని నిర్ధారించడానికి ప్రింట్ చేయబడిన స్లిప్ 7 సెకన్ల పాటు కనిపిస్తుంది.</li></ul>`
      }
    ],
    faqs: [
      { q: ["mcc", "ఎన్నికల ప్రవర్తనా నియమావళి", "ప్రవర్తనా నియమావళి", "model code"], a: "ఎన్నికల ప్రవర్తనా నియమావళి (MCC) అనేది స్వేచ్ఛాయుత మరియు నిష్పాక్షిక ఎన్నికలను నిర్ధారించడానికి అభ్యర్థులు మరియు రాజకీయ పార్టీల కోసం ఎన్నికల సంఘం జారీ చేసిన మార్గదర్శకాల సమితి." },
      { q: ["లోక్ సభ", "విధాన సభ", "పంచాయతీ", "రకాలు"], a: "భారతదేశంలో మూడు ప్రధాన ఎన్నికలు ఉన్నాయి: లోక్ సభ (జాతీయ ఎన్నికలు), విధాన సభ (రాష్ట్ర ఎన్నికలు), మరియు స్థానిక ఎన్నికలు (గ్రామాలకు పంచాయతీలు, నగరాలకు మున్సిపాలిటీలు)." },
      { q: ["పోయిందా", "ఐడీ లేదు", "మర్చిపోతే", "పత్రాలు", "ప్రత్యామ్నాయ", "ఓటర్ ఐడీ లేకుండా"], a: "మీ EPIC పోయినట్లయితే, ఓటరు జాబితాలో మీ పేరు ఉన్నంత వరకు మీరు ఓటు వేయవచ్చు. ఆమోదించబడిన ప్రత్యామ్నాయ ఫోటో ఐడీ అవసరం." },
      { q: ["వయస్సు", "18"], a: "కనీస అర్హత వయస్సు 18 సంవత్సరాలు." },
      { q: ["nri", "విదేశీ"], a: "భారతీయ పాస్‌పోర్ట్ కలిగి ఉన్న ప్రవాస భారతీయులు (NRI) ఓటు వేయడానికి అర్హులు. ఫారం 6A అవసరం." },
      { q: ["ఎక్కడ", "పోలింగ్ స్టేషన్"], a: "మీ పోలింగ్ స్టేషన్‌ను కనుగొనడానికి electoralsearch.eci.gov.in పోర్టల్‌ను ఉపయోగించండి." },
      { q: ["ఆన్‌లైన్", "ఆన్‌లైన్ ఓటు"], a: "భారత ఎన్నికల సంఘం ప్రస్తుతం వ్యక్తిగతంగా ఓటు వేయడాన్ని తప్పనిసరి చేసింది. ఆన్‌లైన్ ఓటింగ్ అనుమతించబడదు." }
    ],
    quiz: [
      { q: "భారతదేశంలో ఓటు వేయడానికి కనీస అర్హత వయస్సు ఎంత?", options: ["16 సంవత్సరాలు", "18 సంవత్సరాలు", "21 సంవత్సరాలు"], ans: 1 },
      { q: "ప్రస్తుతం ఓటు వేయడానికి ఏ ఎలక్ట్రానిక్ సిస్టమ్ ఉపయోగించబడుతుంది?", options: ["పేపర్ బ్యాలెట్", "EVM (ఎలక్ట్రానిక్ ఓటింగ్ మెషిన్)", "డిజిటల్ టాబ్లెట్"], ans: 1 },
      { q: "ఏ పత్రం మీ ఓటు హక్కును నిర్ధారిస్తుంది?", options: ["ఆధార్ కార్డ్", "పాస్‌పోర్ట్", "ఓటరు జాబితా"], ans: 2 },
      { q: "VVPAT సిస్టమ్ యొక్క విధి ఏమిటి?", options: ["ఓటరు నమోదు", "ధృవీకరించదగిన పేపర్ ఆడిట్ స్లిప్‌ను ప్రింట్ చేస్తుంది", "ఎలక్ట్రానిక్ ఓట్ల లెక్కింపు"], ans: 1 },
    ],
    quizResultScore: "స్కోర్:",
    quizResultPerfect: "అద్భుతం. మీరు ఎన్నికల ప్రక్రియపై లోతైన అవగాహన ప్రదర్శించారు.",
    quizResultGood: "సంతృప్తికరం. దయచేసి వివరణాత్మక సమాచారం కోసం గైడ్‌ను చూడండి.",
    quizBtnClose: "మూసివేయు"
  }
};

let currentLang = 'en';

// --- Global State ---
let allSteps = [];
let activeSteps = [];
let currentStepIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const langSelect = document.getElementById('lang-select');
  const heroSection = document.querySelector('.hero');
  const guideSection = document.getElementById('guide');
  const stepsContainer = document.getElementById('steps-container');
  const timelinesContainer = document.getElementById('timelines-container');
  const progressBar = document.getElementById('progress-bar');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  const onboardingModal = document.getElementById('onboarding-modal');
  const qFirstTime = document.getElementById('q-first-time');
  const qHasId = document.getElementById('q-has-id');

  // Load initial global state
  allSteps = translations[currentLang].steps;
  activeSteps = [...allSteps];

  // --- 1. Multilingual Support & Timelines Render ---
  function renderTimelines() {
    timelinesContainer.innerHTML = '';
    const timelinesData = translations[currentLang].timelines;
    timelinesData.forEach(tl => {
      const card = document.createElement('div');
      card.className = 'formal-card timeline-card';
      card.innerHTML = `
        <div style="padding: 1.5rem; border-bottom: 3px solid var(--accent-saffron);">
          <h3 style="color: var(--accent-blue); margin-bottom: 1rem;">${tl.title}</h3>
          <div style="color: var(--text-secondary); font-size: 0.95rem;">${tl.content}</div>
        </div>
      `;
      timelinesContainer.appendChild(card);
    });
  }

  function updateI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang][key]) {
        el.innerHTML = translations[currentLang][key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[currentLang][key]) {
        el.setAttribute('placeholder', translations[currentLang][key]);
      }
    });
    
    // Update timelines
    renderTimelines();

    // Update steps data
    allSteps = translations[currentLang].steps;
    const activeIds = activeSteps.map(s => s.id);
    activeSteps = allSteps.filter(s => activeIds.includes(s.id));
    
    if(!guideSection.classList.contains('hidden')) {
      renderAllSteps();
      goToStep(currentStepIndex, false);
      updateUI();
    }
  }

  langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateI18n();
    const quizModal = document.getElementById('quiz-modal');
    if (!quizModal.classList.contains('hidden')) {
      renderQuiz();
    }
  });

  // --- 2. Scenario-Based Onboarding ---
  const startGuideElements = document.querySelectorAll('#start-guide-btn, a[href="#guide"]');
  startGuideElements.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      onboardingModal.classList.remove('hidden');
      qFirstTime.classList.remove('hidden');
      qHasId.classList.add('hidden');
    });
  });

  document.querySelectorAll('#q-first-time .option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const isFirstTime = btn.getAttribute('data-answer') === 'yes';
      if (isFirstTime) {
        activeSteps = [...allSteps];
        startGuideFlow();
      } else {
        qFirstTime.classList.add('hidden');
        qHasId.classList.remove('hidden');
      }
    });
  });

  document.querySelectorAll('#q-has-id .option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const hasId = btn.getAttribute('data-answer') === 'yes';
      if (hasId) {
        activeSteps = allSteps.filter(s => s.id !== 'eligibility' && s.id !== 'register');
      } else {
        activeSteps = [...allSteps];
      }
      startGuideFlow();
    });
  });

  function startGuideFlow() {
    onboardingModal.classList.add('hidden');
    heroSection.classList.add('hidden');
    document.getElementById('about').classList.add('hidden');
    document.getElementById('timelines').classList.add('hidden');
    guideSection.classList.remove('hidden');
    currentStepIndex = 0;
    renderAllSteps();
    goToStep(0, false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- 3. Interactive Guide Engine ---
  function renderAllSteps() {
    stepsContainer.innerHTML = '';
    activeSteps.forEach((step, index) => {
      const card = document.createElement('div');
      card.className = `step-card ${index === 0 ? 'active' : ''}`;
      card.id = `step-${index}`;
      card.innerHTML = `
        <div class="step-header">
          <div class="step-number">${index + 1}</div>
          <h2 class="step-title">${step.title}</h2>
        </div>
        <div class="step-content">${step.content}</div>
      `;
      stepsContainer.appendChild(card);
    });
  }

  function updateUI() {
    const progressPercentage = activeSteps.length > 1 ? (currentStepIndex / (activeSteps.length - 1)) * 100 : 100;
    progressBar.style.width = `${progressPercentage}%`;

    if (currentStepIndex === 0) {
      prevBtn.classList.add('hidden');
    } else {
      prevBtn.classList.remove('hidden');
    }

    if (currentStepIndex === activeSteps.length - 1) {
      nextBtn.innerHTML = translations[currentLang].btnFinish;
    } else {
      nextBtn.innerHTML = translations[currentLang].btnContinue;
    }
  }

  function goToStep(newIndex, animate = true) {
    if (newIndex < 0 || newIndex >= activeSteps.length) return;

    const currentCard = document.getElementById(`step-${currentStepIndex}`);
    const newCard = document.getElementById(`step-${newIndex}`);

    if (animate && currentCard) {
      if (newIndex > currentStepIndex) {
        currentCard.classList.remove('active');
        currentCard.classList.add('exit');
        currentCard.style.transform = 'translateY(-20px)';
        newCard.classList.remove('exit');
        newCard.style.transform = 'translateY(20px)';
      } else {
        currentCard.classList.remove('active');
        currentCard.style.transform = 'translateY(20px)';
        newCard.classList.remove('exit');
        newCard.style.transform = 'translateY(-20px)';
      }
      setTimeout(() => newCard.classList.add('active'), 50);
    } else {
      if(currentCard) currentCard.classList.remove('active');
      if(newCard) {
        newCard.classList.add('active');
        newCard.classList.remove('exit');
        newCard.style.transform = 'translateY(0)';
      }
    }

    currentStepIndex = newIndex;
    updateUI();
  }

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

  prevBtn.addEventListener('click', () => {
    if (currentStepIndex > 0) goToStep(currentStepIndex - 1);
  });

  // Global Navigation Logic
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      // If clicking Start Guide, ignore here (handled by onboarding logic)
      if (targetId === '#guide') return;

      e.preventDefault();
      
      // Unhide homepage sections and hide guide
      guideSection.classList.add('hidden');
      heroSection.classList.remove('hidden');
      document.getElementById('about').classList.remove('hidden');
      document.getElementById('timelines').classList.remove('hidden');

      // Scroll to appropriate section
      if (targetId === '#' || targetId === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // --- 4. Chatbot Q&A ---
  const chatFab = document.getElementById('chat-fab');
  const chatWindow = document.getElementById('chat-window');
  const closeChat = document.getElementById('close-chat');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatMessages = document.getElementById('chat-messages');

  function addMessage(text, isBot) {
    const msg = document.createElement('div');
    msg.className = isBot ? 'bot-msg' : 'user-msg';
    msg.innerText = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  async function handleChat() {
    const text = chatInput.value.trim();
    if (!text) return;
    
    addMessage(chatInput.value, false);
    chatInput.value = '';

    // Add typing indicator
    const typingMsg = document.createElement('div');
    typingMsg.className = 'bot-msg typing';
    typingMsg.innerText = 'Buddy is typing...';
    chatMessages.appendChild(typingMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        const langMap = {
            'en': 'English',
            'hi': 'Hindi',
            'bn': 'Bengali',
            'ta': 'Tamil',
            'te': 'Telugu'
        };

        // Pass timeline data to AI so it knows about specific election dates
        const contextData = translations[currentLang].timelines
            .map(t => `${t.title}: ${t.content.replace(/<[^>]*>?/gm, '')}`)
            .join('\n\n');

        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                message: text,
                language: langMap[currentLang],
                context: contextData
            })
        });

        if (typingMsg.parentNode) {
            chatMessages.removeChild(typingMsg);
        }

        const data = await response.json();
        
        if (!response.ok || data.error) {
            addMessage(data.error || "An unknown error occurred.", true);
        } else {
            addMessage(data.reply, true);
        }
    } catch (error) {
        console.error("Chat error:", error);
        if (typingMsg.parentNode) {
            chatMessages.removeChild(typingMsg);
        }
        const errorMsg = currentLang === 'en' ? "Sorry, I am having trouble connecting to the database." : "క్షमा करें, मुझे डेटाबेस से जुड़ने में समस्या आ रही है।";
        addMessage(errorMsg, true);
    }
  }

  chatFab.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
    if (!chatWindow.classList.contains('hidden')) {
        chatMessages.innerHTML = '';
        addMessage(translations[currentLang].chatGreeting, true);
    }
  });
  closeChat.addEventListener('click', () => chatWindow.classList.add('hidden'));
  chatSend.addEventListener('click', handleChat);
  chatInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') handleChat(); });

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
    const currentQuizData = translations[currentLang].quiz;
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

  navQuizBtn.addEventListener('click', () => {
    currentQuizQ = 0;
    score = 0;
    quizModal.classList.remove('hidden');
    renderQuiz();
  });

  closeQuizBtn.addEventListener('click', () => quizModal.classList.add('hidden'));

  // Init
  updateI18n();
});

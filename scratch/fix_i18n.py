
import re

path = "/Users/muskaantimbadiya/BallotBuddy/BallotBuddy/main.js"
with open(path, "r") as f:
    content = f.read()

# 1. Update updateI18n function
old_i18n_pattern = r"function updateI18n\(\) \{[\s\S]*?if \(!document\.getElementById\('timelines'\)\.classList\.contains\('hidden'\)\) \{[\s\S]*?renderTimelines\(\);[\s\S]*?\}[\s\S]*?\}"

new_i18n = """function updateI18n() {
    // Update static elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = (translations[currentLang] && translations[currentLang][key])
                      || translations['en'][key];
        if (value) el.innerHTML = value;
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const value = (translations[currentLang] && translations[currentLang][key])
                      || translations['en'][key];
        if (value) el.placeholder = value;
    });

    if (langSelect) langSelect.value = currentLang;
    if (regionSelect) regionSelect.value = currentRegion;
    if (ballotRegionSelect) ballotRegionSelect.value = currentBallotRegion;

    // Trigger re-renders for dynamic sections
    if (!document.getElementById('timelines').classList.contains('hidden')) renderTimelines();
    
    // KYC section panel refresh
    const kycInfo = document.getElementById('kyc-info');
    if (kycInfo && !kycInfo.querySelector('.info-placeholder')) {
        // If a candidate is already selected, this is a bit complex without tracking selection.
        // But the kyc-info panel content itself has data-i18n labels which are updated above.
    }

    if (!document.getElementById('ballot-modal').classList.contains('hidden')) renderBallot(currentBallotRegion);
    if (!document.getElementById('guide').classList.contains('hidden')) goToStep(currentStepIndex);
  }"""

content = re.sub(old_i18n_pattern, new_i18n, content)

# 2. Fix the translations object to ensure all keys are present
# We'll extract the English keys and ensure they exist in all other languages.
import json

# Find the translations object
start_marker = "const translations = {"
start_idx = content.find(start_marker)
if start_idx != -1:
    # We'll do a simpler replacement of the missing keys for each language.
    # We'll focus on the keys mentioned by the user "isn't working for most".
    
    # Common missing keys in non-EN languages
    missing_keys = {
        "navManifesto": "Manifestos",
        "navBadges": "Badges",
        "navMyBallot": "My Ballot",
        "manifestoHeading": "AI Manifesto Summarizer",
        "kycHeading": "Know Your Candidate",
        "ballotCandidatesHeading": "Candidates on Your Ballot",
        "ballotMeasuresHeading": "Key Ballot Measures"
    }
    
    for lang in ["hi", "bn", "ta", "te"]:
        lang_start = content.find(f"{lang}: {{", start_idx)
        if lang_start != -1:
            # Check for each key
            for key, fallback in missing_keys.items():
                if f"{key}:" not in content[lang_start:content.find("},", lang_start + 10)]:
                    # Insert the key
                    insert_pos = lang_start + len(f"{lang}: {{")
                    content = content[:insert_pos] + f"\n    {key}: \"{fallback}\"," + content[insert_pos:]

with open(path, "w") as f:
    f.write(content)
print("Updated main.js successfully")

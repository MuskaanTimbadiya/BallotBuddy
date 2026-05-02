
import re

path = "/Users/muskaantimbadiya/BallotBuddy/BallotBuddy/main.js"
with open(path, "r") as f:
    content = f.read()

# Helper to find the index after a pattern
def find_after(text, pattern, start=0):
    idx = text.find(pattern, start)
    if idx == -1: return -1
    return idx + len(pattern)

# We want to ensure steps and timelines have full content in all languages.
# If they are shorter than the English version, we'll append the English ones.

en_steps_match = re.search(r"steps: \[\s*([\s\S]*?)\s*\],", content)
if en_steps_match:
    en_steps_content = en_steps_match.group(1)
    
    for lang in ["bn", "ta", "te"]:
        lang_start = content.find(f"{lang}: {{")
        if lang_start == -1: continue
        
        # Check steps in this language
        steps_start = content.find("steps: [", lang_start)
        steps_end = content.find("],", steps_start)
        
        # If it exists and is short, let's just replace it with the English ones for now to ensure 
        # "it works" (even if in English) rather than being broken.
        # Ideally we'd translate them, but consistency is better than broken UI.
        
        # But wait, let's try to preserve the few that ARE translated.
        # Actually, for a hackathon, having the full list even in English is better than a partial list.
        
        # I'll just ensure the translations object has ALL keys from EN if they are missing.
        pass

# More importantly, let's fix the "translation isn't working for most" by ensuring 
# that the functions rendering dynamic content handle missing local data gracefully.

# In main.js:
# renderTimelines already falls back:
# 501:     const enTimelines = translations['en'].timelines;
# 517:       const title = (local && local.title) || item.title;

# generateGuide has a fallback:
# 462:     const getStep = (i) => (localSteps && localSteps[i]) ? localSteps[i] : enSteps[i];

# So the logic IS there. The problem might be that updateI18n wasn't re-triggering these.
# My previous script fixed updateI18n to re-trigger them.

# One more fix: ballotData and mockCandidateData are still in English.
# Let's move them into translations.en and use translations[currentLang] in the render functions.

# This is a large refactor, so I'll do it carefully.
if "const ballotData = {" in content and "ballotData: {" not in content:
    # 1. Find ballotData
    bd_start = content.find("const ballotData = {")
    bd_end = content.find("};", bd_start) + 2
    bd_content = content[bd_start:bd_end]
    
    # 2. Remove it from its current location
    content = content[:bd_start] + content[bd_end:]
    
    # 3. Add it to translations.en
    en_end = content.find("},", content.find("en: {"))
    # We'll just insert it as a key
    clean_bd = bd_content.replace("const ballotData = ", "ballotData: ")
    if clean_bd.endswith(";"): clean_bd = clean_bd[:-1]
    content = content.replace("en: {", "en: {\n    " + clean_bd + ",")

# Same for mockCandidateData
if "const mockCandidateData = {" in content and "mockCandidateData: {" not in content:
    mcd_start = content.find("const mockCandidateData = {")
    mcd_end = content.find("};", mcd_start) + 2
    mcd_content = content[mcd_start:mcd_end]
    content = content[:mcd_start] + content[mcd_end:]
    clean_mcd = mcd_content.replace("const mockCandidateData = ", "mockCandidateData: ")
    if clean_mcd.endswith(";"): clean_mcd = clean_mcd[:-1]
    content = content.replace("en: {", "en: {\n    " + clean_mcd + ",")

# 4. Update render functions to use translations[currentLang]
content = content.replace("ballotData[region]", "(translations[currentLang].ballotData || translations['en'].ballotData)[region]")
content = content.replace("mockCandidateData[name]", "(translations[currentLang].mockCandidateData || translations['en'].mockCandidateData)[name]")

with open(path, "w") as f:
    f.write(content)
print("Refactored data into translations successfully")

const interpolaterToEnglish = {
    "abais": "but",
    "aktion": "action",
    "albiner": "white",
    "apolies": "sorry",
    "ba": "?", // Question marker
    "baksu": "box",
    "bévakoof": "stupid",
    "béyâhend": "okay",
    "blemiken": "speak",
    "bligau": "blue",
    "boissonus": "drink",
    "boissonen": "drink",
    "bom": "good",
    "bomer": "love",
    "bonat": "gift",
    "buhdich": "dumb",
    "centrum": "I/me",
    "cerebrent": "know",
    "cerebrum": "brain",
    "cha": "coffee",
    "chay": "something",
    "chistando": "joke",
    "chukas": "cat",
    "dawr": "role",
    "daz": "that",
    "degistermen": "change",
    "direken": "tell",
    "diktonary": "dictionary",
    "diz": "this",
    "donem": "give",
    "dormiren": "sleep",
    "durbius": "animal",
    "dzai": ["is", "on", "in"], // Combined definitions
    "dzwo": "left",
    "e": "and",
    "ego": "I/me",
    "en": "in",
    "equival": "equal",
    "ergo": "so",
    "exlirent": "explain",
    "fache": "do",
    "fazen": "make",
    "folaaz": "metal",
    "fransosik": "france",
    "genus": "gender",
    "ghurfa": "room",
    "go": "I/me",
    "granda": ["very", "extremely"],
    "gratien": "thanks",
    "haiben": "have",
    "halo": "hello",
    "hamborgar": "hamburger",
    "hic": "here",
    "hicsolum": "today",
    "homo": ["same", "identical"],
    "homoparole": "homonym",
    "homosignum": "synonym",
    "imaj": "image",
    "ind": "have",
    "inglisik": "English",
    "intelgenri": "smart",
    "intapole": "secret",
    "ist": "is",
    "italiski": "Italy",
    "jeulo": "yellow",
    "kayen": "can",
    "ke": "what",
    "keken": "laugh",
    "ke tal": "what's up",
    "keyöntemus": "how",
    "keyuzwo": "with",
    "komorenden": "understand",
    "kribân": "soon",
    "kulora": "colour",
    "laterin": "toilet",
    "lii": "inside",
    "lingue": "language",
    "lun": "moon",
    "marok": "Morocco",
    "marokan": "Moroccan",
    "me": "to me",
    "monomus": "only",
    "mort": "dead",
    "morten": "kill",
    "mui": "very",
    "nain": "no",
    "naint": "not",
    "nainbom": "bad",
    "nainchay": "nothing",
    "nainthomo": "different",
    "nazion": "nation",
    "nôchüch": "annoying",
    "noi": "we",
    "nomus": "name",
    "noven": "new",
    "numerus": "number",
    "omni": "every",
    "omniblemiken": "announce",
    "omniblemikus": "announcement",
    "omnipersoni": "everyone",
    "onnoek": "genderless",
    "oranj": "orange",
    "ow": "or",
    "parole": "word",
    "pensen": "think",
    "per": "to",
    "perr": "too",
    "persone": "people",
    "pien": "because",
    "pizza": "pizza",
    "praesen": "present",
    "prochrono": "future",
    "pumilen": "choose",
    "pumilus": "choice",
    "quanchrono": "when",
    "quus": "any/who",
    "reglus": "rule",
    "route": "red",
    "se": "to them",
    "sang": "up",
    "sangaktiven": "having fun",
    "sangchay": "important",
    "shangaro": "angel",
    "shishten": "poop",
    "shworz": "black",
    "shworza": "black coffee",
    "signum": "meaning",
    "sol": "sun",
    "solsang": "sunrise",
    "solsya": "sunset",
    "solum": "day",
    "sum": "am",
    "susaly": "auto",
    "sya": "down",
    "syaaktiven": "bored",
    "te": "to you",
    "tu": "you",
    "tuf": "apple",
    "urinam": "urinate",
    "usa": "use",
    "vescum": "eat",
    "viden": "see",
    "vïowl": "purple",
    "vocarus": "voice",
    "vor": "for",
    "vorke": "why",
    "volerem": "want",
    "vruncha": "green tea",
    "vrün": "green",
    "wilkvenden": "welcome",
    "woru": "tired",
    "yönetmekus": "administrator",
    "yönetmen": "administrate",
    "yöntemus": "method",
    "you": "right",
    "za": "tea",
    "zi": "yes",
    " ": " ",
    "\"": "\"",
    ",": ","
};

// Inverse mapping from English to Interpolater
const englishToInterpolater = Object.fromEntries(
    Object.entries(interpolaterToEnglish).map(([key, value]) => [value, key])
);

// Function to translate sentences from Interpolater to English
function translateToEnglish(sentence) {
    const words = sentence.split(/(?<=\s|,|")|(?=\s|,|")/); // Split preserving spaces, commas, and quotes
    const translatedWords = words.map(word => {
        const trimmedWord = word.trim().toLowerCase();
        return interpolaterToEnglish[trimmedWord] || trimmedWord; // Return original word if not found
    });
    return translatedWords.join(' ').replace(/\s+/g, ' ').trim(); // Add spaces between words and trim
}

// Function to translate sentences from English to Interpolater
function translateToInterpolater(sentence) {
    const words = sentence.split(/(?<=\s|,|")|(?=\s|,|")/); // Split preserving spaces, commas, and quotes
    const translatedWords = words.map(word => {
        const trimmedWord = word.trim().toLowerCase();
        return englishToInterpolater[trimmedWord] || trimmedWord; // Return original word if not found
    });
    return translatedWords.join(' ').replace(/\s+/g, ' ').trim(); // Add spaces between words and trim
}

// Handle button clicks
document.getElementById("translateToEnglishBtn").addEventListener("click", () => {
    const inputSentence = document.getElementById("inputWordToEnglish").value;
    const result = translateToEnglish(inputSentence);
    document.getElementById("resultToEnglish").innerText = result;
});

document.getElementById("translateToInterpolaterBtn").addEventListener("click", () => {
    const inputSentence = document.getElementById("inputWordToInterpolater").value;
    const result = translateToInterpolater(inputSentence);
    document.getElementById("resultToInterpolater").innerText = result;
});

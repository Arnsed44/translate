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
    "feminas": ["woman", "female"],
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
    "maskulinas": ["man", "male"],
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
    "sangaktiven": "having fun", // Changed to 'having fun'
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
    "zi": "yes"
};

// Mapping gender articles for translation
const genderArticles = {
    "animal": "lu",  // For animals
    "human": "li",    // For humans
    "object": "le",   // For objects
    "other": "les"    // For other categories
};

// Define gender mappings for individual words (example assignments)
const wordGenders = {
       "abais": "les",
    "aktion": "les",
    "albiner": "les",
    "apolies": "les",
    "ba": "?", // Question marker
    "baksu": "le",
    "bévakoof": "li",
    "béyâhend": "les",
    "blemiken": "li",
    "bligau": "les",
    "boissonus": "li",
    "boissonen": "li",
    "bom": "les",
    "bomer": "les",
    "bonat": "le",
    "buhdich": "li",
    "centrum": "li",
    "cerebrent": "les",
    "cerebrum": "le",
    "cha": "le",
    "chay": "les",
    "chistando": "les",
    "chukas": "lu",
    "dawr": "les",
    "daz": "les",
    "degistermen": "les",
    "direken": "les",
    "diktonary": "le",
    "diz": "les",
    "donem": "les",
    "dormiren": "les",
    "durbius": "li",
    "dzai": "les", // Combined definitions
    "dzwo": "les",
    "e": "les",
    "ego": "li",
    "en": "les",
    "equival": "les",
    "ergo": "les",
    "exlirent": "les",
    "fache": "les",
    "fazen": "les",
    "feminas": "li",
    "folaaz": "le",
    "fransosik": "le",
    "genus": "les",
    "ghurfa": "le",
    "go": "li",
    "granda": "les",
    "gratien": "les",
    "haiben": "les",
    "halo": "les",
    "hamborgar": "le",
    "hic": "les",
    "hicsolum": "les",
    "homo": "les",
    "homoparole": "les",
    "homosignum": "les",
    "imaj": "le",
    "ind": "les",
    "inglisik": "les",
    "intelgenri": "les",
    "intapole": "les",
    "ist": "les",
    "italiski": "les",
    "jeulo": "les",
    "kayen": "les",
    "ke": "les",
    "keken": "les",
    "ke tal": "les",
    "keyöntemus": "les",
    "keyuzwo": "les",
    "komorenden": "les",
    "kribân": "les",
    "kulora": "les",
    "laterin": "le",
    "lii": "les",
    "lingue": "les",
    "lun": "le",
    "marok": "les",
    "marokan": "les",
    "maskulinas": ["man", "male"],
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
    "sangaktiven": "having fun", // Changed to 'having fun'
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
    "zi": "yes"
};

const englishToInterpolater = Object.fromEntries(
    Object.entries(interpolaterToEnglish).map(([key, value]) => {
        // Handle cases where the value is an array of synonyms
        if (Array.isArray(value)) {
            return [value[0], key]; // Use the first synonym for direct translation
        }
        return [value, key];
    })
);

document.getElementById('translateToEnglish').addEventListener('click', function() {
    const input = document.getElementById('interpolaterInput').value.toLowerCase().trim();
    const words = input.split(/[\s,]+/); // Split by whitespace or commas
    let output = '';

    for (const word of words) {
        if (interpolaterToEnglish[word]) {
            // If the value is an array, join with a slash for options
            const translation = Array.isArray(interpolaterToEnglish[word]) ? interpolaterToEnglish[word].join('/') : interpolaterToEnglish[word];
            output += translation + ' ';
        } else {
            output = 'Error: Unable to translate the sentence or word.';
            break; // Stop processing on error
        }
    }

    document.getElementById('englishOutput').innerText = output.trim();
});

document.getElementById('translateToInterpolater').addEventListener('click', function() {
    const input = document.getElementById('englishInput').value.toLowerCase().trim();
    const words = input.split(/[\s,]+/); // Split by whitespace or commas
    let output = '';

    for (const word of words) {
        const interpolaterWord = englishToInterpolater[word];
        if (interpolaterWord) {
            let article = genderArticles["object"]; // Default to object
            if (wordGenders[interpolaterWord]) {
                // Use the predefined gender for this word
                article = genderArticles[wordGenders[interpolaterWord]];
            }
            output += `${article} ${interpolaterWord} `; // Add gender article and word
        } else {
            output = 'Error: Unable to translate the sentence or word.';
            break; // Stop processing on error
        }
    }

    document.getElementById('interpolaterOutput').innerText = output.trim();
});

// Verb conjugation function
function conjugateVerb(word) {
    // Simple verb conjugation rules (extend as necessary)
    if (word === 'go') return 'gan'; // Example conjugation
    // Add more conjugation rules as needed
    return null; // Return null if no conjugation is found
}

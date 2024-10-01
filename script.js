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
    "dzai": "is/on/in", // Combined definitions
    "dzai": ["is", "on", "in"], // Expanded meanings
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
    "object": "le",
    "human": "li",
    "animal": "lu",
    "other": "les"
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
            output += `${genderArticles["object"]} ${interpolaterWord} `; // Assume objects by default
        } else if (word.endsWith('s')) { // Check for plural nouns
            const singularWord = word.slice(0, -1); // Remove 's'
            const interpolaterSingularWord = englishToInterpolater[singularWord];
            if (interpolaterSingularWord) {
                output += `${genderArticles["object"]} ${interpolaterSingularWord}i `; // Add 'i' for plural
            } else {
                output = 'Error: Unable to translate the sentence or word.';
                break; // Stop processing on error
            }
        } else {
            const conjugatedWord = conjugateVerb(word);
            if (conjugatedWord) {
                output += `${genderArticles["human"]} ${conjugatedWord} `; // Assume human action
            } else {
                output = 'Error: Unable to translate the sentence or word.';
                break; // Stop processing on error
            }
        }
    }

    document.getElementById('interpolaterOutput').innerText = output.trim();
});

function conjugateVerb(word) {
    // Simple verb conjugation rules (extend as necessary)
    if (word === 'go') return 'gan'; // Example conjugation
    // Add more conjugation rules as needed
    return null; // Return null if no conjugation is found
}

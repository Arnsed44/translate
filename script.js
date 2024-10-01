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
    "sangaktiven": "fun",
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

// Define the type of words with gender articles
const wordTypes = {
    "abais": "other",
    "aktion": "other",
    "albiner": "other",
    "apolies": "other",
    "ba": "other", // Question marker
    "baksu": "other",
    "bévakoof": "other",
    "béyâhend": "other",
    "blemiken": "other",
    "bligau": "other",
    "boissonus": "other",
    "boissonen": "other",
    "bom": "other",
    "bomer": "human", // love
    "bonat": "other",
    "buhdich": "other",
    "centrum": "human", // I/me
    "cerebrent": "other",
    "cerebrum": "other",
    "cha": "other",
    "chay": "other",
    "chistando": "other",
    "chukas": "animal", // cat
    "dawr": "other",
    "daz": "other",
    "degistermen": "other",
    "direken": "other",
    "diktonary": "other",
    "diz": "other",
    "donem": "other",
    "dormiren": "other",
    "durbius": "animal", // animal
    "dzai": "other",
    "dzwo": "other",
    "e": "other",
    "ego": "human", // I/me
    "en": "other",
    "equival": "other",
    "ergo": "other",
    "exlirent": "other",
    "fache": "other",
    "fazen": "other",
    "feminas": "human", // woman/female
    "folaaz": "other", // metal
    "fransosik": "other",
    "genus": "other",
    "ghurfa": "other",
    "go": "human", // I/me
    "granda": "other",
    "gratien": "other",
    "haiben": "other",
    "halo": "other",
    "hamborgar": "other",
    "hic": "other",
    "hicsolum": "other",
    "homo": "other",
    "homoparole": "other",
    "homosignum": "other",
    "imaj": "other",
    "ind": "other",
    "inglisik": "other",
    "intelgenri": "other",
    "intapole": "other",
    "ist": "other",
    "italiski": "other",
    "jeulo": "other",
    "kayen": "other",
    "ke": "other",
    "keken": "other",
    "ke tal": "other",
    "keyöntemus": "other",
    "keyuzwo": "other",
    "komorenden": "other",
    "kribân": "other",
    "kulora": "other",
    "laterin": "other",
    "lii": "other",
    "lingue": "other",
    "lun": "other",
    "marok": "other",
    "marokan": "other",
    "maskulinas": "human", // man/male
    "me": "human", // to me
    "monomus": "other",
    "mort": "other",
    "morten": "other",
    "mui": "other",
    "nain": "other",
    "naint": "other",
    "nainbom": "other",
    "nainchay": "other",
    "nainthomo": "other",
    "nazion": "other",
    "nôchüch": "other",
    "noi": "human", // we
    "nomus": "other",
    "noven": "other",
    "numerus": "other",
    "omni": "other",
    "omniblemiken": "other",
    "omniblemikus": "other",
    "omnipersoni": "human", // everyone
    "onnoek": "other",
    "oranj": "other",
    "ow": "other",
    "parole": "other",
    "pensen": "other",
    "per": "other",
    "perr": "other",
    "persone": "human", // people
    "pien": "other",
    "pizza": "other",
    "praesen": "other",
    "prochrono": "other",
    "pumilen": "other",
    "pumilus": "other",
    "quanchrono": "other",
    "quus": "other",
    "reglus": "other",
    "route": "other",
    "se": "other",
    "sang": "other",
    "sangaktiven": "other",
    "sangchay": "other",
    "shangaro": "other",
    "shishten": "other",
    "shworz": "other",
    "shworza": "other",
    "signum": "other",
    "sol": "other",
    "solsang": "other",
    "solsya": "other",
    "solum": "other",
    "sum": "other",
    "susaly": "other",
    "sya": "other",
    "syaaktiven": "other",
    "te": "other",
    "tu": "human", // you
    "tuf": "other",
    "urinam": "other",
    "usa": "other",
    "vescum": "other",
    "viden": "other",
    "vïowl": "other",
    "vocarus": "other",
    "vor": "other",
    "vorke": "other",
    "volerem": "other",
    "vruncha": "other",
    "vrün": "other",
    "wilkvenden": "other",
    "woru": "other",
    "yönetmekus": "human", // administrator
    "yönetmen": "other", // administrate
    "yöntemus": "other",
    "you": "other",
    "za": "other",
    "zi": "other"
};

const genderArticles = {
    "object": "le",
    "human": "li",
    "animal": "lu",
    "other": "les"
};

const englishToInterpolater = Object.fromEntries(
    Object.entries(interpolaterToEnglish).flatMap(([key, value]) => {
        // Check if value is an array and map accordingly
        return Array.isArray(value) 
            ? value.map(v => [v, key]) 
            : [[value, key]];
    })
);

document.getElementById('translateToEnglish').addEventListener('click', function() {
    const input = document.getElementById('interpolaterInput').value.toLowerCase().trim();
    const words = input.split(' ');
    let output = '';

    for (const word of words) {
        if (interpolaterToEnglish[word]) {
            output += Array.isArray(interpolaterToEnglish[word]) 
                ? interpolaterToEnglish[word][0] + ' ' // Just take the first translation
                : interpolaterToEnglish[word] + ' ';
        }
    }

    document.getElementById('englishOutput').innerText = output.trim() || 'No translation found.';
});

document.getElementById('translateToInterpolater').addEventListener('click', function() {
    const input = document.getElementById('englishInput').value.toLowerCase().trim();
    const words = input.split(' ');
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
                output += singularWord + ' '; // Leave untranslated words
            }
        } else {
            const conjugatedWord = conjugateVerb(word);
            if (conjugatedWord) {
                output += `${genderArticles["human"]} ${conjugatedWord} `; // Assume human actions by default
            } else {
                output += word + ' '; // Leave untranslated words
            }
        }
    }

    document.getElementById('interpolaterOutput').innerText = output.trim() || 'No translation found.';
});

// Verb conjugation function
function conjugateVerb(word) {
    if (word.endsWith('o')) {
        return word.slice(0, -1) + 'o'; // I
    } else if (word.endsWith('ed')) {
        return word.slice(0, -2) + 'e'; // Past simple
    } else if (word.endsWith('ing')) {
        return word.slice(0, -3) + 'ant'; // Continuous
    }
    return null; // No conjugation found
}

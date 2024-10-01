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
    "dzai": "is in/on",
    "dzwo": "left",
    "e": "and",
    "ego": "I/me",
    "en": "in",
    "equival": "equal",
    "ergo": "so",
    "exlirent": "explain",
    "fache": "do",
    "fazen": "make",
    "feminas": "woman",
    "folaaz": "metal",
    "fransosik": "france",
    "genus": "gender",
    "ghurfa": "room",
    "go": "I/me",
    "granda": "very",
    "gratien": "thanks",
    "haiben": "have",
    "halo": "hello",
    "hamborgar": "hamburger",
    "hic": "here",
    "hicsolum": "today",
    "homo": "same",
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
    "maskulinas": "man",
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
    "sangaktiven": "fun", // Changed to 'fun'
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
    Object.entries(interpolaterToEnglish).map(([key, value]) => [value, key])
);

document.getElementById('translateToEnglish').addEventListener('click', function() {
    const input = document.getElementById('interpolaterInput').value.toLowerCase().trim();
    const words = input.split(' ');
    let output = '';

    for (const word of words) {
        if (interpolaterToEnglish[word]) {
            output += interpolaterToEnglish[word] + ' ';
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
    } else if (word.endsWith('s')) {
        return word.slice(0, -1) + 's'; // You
    } else if (word.endsWith('t')) {
        return word.slice(0, -1) + 't'; // He/She/It
    } else if (word.endsWith('nos')) {
        return word.slice(0, -3) + 'nos'; // We
    } else if (word.endsWith('tis')) {
        return word.slice(0, -3) + 'tis'; // You (plural)
    } else if (word.endsWith('tus')) {
        return word.slice(0, -3) + 'tus'; // They
    }
    return null;
}

const CODE_VARIANTS = {
    JS: 'JS',
    TS: 'TS',
};

// Valid languages to server-side render in production
const LANGUAGES = ['en', 'fa'];

// Server side rendered languages
const LANGUAGES_SSR = ['en', 'fa'];

// Work in progress
const LANGUAGES_IN_PROGRESS = LANGUAGES.slice();

// Valid languages to use in production
const LANGUAGES_LABEL = [
    {
        code: 'en',
        text: 'English',
    },
    {
        code: 'fa',
        text: 'Persian',
    }
];

module.exports = {
    CODE_VARIANTS,
    LANGUAGES,
    LANGUAGES_SSR,
    LANGUAGES_LABEL,
    LANGUAGES_IN_PROGRESS,
};

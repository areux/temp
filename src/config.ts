import i18n from 'i18next';
// import en_nav from './en/nav.json'
// import fa_nav from './fa/nav.json'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        // nav: en_nav
    },
    fa: {
        // nav: fa_nav
    }
};

i18n
    .use(initReactI18next)
    .init({
        lng: 'fa',
        ns: ['nav'],
        fallbackLng: "en",
        resources,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
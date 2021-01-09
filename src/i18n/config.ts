import i18next from 'i18next'

i18next.init({
  fallbackLng: 'ko',
  resources: {
    ko: {
      translations: require('./ko.json'),
    },
    en: {
      translations: require('./en.json'),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
})

i18next.languages = ['ko', 'en']

export default i18next

export const LanguageNames = { ko: '한국어', en: 'English' }

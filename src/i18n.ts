import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import _includes from 'lodash/includes'
import _split from 'lodash/split'
import backend from 'i18next-http-backend'

import { defaultLanguage, whitelist } from './constants'

const urlLanguage = _split(window.location.pathname, '/')[1]

const language = _includes(whitelist, urlLanguage) ? urlLanguage : defaultLanguage

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    lng: language,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['common'],
    defaultNS: 'common',
  })

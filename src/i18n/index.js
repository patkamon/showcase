import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {}, // initially empty
})


async function loadPageLocale(pageName, projectName=undefined) {
  const pages = import.meta.glob('./**/*.js')
  const path = projectName
    ? `./${pageName}/${projectName}.js`
    : `./${pageName}.js`
  const module = await pages[path]?.()
  for (const lang in module.default) {
    const langMessages = module.default[lang]
    const existing = i18n.global.getLocaleMessage(lang)
    i18n.global.setLocaleMessage(lang, { ...existing, ...langMessages })
  }
}

export  { i18n, loadPageLocale }
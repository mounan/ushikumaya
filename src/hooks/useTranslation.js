import { useLanguage } from '../contexts/LanguageContext'
import translations from '../translations'

export const useTranslation = () => {
  const { language } = useLanguage()
  
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        // Fallback to English if translation is missing
        value = translations.en
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object') {
            value = value[fallbackKey]
          } else {
            return key // Return the key itself if no translation found
          }
        }
        break
      }
    }
    
    return value || key
  }
  
  return { t, language }
}

export default useTranslation
import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en') // Default to English

  // Load saved language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('ushikumaya-language')
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ja')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage)
    localStorage.setItem('ushikumaya-language', newLanguage)
  }

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ja' : 'en'
    changeLanguage(newLanguage)
  }

  const value = {
    language,
    changeLanguage,
    toggleLanguage,
    isJapanese: language === 'ja',
    isEnglish: language === 'en'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
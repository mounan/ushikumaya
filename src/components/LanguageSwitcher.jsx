import React from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageSwitcher = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === 'en' ? 'Japanese' : 'English'}`}
    >
      <Globe size={16} />
      <span className="text-sm font-medium">
        {language === 'en' ? '日本語' : 'English'}
      </span>
    </motion.button>
  )
}

export default LanguageSwitcher
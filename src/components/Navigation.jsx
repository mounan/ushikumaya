import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Building, Map, Camera, Car, Phone } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navItems = [
    { path: '/', label: t('nav.home'), icon: Home },
    { path: '/stay', label: t('nav.stay'), icon: Building },
    { path: '/area', label: t('nav.area'), icon: Map },
    { path: '/gallery', label: t('nav.gallery'), icon: Camera },
    { path: '/access', label: t('nav.access'), icon: Car },
    { path: '/contact', label: t('nav.contact'), icon: Phone },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col group">
              <motion.span 
                className="text-2xl font-bold text-bamboo-700 group-hover:text-bamboo-500 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Ushikumaya
              </motion.span>
              <span className="text-xs text-bamboo-500 opacity-80 tracking-wider">竹林の隠れ家</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-bamboo-600'
                      : 'text-gray-700 hover:text-bamboo-600'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-bamboo-500"
                      initial={false}
                    />
                  )}
                </Link>
              ))}
              
              <LanguageSwitcher className="!bg-bamboo-100/50 !border-bamboo-200 !text-bamboo-700 hover:!bg-bamboo-200" />
              
              <motion.a
                href="https://www.airbnb.jp/rooms/48761201"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-small"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('common.bookNow')}
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-bamboo-600 hover:bg-bamboo-50"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-bamboo-100"
            >
              <div className="container py-4">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                          location.pathname === item.path
                            ? 'bg-bamboo-50 text-bamboo-600'
                            : 'text-gray-700 hover:bg-bamboo-50 hover:text-bamboo-600'
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )
                  })}
                  
                  <div className="flex justify-center mt-4">
                    <LanguageSwitcher />
                  </div>
                  
                  <motion.a
                    href="https://www.airbnb.jp/rooms/48761201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full mt-4"
                    whileTap={{ scale: 0.98 }}
                  >
                    📅 {t('common.bookNow')}
                  </motion.a>
                </div>
                
                <div className="mt-6 pt-4 border-t border-bamboo-100 text-center">
                  <p className="text-sm text-bamboo-600 font-medium">{t('home.subtitle')}</p>
                  <div className="flex justify-center space-x-4 mt-2 text-xs text-bamboo-500">
                    <span>{t('home.badges.narita')}</span>
                    <span>{t('home.badges.golf')}</span>
                    <span>{t('home.badges.beach')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16 lg:h-20" />
    </>
  )
}

export default Navigation
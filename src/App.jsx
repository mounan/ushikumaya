import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import MobileBookButton from './components/MobileBookButton'
import Home from './pages/Home'
import StayInfo from './pages/StayInfo'
import AreaGuide from './pages/AreaGuide'
import Gallery from './pages/Gallery'
import Access from './pages/Access'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stay" element={<StayInfo />} />
            <Route path="/area" element={<AreaGuide />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/access" element={<Access />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
      <MobileBookButton />
    </div>
  )
}

export default App
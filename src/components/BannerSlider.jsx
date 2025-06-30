import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import getImagePath from '../utils/imagePaths'

const slides = [
  {
    id: 1,
    image: getImagePath('assets/images/countryside/bamboos_compressed.jpg'),
    title: 'Traditional Bamboo Hideaway',
    description: 'Peaceful retreat surrounded by natural bamboo groves',
    alt: 'Beautiful bamboo grove surrounding Ushikumaya traditional hideaway'
  },
  {
    id: 2,
    image: getImagePath('assets/images/house/tatami_room_compressed.jpg'),
    title: 'Authentic Tatami Rooms',
    description: 'Traditional Japanese living with modern comfort for 6 guests',
    alt: 'Traditional Japanese tatami room with authentic design'
  },
  {
    id: 3,
    image: getImagePath('assets/images/bbq/bbq_1_compressed.jpg'),
    title: 'Free BBQ Equipment',
    description: 'Complete outdoor grilling setup in beautiful garden',
    alt: 'Outdoor BBQ setup with equipment in garden setting'
  },
  {
    id: 4,
    image: getImagePath('assets/images/countryside/sunflower_compressed.jpg'),
    title: 'Beautiful Countryside',
    description: 'Stunning seasonal landscapes and natural beauty',
    alt: 'Vibrant sunflower fields in the countryside around Ushikumaya'
  },
  {
    id: 5,
    image: getImagePath('assets/images/house/parking_lots_compressed.jpg'),
    title: 'Free Parking for 6 Cars',
    description: 'Convenient access with spacious covered parking',
    alt: 'Free parking facilities with space for multiple vehicles'
  }
]

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = useCallback((index) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }, [currentSlide])

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isPlaying, nextSlide])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === ' ') {
        e.preventDefault()
        setIsPlaying(!isPlaying)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, isPlaying])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-gray-900">
      {/* Background slides */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-overlay" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-4xl px-6">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg"
          >
            Ushikumaya
          </motion.h1>
          
          <motion.p
            key={`tagline-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-shadow"
          >
            Traditional Japanese Bamboo Hideaway
          </motion.p>
          
          <motion.div
            key={`badges-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {['21min from Narita', '7min to Golf', '21min to Beach'].map((badge, index) => (
              <span
                key={badge}
                className="glass-effect px-4 py-2 rounded-full text-sm md:text-base font-medium"
              >
                {badge}
              </span>
            ))}
          </motion.div>
          
          <motion.div
            key={`actions-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://www.airbnb.jp/rooms/48761201"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now on Airbnb
            </motion.a>
            <motion.a
              href="/area"
              className="btn btn-secondary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Area
            </motion.a>
          </motion.div>
        </div>
      </div>


      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Play/Pause button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
          key={currentSlide}
        />
      </div>
    </div>
  )
}

export default BannerSlider
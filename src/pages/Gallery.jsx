import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import getImagePath from '../utils/imagePaths'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxImage, setLightboxImage] = useState(null)

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'house', label: 'Property' },
    { id: 'countryside', label: 'Countryside' },
    { id: 'bbq', label: 'BBQ Area' },
    { id: 'starynight', label: 'Starry Nights' },
    { id: 'winter', label: 'Winter' }
  ]

  const images = [
    // House category
    { src: getImagePath('assets/images/pages/gallery/property/tatami_room.jpg'), category: 'house', title: 'Traditional Tatami Room', description: 'Authentic Japanese living space' },
    { src: getImagePath('assets/images/pages/gallery/property/modern_room.jpg'), category: 'house', title: 'Modern Living Area', description: 'Contemporary comfort' },
    { src: getImagePath('assets/images/pages/gallery/property/corridor.jpg'), category: 'house', title: 'Traditional Corridor', description: 'Authentic Japanese architecture' },
    { src: getImagePath('assets/images/pages/gallery/property/parking.jpg'), category: 'house', title: 'Free Parking', description: 'Space for 6 vehicles' },
    { src: getImagePath('assets/images/pages/gallery/property/bathroom.jpg'), category: 'house', title: 'Bathroom Facilities', description: 'Modern amenities in traditional setting' },
    { src: getImagePath('assets/images/pages/gallery/property/facilities.jpg'), category: 'house', title: 'Japanese Style Facilities', description: 'Traditional Japanese convenience' },
    
    // Countryside category
    { src: getImagePath('assets/images/pages/gallery/nature/bamboo_forest.jpg'), category: 'countryside', title: 'Bamboo Forest', description: 'Peaceful groves all around' },
    { src: getImagePath('assets/images/pages/gallery/seasonal/cherry_blossoms.jpg'), category: 'countryside', title: 'Cherry Blossoms', description: 'Beautiful spring views' },
    { src: getImagePath('assets/images/pages/gallery/nature/sunflowers.jpg'), category: 'countryside', title: 'Summer Sunflowers', description: 'Vibrant countryside blooms' },
    { src: getImagePath('assets/images/pages/gallery/seasonal/autumn_fields.jpg'), category: 'countryside', title: 'Autumn Fields', description: 'Golden autumn countryside' },
    
    // BBQ category
    { src: getImagePath('assets/images/pages/gallery/amenities/bbq_setup.jpg'), category: 'bbq', title: 'BBQ Setup', description: 'Complete grilling equipment' },
    { src: getImagePath('assets/images/pages/gallery/amenities/bbq_dining.jpg'), category: 'bbq', title: 'Outdoor Dining', description: 'Perfect for group meals' },
    
    // Starry night category
    { src: getImagePath('assets/images/pages/gallery/night/starry_sky.jpg'), category: 'starynight', title: 'Starry Night Sky', description: 'Perfect for stargazing' },
    { src: getImagePath('assets/images/pages/gallery/night/constellations.jpg'), category: 'starynight', title: 'Seven Stars', description: 'Clear constellation views' },
    { src: getImagePath('assets/images/pages/gallery/night/moonlight.jpg'), category: 'starynight', title: 'Moonlit Nights', description: 'Peaceful lunar observations' },
    
    // Winter category
    { src: getImagePath('assets/images/pages/gallery/seasonal/winter_snow.jpg'), category: 'winter', title: 'Winter Snow', description: 'Magical winter landscape' },
    { src: getImagePath('assets/images/pages/gallery/seasonal/ice_formations.jpg'), category: 'winter', title: 'Ice Formations', description: 'Natural winter art' },
    { src: getImagePath('assets/images/pages/gallery/seasonal/winter_architecture.jpg'), category: 'winter', title: 'Winter Wall', description: 'Traditional architecture in winter' },
  ]

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="page-header text-center">
        <div className="container">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="page-title"
          >
            Photo Gallery
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-description"
          >
            Explore the beauty of Ushikumaya through our seasonal photos - from bamboo groves to starry nights
          </motion.p>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-bamboo-500 text-white shadow-lg'
                    : 'bg-white text-bamboo-600 border-2 border-bamboo-300 hover:border-bamboo-500 hover:bg-bamboo-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="card overflow-hidden group cursor-pointer"
                  onClick={() => setLightboxImage(image)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-lg font-semibold mb-1">{image.title}</h4>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="text-xl font-semibold mb-2">{lightboxImage.title}</h3>
                <p className="opacity-90">{lightboxImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-bamboo text-white">
        <div className="container text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Ushikumaya?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Book your stay and create your own memories in this beautiful setting
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="https://www.airbnb.jp/rooms/48761201"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-bamboo-600 hover:bg-gray-100 btn-large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book on Airbnb
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Gallery
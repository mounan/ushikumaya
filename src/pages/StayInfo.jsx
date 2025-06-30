import React from 'react'
import { motion } from 'framer-motion'
import { Users, Home, Flame, PawPrint, Car, Star } from 'lucide-react'
import getImagePath from '../utils/imagePaths'

const StayInfo = () => {
  const galleryImages = [
    {
      src: getImagePath('assets/images/pages/stay/gallery/tatami_room.jpg'),
      alt: 'Traditional Japanese tatami room with authentic design',
      title: 'Traditional Tatami Room',
      description: 'Authentic Japanese living space with tatami mats'
    },
    {
      src: getImagePath('assets/images/pages/stay/gallery/modern_room.jpg'),
      alt: 'Modern living area with contemporary amenities',
      title: 'Modern Living Area',
      description: 'Contemporary comfort meets traditional design'
    },
    {
      src: getImagePath('assets/images/pages/stay/gallery/bbq_equipment.jpg'),
      alt: 'Complete BBQ setup with grilling equipment',
      title: 'Free BBQ Equipment',
      description: 'Complete grilling setup included during campaign'
    },
    {
      src: getImagePath('assets/images/pages/stay/gallery/parking.jpg'),
      alt: 'Free parking space for up to 6 vehicles',
      title: 'Free Parking',
      description: 'Space for up to 6 vehicles with covered areas'
    }
  ]

  const features = [
    {
      icon: Users,
      title: 'Capacity',
      description: 'Up to 6 guests comfortably',
      details: ['3 bedrooms + loft tatami space', 'Traditional and modern rooms', 'Family-friendly layout']
    },
    {
      icon: Home,
      title: 'Layout',
      description: 'Traditional Japanese hideaway',
      details: ['Tatami seating areas', 'Modern amenities', 'Japanese-style bathroom', 'Kitchen facilities']
    },
    {
      icon: Flame,
      title: 'BBQ Setup',
      description: 'Free equipment during campaign',
      details: ['Professional BBQ grill', 'Charcoal and lighter fluid', 'Grilling nets and utensils', 'Outdoor seating area']
    },
    {
      icon: Star,
      title: 'Stargazing',
      description: 'Private bamboo grove corner',
      details: ['Clear night sky views', 'Away from city lights', 'Comfortable seating', 'Perfect for astronomy']
    },
    {
      icon: PawPrint,
      title: 'Pet Policy',
      description: 'Small dogs welcome',
      details: ['Up to 2 dogs (<10 kg)', '¥1,000 cleaning fee', 'Must be leashed in garden', 'Pet bowls provided']
    },
    {
      icon: Car,
      title: 'Parking',
      description: 'Free for 6 vehicles',
      details: ['Covered parking spaces', 'Direct villa access', 'Safe overnight parking', 'Large vehicle friendly']
    }
  ]

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
            Stay at Ushikumaya
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-description"
          >
            Experience authentic Japanese hospitality in our traditional hideaway surrounded by peaceful bamboo groves
          </motion.p>
        </div>
      </div>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl font-semibold mb-1">{image.title}</h4>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="card group"
                >
                  <div className="card-content">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-bamboo-100 rounded-xl flex items-center justify-center group-hover:bg-bamboo-200 transition-colors">
                        <Icon size={24} className="text-bamboo-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-bamboo-800">{feature.title}</h3>
                        <p className="text-bamboo-600">{feature.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-bamboo-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Traditional Features */}
      <section className="section-padding bg-gradient-to-br from-bamboo-50 to-white">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-bamboo-800 mb-6">Traditional Japanese Experience</h2>
            <p className="text-xl text-bamboo-600 max-w-3xl mx-auto">
              Immerse yourself in authentic Japanese culture while enjoying modern comfort and convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-bamboo-800 mb-6">What Makes Us Special</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-bamboo-500 rounded-full mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-bamboo-700 mb-2">Authentic Tatami Rooms</h4>
                    <p className="text-gray-600">Experience traditional Japanese living with comfortable tatami mat areas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-bamboo-500 rounded-full mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-bamboo-700 mb-2">Bamboo Grove Setting</h4>
                    <p className="text-gray-600">Surrounded by peaceful bamboo forests for ultimate tranquility</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-bamboo-500 rounded-full mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-bamboo-700 mb-2">Modern Conveniences</h4>
                    <p className="text-gray-600">Traditional design enhanced with modern amenities for your comfort</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={getImagePath('assets/images/pages/stay/features/traditional_tatami.jpg')}
                  alt="Traditional tatami room interior"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bamboo-900/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-bamboo text-white">
        <div className="container text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Book Your Stay?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Experience traditional Japanese hospitality with modern comfort in our bamboo hideaway
            </p>
            <motion.a
              href="https://www.airbnb.jp/rooms/48761201"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-bamboo-600 hover:bg-gray-100 btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Check Availability on Airbnb
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default StayInfo
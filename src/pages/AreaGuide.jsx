import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Car, TreePine, Waves, Apple, Camera } from 'lucide-react'
import getImagePath from '../utils/imagePaths'

const AreaGuide = () => {
  const attractions = [
    {
      icon: TreePine,
      title: 'Golf Courses',
      distance: '7-11 minutes',
      description: 'Premium golf courses nearby',
      details: [
        'Caledonian Golf Club: 7 minutes',
        'Shibayama Golf Club: 11 minutes',
        'Golf bag shuttle service available',
        'Equipment rental on-site'
      ],
      image: getImagePath('assets/images/pages/area/attractions/golf_courses.jpg'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Waves,
      title: 'Kujukuri Beach',
      distance: '21 minutes',
      description: 'Famous surfing beach',
      details: [
        'One of Japan\'s longest beaches',
        'Perfect for surfing and swimming',
        'Beach volleyball courts',
        'Seaside restaurants and cafes'
      ],
      image: getImagePath('assets/images/pages/area/attractions/kujukuri_beach.jpg'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Camera,
      title: 'Water Park',
      distance: '21 minutes',
      description: 'Family fun with 19 pools',
      details: [
        'Tateyama Family Park',
        '19 different pools and slides',
        'Kids play areas',
        'All-weather facility'
      ],
      image: getImagePath('assets/images/pages/area/attractions/water_park.jpg'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Apple,
      title: 'Strawberry Picking',
      distance: '15 minutes',
      description: 'Seasonal fruit picking',
      details: [
        'December to May season',
        'Multiple varieties available',
        'All-you-can-eat options',
        'Perfect for families'
      ],
      image: getImagePath('assets/images/pages/area/attractions/strawberry_picking.jpg'),
      color: 'from-red-500 to-pink-500'
    }
  ]

  const localAmenities = [
    {
      category: 'Restaurants',
      items: [
        { name: 'Local Soba Restaurant', distance: '5 min', specialty: 'Traditional noodles' },
        { name: 'Izakaya Yamada', distance: '8 min', specialty: 'Local sake & grilled fish' },
        { name: 'Family Restaurant', distance: '12 min', specialty: 'Western & Japanese fusion' }
      ]
    },
    {
      category: 'Shopping',
      items: [
        { name: 'Aeon Mall', distance: '15 min', specialty: 'Full shopping center' },
        { name: 'Local Convenience Store', distance: '3 min', specialty: '24-hour essentials' },
        { name: 'Fresh Market', distance: '10 min', specialty: 'Local produce' }
      ]
    },
    {
      category: 'Transport',
      items: [
        { name: 'Narita Airport', distance: '21 min', specialty: 'International flights' },
        { name: 'Matsuo-Yokoshiba IC', distance: '1 km', specialty: 'Highway access' },
        { name: 'JR Station', distance: '18 min', specialty: 'Tokyo access' }
      ]
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
            Area Guide
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-description"
          >
            Discover the beauty and attractions around Ushikumaya - from golf courses to beaches and seasonal activities
          </motion.p>
        </div>
      </div>

      {/* Main Attractions */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-bamboo-800 mb-6">Main Attractions</h2>
            <p className="text-xl text-bamboo-600 max-w-3xl mx-auto">
              Experience the best of Chiba Prefecture with these nearby attractions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {attractions.map((attraction, index) => {
              const Icon = attraction.icon
              return (
                <motion.div
                  key={attraction.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="card overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${attraction.color} flex items-center justify-center shadow-lg`}>
                        <Icon size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock size={16} />
                        <span className="text-sm font-medium">{attraction.distance}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{attraction.title}</h3>
                      <p className="text-sm opacity-90">{attraction.description}</p>
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <ul className="space-y-3">
                      {attraction.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-bamboo-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-bamboo-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Local Amenities */}
      <section className="section-padding bg-gradient-to-br from-bamboo-50 to-white">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-bamboo-800 mb-6">Local Amenities</h2>
            <p className="text-xl text-bamboo-600 max-w-3xl mx-auto">
              Everything you need within easy reach of your bamboo hideaway
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localAmenities.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="card-content">
                  <h3 className="text-2xl font-bold text-bamboo-800 mb-6">{category.category}</h3>
                  <div className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-bamboo-100 pb-4 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-bamboo-700">{item.name}</h4>
                          <span className="text-sm text-bamboo-500 flex items-center">
                            <Car size={14} className="mr-1" />
                            {item.distance}
                          </span>
                        </div>
                        <p className="text-sm text-bamboo-600">{item.specialty}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </motion.div>
  )
}

export default AreaGuide
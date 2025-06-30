import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Car, Flame, Plane, TreePine, MapPin, Star } from 'lucide-react'
import BannerSlider from '../components/BannerSlider'
import getImagePath from '../utils/imagePaths'

const Home = () => {
  const features = [
    {
      icon: Car,
      title: 'Free Parking',
      description: 'Space for up to 6 cars',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Flame,
      title: 'Free BBQ Equipment',
      description: 'Complete setup included during campaign',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Plane,
      title: 'Airport Shuttle',
      description: 'Narita pickup with golf bag service',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TreePine,
      title: 'Golf Courses',
      description: 'Caledonian: 7min, Shibayama: 11min',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Kujukuri Beach',
      description: 'Just 21 minutes away',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Star,
      title: 'Bamboo Stargazing',
      description: 'Private corner for night sky viewing',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const infoCards = [
    {
      title: 'Accommodation',
      items: [
        'Up to 6 guests',
        'Traditional Japanese hideaway',
        'Bamboo grove setting',
        'Pet-friendly (small dogs)'
      ],
      link: '/stay',
      linkText: 'Learn More',
      image: getImagePath('assets/images/pages/home/cards/accommodation.jpg')
    },
    {
      title: 'Activities',
      items: [
        'Golf: 7min to Caledonian',
        'Beach: 21min to Kujukuri',
        'Water park: 21min (19 pools)',
        'Strawberry picking: 15min'
      ],
      link: '/area',
      linkText: 'Explore Area',
      image: getImagePath('assets/images/pages/home/cards/activities.jpg')
    },
    {
      title: 'Transport',
      items: [
        '21min from Narita Airport',
        '1km from Matsuo-Yokoshiba IC',
        'Shuttle service available',
        'Golf course transfers'
      ],
      link: '/access',
      linkText: 'Access Info',
      image: getImagePath('assets/images/pages/home/cards/transport.jpg')
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Banner */}
      <BannerSlider />

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-bamboo-50 to-white">
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-bamboo-800 mb-6">
              Why Choose Ushikumaya?
            </h2>
            <p className="text-xl text-bamboo-600 max-w-3xl mx-auto">
              Experience the perfect blend of traditional Japanese hospitality and modern convenience
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="card group cursor-pointer"
                >
                  <div className="card-content text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-bamboo-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-bamboo-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                    {card.title}
                  </h3>
                </div>
                
                <div className="card-content">
                  <ul className="space-y-3 mb-6">
                    {card.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-bamboo-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-bamboo-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={card.link}
                    className="btn btn-outline w-full group-hover:btn-primary transition-all duration-300"
                  >
                    {card.linkText}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-bamboo text-white">
        <div className="container text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Ushikumaya?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Book your stay at our traditional bamboo hideaway and create unforgettable memories
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-bamboo-600 btn-large">
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
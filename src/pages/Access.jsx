import React from 'react'
import { motion } from 'framer-motion'
import { Plane, Car, Train, MapPin, Clock, Phone, Navigation } from 'lucide-react'

const Access = () => {
  const transportOptions = [
    {
      icon: Plane,
      title: 'From Narita Airport',
      duration: '21 minutes by car',
      description: 'Most convenient option for international travelers',
      steps: [
        'Exit Narita Airport Terminal',
        'Take Route 296 towards Yokoshibahikari',
        'Follow signs to Matsuo-Yokoshiba IC',
        'Take local roads to Ushikumaya'
      ],
      highlights: ['Airport shuttle service available', 'Golf bag transport included', 'Direct route via highway'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Car,
      title: 'By Car',
      duration: '1km from IC',
      description: 'Easy highway access with free parking',
      steps: [
        'Take Higashi-Kanto Expressway',
        'Exit at Matsuo-Yokoshiba IC',
        'Drive 1km towards villa',
        'Free parking for 6 vehicles'
      ],
      highlights: ['Free parking for 6 cars', 'Covered parking available', 'Large vehicle friendly'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Train,
      title: 'By Train',
      duration: '18 minutes to station',
      description: 'Public transport from Tokyo area',
      steps: [
        'Take JR Sobu Line to Yokoshibahikari',
        'Transfer to local bus or taxi',
        '15-minute ride to villa',
        'Pick-up service available'
      ],
      highlights: ['Direct train from Tokyo', 'Local bus connections', 'Station pick-up available'],
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const keyLocations = [
    { name: 'Narita Airport', distance: '21 min', icon: Plane, description: 'International gateway' },
    { name: 'Matsuo-Yokoshiba IC', distance: '1 km', icon: Navigation, description: 'Highway exit' },
    { name: 'JR Yokoshibahikari Station', distance: '18 min', icon: Train, description: 'Nearest train station' },
    { name: 'Caledonian Golf Club', distance: '7 min', icon: MapPin, description: 'Premier golf course' },
    { name: 'Kujukuri Beach', distance: '21 min', icon: MapPin, description: 'Famous surfing beach' },
    { name: 'Local Convenience Store', distance: '3 min', icon: MapPin, description: '24-hour essentials' }
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
            Access & Transportation
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-description"
          >
            Easy access from Tokyo and Narita Airport - your journey to tranquility starts here
          </motion.p>
        </div>
      </div>

      {/* Transport Options */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-bamboo-800 mb-6">Transportation Options</h2>
            <p className="text-xl text-bamboo-600 max-w-3xl mx-auto">
              Choose the most convenient way to reach Ushikumaya
            </p>
          </motion.div>

          <div className="space-y-12">
            {transportOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <motion.div
                  key={option.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`card overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:flex">
                    <div className="lg:w-1/3 relative">
                      <div className={`h-64 lg:h-full bg-gradient-to-br ${option.color} flex items-center justify-center relative overflow-hidden`}>
                        <Icon size={80} className="text-white/20 absolute" />
                        <div className="text-center text-white z-10">
                          <Icon size={48} className="mx-auto mb-4" />
                          <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                          <div className="flex items-center justify-center space-x-2">
                            <Clock size={16} />
                            <span className="font-medium">{option.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3 p-8">
                      <p className="text-lg text-bamboo-600 mb-6">{option.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-bamboo-800 mb-4">Route Steps</h4>
                          <ol className="space-y-3">
                            {option.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-bamboo-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                                  {stepIndex + 1}
                                </div>
                                <span className="text-bamboo-700">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-bamboo-800 mb-4">Key Features</h4>
                          <ul className="space-y-3">
                            {option.highlights.map((highlight, highlightIndex) => (
                              <li key={highlightIndex} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-bamboo-400 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-bamboo-700">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Locations */}
      <section className="section-padding bg-gradient-to-br from-bamboo-50 to-white">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-bamboo-800 mb-6">Distances to Key Locations</h2>
            <p className="text-xl text-bamboo-600 max-w-3xl mx-auto">
              Conveniently located with easy access to airports, attractions, and amenities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyLocations.map((location, index) => {
              const Icon = location.icon
              return (
                <motion.div
                  key={location.name}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="card group"
                >
                  <div className="card-content text-center">
                    <div className="w-12 h-12 bg-bamboo-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-bamboo-200 transition-colors">
                      <Icon size={24} className="text-bamboo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-bamboo-800 mb-2">{location.name}</h3>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Clock size={14} className="text-bamboo-500" />
                      <span className="text-bamboo-600 font-medium">{location.distance}</span>
                    </div>
                    <p className="text-sm text-bamboo-500">{location.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Address & Contact */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-bamboo-800 mb-8">Address & Contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-bamboo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-bamboo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bamboo-800 mb-2">Full Address</h3>
                    <p className="text-bamboo-600">
                      Yokoshibahikari-machi<br />
                      Sanbu District, Chiba Prefecture<br />
                      Japan 〒289-1727
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-bamboo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-bamboo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bamboo-800 mb-2">Transport Services</h3>
                    <p className="text-bamboo-600">
                      Airport shuttle service available<br />
                      Golf course transfers<br />
                      Station pick-up by arrangement
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-bamboo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Navigation size={20} className="text-bamboo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bamboo-800 mb-2">GPS Coordinates</h3>
                    <p className="text-bamboo-600 font-mono text-sm">
                      35.6762° N, 140.4769° E
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-bamboo-800 mb-8">Important Notes</h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-bamboo-50 rounded-lg">
                  <h3 className="font-semibold text-bamboo-800 mb-3">Airport Shuttle Service</h3>
                  <p className="text-bamboo-600 mb-3">
                    We offer complimentary shuttle service from Narita Airport for golf guests.
                  </p>
                  <ul className="text-sm text-bamboo-600 space-y-1">
                    <li>• Golf bag transport included</li>
                    <li>• Advance booking required</li>
                    <li>• Available for groups of 2+</li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-bamboo-800 mb-3">Parking Information</h3>
                  <p className="text-bamboo-600 mb-3">
                    Free parking available for up to 6 vehicles with covered areas.
                  </p>
                  <ul className="text-sm text-bamboo-600 space-y-1">
                    <li>• Large vehicle friendly</li>
                    <li>• Direct villa access</li>
                    <li>• Safe overnight parking</li>
                  </ul>
                </div>

                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-bamboo-800 mb-3">Local Transport</h3>
                  <p className="text-bamboo-600 mb-3">
                    Local bus and taxi services available from the nearest station.
                  </p>
                  <ul className="text-sm text-bamboo-600 space-y-1">
                    <li>• Station pick-up available</li>
                    <li>• Local taxi companies</li>
                    <li>• Bus schedules provided</li>
                  </ul>
                </div>
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
            <h2 className="text-4xl font-bold mb-6">Need Help with Transportation?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Contact us for shuttle service arrangements or transportation assistance
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
                Book Your Stay
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Access
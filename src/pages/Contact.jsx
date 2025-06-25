import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Phone, MessageSquare, Calendar, Car, Plane } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dates: '',
    guests: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: Calendar,
      title: 'Book Direct',
      description: 'Reserve your stay through Airbnb',
      action: 'Book on Airbnb',
      link: 'https://www.airbnb.jp/rooms/48761201',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'Quick Inquiry',
      description: 'Send us a message through Airbnb',
      action: 'Message Host',
      link: 'https://www.airbnb.jp/rooms/48761201',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Phone,
      title: 'Special Services',
      description: 'Airport shuttle & golf arrangements',
      action: 'Contact for Services',
      link: 'https://www.airbnb.jp/rooms/48761201',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const serviceOptions = [
    {
      icon: Plane,
      title: 'Airport Shuttle Service',
      description: 'Complimentary pickup from Narita Airport for golf guests',
      features: ['Golf bag transport included', 'Advance booking required', 'Groups of 2+ guests']
    },
    {
      icon: Car,
      title: 'Golf Course Transport',
      description: 'Free transport to nearby golf courses',
      features: ['Caledonian Golf Club (7 min)', 'Shibayama Golf Club (11 min)', 'Tee time assistance']
    },
    {
      icon: MapPin,
      title: 'Local Assistance',
      description: 'Help with local experiences and reservations',
      features: ['Restaurant recommendations', 'Activity bookings', 'Seasonal event information']
    }
  ]

  const quickInfo = [
    { label: 'Response Time', value: 'Within 2 hours', icon: Clock },
    { label: 'Languages', value: 'Japanese, English', icon: MessageSquare },
    { label: 'Availability', value: '24/7 emergency support', icon: Phone },
    { label: 'Location', value: 'Yokoshibahikari-machi, Chiba', icon: MapPin }
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-description"
          >
            We're here to help make your stay at Ushikumaya perfect - from booking to checkout
          </motion.p>
        </div>
      </div>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-bamboo-800 mb-6">How to Reach Us</h2>
            <p className="text-xl text-bamboo-600 max-w-3xl mx-auto">
              Choose the best way to get in touch based on your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="card text-center group"
                >
                  <div className="card-content">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-bamboo-800 mb-3">{method.title}</h3>
                    <p className="text-bamboo-600 mb-6">{method.description}</p>
                    <motion.a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {method.action}
                    </motion.a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="section-padding bg-gradient-to-br from-bamboo-50 to-white">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-bamboo-800 mb-6">Special Services</h2>
            <p className="text-xl text-bamboo-600 max-w-3xl mx-auto">
              Beyond accommodation - we help create unforgettable experiences
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviceOptions.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`card overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:flex">
                    <div className="lg:w-1/3 p-8 bg-bamboo-800 text-white flex flex-col justify-center">
                      <div className="text-center">
                        <Icon size={48} className="mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-bamboo-200">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3 p-8">
                      <h4 className="text-xl font-semibold text-bamboo-800 mb-6">What's Included:</h4>
                      <div className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-bamboo-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-bamboo-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8">
                        <motion.a
                          href="https://www.airbnb.jp/rooms/48761201"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Request This Service
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Information */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-bamboo-800 mb-6">Quick Information</h2>
            <p className="text-xl text-bamboo-600 max-w-3xl mx-auto">
              Everything you need to know about contacting us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.label}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-12 h-12 bg-bamboo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-bamboo-600" />
                  </div>
                  <h3 className="font-semibold text-bamboo-800 mb-1">{info.label}</h3>
                  <p className="text-bamboo-600 text-sm">{info.value}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="card">
              <div className="card-content">
                <h3 className="text-2xl font-bold text-bamboo-800 mb-6 text-center">Quick Inquiry Form</h3>
                <p className="text-bamboo-600 text-center mb-8">
                  Fill out this form and we'll get back to you within 2 hours
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-bamboo-800 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-bamboo-200 rounded-lg focus:ring-2 focus:ring-bamboo-500 focus:border-transparent"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-bamboo-800 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-bamboo-200 rounded-lg focus:ring-2 focus:ring-bamboo-500 focus:border-transparent"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="dates" className="block text-sm font-medium text-bamboo-800 mb-2">
                        Preferred Dates
                      </label>
                      <input
                        type="text"
                        id="dates"
                        name="dates"
                        value={formData.dates}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-bamboo-200 rounded-lg focus:ring-2 focus:ring-bamboo-500 focus:border-transparent"
                        placeholder="e.g. March 15-17, 2024"
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-bamboo-800 mb-2">
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-bamboo-200 rounded-lg focus:ring-2 focus:ring-bamboo-500 focus:border-transparent"
                      >
                        <option value="">Select guests</option>
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5">5 guests</option>
                        <option value="6">6 guests</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-bamboo-800 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-bamboo-200 rounded-lg focus:ring-2 focus:ring-bamboo-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your stay preferences, special requests, or any questions you have..."
                    />
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-bamboo-600 mb-4">
                      For immediate booking, please use the Airbnb link above. This form is for inquiries and special service requests.
                    </p>
                    <motion.button
                      type="button"
                      onClick={() => window.open('https://www.airbnb.jp/rooms/48761201', '_blank')}
                      className="btn btn-primary btn-large"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Continue to Airbnb
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-gradient-bamboo text-white">
        <div className="container text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Emergency Support</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              We provide 24/7 emergency support for all our guests during their stay
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <Phone size={32} className="mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Emergency Line</h3>
                <p className="text-sm opacity-90">Available through Airbnb messaging</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <MapPin size={32} className="mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Local Services</h3>
                <p className="text-sm opacity-90">Hospital: 25 min | Police: 10 min</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <Clock size={32} className="mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm opacity-90">Within 30 minutes for emergencies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
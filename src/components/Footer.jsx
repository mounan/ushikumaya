import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Clock, Users, Car } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { to: '/', label: 'Home' },
    { to: '/stay', label: 'Stay Info' },
    { to: '/area', label: 'Area Guide' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/access', label: 'Access' },
    { to: '/contact', label: 'Contact' },
  ]

  const highlights = [
    { icon: Clock, text: '21min from Narita' },
    { icon: MapPin, text: '7min to Golf' },
    { icon: MapPin, text: '21min to Beach' },
    { icon: Users, text: 'Up to 6 guests' },
    { icon: Car, text: 'Free parking' },
  ]

  return (
    <footer className="bg-bamboo-800 text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4">Ushikumaya</h3>
              <p className="text-bamboo-200 mb-6 text-lg leading-relaxed">
                Traditional Japanese bamboo hideaway in Chiba Prefecture. 
                Experience authentic Japanese hospitality surrounded by peaceful 
                bamboo groves with modern conveniences.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 text-bamboo-100"
                    >
                      <Icon size={16} className="text-bamboo-300" />
                      <span className="text-sm">{item.text}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-bamboo-200 hover:text-white transition-colors duration-200 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Booking section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6">Book Your Stay</h4>
              <p className="text-bamboo-200 mb-6">
                Experience traditional Japanese hospitality in our bamboo hideaway
              </p>
              <motion.a
                href="https://www.airbnb.jp/rooms/48761201"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book on Airbnb
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-bamboo-700 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-bamboo-200">
              © {currentYear} Ushikumaya. All rights reserved.
            </p>
            <p className="text-bamboo-300 text-sm">
              Traditional Japanese bamboo hideaway • Yokoshibahikari-machi, Chiba
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Users, Car, Flame, PawPrint, MapPin, Clock } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqCategories = [
    {
      title: 'Booking & Check-in',
      icon: Clock,
      color: 'from-blue-500 to-blue-600',
      faqs: [
        {
          question: 'What are the check-in and check-out times?',
          answer: 'Check-in is from 3:00 PM and check-out is by 11:00 AM. We can arrange flexible times with advance notice based on availability.'
        },
        {
          question: 'How do I get the keys and access the property?',
          answer: 'Detailed check-in instructions will be sent 2 days before arrival. We provide both digital lock codes and physical key backup. A welcome package with local information will be waiting inside.'
        },
        {
          question: 'Is there a minimum stay requirement?',
          answer: 'We have a 2-night minimum stay to allow guests to fully experience the peaceful bamboo hideaway setting. Special arrangements may be possible during off-peak periods.'
        },
        {
          question: 'What is your cancellation policy?',
          answer: 'Our cancellation policy follows Airbnb\'s standard terms. Full refund for cancellations made 7+ days before check-in, 50% refund for 2-7 days before, no refund for last-minute cancellations.'
        }
      ]
    },
    {
      title: 'Accommodation Details',
      icon: Users,
      color: 'from-green-500 to-green-600',
      faqs: [
        {
          question: 'How many guests can the property accommodate?',
          answer: 'Ushikumaya comfortably accommodates up to 6 guests with 3 bedrooms plus a loft tatami area. We provide futon bedding for the tatami spaces and regular beds in modern rooms.'
        },
        {
          question: 'What amenities are included?',
          answer: 'The villa includes full kitchen facilities, Japanese-style bathroom, modern amenities, free Wi-Fi, air conditioning/heating, BBQ equipment (during campaign), and all necessary linens and towels.'
        },
        {
          question: 'Is the property suitable for families with children?',
          answer: 'Yes! The property is very family-friendly with safe grounds, traditional tatami play areas, and easy access to family attractions like water parks and beach activities.'
        },
        {
          question: 'What makes this a "traditional Japanese" experience?',
          answer: 'The villa features authentic tatami rooms, traditional architectural elements, bamboo grove setting, and Japanese-style layout while maintaining modern comfort and convenience.'
        }
      ]
    },
    {
      title: 'Transportation & Access',
      icon: Car,
      color: 'from-purple-500 to-purple-600',
      faqs: [
        {
          question: 'How far is it from Narita Airport?',
          answer: 'Just 21 minutes by car from Narita Airport via highway. We offer complimentary shuttle service for golf guests with advance booking. Taxi service is also readily available.'
        },
        {
          question: 'Is parking available?',
          answer: 'Yes! Free parking for up to 6 vehicles with covered areas. The parking area can accommodate large vehicles and provides direct access to the villa.'
        },
        {
          question: 'Can I reach the property by public transport?',
          answer: 'Yes, take the JR Sobu Line to Yokoshibahikari Station (18 minutes from villa), then local bus or taxi. We can arranged station pick-up service with advance notice.'
        },
        {
          question: 'Do you provide transportation to golf courses?',
          answer: 'Yes! We offer complimentary transport to nearby golf courses including Caledonian (7 min) and Shibayama (11 min) for guests with golf bookings.'
        }
      ]
    },
    {
      title: 'Activities & Services',
      icon: Flame,
      color: 'from-orange-500 to-red-500',
      faqs: [
        {
          question: 'Is BBQ equipment really free?',
          answer: 'Yes, during our campaign period, we provide complete BBQ equipment including grill, charcoal, lighter fluid, grilling nets, and utensils at no extra charge. Outdoor seating area included.'
        },
        {
          question: 'What golf courses are nearby?',
          answer: 'Caledonian Golf Club is just 7 minutes away, and Shibayama Golf Club is 11 minutes. Both offer excellent facilities and we can help arrange tee times and transport.'
        },
        {
          question: 'What other activities are available in the area?',
          answer: 'Kujukuri Beach (21 min) for surfing/swimming, water park with 19 pools (21 min), seasonal strawberry picking (15 min), and excellent stargazing in our bamboo grove corner.'
        },
        {
          question: 'Can you help arrange local experiences?',
          answer: 'Absolutely! We can help book golf tee times, recommend local restaurants, arrange fruit picking experiences, and provide information about seasonal festivals and events.'
        }
      ]
    },
    {
      title: 'Pet Policy & Special Requests',
      icon: PawPrint,
      color: 'from-pink-500 to-pink-600',
      faqs: [
        {
          question: 'Are pets allowed at the property?',
          answer: 'Yes! We welcome small dogs (under 10kg, maximum 2 dogs) with a ¥1,000 cleaning fee. Dogs must be leashed in the garden area, and we provide pet bowls.'
        },
        {
          question: 'Do you accommodate special dietary requirements?',
          answer: 'The villa has a full kitchen for self-catering. We can provide information about local restaurants with vegetarian, halal, or other dietary options, and nearby grocery stores.'
        },
        {
          question: 'Can you accommodate early check-in or late check-out?',
          answer: 'We try to accommodate special timing requests when possible. Please contact us in advance to check availability. Additional fees may apply for significant extensions.'
        },
        {
          question: 'Is smoking allowed on the property?',
          answer: 'The villa interior is non-smoking, but smoking is permitted in designated outdoor areas including the BBQ area and garden spaces with proper disposal facilities provided.'
        }
      ]
    },
    {
      title: 'Local Information',
      icon: MapPin,
      color: 'from-teal-500 to-teal-600',
      faqs: [
        {
          question: 'What shopping and dining options are nearby?',
          answer: 'Local convenience store (3 min), soba restaurant (5 min), izakaya (8 min), fresh market (10 min), and full shopping center (15 min). We provide a detailed local guide.'
        },
        {
          question: 'What is the best season to visit?',
          answer: 'Each season offers unique experiences: Spring cherry blossoms, summer beach activities, autumn foliage, winter snow scenery. Golf and outdoor activities are great spring through fall.'
        },
        {
          question: 'Is the area safe for walking at night?',
          answer: 'Yes, the rural setting is very safe with low crime rates. The bamboo grove area is perfect for evening stargazing, and local roads are well-lit and pedestrian-friendly.'
        },
        {
          question: 'What medical facilities are available nearby?',
          answer: 'Local clinic (10 min), dental office (12 min), and regional hospital (25 min). Emergency services are readily available, and we keep a first aid kit on the property.'
        }
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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-description"
          >
            Everything you need to know about staying at Ushikumaya - from booking to checkout
          </motion.p>
        </div>
      </div>

      {/* FAQ Categories */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="card overflow-hidden"
                >
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color} text-white p-6`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                    </div>
                  </div>

                  {/* FAQ Items */}
                  <div className="divide-y divide-bamboo-100">
                    {category.faqs.map((faq, faqIndex) => {
                      const itemIndex = categoryIndex * 10 + faqIndex // Unique index for each item
                      const isOpen = openItems.has(itemIndex)
                      
                      return (
                        <motion.div
                          key={faqIndex}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: faqIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <button
                            onClick={() => toggleItem(itemIndex)}
                            className="w-full text-left p-6 hover:bg-bamboo-50 transition-colors duration-200 focus:outline-none focus:bg-bamboo-50"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-bamboo-800 pr-8">
                                {faq.question}
                              </h3>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex-shrink-0"
                              >
                                <ChevronDown size={20} className="text-bamboo-600" />
                              </motion.div>
                            </div>
                          </button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6">
                                  <p className="text-bamboo-600 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="section-padding bg-gradient-to-br from-bamboo-50 to-white">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-bamboo-800 mb-6">Quick Reference</h2>
            <p className="text-xl text-bamboo-600 max-w-3xl mx-auto">
              Essential information at a glance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Check-in', value: '3:00 PM', icon: Clock },
              { label: 'Check-out', value: '11:00 AM', icon: Clock },
              { label: 'Max Guests', value: '6 people', icon: Users },
              { label: 'Parking', value: '6 cars free', icon: Car },
              { label: 'Pets', value: 'Small dogs OK', icon: PawPrint },
              { label: 'Airport', value: '21 minutes', icon: MapPin },
              { label: 'Golf', value: '7 minutes', icon: MapPin },
              { label: 'Beach', value: '21 minutes', icon: MapPin }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-12 h-12 bg-bamboo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-bamboo-600" />
                  </div>
                  <h3 className="font-semibold text-bamboo-800 mb-1">{item.label}</h3>
                  <p className="text-bamboo-600">{item.value}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gradient-bamboo text-white">
        <div className="container text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Don't hesitate to reach out - we're here to help make your stay perfect
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
                Book Now on Airbnb
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default FAQ
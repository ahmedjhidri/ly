'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const services = [
  {
    title: 'Gas Supply & Distribution',
    description: 'Reliable supply and distribution of industrial and medical gases across Libya',
    icon: '/images/services/supply.svg',
    features: [
      '24/7 delivery service',
      'Nationwide coverage',
      'Emergency response',
      'Quality assurance'
    ]
  },
  {
    title: 'Equipment Maintenance',
    description: 'Professional maintenance and servicing of gas equipment and systems',
    icon: '/images/services/maintenance.svg',
    features: [
      'Regular maintenance',
      'Emergency repairs',
      'Equipment calibration',
      'Safety inspections'
    ]
  },
  {
    title: 'Technical Support',
    description: 'Expert technical support and consultation for all your gas-related needs',
    icon: '/images/services/support.svg',
    features: [
      '24/7 technical support',
      'On-site assistance',
      'Training programs',
      'Safety guidelines'
    ]
  }
]

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative w-16 h-16 mb-6">
        <Image
          src={service.icon}
          alt={service.title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <ul className="space-y-3">
        {service.features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
            className="flex items-center text-gray-700"
          >
            <svg
              className="w-5 h-5 text-primary mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive gas solutions and support services for industrial and medical applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="btn-primary">
            Request a Quote
          </button>
        </motion.div>
      </div>
    </div>
  )
} 
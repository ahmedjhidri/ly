'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Industrial Oxygen',
    description: 'High-purity oxygen for industrial applications',
    image: '/images/products/industrial-oxygen.jpg',
    category: 'industrial'
  },
  {
    id: 2,
    name: 'Medical Oxygen',
    description: 'Medical-grade oxygen for healthcare facilities',
    image: '/images/products/medical-oxygen.jpg',
    category: 'medical'
  },
  {
    id: 3,
    name: 'Nitrogen',
    description: 'Pure nitrogen for various industrial processes',
    image: '/images/products/nitrogen.jpg',
    category: 'industrial'
  },
  {
    id: 4,
    name: 'Carbon Dioxide',
    description: 'Food-grade CO2 for beverage industry',
    image: '/images/products/co2.jpg',
    category: 'industrial'
  },
  {
    id: 5,
    name: 'Helium',
    description: 'High-purity helium for medical and industrial use',
    image: '/images/products/helium.jpg',
    category: 'industrial'
  },
  {
    id: 6,
    name: 'Nitrous Oxide',
    description: 'Medical-grade N2O for healthcare applications',
    image: '/images/products/n2o.jpg',
    category: 'medical'
  }
]

const categories = ['all', 'industrial', 'medical']

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Products
        </motion.h1>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <button className="mt-4 btn-primary w-full">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const stats = [
  { label: 'Years of Experience', value: '24' },
  { label: 'Daily Production Capacity', value: '24,000' },
  { label: 'Company Branches', value: '6' },
  { label: 'Satisfied Customers', value: '500+' }
]

const team = [
  {
    name: 'Ahmed Mohamed',
    position: 'CEO',
    image: '/images/team/ceo.jpg'
  },
  {
    name: 'Fatima Ali',
    position: 'Technical Director',
    image: '/images/team/technical-director.jpg'
  },
  {
    name: 'Omar Hassan',
    position: 'Operations Manager',
    image: '/images/team/operations-manager.jpg'
  }
]

const StatCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 text-center shadow-md"
    >
      <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
      <div className="text-gray-600">{stat.label}</div>
    </motion.div>
  )
}

const TeamMember = ({ member, index }: { member: typeof team[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <div className="relative h-64">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-gray-600">{member.position}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/images/about/hero-bg.jpg"
            alt="About Allibiya Gases"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6">About Allibiya Gases</h1>
            <p className="text-xl">
              Leading the way in industrial and medical gas solutions in Libya since 2000
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg mb-8">
              To provide high-quality industrial and medical gases while maintaining the highest standards
              of safety, reliability, and customer service. We are committed to supporting Libya's
              industrial growth and healthcare sector through innovative gas solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Leadership Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 
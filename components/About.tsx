'use client'

import { motion } from 'framer-motion'
import { about } from '@/lib/data'

const stats = [
  { value: '12+', label: 'Years Experience' },
  { value: 'Fortune 500', label: 'Clients Served' },
  { value: '1,000+', label: 'Users Impacted' },
  { value: '9', label: 'Developers Mentored' },
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary-text mb-2">About</h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.p
            className="text-slate-600 leading-relaxed text-base"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {about}
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

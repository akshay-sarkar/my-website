'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { awards } from '@/lib/data'

export default function Awards() {
  return (
    <section id="awards" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary-text mb-2">Awards</h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              className="bg-white border border-slate-200 rounded-xl p-6 flex gap-4 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
                <Trophy size={20} className="text-yellow-500" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-primary-text">{award.title}</h3>
                <p className="text-sm text-accent font-medium mt-0.5">{award.event} · {award.year}</p>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

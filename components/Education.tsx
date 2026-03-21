'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary-text mb-2">Education</h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              className="bg-white border border-slate-200 rounded-xl p-6 flex gap-4 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-primary-text">{edu.degree}</h3>
                <p className="text-sm text-slate-500 mt-0.5">{edu.institution}</p>
                <p className="text-xs font-mono text-slate-400 mt-1">{edu.years} · {edu.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

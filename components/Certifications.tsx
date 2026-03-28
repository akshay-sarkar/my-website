'use client'

import { motion } from 'framer-motion'
import { BookOpen, Award, GraduationCap } from 'lucide-react'
import { certifications } from '@/lib/data'

export default function Certifications() {
  return (
    <section id="certifications" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary-text mb-2">Certifications</h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </motion.div>

        <div className="flex flex-col gap-10">
          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={18} className="text-accent" />
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider font-mono">Courses</h3>
            </div>
            <ul className="flex flex-row flex-wrap gap-3">
              {certifications.courses.map((c) => (
                <li key={c.name} className="flex flex-col bg-white border border-slate-200 rounded-lg px-4 py-3">
                  <span className="text-sm text-primary-text">{c.name}</span>
                  <span className="text-xs text-slate-400 font-mono">
                    {c.issuer}{'date' in c && c.date ? ` · ${c.date}` : ''}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Award size={18} className="text-accent" />
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider font-mono">Credentials</h3>
            </div>
            <ul className="flex flex-row flex-wrap gap-3">
              {certifications.credentials.map((c) => (
                <li key={c.name} className="flex flex-col gap-1 bg-white border border-slate-200 rounded-lg px-4 py-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-primary-text">{c.name}</span>
                    {c.inProgress && (
                      <span className="px-1.5 py-0.5 bg-blue-100 text-accent text-xs rounded font-mono">
                        In Progress
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 font-mono">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Academic */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={18} className="text-accent" />
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider font-mono">Academic</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {certifications.academic.map((c) => (
                <li key={c.name} className="flex flex-col">
                  <span className="text-sm text-primary-text">{c.name}</span>
                  <span className="text-xs text-slate-400 font-mono">
                    {c.issuer}{'date' in c && c.date ? ` · ${c.date}` : ''}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary-text mb-2">Experience</h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-48 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

          <div className="flex flex-col gap-10">
            {experience.map((role, i) => (
              <motion.div
                key={`${role.company}-${i}`}
                className="md:grid md:grid-cols-[12rem_1fr] gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {/* Left: date + company */}
                <div className="md:text-right md:pr-8 mb-2 md:mb-0">
                  {role.dates && (
                    <p className="text-xs font-mono text-slate-400 mb-1">{role.dates}</p>
                  )}
                  <p className="text-sm font-semibold text-primary-text">{role.company}</p>
                  <p className="text-xs text-slate-400">{role.location}</p>
                </div>

                {/* Right: role + bullets */}
                <div className="md:pl-8 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute -left-[calc(0.5rem+0.5px)] top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-white" />
                  <h3 className="text-base font-semibold text-primary-text mb-3">{role.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {role.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-slate-600 leading-relaxed flex gap-2">
                        <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

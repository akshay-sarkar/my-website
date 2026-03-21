'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary-text mb-2">Projects</h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div>
                <p className="text-xs font-mono text-slate-400 mb-1">{project.company}</p>
                <h3 className="text-base font-semibold text-primary-text">{project.name}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">{project.description}</p>
              <p className="text-sm font-semibold text-accent">{project.impact}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

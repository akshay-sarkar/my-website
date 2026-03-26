'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Download } from 'lucide-react'
import { personal } from '@/lib/data'

export default function Hero() {
  return (
    <section id="hero" className="max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Text column */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent font-mono text-sm mb-2">Hi, I&apos;m</p>
        <h1 className="text-4xl md:text-5xl font-bold text-primary-text leading-tight mb-3">
          {personal.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-500 font-medium mb-4">
          {personal.title}
        </h2>
        <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-lg">
          {personal.tagline}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent text-accent rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Photo column */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg border-4 border-slate-100 bg-slate-100 flex items-center justify-center relative">
          <Image
            src={personal.photoUrl ?? '/photo-placeholder.jpg'}
            alt={`${personal.name} — profile photo`}
            fill
            className="object-cover"
            priority
          />
          {personal.photoUrl === undefined && (
            <span className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-mono pointer-events-none select-none">
              Add Photo
            </span>
          )}
        </div>
      </motion.div>
    </section>
  )
}

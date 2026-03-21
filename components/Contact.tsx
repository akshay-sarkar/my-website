'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react'
import { personal } from '@/lib/data'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary-text mb-2">Contact</h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact details */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href={`mailto:${personal.email}`} className="flex items-center gap-3 text-slate-600 hover:text-accent transition-colors">
              <Mail size={20} className="text-accent flex-shrink-0" />
              <span>{personal.email}</span>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-accent transition-colors">
              <Linkedin size={20} className="text-accent flex-shrink-0" />
              <span>{personal.linkedin.replace('https://www.', '').replace('https://', '')}</span>
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-accent transition-colors">
              <Github size={20} className="text-accent flex-shrink-0" />
              <span>{personal.github.replace('https://', '')}</span>
            </a>
            <div className="flex items-center gap-3 text-slate-600">
              <MapPin size={20} className="text-accent flex-shrink-0" />
              <span>{personal.location}</span>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-primary-text placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-primary-text placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <textarea
              placeholder="Your message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-primary-text placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
            />
            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-60"
            >
              <Send size={16} />
              {status === 'sending' ? 'Sending…' : status === 'success' ? 'Sent!' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
            )}
            {status === 'success' && (
              <p className="text-green-600 text-sm">Message sent! I&apos;ll get back to you soon.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

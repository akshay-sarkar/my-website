'use client'

import { Mail, Linkedin, Github } from 'lucide-react'
import { personal } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${personal.email}`} aria-label="Email" className="hover:text-white transition-colors">
            <Mail size={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

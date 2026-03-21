import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Education from '@/components/Education'

export const metadata: Metadata = {
  title: 'Akshay Sarkar — Senior Full Stack Engineer',
  description: 'Portfolio of Akshay Sarkar, Senior Full Stack Engineer with 12+ years building enterprise applications for Fortune 500 companies.',
  openGraph: {
    title: 'Akshay Sarkar — Senior Full Stack Engineer',
    description: 'Senior Full Stack Engineer with 12+ years building enterprise applications for Fortune 500 companies.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Contact />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </main>
  )
}

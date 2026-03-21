import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  title: 'Akshay Sarkar — Senior Full Stack Engineer',
  description: 'Portfolio of Akshay Sarkar, Senior Full Stack Engineer with 12+ years of experience building enterprise applications.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

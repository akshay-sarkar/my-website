export const personal = {
  name: 'Akshay Sarkar',
  title: 'Senior Full Stack Engineer',
  tagline: '12+ years building enterprise applications for Fortune 500 companies',
  email: 'akshay.sarkar.dbit@gmail.com',
  phone: '+1-682-410-7186',
  location: 'Irving, Texas, United States',
  linkedin: 'https://www.linkedin.com/in/akshaysarkaruta/',
  github: 'https://github.com/akshay-sarkar',
  resumeUrl: '/akshay-sarkar-resume.pdf',
  photoUrl: undefined as string | undefined,  // Set to '/your-photo.jpg' when ready
}

export const about = `Senior Full Stack Engineer with 12+ years of experience architecting enterprise-scale web applications for Fortune 500 companies. Expert across the JavaScript ecosystem — React, Node.js, TypeScript — with deep expertise in system design, database optimization, and AI-driven development. Proven track record of delivering high-impact platforms, mentoring engineering teams, and driving measurable performance improvements.`

export const experience = [
  {
    company: 'Paycom Payroll',
    title: 'Senior Software Developer',
    dates: 'Jan 2019 – Jan 2026',
    location: 'Dallas-Fort Worth Metroplex, TX',
    bullets: [
      'Architected and scaled an enterprise CRM platform serving 1,000+ internal users across Marketing, Sales, and Client Relations, reducing page load time by 30%.',
      'Delivered 10+ CRM features and modules across the full development lifecycle using React, Redux, Node.js, and MySQL.',
      'Optimized MySQL queries reducing execution time by 40% across multi-million-row tables.',
      'Integrated third-party platforms including Salesloft, Adobe Marketo, Twilio, Smarty, and DUNS.',
      'Mentored 9 developers, reducing onboarding time by 33% and production bugs by 30%.',
    ],
  },
  {
    company: 'Oracle India',
    title: 'Application Engineer',
    dates: 'Oct 2015 – Jan 2017',
    location: 'Bengaluru, India',
    bullets: [
      'Migrated Primavera P6 project management modules from legacy Java Applet to a modern web application, reducing load time by 50%.',
      'Developed using Oracle UI Framework and open-source JavaScript technologies.',
    ],
  },
  {
    company: 'LG Soft India',
    title: 'Software Engineer',
    dates: 'Sept 2014 – Sept 2015',
    location: 'Bengaluru, India',
    bullets: [
      'Built HTML5 Digital Signage applications with Node.js and MongoDB, deployed across 20+ airport and mall installations.',
      'Created a configurable content system with JSON data-binding for real-time display updates.',
    ],
  },
  {
    company: 'Aseema Softnet Technologies',
    title: 'Software Developer',
    dates: 'Feb 2012 – Sept 2014',
    location: 'Bengaluru, India',
    bullets: [
      'Developed an HTML5 Facebook application for Set-Top Boxes covering 100+ TV shows with OAuth login.',
      'Built a virtual keyboard for Airtel Set-Top Boxes supporting 15+ remote key configurations.',
    ],
  },
  {
    company: "R'TA Securities",
    title: 'Software Developer',
    dates: null,
    location: 'India',
    bullets: [
      'Built a GPS-enabled real-time security tracking system monitoring 50+ field officers.',
      'Created an administrative portal for managing officer configurations and deployments.',
    ],
  },
]

export const skills = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'PHP', 'Java/J2EE'] },
  { category: 'Frontend', items: ['ReactJS', 'Redux', 'NextJS', 'Material-UI', 'HTML5', 'Bootstrap', 'Webpack', 'Babel'] },
  { category: 'Backend', items: ['NodeJS', 'ExpressJS', 'Spring Boot', 'GraphQL/Apollo', 'REST', 'WebSocket'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'Sequelize'] },
  { category: 'Cloud & Tools', items: ['AWS', 'Vercel', 'Docker', 'GitLab', 'Git', 'JIRA', 'Splunk'] },
  { category: 'AI Tools', items: ['Claude Code', 'Copilot', 'Cursor'] },
]

export const skillCategoryColors: Record<string, string> = {
  Languages: 'bg-blue-100 text-blue-800',
  Frontend: 'bg-purple-100 text-purple-800',
  Backend: 'bg-green-100 text-green-800',
  Databases: 'bg-orange-100 text-orange-800',
  'Cloud & Tools': 'bg-slate-100 text-slate-800',
  'AI Tools': 'bg-rose-100 text-rose-800',
}

export const projects = [
  {
    name: 'Enterprise CRM Platform',
    company: 'Paycom',
    description: 'Full-stack CRM platform serving Marketing, Sales, and Client Relations teams across the enterprise.',
    techStack: ['React', 'Redux', 'Node.js', 'MySQL', 'REST'],
    impact: '1,000+ users · 30% faster load time',
  },
  {
    name: 'Primavera P6 Web Migration',
    company: 'Oracle',
    description: 'Modernized legacy Java Applet modules of the Primavera P6 project management suite to a web-based application.',
    techStack: ['Oracle UI Framework', 'Java', 'JavaScript'],
    impact: '50% load time reduction',
  },
  {
    name: 'Digital Signage Platform',
    company: 'LG Soft India',
    description: 'Real-time HTML5 digital signage system with configurable JSON-driven content for public displays.',
    techStack: ['Node.js', 'MongoDB', 'HTML5'],
    impact: '20+ airport & mall installations',
  },
  {
    name: 'Facebook Set-Top Box App',
    company: 'Aseema Softnet',
    description: 'HTML5 Facebook application for Set-Top Boxes with OAuth authentication and virtual keyboard.',
    techStack: ['HTML5', 'OAuth', 'JavaScript'],
    impact: '100+ TV shows supported',
  },
  {
    name: 'GPS Security Tracking System',
    company: "R'TA Securities",
    description: 'Real-time GPS-based field officer tracking system with an administrative management portal.',
    techStack: ['GPS', 'JavaScript', 'REST'],
    impact: '50+ field officers monitored',
  },
]

export const education = [
  {
    degree: 'Master of Science, Computer Science',
    institution: 'University of Texas at Arlington',
    years: '2017 – 2018',
    detail: 'GPA: 4.0',
  },
  {
    degree: 'Bachelor of Engineering, Computer Science',
    institution: 'Visvesvaraya Technological University',
    years: '2007 – 2011',
    detail: 'India',
  },
]

export const certifications = {
  courses: [
    { name: 'TypeScript Essential Training', issuer: 'LinkedIn Learning' },
    { name: 'React.js Essential Training', issuer: 'LinkedIn Learning' },
    { name: 'Node.js Essential Training', issuer: 'LinkedIn Learning' },
    { name: 'MySQL Essential Training', issuer: 'LinkedIn Learning' },
    { name: 'ChatGPT Prompt Engineering', issuer: 'LinkedIn Learning' },
    { name: 'GraphQL Essential Training', issuer: 'LinkedIn Learning', date: 'Jun 2025' },
    { name: 'Learning Next.js', issuer: 'LinkedIn Learning', date: 'Feb 2026' },
  ],
  credentials: [
    { name: 'Java/J2EE Diploma', issuer: 'NIIT', inProgress: false },
    { name: 'Claude AI Certification', issuer: 'Anthropic', inProgress: true },
  ],
  academic: [
    { name: 'Teaching Assistant, Web Data Management', issuer: 'University of Texas at Arlington', date: '2018' },
  ],
}

export const awards = [
  {
    title: 'Team MVP',
    event: 'Paycom Code-a-thon',
    year: '2020',
    description: 'Recognized as Team MVP at the annual Paycom engineering hackathon.',
  },
  {
    title: 'Employee of the Year',
    event: 'Aseema Softnet Technologies',
    year: '2013–2014',
    description: 'Awarded Employee of the Year for outstanding contribution and delivery.',
  },
]

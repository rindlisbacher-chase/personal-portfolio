import profilePhoto from '../assets/profile-photo.webp'

export const site = {
  name: 'Chase Rindlisbacher',
  title: 'Software Engineer',
  tagline: 'Work Hard, Work Smart, Be a Light',
  location: 'Alpine, Utah',
  workPreference:
    'Open to remote, hybrid, and in-person. Strong preference against relocation.',
  email: 'cjrjazz20@gmail.com',
  social: {
    github: 'https://github.com/rindlisbacher-chase',
    linkedin: 'https://www.linkedin.com/in/chase-rindlisbacher/',
  },
  profilePhoto,
  resume: {
    url: '/Chase-Rindlisbacher-Resume.pdf',
    downloadName: 'Chase-Rindlisbacher-Resume.pdf',
    updatedLabel: 'PDF · updated June 2026',
  },
  about: {
    paragraphs: [
      "Hi, I'm Chase Rindlisbacher and welcome to my portfolio website! I love the problem solving aspect of software engineering and get immense satisfaction taking a product idea from a vision to reality. I've worked as a software engineer and full-stack web developer for 3+ years and have my BA and MA in Information Systems from BYU with an emphasis in software development.",
      'In my spare time I enjoy playing board and card games with my wife, playing tennis and basketball, indoor and outdoor rock climbing, reading/listening to fantasy novels, and watching movies while eating popcorn.',
      "I'm looking for work as a full-stack software engineer or web-developer where I'll be able to keep learning new technologies, work with amazing coworkers that make work a fun place to be, where the employers care about work-life balance for employees, and where I can make a positive impact on the world. I'm also open to working in DevOps.",
    ],
    education: [
      {
        degree: 'M.A. Information Systems',
        school: 'Brigham Young University',
        detail: 'Emphasis in software development',
      },
      {
        degree: 'B.A. Information Systems',
        school: 'Brigham Young University',
        detail: 'Emphasis in software development',
      },
    ],
    experience: [
      {
        role: 'Software Engineer & Full-Stack Web Developer',
        detail: '3+ years building web applications from concept to production',
      },
    ],
    skills: [
      {
        category: 'Languages',
        items: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'SQL', 'HTML', 'CSS'],
      },
      {
        category: 'Frameworks & Libraries',
        items: ['React', 'Angular', 'Laravel', 'Node.js', 'Django'],
      },
      {
        category: 'Tools & Platforms',
        items: ['Docker', 'Git', 'AWS', 'MySQL', 'PostgreSQL', 'Linux', 'Make', 'Cursor', 'Codex', 'ChatGPT', 'Gemini', 'Claude'],
      },
    ],
    interests: [
      'Board and card games',
      'Tennis and basketball',
      'Indoor and outdoor rock climbing',
      'Fantasy novels',
      'Movies and popcorn',
    ],
  },
  meta: {
    description:
      'Portfolio of Chase Rindlisbacher — full-stack software engineer based in Alpine, Utah. Projects, resume, and background.',
    domain: null as string | null,
  },
} as const

export type Site = typeof site

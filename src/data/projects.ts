export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveDemoUrl: string | null
  thumbnailUrl: string
}

export const projects: Project[] = [
  {
    id: 'lotr-minigames',
    title: 'LOTR Minigames',
    description:
      'Lord of the Rings themed minigames including Hangman, Riddles with Gollum, and Math Ciphers. Read up on your favorite LOTR characters from the books or movies.',
    tags: ['TypeScript', 'React'],
    githubUrl: 'https://github.com/rindlisbacher-chase/lotr-minigames',
    liveDemoUrl: null,
    thumbnailUrl: '/the-one-ring.png',
  },
  {
    id: 'pocket-journal',
    title: 'Pocket Journal',
    description:
      'Capture moments you do not want to forget in real time with picture uploads and journal entries that let you relive memories and remember the feelings you had at the time.',
    tags: ['Angular', 'PHP', 'Laravel', 'MySQL', 'Docker'],
    githubUrl: 'https://github.com/rindlisbacher-chase/pocket-journal',
    liveDemoUrl: null,
    thumbnailUrl: '/Peaceful_Background_Journaling.webp',
  },
]

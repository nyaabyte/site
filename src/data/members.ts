// src/data/members.ts

export interface SocialLinks {
  github?: string;
  email?: string;
  website?: string;
}

export interface Member {
  id: number;
  name: string;
  role: string;
  imageUrl: string; // Using placeholder images for now
  bio: string;
  socials: SocialLinks;
}

export const sampleMembers: Member[] = [
  {
    id: 1,
    name: 'Wurdle',
    role: 'Frontend Design',
    imageUrl: 'https://images.wurdle.eu/wurdleturtle.png',
    bio: 'Little bit of a dumbass, just like to have some fun. My dms are always open if anyone wants to talk!',
    socials: {
      github: 'https://github.com/wurdleturtle',
      email: 'mailto:wurdle@wurdle.eu',
      website: 'https://wurdle.eu',
    },
  },
  {
    id: 2,
    name: 'Placeholder',
    role: 'Placeholder',
    imageUrl: 'https://images.wurdle.eu/wurdleturtle.png',
    bio: 'Placeholder',
    socials: {
      github: 'https://github.com/',
    },
  },
  {
    id: 2,
    name: 'Placeholder',
    role: 'Placeholder',
    imageUrl: 'https://images.wurdle.eu/wurdleturtle.png',
    bio: 'Placeholder',
    socials: {
      github: 'https://github.com/',
    },
  },
  {
    id: 2,
    name: 'Placeholder',
    role: 'Placeholder',
    imageUrl: 'https://images.wurdle.eu/wurdleturtle.png',
    bio: 'Placeholder',
    socials: {
      github: 'https://github.com/',
    },
  },
  {
    id: 2,
    name: 'Placeholder',
    role: 'Placeholder',
    imageUrl: 'https://images.wurdle.eu/wurdleturtle.png',
    bio: 'Placeholder',
    socials: {
      github: 'https://github.com/',
    },
  },
  {
    id: 2,
    name: 'Placeholder',
    role: 'Placeholder',
    imageUrl: 'https://images.wurdle.eu/wurdleturtle.png',
    bio: 'Placeholder',
    socials: {
      github: 'https://github.com/',
    },
  },
  {
    id: 2,
    name: 'Placeholder',
    role: 'Placeholder',
    imageUrl: 'https://images.wurdle.eu/wurdleturtle.png',
    bio: 'Placeholder',
    socials: {
      github: 'https://github.com/',
    },
  },
  {
    id: 2,
    name: 'Placeholder',
    role: 'Placeholder',
    imageUrl: 'https://images.wurdle.eu/wurdleturtle.png',
    bio: 'Placeholder',
    socials: {
      github: 'https://github.com/',
    },
  },
];

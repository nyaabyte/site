// src/data/members.ts

export interface SocialLinks {
  github?: string;
  email?: string;
  website?: string;
}

export interface Member {
  id: number;
  name: string;
  pronouns?: string;
  role: string;
  imageUrl: string; // Using placeholder images for now
  bio: string;
  socials: SocialLinks;
}

export const sampleMembers: Member[] = [
  {
    id: 1,
    name: 'Wurdle',
    pronouns: 'He/Him',
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
    name: 'tomcat',
    pronouns: 'She/Her',
    role: 'Discord Bot Dev',
    imageUrl: 'https://cdn.tomcat.sh/images/pfp.png',
    bio: "i'm a self-taught transfem discord bot dev who also does some other stuff, which you can see on my site.",
    socials: {
      github: 'https://git.tomcat.sh',
      email: 'mailto:hi@tomcat.sh',
      website: 'https://www.tomcat.sh',
    },
  },
  {
    id: 3,
    name: 'Lycanea',
    pronouns: 'Any/All',
    role: 'Emotional support',
    imageUrl: 'https://images.wurdle.eu/wurdleturtle.png',
    bio: 'Placeholder',
    socials: {
      github: 'https://github.com/',
      website: 'https://lycanea.dev/',
      email: 'mailto:lyca@nyabyte.dev',
    },
  },
  {
    id: 4,
    name: 'Placeholder',
    role: 'Placeholder',
    imageUrl: 'https://images.wurdle.eu/wurdleturtle.png',
    bio: 'Placeholder',
    socials: {
      github: 'https://github.com/',
    },
  },
  {
    id: 5,
    name: 'Placeholder',
    role: 'Placeholder',
    imageUrl: 'https://images.wurdle.eu/wurdleturtle.png',
    bio: 'Placeholder',
    socials: {
      github: 'https://github.com/',
    },
  },
  {
    id: 6,
    name: 'Placeholder',
    role: 'Placeholder',
    imageUrl: 'https://images.wurdle.eu/wurdleturtle.png',
    bio: 'Placeholder',
    socials: {
      github: 'https://github.com/',
    },
  },
  {
    id: 7,
    name: 'Placeholder',
    role: 'Placeholder',
    imageUrl: 'https://images.wurdle.eu/wurdleturtle.png',
    bio: 'Placeholder',
    socials: {
      github: 'https://github.com/',
    },
  },
  {
    id: 8,
    name: 'Placeholder',
    role: 'Placeholder',
    imageUrl: 'https://images.wurdle.eu/wurdleturtle.png',
    bio: 'Placeholder',
    socials: {
      github: 'https://github.com/',
    },
  },
];

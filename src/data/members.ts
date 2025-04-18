// src/data/members.ts

export interface SocialLinks {
  github?: string;
  email?: string;
  website?: string;
  signal?: string;
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
    name: "Wurdle",
    pronouns: "He/Him",
    role: "Frontend Design",
    imageUrl: "https://images.wurdle.eu/wurdlereal.png",
    bio: "Little bit of a dumbass, just like to have some fun. My dms are always open if anyone wants to talk!",
    socials: {
      github: "https://github.com/wurdleturtle",
      email: "mailto:wurdle@wurdle.eu",
      website: "https://wurdle.eu",
    },
  },
  {
    id: 2,
    name: "tomcat",
    pronouns: "She/Her",
    role: "Discord Bot Dev",
    imageUrl: "https://cdn.tomcat.sh/images/pfp.png",
    bio: "i'm a self-taught transfem discord bot dev who also does some other stuff, which you can see on my site.",
    socials: {
      github: "https://git.tomcat.sh",
      email: "mailto:hi@tomcat.sh",
      website: "https://www.tomcat.sh",
    },
  },
  {
    id: 3,
    name: "Lycanea",
    pronouns: "Any/All",
    role: "downgraded to bember",
    imageUrl: "https://lycanea.dev/avatar.png",
    bio: "the silly backend nerd, (very cute - zas)",
    socials: {
      github: "https://github.com/lycanea",
      website: "https://lycanea.dev/",
      email: "mailto:nyabyte@lycanea.dev",
    },
  },
  {
    id: 4,
    name: "zastix",
    role: "Reverse Engineer",
    pronouns: "She/Her",
    imageUrl: "https://zastix.club/pfp.png",
    bio: '"horrible" reverse engineer, programmer, c++ and typescript enjoyer. silly trans girl. :3',
    socials: {
      github: "https://github.com/zastlx",
      website: "https://zastix.club",
      email: "mailto:zastix@zastix.club",
    },
  },
  {
    id: 5,
    name: "geodebreaker",
    role: "progmarmin",
    imageUrl: "https://cdn.nyabyte.dev/gb.png",
    bio: "porfesnil porgamming",
    socials: {
      github: "https://github.com/geodebreaker",
      website: "https://geodebreaker.github.io/",
    },
  },
  {
    id: 6,
    name: "Hanna",
    pronouns: "She/Her",
    role: "Reinventor of Wheels",
    imageUrl: "https://cdn.nyabyte.dev/hannah.png",
    bio: "idiot girl obsessed with low level programming and binary exploitation",
    socials: {
      github: "https://github.com/exotium",
    },
  },
  {
    id: 7,
    name: "Digi",
    pronouns: "She/Her",
    role: ":3 wrangler",
    imageUrl: "https://cdn.digitaldragon.dev/digi-pfp.jpg",
    bio: "dragon-shaped robot, bad programmer, who is interested in technology, archiving, dragons",
    socials: {
      github: "https://github.com/DigitalDwagon",
      email: "mailto:nyabyte@digitaldragon.dev",
      website: "https://www.digitaldragon.dev",
    },
  },
  {
    id: 8,
    name: "dotle31",
    pronouns: "She/They",
    role: "silly catgirl go meow all over you",
    imageUrl:
      "https://cdn.discordapp.com/avatars/1197702222893547590/63e5a4fbec14f9af767ad2fff1e72088.png?size=1024&format=png",
    bio: "bad girl, silly, stupid and cant write goog code",
    socials: {
      github: "https://github.com/doyle31",
      website: "https://doyle31.com",
      signal:
        "https://signal.me/#eu/1Z80joyD9Vh7LI1m41BSjvelAf-nyWkq_5FC62P16Mtud86BEn9NB7ceq5ZP09Xw",
    },
  },
  {
    id: 9,
    name: "AltiePie",
    pronouns: "She/Her",
    role: "The Human",
    imageUrl: "https://cdn.nyabyte.dev/Altie.png",
    bio: "I have no fucking clue how to code, but I'm here. I guess I can game well and draw decentish so theres that :3",
    socials: {},
  },
  {
    id: 10,
    name: "Banjo",
    pronouns: "She/Her",
    role: "Emotional Support Part 2",
    imageUrl:
      "https://cdn.discordapp.com/avatars/1268761960506200065/0d3e4860fa6b777ecfb5427649bbdf1d.png?size=1024",
    bio: "creator of music",
    socials: {},
  },
  {
    id: 11,
    name: "Cat",
    pronouns: "She/Her",
    role: "professional meower",
    imageUrl: "https://lycanea.dev/cat.png",
    bio: "write silly message thingies",
    socials: {
      website: "https://www.tumblr.com/cat-tenyx",
    },
  },
];

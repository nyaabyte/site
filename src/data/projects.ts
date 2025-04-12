import dasImage from "/src/assets/das_ss.png";
import nyabyteImage from "/src/assets/nyabyte_ss.png";
import noImage from "/src/assets/no_ss.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export const sampleProjects: Project[] = [
  {
    id: 1,
    title: "NyaByte.dev",
    description:
      "This site! Pretty self explanatory. Site created by Wurdle, logo created by Tomcat! Feel free to suggest changes or make them yourself on the github :3",
    imageUrl: nyabyteImage,
    tags: ["React", "Typescript", "Vite"],
    liveUrl: "https://nyabyte.dev",
    repoUrl: "https://github.com/nyaabyte/site",
  },
  {
    id: 3,
    title: "DAS",
    description:
      "A custom Discord web client for using Discord while it is blocked.",
    imageUrl: dasImage,
    tags: ["JavaScript", "Discord.JS", "Websockets", "HTML"],
    repoUrl: "https://github.com/nyaabyte/das",
  },
];

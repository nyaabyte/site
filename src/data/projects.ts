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
    imageUrl: "https://cdn.nyabyte.dev/nyabyte.png",
    tags: ["React", "Typescript", "Vite"],
    liveUrl: "https://nyabyte.dev",
    repoUrl: "https://github.com/nyaabyte/site",
  },
  {
    id: 2,
    title: "MeowNet",
    description:
      "A new social media service built from the ground up for web and mobile.",
    imageUrl: "https://cdn.nyabyte.dev/nyabyte.png",
    tags: ["TypeScript", "Expo"],
    repoUrl: "https://github.com/nyaabyte/meownet",
  },
];

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
    title: 'NyaByte.dev',
    description:
      'This site! Pretty self explanatory. Site created by Wurdle, logo created by Tomcat! Feel free to suggest changes or make them yourself on the github :3',
    imageUrl: '/src/assets/logo.png',
    tags: ['React', 'Typescript', 'Vite'],
    liveUrl: 'https://nyabyte.dev',
    repoUrl: 'https://github.com/nyaabyte/wurdle', /** maybe change name to "site" instead of "wurdle" later? */
  },

  {
    id: 2,
    title: 'Placeholder 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, dignissimos! Fuga quam necessitatibus autem est doloribus vel, nisi enim, labore quae, obcaecati repudiandae vero saepe repellat eos minus quas rerum.',
    imageUrl: 'https://images.wurdle.eu/burger.png', // Example path - create this folder/image
    tags: ['Example', 'Tag2'],
    liveUrl: 'https://wurdle.eu',
    repoUrl: 'https://wurdle.eu', // Example link
  },
  {
    id: 3,
    title: 'Placeholder 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, dignissimos! Fuga quam necessitatibus autem est doloribus vel, nisi enim, labore quae, obcaecati repudiandae vero saepe repellat eos minus quas rerum.',
    imageUrl: 'https://images.wurdle.eu/burger.png', // Example path - create this folder/image
    tags: ['Example', 'Tag2'],
    liveUrl: 'https://wurdle.eu',
    repoUrl: 'https://wurdle.eu', // Example link
  },
];

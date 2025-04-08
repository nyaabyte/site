// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL
  tags: string[];
  repoUrl?: string; // Link to GitHub/GitLab etc.
  liveUrl?: string; // Link to live demo
}

export const sampleProjects: Project[] = [
  {
    id: 1,
    title: 'Placeholder 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, dignissimos! Fuga quam necessitatibus autem est doloribus vel, nisi enim, labore quae, obcaecati repudiandae vero saepe repellat eos minus quas rerum.',
    imageUrl: 'https://images.wurdle.eu/burger.png', // Example path - create this folder/image
    tags: ['Example', 'Tag2'],
    liveUrl: 'https://wurdle.eu',
    repoUrl: 'https://wurdle.eu', // Example link
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

import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nico | Developer', // e.g: 'Name | Developer'
  lang: 'en, id', // e.g: en, es, fr, jp
  description: 'my personal portofolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nico',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I like programming, especially on javascript ecosystem.',
  paragraphTwo: ' I can learn new technology quickly.',
  paragraphThree: 'I also familiar with development environment in linux.',
  resume: 'https://drive.google.com/drive/folders/1XPKmPR3PX0_S-JqsA5LtEQH-_6nIUiR-?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Email me at nicoapppp@gmail.com or click this button',
  btn: 'Mail me',
  email: 'nicoapppp@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hachi-nico',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

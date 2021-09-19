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
    img: 'project1-wpjpa.png',
    title: 'Web Penyedia Judul PA',
    info: 'Status: done',
    info2: '[Team Project] WebApp for college assignments',
    url: 'http://k3site.rf.gd/',
    repo: 'https://github.com/hachi-nico/web-penyedia-judul-pa-legacy', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2-lesinaja.png',
    title: 'LesinAja',
    info: 'Status: on progress',
    info2: '[Team Project] WebApp for Bimbel LesinAja',
  },
  {
    id: nanoid(),
    img: 'project3-wheaterapp.png',
    title: 'Monitor Cuaca',
    info: 'Status: done',
    info2: '[Personal Project] WebApp to display current wheater',
    url: 'https://fancy-monitor-cuaca.web.app/',
  },
  {
    id: nanoid(),
    img: 'project4-chat-n-chill.png',
    title: 'Chat n Chill',
    info: 'Status: on progress',
    info2: '[Personal Project] WebApp with chat engine',
    url: 'https://chat-n-chill.web.app/',
    repo: 'https://github.com/hachi-nico/funchat', // if no repo, the button will not show up
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

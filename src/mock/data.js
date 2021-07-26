import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aswin Barath | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Aswin Barath',
  subtitle: "I'm the Developer you need",
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'Formal_Profile_Picture.jpg',
  paragraphOne: 'Software Engineer specializing in Web Development',
  paragraphTwo: 'Driven developer dedicated to building responsive web applications',
  paragraphThree: 'Committed to full-stack web development',
  resume: 'https://drive.google.com/file/d/1sJWJKZFDUZAhJeYyVD-nWBq8OFVeJYq6/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'JU Query.png',
    title: 'JU Query',
    info: 'An online QnA (Question and Answer) platform for students and faculties of College',
    info2: 'Built with Authentication, Query prompt, Answer modal and curated spaces',
    url: 'https://ju-query.web.app/',
    repo: 'https://github.com/AswinBarath/ju-query', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Smart-brain-react-app.PNG',
    title: 'Smart-brain React App',
    info: 'An Image Recognition app which makes an API request to face recognition machine learning model',
    info2: 'Built with Authentication, User Ranking, custom REST API and PostgreSQL Database',
    url: 'https://smart-brain-26.herokuapp.com/',
    repo: 'https://github.com/AswinBarath/Smart-brain-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robofriends.png',
    title: 'Robofriends React App',
    info: 'Built a responsive front-end web application using React library and enabled an API call.',
    info2: 'Enabled search box for searching user cards with responsive web layout.',
    url: 'https://aswinbarath.github.io/robofriends/',
    repo: 'https://github.com/AswinBarath/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'imdb-web-scrapper.PNG',
    title: 'IMDb Web Scrapper',
    info: 'Python project collects the data from IMDb website using web scrapping library: beautiful soup',
    info2:
      'IMDb web scrapper is a project which scrapes for: Top 5 Movies and exports the output in the form of csv file and Top 10 Directors, their entire list of movies and exports in the form of text file',
    url: 'https://github.com/AswinBarath/IMDb-web-scrapper',
    repo: 'https://github.com/AswinBarath/IMDb-web-scrapper', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: `Let's Talk`,
  email: 'aswin2001barath@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/AswinBarath2',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aswin-barath',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AswinBarath',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

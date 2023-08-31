import {
  web,
  veganstore,
  hotelmiranda,
  dashboard,
  oxygenshop,
  photosapp,
  calendary,
  back,
  ts,
  reactblack,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: reactblack,
  },
  {
    title: "Node Js Developer",
    icon: back,
  },
  {
    title: "Typescript Lover",
    icon: ts,
  },
];


const projects = [
  {
    name: "Vegan Products Store",
    description:
      "Web-based platform that allows users to search for new products and review them, with a ranking of the rated products dynamically changing.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: veganstore,
    source_code_link: "https://testveggipedia.firebaseapp.com/",
  },
  {
    name: "Hotel Miranda Web Page",
    description:
      "Front-End of Hotel Miranda web page proyect. Technologies used in proyect: Html, Css Sass, Javascript for functionalities and responsive.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Sass",
        color: "pink-text-gradient",
      },
    ],
    image: hotelmiranda,
    source_code_link: "https://lautaroepifani.github.io/hotel-miranda/src/pages/home/index.html",
  },
  {
    name: "Dashboard Hotel Proyect",
    description:
      "Administration application for the hotel staff made in typescript. MERN stack with Redux. ",
    tags: [
      {
        name: "React - Redux - Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Node - Express - Mongo db",
        color: "green-text-gradient",
      },
      {
        name: "Styled-Components",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "http://mirandadashboard.s3-website-eu-west-1.amazonaws.com",
  },
  {
    name: "Oxygen Shop",
    description:
      "First project of the oxygen academy basic shop store responsive in Html Css and Javascript.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: oxygenshop,
    source_code_link: "https://lautaroepifani.github.io/oxygenshop.github.io/src/index.html",
  },
  {
    name: "Photos App",
    description:
      "Application to manage images through an api rest with unsplash api. You can save images to favorites and download.",
    tags: [
      {
        name: "React - Redux",
        color: "blue-text-gradient",
      },
      {
        name: "Rest Api",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: photosapp,
    source_code_link: "https://lautaroepifani.github.io/photos-react-app.github.io/",
  },

  {
    name: "Schedule App",
    description:
      "Application to manage the weekly itinerary. Tares, events in others. First time using server-side-rendering.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity CMD",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: calendary,
    source_code_link: "https://schedule-next-app.netlify.app",
  },
];

export { services, projects };

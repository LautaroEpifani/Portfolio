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
    title: "TypeScript Lover",
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
    link: "https://testveggipedia.firebaseapp.com/",
    image: veganstore,
  },
  {
    name: "Hotel Miranda Web Page",
    description:
      "Front-End of Hotel Miranda web page proyect. Technologies used in proyect: Html, Css Sass, Javascript for functionalities and responsive.",
    tags: [
      {
        name: "Html - ",
        color: "blue-text-gradient",
      },
      {
        name: "Sass - ",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Php + Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Amazon Web Services EC2",
        color: "orange-text-gradient",
      },
    ],
    link: "http://ec2-34-245-29-31.eu-west-1.compute.amazonaws.com/",
    image: hotelmiranda,
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
      {
        name: "Amazon Web Services: Lambda & S3",
        color: "orange-text-gradient",
      },
    ],
    link: "http://mirandadashboard.s3-website-eu-west-1.amazonaws.com",
    image: dashboard,
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
    link: "https://lautaroepifani.github.io/oxygenshop.github.io",
    image: oxygenshop,
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
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    link: "https://lautaroepifani.github.io/photos-react-app.github.io/",
    image: photosapp,
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
    link: "https://schedule-next-app.netlify.app",
    image: calendary,
  },
];

export { services, projects };

// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Don Chisolm",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "A aspiring Full Stack developer. That want to create mind blowing or just down right funny apps. Knowledge is power. ",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Hiketunez",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/Donchiz77/Hiketunez",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Team profile Generator",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/Donchiz77/Team_manager",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Note taker",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/Donchiz77/week_11HW",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Vibez",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/zdeal1026/team_depot",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "M.O.A.R.",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/Donchiz77/EMA",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Employee Manager",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/Donchiz77/Week_12HW",
  },
];

// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Holla Atcha Boi";
const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Kaustubh Mishra",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/Donchiz77",
  // facebook: "https://facebook.com",
  twitter: "https://twitter.com/Don_2C",
  // instagram: "https://instagram.com",
  linkedin: "https://www.linkedin.com/in/dontarious-chisolm-672a62143/",
  resume: "https://docs.google.com/document/d/1hnUBWDH-pnQKkVQDSJ-l7svQlTCDR5BxZ-AIHUwl330/edit?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};

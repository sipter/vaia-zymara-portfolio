const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://sipter.github.io/vaia-zymara-portfolio",
  title: "JS.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Vaia Zymara",
  role: "Junior Front End Developer",
  description:
    "Enthusiastic Junior Front End Developer with expertise in Javascript and ReactJs. With a Full Stack Web Development certificate and working knowledge of Material UI, NodeJS, MongoDB, I have a rounded tech skillet and deep passion for technology. Having completed numerous projects during my studies and personal projects such as, I can make a positive impact within any web development project.",
  resume: "https://example.com",
  social: {
    linkedin: "www.linkedin.com/in/vaia-zymara",
    github: "https://github.com/sipter",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Food Delivery App",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["JavaScript", "React", "Material UI"],
    sourceCode: "https://github.com/sipter/food_delivery",
    livePreview: "https://sipter.github.io/food_delivery/",
  },
  {
    name: "Restaurant Finder",
    description:
      "We created as a team this RestaurantFinder as a final project of React Course by ReDI School ",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    sourceCode: "https://github.com/sipter/restaurant_findr",
    // livePreview: 'https://github.com',
  },
  {
    name: "My Plant Shop ",
    description:
      "My first HTML and CSS project as a final project of the UI module at DCI",
    stack: ["HTML", "CSS"],
    sourceCode: "https://github.com/sipter/myPlantShop",
    livePreview: "https://sipter.github.io/myPlantShop/",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "SCSS",
  "Material UI",
  "Git",
  "GitHub",
  "NodeJs",
  "MongoDB",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "v.zymara@outlook.com",
};

export { header, about, projects, skills, contact };

import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a passionate developer, specializing in MERN stack, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. Aiming to excel as an AI/ML developer by utilizing technology to tackle intricate challenges.`;

export const ABOUT_TEXT = `I'm a third-year student at IIIT Sonepat, persuing B.tech in Information Technology. I have Demonstrated leadership abilities as an NDA SSB-recommended candidate.I'm seeking to collaborate with industry experts and pursue opportunities in AI and ML development.I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June,2024 - July,2024",
    role: "Intern-Web Developer",
    company: "Zidio ",
    description: `As a web development intern, I engineered new features like notifications and an Analytics Panel, optimized site performance through advanced cache management, and resolved critical bugs, leveraging my skills in TypeScript, Tailwind, Next.js, Redux, and the MERN stack.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "TypeScript", "Tailwind", "Express.js", "Redux"],
  },
];

export const PROJECTS = [
  {
    title: "EduVista",
    image: project1,
    description:
      "A fully functional E-learning website with features like course upload & access, course distribution, admin dashboard, analytics page, live notifications and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","redux", "Jwt", "typescipt", "tailwind", "Redis", "express"],
  },
  {
    title: "Automated Chat Response ",
    image: project2,
    description:
      "It leverages AI to auto respond to your whatsapp messages,enhancing communication efficiency by providing precise and contextually appropriate replies.",
    technologies: ["python", "pyautogui", "pyperclip", "openAI API"],
  },
  {
    title: "Jarvis",
    image: project4,
    description:
      "A personal voice-activated virtual assistant built using Python,that perform various tasks, such as opening websites, fetching news headlines, and processing general commands with the help of OpenAI's GPT-4.0.",
    technologies: ["Python", "pyttsx", "gtts", "openAI API"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, experience and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, Mock Address, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00(X) ",
  email: "shankargiriaj27@gmail.com",
};

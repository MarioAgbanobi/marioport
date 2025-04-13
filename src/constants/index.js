import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - 2021;

export const HERO_CONTENT = `Specialize in automation, testing and performance optimization across platforms.`;


export const ABOUT_TEXT = `
My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.

<br /><br />

I have over ${yearsOfExperience}+ years of professional experience building full stack applications. Outside of coding, I enjoy staying active, exploring new technologies, <a href="https://www.youtube.com/@marioagbanobi" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="underline decoration-red-600 font-semibold leading-6 decoration-4">
   YouTuber
</a> and contributing to open-source projects.`;





export const EXPERIENCES = [
  {
    year: "Jan 2023 - Present",
    role: "Software Engineer",
    company: "Green Guard",
    description: `Automated customer onboarding processes, reducing contract generation and invoicing time by 95%. Improved system reliability by implementing automated tests with Jest and Playwright. Optimized backend performance and developer efficiency using Prisma ORM and Supabase.`,
    technologies: ["Jest", "Playwright", "Prisma", "Supabase"],
  },
  {
    year: "July 2020 - Nov 2022",
    role: "Software Engineer",
    company: "Zapp",
    description: `Reduced runtime errors by 70% through TypeScript migration. Built a real-time notification service via WhatsApp, SMS, and Email, lowering support tickets significantly. Transitioned backend from Express.js to FastAPI and MongoDB to enhance scalability and API performance.`,
    technologies: ["TypeScript", "Express.js", "FastAPI", "MongoDB", "Sentry"],
  },
];




export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address1: "Lagos, Nigeria",
  address2: "Delta, Nigeria",
  phoneNo: "+234 81 4029 2761",
  email: "marioagbanobi@gmail.com",
};

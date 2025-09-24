const project1 = "/projects/Project-1.jpg"
const project2 = "/projects/Project-2.jpg" 
const project3 = "/projects/Project-3.jpg"

const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - 2022;

export const HERO_CONTENT = `Specialize in AI automation, testing and performance optimization across platforms.`;

export const ABOUT_TEXT = `
My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.

<br /><br />
As a Software Engineer with ${yearsOfExperience}+ years of experience, I specialize in building scalable web, mobile, and desktop applications. My expertise spans SaaS, AI, Blockchain, and VSCode extensions development (Author: <a href="https://marketplace.visualstudio.com/items?itemName=MarioAgbanobi.express-kit" 
target="_blank" 
rel="noopener noreferrer" 
class="underline decoration-blue-600 font-semibold leading-6 decoration-4"> Express Kit </a>). Outside of coding, I enjoy reading business and finance books, table tennis, music lover, exploring new technologies, <a href="https://www.youtube.com/@marioagbanobi" 
target="_blank" 
rel="noopener noreferrer" 
class="underline decoration-red-600 font-semibold leading-6 decoration-4">
   YouTuber
</a> and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Nov 2024",
    role: "Software Engineer",
    company: "NovaTech Solution",
    description: `Spearheaded the development of a scalable e-commerce platform using Nextjs and Node.js, resulting in a 40% increase in sales, Designed and implemented a real-time inventory management system, reducing stockouts by 30%, Collaborated with cross-functional teams to integrate payment gateways, improving transaction success rates by 25%.`,
    technologies: ["Nextjs", "Nodejs"],
  },
  {
    year: "Oct 2023 - Dec 2023",
    role: "Frontend Developer ",
    company: "Dormot",
    description: `Developed and deployed responsive login and registration interfaces using Nextjs and Chakra UI, improving agent onboarding speed by 40%, Collaborated daily with developers and product teams using Jira for stand-ups and Git/GitHub for code reviews, ensuring 95% sprint goal completion, Implemented a scalable dashboard from Figma designs to manage real estate agents across Nigeria and the UK, increasing operational visibility by 60%.`,
    technologies: ["Nextjs", "Chakra UI"],
  },
  {
    year: "April 2023 - Sept 2023",
    role: "Web Developer",
    company: "SkysenxHub",
    description: `Developed responsive front-end interfaces using HTML, CSS, JavaScript, and Bootstrap as training
    samples for student learning sessions, Collaborated with team members using Figma design links to implement UI/UX patterns for a fintech application and participated in code reviews and Built a registration and learning management system using PHP (PDO) with MVC architecture and MySQL database to streamline bootcamp enrollment and reduce overcrowding during tech training programs`,
    technologies: ["JavaScript", "PHP (PDO)", "MySQL"],
  },
];

// Updated PROJECTS array with links
export const PROJECTS = [
  {
    title: "OG store",
    image: project1,
    description:
      "Developed a full-stack e-commerce platform using Next.js with Sanity CMS for product management and Stripe for secure payments. Implemented product listing, dynamic product pages, cart functionality, and checkout with real-time order validation. Designed a responsive UI for smooth shopping experiences across devices.",
    technologies: ["Nextjs", "Sanity", "Stripe"],
    liveUrl: "https://ecomm-sanity-stripe-theta.vercel.app/",
    githubUrl:
      "https://github.com/MarioAgbanobi/EcommerceSanityStripe-Next-App",
  },
  {
    title: "Krea AI",
    image: project2,
    description:
      "Built a modern landing page for a generative AI image platform using Next.js. Highlighted AI features such as real-time image generation, prompt-to-image workflows, and model showcase. Integrated smooth animations, responsive layouts, and optimized SEO for better visibility. Delivered a sleek, engaging design to showcase the AI tool's capabilities.",
    technologies: ["Nextjs", "Tailwind"],
    liveUrl: "https://krea-nextjs-ai.vercel.app/",
    githubUrl: "https://github.com/MarioAgbanobi/Krea-Nextjs-AI-Clone",
  },
  {
    title: "Nike Shoe Sales",
    image: project3,
    description:
      "Designed and developed a marketing landing page for Nike shoe sales using Next.js. Focused on high-quality visuals, product highlights, and call-to-action buttons to drive conversions. Implemented responsive design, fast load times, and smooth transitions to ensure an immersive shopping experience.",
    technologies: ["Nextjs", "Tailwind"],
    liveUrl: "https://nike-vite.vercel.app/",
    githubUrl: "https://github.com/MarioAgbanobi/Nike-vite",
  },
];


export const CONTACT = {
  address1: "Lagos, Nigeria",
  address2: "Delta, Nigeria",
  phoneNo: "+234 81 4029 2761",
  whatsappUrl: "https://wa.me/2348140292761",
  email: "marioagbanobi@gmail.com",
};

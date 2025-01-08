import { Icons } from "@/components/icons";
import { BriefcaseBusiness, FolderCheck, HomeIcon, Layers3, Wrench } from "lucide-react";
import Markdown from "react-markdown";

const experienceCSR = `
* Provided technical support, qualified advice and general guidance as an expert in Registrar Products, DNS, Hosting & Web Design/ Development 
* Assisted in scaling the Website Migrations and Domain Name Sales streams as a highly skilled agent
* Updated and maintained documentation on all registrar products and systems
`

const experiencePL = `
* Redesigned the Shared Hosting product line, increasing hosting sales by 5% and improving server rentability by 16%
* Led data center migration operation, moving 2400 customers across 5 different servers to a newproprietary internal infrastructure
`

const experienceCSM = `
* Led a team of 17 CS Representatives, achieving and maintaining a 90%+ satisfaction rate & 4.9 Trustpilot rating 
* Developed the new Customer Knowledge Base, with 30,000 words across 40+ articles on all registrar products and systems 
* Developed Customer Success KPIs, Analytics and Performance Reviews 
* Implemented advanced Zendesk flows with automated agent 
* Developed Customer Success internal documentation 
* Provided dedicated technical support to high-value key accounts
`

const experienceCPM = `
* Developed a domain database & pricing matrix, resulting in a domain pricing restructuring affecting over 200 extensions, achieving profitability on all domain products
* Implemented branding design guidelines and principles across the main website alongside SEO-rich descriptions, product visibility, metainformation for improved brand unity and customer experience
* Produced designs, concepts and wireframes for a total frontend rebranding, partial client dashboard rework, new email product pages, login flow, email notifications, social media posts & other changes
* Parsed and organised financial & product sales data for the C-Suite & key stakeholders.
* Led several reporting, briefing, education and training sessions for company acquisition
`

const experienceWSPM = `
* Currently working with several website services projects of Nestlé brands, leading and coordinating cross-functional teams to ensure the quality of delivery and stakeholder satisfaction
* Managing project timelines and deliverables, ensuring 100% on-time delivery for all projects
`

export const DATA = {
  name: "Jaime L. Jacob",
  initials: "JLJ",
  url: "https://jlj.pt",
  location: "Caldas da Rainha, Portugal",
  description: "Project Manager & Web Developer",
  summary: "I’m a digital expert with a strong experience in Project / Product Management, Web Development, Customer Success & Technical Support.  ",
  avatarUrl: "/jaime.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "MongoDB",
    "Python",
    "Linux",
    "HTML",
    "CSS",
    "TailwindCSS",
    "WordPress",
    "Magento",
    "Ghost",
    "Google Workspace",
    "Microsoft365",
    "Jira",
    "Adobe Photoshop",
    "Adobe Premiere",
    "Obsidian",
    "Notion",
    "cPanel/WHM",
    "Enhance",
    "Zendesk",
    "DNS",
    "Domain Names",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#services", icon: Layers3, label: "Services" },
    { href: "/#projects", icon: FolderCheck, label: "Projects" },
    { href: "/#work", icon: BriefcaseBusiness, label: "Work Experience" },
    { href: "/#skills", icon: Wrench, label: "Skills & Tools" },
  ],
  contact: {
    email: "web@jlj.pt",
    tel: "+351911064091",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jaimeljacob/",
        icon: Icons.linkedin,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jaimejacob",
        icon: Icons.github,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:web@jlj.pt",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      title: "Website Services Project Manager",
      href: "https://nestle.com",
      badges: ["Current"],
      company: "Nestlé",
      logoUrl: "/nestle.png",
      start: "Jan 2024",
      end: "Present",
      description: <Markdown className="prose max-w-full text-pretty font-sans text-xs text-black dark:text-white">{experienceWSPM}</Markdown>,
    },
    {
      company: "Epik.com",
      badges: [],
      href: "https://epik.com",
      title: "Chief Product Manager",
      logoUrl: "/epik.png",
      start: "Feb 2023",
      end: "Jun 2023",
      description: <Markdown className="prose max-w-full text-pretty font-sans text-xs text-black dark:text-white">{experienceCPM}</Markdown>,
    },
    {
      company: "Epik.com",
      badges: [],
      href: "https://epik.com",
      title: "Product Lead - Shared Hosting",
      logoUrl: "/epik.png",
      start: "Feb 2022",
      end: "Feb 2023",
      description: <Markdown className="prose max-w-full text-pretty font-sans text-xs text-black dark:text-white">{experiencePL}</Markdown>,
    },
    {
      company: "Epik.com",
      badges: [],
      href: "https://epik.com",
      title: "Customer Success Manager",
      logoUrl: "/epik.png",
      start: "Jun 2021",
      end: "Feb 2023",
      description: <Markdown className="prose max-w-full text-pretty font-sans text-xs text-black dark:text-white">{experienceCSM}</Markdown>,
    },
    {
      company: "Epik.com",
      badges: [],
      href: "https://epik.com",
      title: "Customer Service Representative",
      logoUrl: "/epik.png",
      start: "Feb 2021",
      end: "Jun 2021",
      description: <Markdown className="prose max-w-full text-pretty font-sans text-xs text-black dark:text-white">{experienceCSR}</Markdown>,
    },
    
  ],
  
  projects: [
    {
      title: "Hortênsia Music Festival",
      href: "https://hortensiamusicfestival.com",
      project_type: "Client Project",
      active: true,
      description: "I built the entire digital operation of the Hortênsia Music Festival, supporting the operation as a webmaster and web/graphic designer for the festival's website, social media, and digital marketing campaigns.",
      technologies: [
        "WordPress",
        "HTML",
        "CSS",
        "Figma",
        "Brevo",
        "Graphic Design",
      ],
      links: [
        {
          type: "Website",
          href: "https://hortensiamusicfestival.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hmf.png",
      video:
        "",
    },
    {
      title: "Eize",
      href: "https://eize.pt",
      project_type: "Client Project",
      active: true,
      description:
        "I helped create the vision for the Eize digital presence and business growth goals, leading the development of the website, and providing new systems for lead generation and data management, as well as infrastructure setup.",
      technologies: [
        "WordPress",
        "HTML",
        "CSS",
        "Figma",
        "Airtable",
        "Enhance",
      ],
      links: [
        {
          type: "Website",
          href: "https://eize.pt",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/eize.png",
      video: "",
    },
    {
      title: "Jaime L. Jacob",
      href: "https://jlj.pt",
      project_type: "Personal Website",
      active: true,
      description:
        "I built my website in NextJS and Typescript based on Dillion Verma's MagicUI Portfolio template, with highly customized design, theme, animations, typography, components and more.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "MagicUI",
        "ShadcnUI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/jaimejacob",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/jljpt.png",
      video: "",
    },
    {
      title: "KanaMastery",
      href: "https://kanamastery.com",
      project_type: "Personal Project",
      active: true,
      description:
        "I created KanaMastery for myself as an alternative to RealKana.com with a modern user interface and experience. It has 2 game modes with various difficulties, a compact knowledge base with search, practice mode with hints, scores, custom end game messages, timer, animations, dark mode and more.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "ShadcnUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://kanamastery.com",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/kanamastery.png",
      video: "",
    },
    {
      title: "Criminalidade.pt",
      href: "https://criminalidade.pt",
      project_type: "Personal Project",
      active: true,
      description:
        "Criminalidade.pt is a website that aims to make it easy for anyone to visualize the crime statistics in Portugal, in an easy and digestable way. It features 3 chart types and customization that allows anyone to see the growth and reduction of all the crime statistics in group or individually since 1993.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "ShadcnUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://criminalidade.pt",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/criminalidadept.png",
      video: "",
    },
  ],
  
} as const;

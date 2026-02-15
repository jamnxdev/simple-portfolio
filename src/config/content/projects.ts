import { StatusProps } from "@/components/ui/status-indicator";

export type Project = {
  title: string;
  description: string;
  imgSRC: string;
  videoSRC: string;
  status: StatusProps["status"];
  liveURL: string;
  backupLiveURL?: string;
  githubURL: string;
  toolsNTech: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "DDoSim",
    description:
      "DDoSim is an interactive platform for simulating and visualizing Distributed Denial-of-Service (DDoS) attacks in real time across the globe.",
    imgSRC:
      "https://raw.githubusercontent.com/DDoSimLab/Site/refs/heads/main/public/og-image.jpg",
    videoSRC: "https://ddosim.vercel.app",
    status: "online",
    liveURL: "https://ddosim.live",
    backupLiveURL: "https://ddosim.vercel.app",
    githubURL: "",
    toolsNTech: [
      "Typescript",
      "Next.js",
      "Hono",
      "Redis",
      "PostgreSQL",
      "Socket.io",
      "Stripe",
      "Cloudinary",
    ],
  },
  {
    title: "DayDonezo",
    description:
      "Digital journaling platform where you can document your daily wins and accomplishments.",
    imgSRC:
      "https://raw.githubusercontent.com/Jaimin25/DayDonezo/7e87aeb92b5633fc6e833ec40296849dfcd6fbce/public/Link%20Preview%20-%20DayDonezo.png",
    videoSRC: "/demo-videos/daydonezo-demo.mp4",
    status: "online",
    liveURL: "https://daydonezo.vercel.app",
    githubURL: "",
    toolsNTech: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "PostgreSQL",
      "Prisma",
      "Firebase",
      "Shadcn UI",
      "Magic UI",
      "Aceternity ui",
    ],
  },
  {
    title: "ConvoNest",
    description:
      "ConvoNest is a realtime web application for chatting, where you can add friends and chat with them individually or in a group",
    imgSRC:
      "https://raw.githubusercontent.com/Jaimin25/ConvoNest/refs/heads/main/public/Link%20Preview%20-%20ConvoNest.png",
    videoSRC: "/demo-videos/convonest-demo.mp4",
    status: "online",
    liveURL: "https://convonest.vercel.app",
    githubURL: "",
    toolsNTech: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Socket.io",
    ],
  },
  {
    title: "Claimit",
    description:
      "An online marketplace enabling real-time auctions and bidding, driving higher user engagement",
    imgSRC: "/project-images/Link Preview - Claimit.png",
    videoSRC: "/demo-videos/claimit-demo.mp4",
    status: "degraded",
    liveURL: "https://claimit.vercel.app",
    githubURL: "",
    toolsNTech: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Drizzle",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "Shadcn UI",
      "Aceternity ui",
    ],
  },
  {
    title: "Sahyog",
    description: "A crowdfunding platform",
    imgSRC:
      "https://raw.githubusercontent.com/Jaimin25/Sahyog/fecf91be059173c47e7b743863b33b2472a2cfe4/public/Link%20Preview%20-%20Sahyog.png",
    videoSRC: "/demo-videos/sahyog-demo.mp4",
    status: "online",
    liveURL: "https://sahyogweb.vercel.app",
    githubURL: "",
    toolsNTech: [
      "Typescript",
      "Next.js",
      "TailwindCSS",
      "MongoDB",
      "Express",
      "ChakraUI",
      "Stripe",
      "Supabase",
    ],
  },
  {
    title: "GreatMinds",
    description:
      "A fun project to explore great individuals who revolutionized the world with their skills and knowledge, shaping humanity's progress through groundbreaking contributions and innovations.",
    imgSRC:
      "https://raw.githubusercontent.com/Jaimin25/GreatMinds/1ae55c6fda15d3e98fc82467f2de18e04992ffc2/public/Images/Link%20Preview.png",
    videoSRC: "/demo-videos/grtminds-demo.mp4",
    status: "maintenance",
    liveURL: "https://grtminds.vercel.app",
    githubURL: "",
    toolsNTech: [
      "Typescript",
      "Next.js",
      "TailwindCSS",
      "PostgreSQL",
      "Shadcn UI",
      "Prisma",
      "Redis",
    ],
  },
];

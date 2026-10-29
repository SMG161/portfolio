import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "FinTrail App",
    desc: "Track all your financials in one place, A simple phone application to track your expenses, income, bill splitting and investments.",
    img: "/static/projects/fintrail.png",
    link: "https://play.google.com/store/apps/details?id=com.flutterflow.fintrail",
    tags: ["Flutter", "Flask", "GCP", "AWS", "API"],
  },
  {
    id: 1,
    title: "SecureTeams",
    desc: "A Secure Platform for IT Companies to manage their teams and projects. Secured using encryption in storage and transit. Real-time chat and file sharing using sockets.",
    img: "/static/projects/secureteams.png",
    link: "https://secureteams.onrender.com/",
    github: "https://github.com/SMG161/SecureTeams",
    tags: ["React", "TailwindCSS", "CSS", "MongoDB", "Socket.io"],
  },
  {
    id: 2,
    title: "Sehatmand.io",
    desc: "School insurance platform serving 5,000+ students. Built an appointment booking system with real-time availability for 500+ monthly bookings and automated Google Meet link generation, plus hospital search that helps students find partnered healthcare facilities in under 3 seconds.",
    img: "/static/projects/sehatmand.png",
    link: "https://sehatmand.io",
    tags: ["Next.js", "Firebase", "Google Meet", "Healthcare", "Booking"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects

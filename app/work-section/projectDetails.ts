import BudgetCaddie from "../../public/projects/BudgetCaddie.webp";
import renoteAI from "../../public/projects/renoteAI.webp";
import Skipit from "../../public/projects/Skipit.webp";
import substrack from "../../public/projects/substrack.webp";
import Fynd from "../../public/projects/Fynd.webp";
import WorkFlow from "../../public/projects/WorkFlow.webp";
import type { StaticImageData } from "next/image";
import bradai from "../../public/projects/bradai.webp";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: StaticImageData;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "BudgetCaddie",
    description:
      "An AI-guided personal-finance app that links your real bank accounts, auto-categorizes spending, and pairs it with Caddie — a conversational assistant that coaches you toward your goals.",
    technologies: ["SwiftUI", "MVVM", "Plaid", "AWS Cognito"],
    github: "https://github.com/rohithsidd1/BudgetCaddie",
    demo: "https://www.behance.net/gallery/250404163/BudgetCaddie",
    image: BudgetCaddie,
    available: true,
  },
  {
    id: 1,
    name: "ReNoteAI",
    description:
      "ReNoteAI is AI-based Document scanner app with minimal design and all sleek features like OCR, Chatbot, Cloud integrations and Personalized templates.",
    technologies: ["SwiftUI", "Vision", "SSO", "RESTful APIs"],
    github: "https://github.com/rohithsidd1/ReNoteAI",
    demo: "https://www.behance.net/gallery/219266041/ReNoteAI",
    image: renoteAI,
    available: true,
  },
  {
    id: 2,
    name: "Skipit",
    description:
      "Skipit is a cross-platform table-billing app that lets restaurants and food stalls of any size run on a simple subscription — streamlining billing for vendors and making checkout effortless for customers.",
    technologies: ["React Native", "Expo", "Supabase"],
    github: "https://github.com/rohithsidd1/Skipit",
    demo: "https://www.behance.net/gallery/250394935/Skipit",
    image: Skipit,
    available: true,
  },
  {
    id: 3,
    name: "SubsTrack",
    description:
      "SubsTrack is a minimalist mobile application designed to track all your Subscriptions in one place and optimize your savings.",
    technologies: ["SwiftUI", "MVVM", "User Defaults"],
    github: "https://github.com/rohithsidd1/SubsTrack",
    demo: "https://www.behance.net/gallery/219256307/SubsTrack",
    image: substrack,
    available: true,
  },
  {
    id: 4,
    name: "Fynd!",
    description:
      "App for everything happening around you, Redefined. Fynd helps not just find a place but also finds you a buddy that shares similar interest.",
    technologies: ["SwiftUI", "Google APIs", "MapKit"],
    github: "https://github.com/rohithsidd1/Fynd",
    demo: "https://www.behance.net/gallery/219264729/Fynd-For-You",
    image: Fynd,
    available: true,
  },
  {
    id: 5,
    name: "WorkFlow",
    description:
      "WorkFlow is a powerful full-stack app designed to streamline productivity and task management of your daily work stream.",
    technologies: ["SwiftUI", "Core Data", "Core Animations"],
    github: "https://github.com/rohithsidd1/WorkFlow",
    demo: "https://www.behance.net/gallery/219262465/WorkFlow",
    image: WorkFlow,
    available: true,
  },
  {
    id: 6,
    name: "Brad.AI",
    description:
      "Brad.ai is an intelligent, multilingual chatbot application designed to provide seamless interactions across various use cases.",
    technologies: ["SwiftUI", "MVC", "RESTful APIs"],
    github: "https://github.com/rohithsidd1/Brad.ai",
    demo: "https://www.behance.net/gallery/220538585/Bradai",
    image: bradai,
    available: true,
  },
];
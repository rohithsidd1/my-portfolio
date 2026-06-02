export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
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
    image: require(".//../../public/projects/BudgetCaddie.svg"),
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
    image: require(".//../../public/projects/renoteAI.svg"),
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
    image: require(".//../../public/projects/Skipit.svg"),
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
    image: require(".//../../public/projects/substrack.svg"),
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
    image: require(".//../../public/projects/Fynd.svg"),
    available: true,
  },
  {
    id: 5,
    name: "WorkFlow",
    description:
      "WorkFlow is a powerful iOS app designed to streamline productivity and task management of your daily work stream.",
    technologies: ["SwiftUI", "Core Data", "Core Animations"],
    github: "https://github.com/rohithsidd1/WorkFlow",
    demo: "https://www.behance.net/gallery/219262465/WorkFlow",
    image: require(".//../../public/projects/WorkFlow.svg"),
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
    image: require(".//../../public/projects/bradai.svg"),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
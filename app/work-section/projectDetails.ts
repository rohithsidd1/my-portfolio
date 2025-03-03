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

export const devProjects: ProjectProps[] = [
  {
    id: 0,
    name: "SubsTrack",
    description:
      "SubsTrack is a minimalist mobile application designed to track all your subscriptions in one place and optimize your savings.",
    technologies: ["SwiftUI", "MVVM", "User Defaults"],
    github: "https://github.com/rohithsidd1/SubsTrack",
    demo: "https://www.behance.net/gallery/219256307/SubsTrack",
    image: require("../../public/projects/st.png"),
    available: true,
  },
  {
    id: 1,
    name: "NewsSense",
    description:
      "An iOS app that delivers a dynamic and personalized news-reading experience based on the user's location.",
    technologies: ["SwiftUI", "RESTful APIs", "GeoLocation API"],
    github: "https://github.com/rohithsidd1/NewsSense",
    demo: "https://www.behance.net/gallery/219263573/NewsSense",
    image: require("../../public/projects/ns.png"),
    available: true,
  },
  {
    id: 2,
    name: "WorkFlow",
    description:
      "WorkFlow is a powerful iOS app designed to streamline productivity and task management.",
    technologies: ["SwiftUI", "Core Data", "Core Animations"],
    github: "https://github.com/rohithsidd1/WorkFlow",
    demo: "https://www.behance.net/gallery/219262465/WorkFlow",
    image: require("../../public/projects/wf.png"),
    available: true,
  },
  {
    id: 3,
    name: "Fynd!",
    description:
      "An app for discovering events around you and connecting with like-minded people.",
    technologies: ["SwiftUI", "Google APIs", "MapKit"],
    github: "https://github.com/rohithsidd1/Fynd",
    demo: "https://www.behance.net/gallery/219264729/Fynd-For-You",
    image: require("../../public/projects/fy.png"),
    available: true,
  },
  {
    id: 4,
    name: "ReNoteAI",
    description:
      "An AI-powered document scanner with features like OCR, chatbot, cloud integration, and personalized templates.",
    technologies: ["SwiftUI", "Vision", "SSO", "RESTful APIs"],
    github: "https://github.com/rohithsidd1/ReNoteAI",
    demo: "https://www.behance.net/gallery/219266041/ReNoteAI",
    image: require("../../public/projects/re.png"),
    available: true,
  },
  {
    id: 5,
    name: "Match Cards",
    description:
      "A fun and engaging iOS game designed to enhance concentration while providing an enjoyable experience.",
    technologies: ["SwiftUI", "Core Animations", "User Defaults"],
    github: "https://github.com/rohithsidd1/MatchCards",
    demo: "https://www.behance.net/gallery/219263829/MatchCards",
    image: require("../../public/projects/mc.png"),
    available: true,
  },
  {
    id: 6,
    name: "Brad.ai",
    description:
      "An intelligent, multilingual chatbot application designed for seamless interactions across various use cases.",
    technologies: ["SwiftUI", "MVVM", "RESTful APIs"],
    github: "https://github.com/rohithsidd1/brad.ai",
    demo: "https://www.behance.net/gallery/220538585/Bradai",
    image: require("../../public/projects/br.png"),
    available: true,
  },
];

export const designProjects: ProjectProps[] = [
  {
    id: 1,
    name: "Hebron Startup Lab Website",
    description:
      "A convenient and user-friendly tool to quickly and easily check project details.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: require("../../public/projects/hsl.webp"),
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An intuitive website for generating, combining, and downloading custom images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: require("../../public/projects/rags.webp"),
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A branding website that shortens URLs using Bit.ly's API.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: require("../../public/projects/crown.webp"),
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "An app to help users find carpool partners headed in the same direction.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: require("../../public/projects/titi.webp"),
    available: false,
  },
];
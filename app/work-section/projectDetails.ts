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
    name: "SubsTrack",
    description:
      "SubsTrack is a minimalist mobile application designed to track all your Subscriptions in one place and optimize your savings.",
    technologies: ["SwiftUI", "MVVM", "User Defaults"],
    github: "https://github.com/rohithsidd1/SubsTrack",
    demo: "https://www.behance.net/gallery/219256307/SubsTrack",
    image: require(".//../../public/projects/st.png"),
    available: true,
  },
  {
    id: 1,
    name: "NewsSense",
    description:
      "A iOS app that delivers a dynamic and personalized news-reading experience with the user's location.",
    technologies: ["SwiftUI", "RESTful APIs", "GeoLocation API"],
    github: "https://github.com/rohithsidd1/NewsSense",
    demo: "https://www.behance.net/gallery/219263573/NewsSense",
    image: require(".//../../public/projects/ns.png"),
    available: true,
  },
  {
    id: 2,
    name: "WorkFlow",
    description:
      "WorkFlow is a powerful iOS app designed to streamline productivity and task management of your daily work stream.",
    technologies: ["SwiftUI", "Core Data", "Core Animations"],
    github: "https://github.com/rohithsidd1/WorkFlow",
    demo: "https://www.behance.net/gallery/219262465/WorkFlow",
    image: require(".//../../public/projects/wf.png"),
    available: true,
  },
  {
    id: 3,
    name: "Fynd!",
    description:
      "App for everything happening around you, Redefined. Fynd helps not just find a place but also finds you a buddy that shares similar interest.",
    technologies: ["SwiftUI", "Google APIs", "MapKit"],
    github: "https://github.com/rohithsidd1/Fynd",
    demo: "https://www.behance.net/gallery/219264729/Fynd-For-You",
    image: require(".//../../public/projects/fy.png"),
    available: true,
  },
  {
    id: 4,
    name: "ReNoteAI",
    description:
      "ReNoteAI is AI-based Document scanner app with minimal design and all sleek features like OCR, Chatbot, Cloud integrations and Personalized templates.",
    technologies: ["SwiftUI", "Vision", "SSO", "RESTful APIs"],
    github: "https://github.com/rohithsidd1/ReNoteAI",
    demo: "https://www.behance.net/gallery/219266041/ReNoteAI",
    image: require(".//../../public/projects/re.png"),
    available: true,
  },
  {
    id: 5,
    name: "Match Cards",
    description:
      "MatchCards is a fun and engaging iOS game designed to enhance concentration while providing an enjoyable experience.",
    technologies: ["SwiftUI", "Core Animations", "User Defaults"],
    github: "https://github.com/rohithsidd1/MatchCards",
    demo: "https://www.behance.net/gallery/219263829/MatchCards",
    image: require(".//../../public/projects/mc.png"),
    available: true,
  },
  {
    id: 6,
    name: "Brad.ai",
    description:
      "Brad.ai is an intelligent, multilingual chatbot application designed to provide seamless interactions across various use cases.",
    technologies: ["SwiftUI", "MVVM", "RESTful APIs"],
    github: "https://github.com/rohithsidd1/brad.ai",
    demo: "https://www.behance.net/gallery/220538585/Bradai",
    image: require(".//../../public/projects/br.png"),
    available: true,
  },
];

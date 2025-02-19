import { StaticImageData } from "next/image";
import alex from "../../public/14.jpeg";
import jerry from "../../public/13.jpeg";
import mauro from "../../public/12.jpeg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Likhith Undhabatla",
    role: "Application Developer",
    company: "SutiSoft",
    profileImg: alex,
    testimonial:
      "Loved it! The user interface is very simple and I loved the chatbot.",
  },
  {
    name: "Yassen Ali",
    role: "Key Account Manager",
    company: "Zomato",
    profileImg: jerry,
    testimonial:
      "Useful and MultiTasking! Loved the Easy Search Feature and the Smart Templates - Better than other Apps.",
  },
  {
    name: "Ruchi Heer",
    role: "AI/ ML Team Lead",
    company: "WellsFargo",
    profileImg: mauro,
    testimonial:
      "Easy to use with lots of AI solutions! I really loved this app. It is easy to use and provide solutions of our everyday problems.",
  },
];

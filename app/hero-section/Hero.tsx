import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { bodyAnimation } from "../animations/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCode, faAsterisk } from "@fortawesome/free-solid-svg-icons";
import githubIcon from "../../public/github-icon.png"; // Update the path as needed
import linkedinIcon from "../../public/linkedin-icon.png"; // Update the path as needed
import upworkIcon from "../../public/upwork-icon.png"; // Update the path as needed
import behanceIcon from "../../public/behance-icon.png"; // Update the path as needed
import personImage from "../../public/person.png";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex w-full flex-col overflow-hidden bg-[#0E1016] pb-10 pt-32 text-[#e4ded7] sm:pt-28 lg:pt-28"
      id="home"
      initial="initial"
      animate="animate"
    >
      {/* ───────────────────────── HEADER (kept intact) ───────────────────────── */}
      <div className="absolute left-1/2 top-10 z-30 flex w-[90%] -translate-x-1/2 justify-between lg:max-w-[1440px]">
        <div>
          <Link href="#home" aria-label="Rohith Siddanathi — Home">
            <motion.div
              variants={bodyAnimation}
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <span
                aria-hidden
                className="block h-7 w-12 rounded-l-[6px] rounded-r-full bg-[#e4ded7] sm:h-8 sm:w-14"
              />
              <span className="text-[13px] font-medium leading-[1.08] text-[#e4ded7] sm:text-[15px]">
                Rohith
                <br />
                Siddanathi
              </span>
            </motion.div>
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 text-[#e4ded7] sm:gap-6 md:gap-14 lg:gap-14">
          {[
            { icon: githubIcon, url: "https://github.com/rohithsidd1" },
            { icon: linkedinIcon, url: "https://www.linkedin.com/in/rohith-siddanathi-519b63350/" },
            { icon: upworkIcon, url: "https://www.upwork.com/freelancers/~014d1fea38ea69aea9?mp_source=share" },
            { icon: behanceIcon, url: "https://www.behance.net/rohithsiddanathi" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              aria-label={`View ${item.icon} Profile`}
            >
              <motion.div
                className="flex items-center justify-center"
                variants={bodyAnimation}
              >
                <Image
                  src={item.icon}
                  alt={`View ${item.icon} Profile`}
                  className="h-6 w-6 object-contain sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-10 lg:w-10"
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* ───────────────────────── CONTENT ───────────────────────── */}
      <div className="mx-auto w-[90%] shrink-0 lg:max-w-[1440px]">
        {/* Oversized headline — SVG so it always fits on one line and fills the width */}
        <motion.div variants={bodyAnimation} className="w-full">
          <svg
            className="block w-[92%] overflow-visible"
            viewBox="0 2.4 1071 125.7"
            preserveAspectRatio="xMinYMid meet"
            role="img"
            aria-label="Full-Stack Developer"
          >
            <text
              id="heroHeadline"
              x="0"
              y="106"
              className={monaSans.className}
              fill="#e4ded7"
              fontSize="130"
              fontWeight="900"
              style={{ letterSpacing: "1px", textTransform: "uppercase" }}
            >
              Full-Stack Developer
            </text>
          </svg>
        </motion.div>

        {/* Intro row: two paragraph columns + CTA */}
        <motion.div
          variants={bodyAnimation}
          className="mt-2 flex flex-col gap-4 md:mt-3 md:flex-row md:items-start md:justify-between"
        >
          <div className="grid max-w-[900px] grid-cols-1 gap-x-10 gap-y-3 lg:grid-cols-2">
            <p className="text-[13.5px] leading-snug text-[#e4ded7]/80 sm:text-[14px] md:text-[15px]">
              Co-Founder &amp; Full-Stack Developer at{" "}
              <Link
                href="https://www.pacegensolutions.com"
                target="_blank"
                className="underline underline-offset-2 hover:no-underline"
                aria-label="PaceGen"
              >
                PaceGen
              </Link>{" "}
              • Building end-to-end solutions • Ready to code your vision.
            </p>
            <p className="text-[13.5px] leading-snug text-[#e4ded7]/80 sm:text-[14px] md:text-[15px]">
              I write code with the precision of a designer and design with the
              mindset of a developer.
            </p>
          </div>

          <Link
            href="#contact"
            aria-label="Get in touch"
            className="group inline-flex shrink-0 items-center gap-3 self-start whitespace-nowrap text-[15px] font-semibold uppercase tracking-[0.18em] text-[#e4ded7] md:self-end"
          >
            <span className="underline underline-offset-[6px] group-hover:no-underline">
              Get in touch
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-[14px] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>

      {/* ───────────────────────── STAGE (full-bleed to the left edge) ───────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.15, duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="relative mt-6 w-full md:mt-8"
      >
          {/* Cream grid panel — aspect-controlled height (≈2.3:1) so it never letterboxes, bleeds off the left edge */}
          <div
            className="relative h-[max(430px,40vw)] w-[96%] overflow-hidden rounded-l-none rounded-r-[110px] sm:w-[95%] sm:rounded-r-[170px] lg:w-[93%] lg:rounded-r-full"
            style={{
              backgroundColor: "#E9E3D7",
              backgroundImage:
                "linear-gradient(to right, rgba(14,16,22,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,16,22,0.10) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          >
            {/* Person photo (grayscale, anchored to bottom-center) */}
            <Image
              src={personImage}
              alt="Rohith Siddanathi"
              priority
              style={{ filter: "grayscale(1) contrast(1.05)" }}
              className="pointer-events-none absolute bottom-0 left-1/2 h-[98%] w-auto -translate-x-1/2 select-none object-contain"
            />
          </div>

          {/* ───── Skill stickers ───── */}

          {/* Teal circle — System Design (top-left) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.25, duration: 0.4, ease: "easeOut" }}
            className={`${monaSans.className} absolute left-[3%] top-[2%] flex h-[94px] w-[94px] rotate-[3deg] flex-col items-center justify-center rounded-full bg-[#79D0C9] text-center text-[#0E1016] shadow-2xl sm:left-[5%] sm:top-[3%] sm:h-[124px] sm:w-[124px] md:h-[152px] md:w-[152px]`}
          >
            <span className="mb-1 flex gap-1">
              <span className="block h-2 w-2 rounded-full bg-[#0E1016] sm:h-2.5 sm:w-2.5" />
              <span className="block h-2 w-2 rounded-full bg-[#0E1016] sm:h-2.5 sm:w-2.5" />
            </span>
            <span className="text-[13px] font-black uppercase leading-[0.92] sm:text-[16px] md:text-[19px]">
              Swift
              <br />
              SwiftUI
            </span>
            <span className="mt-1 max-w-[82%] text-[6px] font-bold uppercase leading-tight tracking-wide sm:text-[7px] md:text-[8px]">
              UIKit • Combine • StoreKit
            </span>
          </motion.div>

          {/* Yellow sticker — Web experiences (mid-left) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.3, duration: 0.4, ease: "easeOut" }}
            className={`${monaSans.className} absolute left-[1%] top-[42%] hidden -rotate-[9deg] items-center gap-1.5 rounded-md bg-[#F4D03F] px-2.5 py-1.5 text-[#0E1016] shadow-2xl sm:gap-2 sm:px-3.5 sm:py-2 lg:left-[2%] lg:flex`}
          >
            <span className="text-[12px] font-black uppercase leading-none sm:text-[15px] md:text-[18px]">
              Front—End
            </span>
            <span className="rounded-[5px] bg-[#0E1016] px-1.5 py-1 text-[10px] font-black uppercase leading-none text-[#F4D03F] sm:text-[12px] md:text-[14px]">
              TS
            </span>
            <span className="text-[12px] font-black uppercase leading-none sm:text-[15px] md:text-[18px]">
              React
            </span>
          </motion.div>

          {/* Orange sticker — APIs & backend (bottom-left) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.35, duration: 0.4, ease: "easeOut" }}
            className={`${monaSans.className} absolute bottom-[12%] left-[5%] flex max-w-[180px] -rotate-[9deg] items-center gap-2 rounded-lg bg-[#E07B26] px-3 py-2 text-[#0E1016] shadow-2xl sm:left-[7%] sm:max-w-[220px] sm:px-4 sm:py-2.5`}
          >
            <span className="text-[13px] font-black uppercase leading-[0.95] sm:text-[16px] md:text-[19px]">
              Python • FastAPI
              <br />
              REST • OpenAI
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="-rotate-45 text-[14px] sm:text-[18px]"
            />
          </motion.div>

          {/* Pink sticker — Full-stack development (upper-right) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.4, duration: 0.4, ease: "easeOut" }}
            className={`${monaSans.className} absolute right-[7%] top-[4%] w-max max-w-[160px] -rotate-[5deg] rounded-lg bg-[#EC5A8E] px-2.5 py-1.5 text-center text-[#f7eee9] shadow-2xl sm:right-[8%] sm:max-w-[210px] sm:px-3.5 sm:py-2.5 lg:right-[27%] lg:top-[11%] lg:max-w-[250px] lg:px-5 lg:py-3`}
          >
            <span className="text-[11px] font-black uppercase leading-[0.95] sm:text-[14px] lg:text-[24px]">
              AR &amp;
              <br />
              Spatial
              <br />
              Computing
              <sup className="text-[9px] sm:text-[12px]">©</sup>
            </span>
          </motion.div>

          {/* Cyan tag — Cloud & DevOps (right) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.45, duration: 0.4, ease: "easeOut" }}
            className={`${monaSans.className} absolute right-[1%] top-[34%] hidden rotate-[12deg] items-start gap-1.5 rounded-md bg-[#5FCFD6] px-3 py-2 text-[#0E1016] shadow-2xl sm:px-4 sm:py-2.5 lg:right-[4%] lg:flex`}
          >
            <span className="text-[13px] font-black uppercase leading-[0.95] sm:text-[16px] md:text-[19px]">
              Cloud &amp; Data
              <br />
              <span className="text-[10px] sm:text-[12px]">AWS • Firebase</span>
            </span>
            <FontAwesomeIcon icon={faAsterisk} className="text-[10px] sm:text-[12px]" />
          </motion.div>

          {/* Green circle — Clean code (bottom-right, circular text) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 0.4, ease: "easeOut" }}
            className="absolute bottom-[6%] right-[6%] h-[104px] w-[104px] sm:bottom-[7%] sm:right-[11%] sm:h-[128px] sm:w-[128px] md:h-[146px] md:w-[146px] lg:bottom-[14%] lg:right-[21%]"
          >
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <path
                  id="cleanCodePath"
                  d="M 50,50 m -39,0 a 39,39 0 1,1 78,0 a 39,39 0 1,1 -78,0"
                  fill="none"
                />
              </defs>
              <circle cx="50" cy="50" r="50" fill="#A4D94B" />
              <text
                className={monaSans.className}
                fill="#0E1016"
                fontSize="9.8"
                fontWeight="900"
                letterSpacing="1.1"
                style={{ textTransform: "uppercase" }}
              >
                <textPath href="#cleanCodePath" startOffset="0">
                  {"MVVM • CLEAN ARCH • SOLID • DI • "}
                </textPath>
              </text>
            </svg>
            <span className="absolute left-1/2 top-1/2 flex h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0E1016] text-[#A4D94B]">
              <FontAwesomeIcon icon={faCode} className="text-[16px] sm:text-[20px] md:text-[24px]" />
            </span>
          </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import bookCallIcon from "../../public/icon.svg"; // Update the path as needed
import githubIcon from "../../public/github-icon.png"; // Update the path as needed
import linkedinIcon from "../../public/linkedin-icon.png"; // Update the path as needed
import upworkIcon from "../../public/upwork-icon.png"; // Update the path as needed
import behanceIcon from "../../public/behance-icon.png"; // Update the path as needed

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover bg-center py-0 sm:h-[90vh] md:h-[100vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      {/* Overlay without mix-blend-color */}
      <motion.div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[#0E1016] opacity-50"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="https://www.linkedin.com/in/rohith-siddanathi-519b63350/"
            target="_blank"
            aria-label="BOOK A CALL"
          >
            <motion.div
              variants={bodyAnimation}
              className="hidden sm:block lg:block"
            >
              <Image
                src={bookCallIcon}
                alt="Book a Call"
                className="w-[120px] cursor-pointer sm:w-[140px] md:w-[160px] lg:w-[180px]"
              />
            </motion.div>
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
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
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 object-contain"
        />
      </motion.div>
    </Link>
  ))}
</div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          <AnimatedWords
            title="ROHITH SIDDANATHI"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />

          <motion.div
            className="absolute bottom-[-110px] mx-auto text-center sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-80px]"
            variants={imageAnimation}
          >
            {[
              "Designing Experiences, Not Just Interfaces",
              "Elevating Simplicity into Sophistication.",
            ].map((text, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.8 + index * 0.2,
                }}
                className="block text-lg font-semibold text-[#e4ded7] sm:text-xl md:text-3xl"
              >
                {text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-10 flex items-center justify-center md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between">
        <motion.div
          className="max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Co-Founder & Designer at{" "}
            <Link
              href="https://www.pacegensolutions.com"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
              aria-label="PaceGen"
            >
              PaceGen
            </Link>
            {" "}• Crafting digital experiences • Open for exciting projects.
          </p>
        </motion.div>

        <motion.div
          className="hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            I write code with the precision of a designer and design with the
            mindset of a developer.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
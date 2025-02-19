import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import Spline from "@splinetool/react-spline"; // Direct import of Spline
import profile from "../../public/profile.webp";
import bookCallIcon from "../../public/icon.svg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [showSpline, setShowSpline] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Introduce a small delay before showing the Spline model
    const splineTimeout = setTimeout(() => setShowSpline(true), 1200);

    return () => clearTimeout(splineTimeout);
  }, []);

  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center py-0 sm:h-[90vh] md:h-[100vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      {/* Conditionally render either the Spline 3D Model or a static background */}
      {showSpline ? (
        <Spline
          scene="https://prod.spline.design/mhmxwYe0OiTioGGE/scene.splinecode"
          className="absolute inset-0 z-0 h-full w-full"
          onLoad={() => setIsSplineLoaded(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0E1016]">
          <p className="text-[#e4ded7]">Loading 3D Model...</p>
        </div>
      )}
      {/* White Box at Bottom-Right */}
      <div className="absolute bottom-5 right-5 h-12 w-36 bg-[#090A0F]"></div>
      {/* Overlay to enhance text readability */}
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] opacity-40"></motion.div>

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
                className="w-[120px] cursor-pointer"
              />
            </motion.div>
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          {[
            { label: "GH", url: "https://github.com/rohithsidd1" },
            {
              label: "LN",
              url: "https://www.linkedin.com/in/rohith-siddanathi-519b63350",
            },
            {
              label: "UW",
              url: "https://www.upwork.com/freelancers/~014d1fea38ea69aea9?mp_source=share",
            },
            { label: "BE", url: "https://www.behance.net/rohithsiddanathi" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              aria-label={`View ${item.label} Profile`}
            >
              <motion.p
                className="text-[16px] font-bold text-[#e4ded7]"
                variants={bodyAnimation}
              >
                {item.label}
              </motion.p>
            </Link>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-20 lg:-mt-2 lg:py-40">
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
            iOS Mobile Application Developer and Designer, at{" "}
            <Link
              href="https://www.renote.ai/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
              aria-label="ReNoteAI Website"
            >
              ReNoteAI,
            </Link>{" "}
            currently available for work.
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

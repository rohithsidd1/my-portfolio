import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <motion.section
      className="flex min-h-[16vh] w-full flex-col items-center justify-center border-t-[3px] border-[#e4ded7]/30 bg-[#0E1016] px-6 pb-32 pt-12 text-center font-bold uppercase sm:block sm:h-[15vh] sm:min-h-0 sm:px-0 sm:pb-0 sm:pt-10 md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0"
      initial="initial"
      animate="animate"
    >
      <motion.div className="mx-auto flex w-full flex-col items-center justify-center gap-1.5 text-center text-[12px] text-[#e4ded7] sm:w-[90%] sm:flex-row sm:justify-between sm:gap-0 sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
        <AnimatedBody text={``} className={"m-0 hidden p-0 sm:block"} />
        <div className="flex flex-col items-center justify-center gap-0.5 sm:flex-row sm:items-start sm:gap-1 md:gap-2">
          <AnimatedBody
            text={"Design & Development by"}
            className={"m-0 p-0"}
          />
          <Link
            href="https://github.com/rohithsidd1"
            target="_blank"
            aria-label="Rohith's GitHub Profile"
          >
            <span className="underline underline-offset-2 hover:no-underline">
              <AnimatedBody text={"Rohith Siddanathi"} className={"m-0 p-0"} />
            </span>{" "}
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;

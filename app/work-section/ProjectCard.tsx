import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { monaSans } from "../fonts/monaSans";
import { ProjectProps } from "./projectDetails";

type ProjectCardProps = ProjectProps & { index: number };

const ProjectCard = ({
  index,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectCardProps) => {
  const num = String(index + 1).padStart(2, "0");
  const href = demo || github || "#";

  return (
    <div
      className="sticky px-1"
      style={{ top: `calc(6.5rem + ${index * 0.9}rem)` }}
    >
      <div className="flex flex-col overflow-hidden rounded-[20px] bg-[#E9E3D7] text-[#0E1016] shadow-2xl sm:rounded-[28px] md:flex-row md:items-stretch md:rounded-[40px]">
        {/* ── Text ── */}
        <div className="flex flex-1 flex-col justify-center p-7 sm:p-9 md:p-12 lg:p-16 [@media(max-height:600px)]:p-6">
          {/* number badge */}
          <div className="flex h-9 w-[60px] items-center justify-center rounded-full border border-[#0E1016]/30 text-[13px] font-semibold sm:h-11 sm:w-[72px] sm:text-[15px] md:h-12 md:w-20 md:text-[16px]">
            {num}
          </div>

          {/* meta */}
          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-[#0E1016]/65 sm:mt-7 sm:text-[12px] md:mt-9 md:text-[13px]">
            {technologies.join(" • ")}
          </p>

          {/* title */}
          <h3
            className={`${monaSans.className} mt-1.5 text-[32px] font-black uppercase leading-[0.95] tracking-[-0.01em] sm:mt-2 sm:text-[44px] sm:leading-[0.92] md:text-[58px] lg:text-[68px] [@media(max-height:600px)]:text-[36px]`}
          >
            {name}
          </h3>

          {/* description */}
          <p className="mt-4 max-w-[440px] text-[14px] leading-relaxed text-[#0E1016]/75 sm:mt-4 sm:text-[15px] md:text-[16px]">
            {description}
          </p>

          {/* CTA */}
          <Link
            href={href}
            target="_blank"
            aria-label={`View ${name} case study`}
            className="group mt-7 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#0E1016]/40 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-[#0E1016] hover:text-[#E9E3D7] sm:mt-8 sm:gap-3 sm:px-6 sm:py-3 sm:text-[12px] md:mt-10 md:px-7 md:py-3.5 md:text-[13px]"
            data-blobity-magnetic="false"
          >
            {available ? "View Project" : "Coming Soon"}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-[12px] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* ── Image (first on mobile, right on desktop) ── */}
        <div className="relative order-first m-3.5 aspect-[16/10] overflow-hidden rounded-[14px] bg-[#0E1016] sm:m-4 md:order-none md:m-5 md:aspect-auto md:h-auto md:w-[46%] md:rounded-[28px]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 46vw"
            className="object-cover"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

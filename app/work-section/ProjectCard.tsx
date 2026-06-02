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
      <div className="flex flex-col overflow-hidden rounded-[28px] bg-[#E9E3D7] text-[#0E1016] shadow-2xl md:flex-row md:items-stretch md:rounded-[40px]">
        {/* ── Left: text ── */}
        <div className="flex flex-1 flex-col justify-center p-7 sm:p-10 md:p-12 lg:p-16">
          {/* number badge */}
          <div className="flex h-11 w-[72px] items-center justify-center rounded-full border border-[#0E1016]/30 text-[15px] font-semibold md:h-12 md:w-20 md:text-[16px]">
            {num}
          </div>

          {/* meta */}
          <p className="mt-7 text-[12px] font-medium uppercase tracking-[0.16em] text-[#0E1016]/65 md:mt-9 md:text-[13px]">
            {technologies.join(" • ")}
          </p>

          {/* title */}
          <h3
            className={`${monaSans.className} mt-2 text-[44px] font-black uppercase leading-[0.92] tracking-[-0.01em] md:text-[58px] lg:text-[68px]`}
          >
            {name}
          </h3>

          {/* description */}
          <p className="mt-4 max-w-[440px] text-[15px] leading-relaxed text-[#0E1016]/75 md:text-[16px]">
            {description}
          </p>

          {/* CTA */}
          <Link
            href={href}
            target="_blank"
            aria-label={`View ${name} case study`}
            className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-[#0E1016]/40 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-[#0E1016] hover:text-[#E9E3D7] md:mt-10 md:px-7 md:py-3.5 md:text-[13px]"
            data-blobity-magnetic="false"
          >
            {available ? "View Project" : "Coming Soon"}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-[12px] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* ── Right: image ── */}
        <div className="relative m-4 h-[260px] overflow-hidden rounded-[20px] bg-[#0E1016] sm:h-[340px] md:m-5 md:h-auto md:w-[46%] md:rounded-[28px]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 90vw, 46vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import SongCard from "./SongCard";
import { songs, SongProps } from "./songDetails";
import "../animations/animate.css";

const renderHalf = (hidden: boolean) => (
  <div
    aria-hidden={hidden || undefined}
    className="flex shrink-0 items-center gap-4 pr-4 md:gap-5 md:pr-5"
  >
    {songs.map((song: SongProps, index) => (
      <SongCard
        key={index}
        title={song.title}
        artist={song.artist}
        image={song.image}
        link={song.link}
      />
    ))}
  </div>
);

const SongCarousel = () => {
  return (
    <div className="relative h-[170px] w-full overflow-hidden sm:h-[175px] md:h-[200px] lg:h-[240px]">
      <div className="animate-marquee flex h-full w-max items-center">
        {renderHalf(false)}
        {renderHalf(true)}
      </div>
    </div>
  );
};

export default SongCarousel;

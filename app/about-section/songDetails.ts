export type SongProps = {
  title: string;
  artist: string;
  image: string;
  link: string;
};

export const songs = [
  {
    title: "After Hours",
    artist: "The Weeknd",
    image: require("../../public/songs/1.jpg"),
    link: "https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj",
  },
  {
    title: "Dawn FM",
    artist: "The Weeknd",
    image: require("../../public/songs/2.jpg"),
    link: "https://open.spotify.com/album/2nLOHgzXzwFEpl62zAgCEC",
  },
  {
    title: "Starboy",
    artist: "The Weeknd",
    image: require("../../public/songs/3.jpg"),
    link: "https://open.spotify.com/album/2ODvWsOgouMbaA5xf0RkJe",
  },
  {
    title: "My Dear Melancholy,",
    artist: "The Weeknd",
    image: require("../../public/songs/4.jpg"),
    link: "https://open.spotify.com/album/4qZBW3f2Q8y0k1A84d4iAO?si=wYp7yjvTTz61TcMnOeph3A",
  },
  {
    title: "Trilogy",
    artist: "The Weeknd",
    image: require("../../public/songs/5.jpg"),
    link: "https://open.spotify.com/album/5EbpxRwbbpCJUepbqVTZ1U?si=IpB4roRdSqa3IW6zSuYdgQ",
  },
  {
    title: "Born to Die",
    artist: "Lana Del Rey",
    image: require("../../public/songs/6.jpg"),
    link: "https://open.spotify.com/album/5VoeRuTrGhTbKelUfwymwu?si=4lThguGMRSel305euDUsLw",
  },
  {
    title: "Ultraviolence",
    artist: "Lana Del Rey",
    image: require("../../public/songs/7.jpg"),
    link: "https://open.spotify.com/album/1ORxRsK3MrSLvh7VQTF01F?si=wkljgnptS0iqABY95O-uNA",
  },
  {
    title: "Lust for Life",
    artist: "Lana Del Rey",
    image: require("../../public/songs/8.jpg"),
    link: "https://open.spotify.com/album/7xYiTrbTL57QO0bb4hXIKo?si=bhTHoWGaTWOJeDEZRbn6Fw",
  },
  {
    title: "HURRY UP TOMORROW",
    artist: "The Weeknd",
    image: require("../../public/songs/9.jpg"), // Placeholder for an imagined album cover
    link: "https://open.spotify.com/album/3OxfaVgvTxUTy7276t7SPU?si=1rJUONwhSgW1dgd0M0iutA", // No official link since it's fictional
  },
  {
    title: "My Beautiful Dark Twisted Fantasy",
    artist: "Kanye West",
    image: require("../../public/songs/10.jpg"),
    link: "https://open.spotify.com/album/20r762YmB5HeofjMCiPMLv",
  },
];
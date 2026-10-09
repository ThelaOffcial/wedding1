export const wedding = {
  bride: "Nethmi",
  groom: "Kavindu",
  date: "2027-02-14T09:30:00+05:30",
  dateLabel: "14th February 2027",
  dayLabel: "Sunday",
  venue: "Cinnamon Grand Colombo",
  hall: "Crystal Ballroom",
  address: "77 Galle Road, Colombo 03, Sri Lanka",
  mapQuery: "Cinnamon Grand Colombo",
  music: process.env.NEXT_PUBLIC_MUSIC_URL || "/music.mp3",
};

export const events = [
  {
    icon: "poruwa",
    title: "Poruwa Ceremony",
    date: "Sunday, 14th February 2027",
    time: "9:30 AM",
    place: "Crystal Ballroom, Cinnamon Grand Colombo",
    note: "The auspicious hour, as the families bless the union.",
  },
  {
    icon: "reception",
    title: "Wedding Reception",
    date: "Sunday, 14th February 2027",
    time: "6:30 PM",
    place: "Crystal Ballroom, Cinnamon Grand Colombo",
    note: "An evening of dinner, music and dancing.",
  },
  {
    icon: "homecoming",
    title: "Homecoming",
    date: "Saturday, 20th February 2027",
    time: "6:00 PM",
    place: "The groom's family home",
    note: "A warm welcome for the bride into her new home.",
  },
];

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroImage = u("photo-1519741497674-611481863552", 2000);

export const photos = [
  { src: u("photo-1511285560929-80b456fea0bc"), alt: "Couple holding hands", ratio: "aspect-[3/4]" },
  { src: u("photo-1606800052052-a08af7148866"), alt: "Wedding rings and flowers", ratio: "aspect-square" },
  { src: u("photo-1465495976277-4387d4b0b4c6"), alt: "Bride with bouquet", ratio: "aspect-[4/5]" },
  { src: u("photo-1522673607200-164d1b6ce486"), alt: "Couple walking together", ratio: "aspect-[4/3]" },
  { src: u("photo-1583939003579-730e3918a45a"), alt: "Floral arrangement", ratio: "aspect-[3/4]" },
  { src: u("photo-1469371670807-013ccf25f16a"), alt: "Wedding celebration", ratio: "aspect-square" },
];

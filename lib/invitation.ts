export type ScheduleIcon = "car" | "rings" | "camera" | "glasses";

export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
  icon: ScheduleIcon;
};

export type MapPin = {
  id: string;
  label: string;
  href: string;
  ariaLabel: string;
  icon: "pin" | "utensils";
  top: string;
  left: string;
};

export const INVITATION = {
  couple: {
    groom: "Արթուր",
    bride: "Դիանա",
    conjunction: "եւ",
    combined: "Արթուր և Դիանա",
  },

  eventDateISO: "2026-10-18T13:00:00+04:00",

  hero: {
    kicker: "Մեր հարսանյաց օրը",
    date: "18 հոկտեմբերի 2026",
    place: "Սաղմոսավանք",
    closing: "Մեր սերը հավերժ է",
    image: {
      src: "/images/hero.jpg",
      alt: "Սաղմոսավանքի վանական համալիրը երեկոյան լույսի ներքո",
    },
  },

  schedule: {
    title: "Օրվա ծրագիր",
    items: [
      {
        time: "13:00",
        title: "Հանդիպում Սաղմոսավանքում",
        description: "Հավաքվում ենք Սաղմոսավանքի մոտ",
        icon: "car",
      },
      {
        time: "13:20",
        title: "Պսակադրություն",
        description: "Սուրբ պսակ և աղոթք Սաղմոսավանքի եկեղեցում",
        icon: "rings",
      },
      {
        time: "14:00",
        title: "Լուսանկարչություն",
        description: "Հիշարժան լուսանկարների համար",
        icon: "camera",
      },
      {
        time: "15:00",
        title: "Ֆուրշետ Սաղմոսավանք Garden-ում",
        description:
          "Սպասում ենք ձեզ մի օր լի երգով, խնդությամբ և լավ ընկերության միջոցով",
        icon: "glasses",
      },
    ] satisfies ScheduleItem[],
  },

  venue: {
    title: "Վայր",
    name: "Սաղմոսավանք",
    region: "Աշտարակ, Հայաստան",
    openMapLabel: "Բացել քարտեզում",
    openMapUrl:
      "https://www.google.com/maps/search/?api=1&query=40.380536,44.396672",
    pins: [
      {
        id: "monastery",
        label: "Սաղմոսավանք",
        href: "https://www.google.com/maps/search/?api=1&query=40.380536,44.396672",
        ariaLabel: "Բացել Սաղմոսավանքի քարտեզը",
        icon: "pin",
        top: "34%",
        left: "58%",
      },
      {
        id: "garden",
        label: "Սաղմոսավանք\nGarden",
        href: "https://yandex.com/maps/org/saghmosavan_garden/82933691801/",
        ariaLabel: "Բացել Սաղմոսավանք Garden-ի քարտեզը",
        icon: "utensils",
        top: "62%",
        left: "28%",
      },
    ] satisfies MapPin[],
  },

  farewell: {
    message: "Սիրով սպասում ենք Ձեզ",
    names: "Արթուր և Դիանա",
    image: {
      src: "/images/farewell.jpg",
      alt: "Արևամուտ Արագածի և Կասաղի կիրճի վրա",
    },
  },
} as const;

export type Invitation = typeof INVITATION;

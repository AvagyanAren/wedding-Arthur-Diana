export type ScheduleIcon = "car" | "rings" | "camera" | "glasses";

export type ScheduleItem = {
  time: string;
  title: string;
  icon: ScheduleIcon;
};

export const INVITATION = {
  couple: {
    groom: "Արթուր",
    bride: "Դիանա",
    conjunction: "եւ",
    combined: "Արթուր և Դիանա",
  },

  eventDateISO: "2026-10-18T13:00:00+04:00",

  countdown: {
    days: "օր",
    hours: "ժամ",
    minutes: "րոպե",
    seconds: "վրկ",
    ariaLabel: "Մնացած ժամանակը մինչև հարսանիքը՝ 18 հոկտեմբերի 2026, ժամը 13:00",
  },

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
        icon: "car",
      },
      {
        time: "13:20",
        title: "Պսակադրություն",
        icon: "rings",
      },
      {
        time: "14:00",
        title: "Լուսանկարահանում",
        icon: "camera",
      },
      {
        time: "15:00",
        title: "Ֆուրշետ Սաղմոսավանք Garden-ում",
        icon: "glasses",
      },
    ] satisfies ScheduleItem[],
  },

  venue: {
    title: "Վայր",
    name: "Սաղմոսավանք",
    region: "Աշտարակ, Հայաստան",
    openMapLabel: "Բացել քարտեզում",
    openMapUrl: "https://yandex.com/maps/-/CXAxNO0V",
    mapImage: {
      src: "/images/venue-map.png",
      alt: "Սաղմոսավանքի քարտեզ՝ վանքի նշումով",
    },
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

import * as ConfigType from "@/types/config";
import EarIcon from "@/components/shared/icons/EarIcon";
import SpeechIcon from "@/components/shared/icons/SpeechIcon";
import ImmigrantIcon from "@/components/shared/icons/ImmigrantIcon";
import PeopleIcon from "@/components/shared/icons/PeopleIcon";
import DeafIcon from "@/components/shared/icons/DeafIcon";
import BrainIcon from "@/components/shared/icons/BrainIcon";

export const carouselConfig: ConfigType.CarouselConfigType[] = [
  {
    id: 1,
    title1: "Empowering customers",
    title2: "Bridging Communication Barriers",
    image: "url(assets/images/banners/header-1.jpg)",
  },
  {
    id: 2,
    title1: "Inclusive and innovative",
    title2: "Accessible Solutions for Customers",
    image: "url(assets/images/banners/header-2.jpg)",
  },
  {
    id: 3,
    title1: "Upgrading Infrastructure",
    title2: "Automating Retails",
    image: "url(assets/images/banners/header-3.jpg)",
  },
];

export const counterAnalytics: ConfigType.CounterConfigType[] = [
  {
    id: 1,
    title: "Hard of hearing in the US",
    icon: EarIcon,
    count: 26000000,
  },
  {
    id: 2,
    title: "Speech impaired in the US",
    icon: SpeechIcon,
    count: 68000000,
  },
  {
    id: 3,
    title: "Immigration rates in the US",
    icon: ImmigrantIcon,
    count: 45000000,
  },
  {
    id: 4,
    title: "Tourism rates in the US",
    icon: PeopleIcon,
    count: 45000000,
  },
  {
    id: 5,
    title: "Deaf people in the US",
    icon: DeafIcon,
    count: 2000000,
  },
  {
    id: 6,
    title: "ESL people in the US",
    icon: BrainIcon,
    count: 2000000,
  },
];

export const aboutConfig: ConfigType.AboutConfigType = {
  image: "/assets/images/landing/drive-thru-1.jpg",
  title: "An automated Drive-Thru experience with real-time translation capabilities",
  description: "Drivingo is the world's first speech-independent gesture recognition technology for restaurant and drive thru services. We are an automated drive-thru service that recognizes speech, gesture and touch input. We put an end to the frustration felt at restaurants due to language, speaking, or hearing difficulties, but removing the middleman. By doing so, we drive down costs and help businesses imporve their bottom line.",
  points: [
    "Revolutionary ML technology",
    "Cost-Effective Solutions",
    "Improved Customer Experience",
    "Empowering Businesses",
  ],
};

export const serviceConfig: ConfigType.ServiceConfigType[] = [
  {
    id: 1,
    title: "Bridging communication barriers",
    content: "Leverage machine learning to automate ordering by recognizing and interpret sign language-based gestures anc voice input, enabling EVERYONE to communicate effectively at drive-through restaurants, fast food chains, and walk-up counters through an intuitive user experience.",
    link: "/service",
    description: "",
  },
  {
    id: 2,
    title: "A better way for everyone",
    content: "With Drivingo, we make drive-thru and fast-food restaurants more accessible and seamless for everyone. We enthusiastically believe that nobody should be left out or struggle to get a quick meal, and we want to work closely with restaurant owners to make it happen.",
    link: "/service",
    description: "",
  },
  {
    id: 3,
    title: "Making Life Easier for Everyone",
    content: "Communication is a two-way street, and both customers and employees can feel uncomfortable during struggles with verbal communication. We want to work with restaurants to ease tensions on both sides of the speaker or counter, keeping employees satisfied, customers coming back and engage drive new customer engagement.",
    link: "/service",
    description: "",
  },
];

export const teamConfig: ConfigType.TeamConfigType[] = [
  {
    id: 1,
    name: "Levern Currie",
    designation: "Chief Executive Officer",
    photo: "/assets/images/team/levern.jpg",
    description: "Levern is quisque feugiat id nisl at pellentesque. Curabitur viverra luctus facilisis. Sed semper orci ligula, ut tristique orci pellentesque sed. Aliquam molestie quis tortor at finibus. Morbi faucibus, lacus vel placerat tempus, ante nulla cursus diam, nec aliquet sem diam vel magna. Etiam quis lacinia odio, non condimentum lorem. Aenean accumsan risus sit amet malesuada consectetur. Vestibulum accumsan elit et tincidunt rhoncus. Praesent ac ex nec lorem efficitur aliquam eget vel est.",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Ben Butler",
    designation: "Operations Officer",
    photo: "/assets/images/team/ben.jpg",
    description: "Ben is quisque feugiat id nisl at pellentesque. Curabitur viverra luctus facilisis. Sed semper orci ligula, ut tristique orci pellentesque sed. Aliquam molestie quis tortor at finibus. Morbi faucibus, lacus vel placerat tempus, ante nulla cursus diam, nec aliquet sem diam vel magna. Etiam quis lacinia odio, non condimentum lorem. Aenean accumsan risus sit amet malesuada consectetur. Vestibulum accumsan elit et tincidunt rhoncus. Praesent ac ex nec lorem efficitur aliquam eget vel est.",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Morgan Mastrangelo",
    designation: "Lead Developer",
    photo: "/assets/images/team/morgan.jpg",
    description: "Morgan is quisque feugiat id nisl at pellentesque. Curabitur viverra luctus facilisis. Sed semper orci ligula, ut tristique orci pellentesque sed. Aliquam molestie quis tortor at finibus. Morbi faucibus, lacus vel placerat tempus, ante nulla cursus diam, nec aliquet sem diam vel magna. Etiam quis lacinia odio, non condimentum lorem. Aenean accumsan risus sit amet malesuada consectetur. Vestibulum accumsan elit et tincidunt rhoncus. Praesent ac ex nec lorem efficitur aliquam eget vel est.",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Naveena Deva",
    designation: "Marketing Coordinator",
    photo: "/assets/images/team/naveena.jpg",
    description: "Naveena is quisque feugiat id nisl at pellentesque. Curabitur viverra luctus facilisis. Sed semper orci ligula, ut tristique orci pellentesque sed. Aliquam molestie quis tortor at finibus. Morbi faucibus, lacus vel placerat tempus, ante nulla cursus diam, nec aliquet sem diam vel magna. Etiam quis lacinia odio, non condimentum lorem. Aenean accumsan risus sit amet malesuada consectetur. Vestibulum accumsan elit et tincidunt rhoncus. Praesent ac ex nec lorem efficitur aliquam eget vel est.",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Max Gottlieb",
    designation: "Financial Advisor",
    photo: "/assets/images/team/max.jpg",
    description: "Max is quisque feugiat id nisl at pellentesque. Curabitur viverra luctus facilisis. Sed semper orci ligula, ut tristique orci pellentesque sed. Aliquam molestie quis tortor at finibus. Morbi faucibus, lacus vel placerat tempus, ante nulla cursus diam, nec aliquet sem diam vel magna. Etiam quis lacinia odio, non condimentum lorem. Aenean accumsan risus sit amet malesuada consectetur. Vestibulum accumsan elit et tincidunt rhoncus. Praesent ac ex nec lorem efficitur aliquam eget vel est.",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 6,
    name: "Raheel Malik",
    designation: "Marketing Advisor",
    photo: "/assets/images/team/raheel.jpg",
    description: "Raheel is quisque feugiat id nisl at pellentesque. Curabitur viverra luctus facilisis. Sed semper orci ligula, ut tristique orci pellentesque sed. Aliquam molestie quis tortor at finibus. Morbi faucibus, lacus vel placerat tempus, ante nulla cursus diam, nec aliquet sem diam vel magna. Etiam quis lacinia odio, non condimentum lorem. Aenean accumsan risus sit amet malesuada consectetur. Vestibulum accumsan elit et tincidunt rhoncus. Praesent ac ex nec lorem efficitur aliquam eget vel est.",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
];

export const vendorConfig: string[] = [
  "/assets/images/vendors/apexcenter.png",
  "/assets/images/vendors/bluepeople.png",
  "/assets/images/vendors/codelaunch.png",
  "/assets/images/vendors/creedon.png",
  "/assets/images/vendors/dairyqueen.png",
  "/assets/images/vendors/henry.png",
  "/assets/images/vendors/mitchell.png",
  "/assets/images/vendors/streamllc.png",
  "/assets/images/vendors/wepan.png",
  "/assets/images/vendors/apexcenter.png",
  "/assets/images/vendors/bluepeople.png",
  "/assets/images/vendors/codelaunch.png",
  "/assets/images/vendors/creedon.png",
  "/assets/images/vendors/dairyqueen.png",
  "/assets/images/vendors/henry.png",
  "/assets/images/vendors/mitchell.png",
  "/assets/images/vendors/streamllc.png",
  "/assets/images/vendors/wepan.png",
];

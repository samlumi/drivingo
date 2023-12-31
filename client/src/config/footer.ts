import LocationIcon from "@/components/shared/icons/LocationIcon";
import MailIcon from "@/components/shared/icons/MailIcon";
import PhoneIcon from "@/components/shared/icons/PhoneIcon";
import { FooterConfigType } from "@/types/config";

export const footerMenu: FooterConfigType = {
  summary: {
    logo: "/assets/images/logo-orange.png",
    content: "Drivingo provides a machine learning based ordering system that replicates a natural and smart, reliable ordering experience for drive-thru menus.",
  },
  links: {
    title: "QUICK LINKS",
    items: [
      {
        id: 1,
        title: "Home",
        link: "/",
      },
      {
        id: 2,
        title: "About us",
        link: "/about",
      },
      {
        id: 3,
        title: "Blog",
        link: "/blog",
      },
      {
        id: 4,
        title: "Service",
        link: "/service",
      },
      {
        id: 5,
        title: "Product",
        link: "/product",
      },
    ],
  },
  services: {
    title: "SERVICES",
    items: [
      {
        id: 1,
        title: "Drive Thru System",
        link: "/service",
      },
      {
        id: 2,
        title: "Ordering Kiosk",
        link: "/service",
      },
      {
        id: 3,
        title: "Package",
        link: "/service",
      },
    ],
  },
  contact: {
    title: "CONTACT",
    info: {
      mail: {
        content: "info@drivingoinc.com",
        icon: MailIcon,
        link: "mailto:info@drivingoinc.com",
      },
      phone: {
        content: "+1 (234) 567 8901",
        icon: PhoneIcon,
        link: "tel:+12345678901",
      },
      location: {
        content: "Blacksburg, Virginia, United States",
        icon: LocationIcon,
        link: "/",
      },
    },
    social: {
      twitter: {
        logo: "/assets/images/social-media/twitter.png",
        link: "https://twitter.com",
      },
      instagram: {
        logo: "/assets/images/social-media/instagram.png",
        link: "https://instagram.com",
      },
      tiktok: {
        logo: "/assets/images/social-media/tiktok.png",
        link: "https://tiktok.com",
      },
      linkedin: {
        logo: "/assets/images/social-media/linkedin.png",
        link: "https://linkedin.com",
      },
    },
  },
};

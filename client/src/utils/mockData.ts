import {BlogConfigType, CustomerConfigType} from "@/types/config";
import {BLOG_TOPICS, DESCRIPTION_STATUS} from "./enums";

export const customers: CustomerConfigType[] = [
  {
    id: 1,
    name: "Juliet",
    designation: "Tourist",
    avatar: "/assets/images/customers/male-01.jpg",
    comment: "Juliet, a first-time visitor from France, wants to grab a quick bite at a local QSR after a long day of sightseeing. She hesitates because she's not sure if she'll be able to communicate her allergy to pickles. She is a tourist visiting from France who wants a quick bite to eat at a familiar quick-service restaurant (QSR). However, she is worried about the communication barrier, which could lead to her being exposed to pickles, to which she is deathly allergic."
  },
  {
    id: 2,
    name: "Ray",
    designation: "Immigrant",
    avatar: "/assets/images/customers/male-02.jpg",
    comment: "Ray recently immigrated with his family to the United States from the Philippines and is excited to try everything America has to offer, including its Quick Service Restaurants (QSRs). However, he struggles to communicate effectively with employees due to the language barrier. He would love to provide his family with a delicious and convenient meal, but he often struggles to order what he wants due to the language barrier. Frustrated, he has given up on quick-service restaurants and instead cooks at home."
  },
  {
    id: 3,
    name: "Sally",
    designation: "ASL Speaker",
    avatar: "/assets/images/customers/male-03.jpg",
    comment: "Sally, who is deaf and uses sign language to communicate, stopped going to quick service restaurants after experiencing abuse at a drive-thru. She decided to give the industry one more chance after hearing about a local business that offers free translation services to customers. When a local business partnered with Drivingo, Sally decided to give the QSR Industry one last chance."
  },
  {
    id: 4,
    name: "Jane",
    designation: "Fast Food Manager",
    avatar: "/assets/images/customers/male-04.jpg",
    comment: "Jane is the manager of a busy QSR. Recently, her District Manager has asked her to reduce her labor costs. However, the busy location gives employees burnout, which leads to a high turnover rate. As a QSR manager, Jane faces high overtime costs due to lack of employee downtime during shifts. The busy location leads to burnout and high turnover. She needs a solution to free up her employees' time and reduce labor costs."
  },
  {
    id: 5,
    name: "Rick",
    designation: "Franchise Owner",
    avatar: "/assets/images/customers/male-05.jpg",
    comment: "Rick, a 40-year-old entrepreneur, owns 10 Dairy Queens and aims to expand his business by acquiring more franchises. However, understaffing has caused significant financial losses, and he's looking for an immediate solution. And Rick solved massive understaffing problems in his business with Drivingo. He improved order accuracy, customer satisfaction, and retention by  automating and offering real-time translation services at all his franchises. Subsequently, he was able to expand his business."
  }
];

export const blogs: BlogConfigType[] = [
  {
    id: 1,
    title: "The Drive-Thru Revolution: Making Fast Food Accessible to All",
    topic: BLOG_TOPICS.UPDATE,
    status: DESCRIPTION_STATUS.NORMAL,
    image: "/assets/images/landing/sample-blog-banner.jpg",
    content: "In a world where convenience is key, the drive-thru has long been a staple of modern life. But what happens when the drive-thru isn't accessible to everyone? Enter Drivingo!",
    poster: "Naveena Deva",
    date: new Date()
  },
  {
    id: 2,
    title: "Drive-Thru Accessibility Regulations: What Restaurants Need to Know",
    topic: BLOG_TOPICS.ACCESSIBILITY,
    status: DESCRIPTION_STATUS.ACTIVE,
    image: "/assets/images/landing/sample-blog-banner.jpg",
    content: "When it comes to accessibility regulations, staying in the know is a challenge. Restaurants, fear not! We've got you covered with a comprehensive guide to drive-thru accessibility regulations.",
    poster: "Drivingo",
    date: new Date()
  },
  {
    id: 3,
    title: "Deaf Oklahoma woman suing fast food restaurant",
    topic: BLOG_TOPICS.TESTIMONIALS,
    status: DESCRIPTION_STATUS.POPULAR,
    image: "/assets/images/landing/sample-blog-banner.jpg",
    content: "Deaf Oklahoma woman suing fast food restaurant after she was refused service.",
    poster: "Naveena Deva",
    date: new Date()
  },
  {
    id: 4,
    title: "The Drive-Thru Revolution: Making Fast Food Accessible to All",
    topic: BLOG_TOPICS.UPDATE,
    status: DESCRIPTION_STATUS.NORMAL,
    image: "/assets/images/landing/sample-blog-banner.jpg",
    content: "In a world where convenience is key, the drive-thru has long been a staple of modern life. But what happens when the drive-thru isn't accessible to everyone? Enter Drivingo!",
    poster: "Naveena Deva",
    date: new Date()
  },
  {
    id: 5,
    title: "Drive-Thru Accessibility Regulations: What Restaurants Need to Know",
    topic: BLOG_TOPICS.ACCESSIBILITY,
    status: DESCRIPTION_STATUS.POPULAR,
    image: "/assets/images/landing/sample-blog-banner.jpg",
    content: "When it comes to accessibility regulations, staying in the know is a challenge. Restaurants, fear not! We've got you covered with a comprehensive guide to drive-thru accessibility regulations.",
    poster: "Drivingo",
    date: new Date()
  },
  {
    id: 6,
    title: "Deaf Oklahoma woman suing fast food restaurant",
    topic: BLOG_TOPICS.TESTIMONIALS,
    status: DESCRIPTION_STATUS.POPULAR,
    image: "/assets/images/landing/sample-blog-banner.jpg",
    content: "Deaf Oklahoma woman suing fast food restaurant after she was refused service.",
    poster: "Naveena Deva",
    date: new Date()
  },
];

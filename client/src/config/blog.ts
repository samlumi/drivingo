import { BlogTopicType } from "@/types/config";
import { BLOG_TOPICS } from "@/utils/enums";

export const blogTopics: BlogTopicType[] = [
  {
    id: BLOG_TOPICS.ALL,
    topic: "All"
  },
  {
    id: BLOG_TOPICS.TECHNOLOGY,
    topic: "Technology"
  },
  {
    id: BLOG_TOPICS.ACCESSIBILITY,
    topic: "Accessibility"
  },
  {
    id: BLOG_TOPICS.INDUSTRY,
    topic: "Industry"
  },
  {
    id: BLOG_TOPICS.TESTIMONIALS,
    topic: "Testimonials"
  },
  {
    id: BLOG_TOPICS.UPDATE,
    topic: "Updates"
  },
];

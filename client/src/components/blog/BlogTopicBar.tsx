import { blogTopics } from "@/config/blog";
import { BlogTopicType } from "@/types/config";

const BlogTopicBar = () => {
  return (
    <div className="flex flex-wrap items-center px-2 md:px-20 pt-16">
      {
        blogTopics.map((topic: BlogTopicType) => (
          <div key={topic.id} className="mx-4 my-2 cursor-pointer hover:text-primary">
            {topic.topic}
          </div>
        ))
      }
    </div>
  );
};

export default BlogTopicBar;

import {NextRouter, useRouter} from "next/router";
import {motion} from "framer-motion";

import BlogPost from "@/components/shared/BlogPost";
import Button from "@/components/shared/Button";
import {blogs} from "@/utils/mockData";
import {shrinkVariant} from "@/utils/animations";

import {BlogConfigType} from "@/types/config";

const BlogSection = () => {
  const router: NextRouter = useRouter();

  return (
    <div className="flex justify-center">
      <div className="container my-20 overflow-hidden">
        <motion.h1
          initial="hide"
          whileInView="show"
          viewport={{once: true}}
          variants={shrinkVariant(0.5, 0.25)}
          className="text-primary text-2xl text-center my-6 md:my-12"
        >
          LATEST BLOGS
        </motion.h1>

        <div className="flex flex-wrap p-2 md:p-4">
          {blogs.slice(0, 3).map((blog: BlogConfigType) => (
            <BlogPost key={blog.id} {...blog} />
          ))}
        </div>

        <div className="flex justify-center p-8">
          <Button onClick={() => router.push("/blog")} className="w-48 p-3 text-xl">Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

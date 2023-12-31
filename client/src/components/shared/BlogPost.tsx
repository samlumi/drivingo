import { NextRouter, useRouter } from "next/router";

import CalendarIcon from "@/components/shared/icons/CalendarIcon";
import PersonIcon from "@/components/shared/icons/PersonIcon";
import { BlogConfigType } from "@/types/config";

const BlogPost = (props: BlogConfigType) => {
  const { id, title, image, content, poster, date } = props;
  const router: NextRouter = useRouter();

  const navigateToPost = (): void => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="w-full md:w-1/3 p-2 md:p-4 ">
      <div className="flex flex-col h-full bg-[#EEEEEE] dark:bg-secondary rounded-md overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl">
        <div
          className="w-full h-48 md:h-64"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
          }}
        ></div>

        <div className="flex flex-col px-8 pt-12 pb-4">
          <h1 className="text-xl md:text-2xl cursor-pointer hover:text-primary" onClick={navigateToPost}>{title}</h1>
          <div className="flex items-center pt-2 font-normal text-sm">
            <div className="flex items-center">
              <PersonIcon color="#F56200" size={20} />
              <p className="mx-2">{poster}</p>
            </div>

            <div className="flex items-center">
              <CalendarIcon color="#F56200" size={20} />
              <p className="mx-2">{date}</p>
            </div>
          </div>

          <p className="font-normal text-[10px] md:text-sm my-4 md:my-6">
            {`${content.substring(0, 150)}...`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

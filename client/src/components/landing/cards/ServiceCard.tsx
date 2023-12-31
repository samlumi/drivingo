import { useRouter } from "next/router";
import React from "react";

import Button from "@/components/shared/Button";
import { ServiceConfigType } from "@/types/config";

const ServiceCard = (props: ServiceConfigType) => {
  const router = useRouter();
  const { title, content, link } = props;

  return (
    <div
      style={{ backdropFilter: "blur(12px)" }}
      className="flex flex-col items-center relative w-full xl:w-7/12 px-4 py-12 m-2 md:p-12
          rounded-[10px] border-[1px] border-primary text-black text-base md:text-xl bg-[#EEEEEE] bg-opacity-25 overflow-hidden
          dark:border-[#453628] dark:bg-[#301E0E] dark:bg-opacity-25 dark:text-white"
    >
      <h1 className="w-full text-primary text-2xl md:text-3xl text-center mb-4">{title}</h1>
      <p className="text-center my-8">{content}</p>

      <div className="flex justify-center md:justify-end w-full mt-8">
        <Button onClick={() => router.push(link)} className="px-10 py-3">
          Learn more
        </Button>
      </div>

      <span className="absolute top-0 right-0 w-full h-full translate-x-1/2 -translate-y-1/2 orange-gradient transition-all duration-500"></span>
      <span className="absolute bottom-0 left-0 w-full h-full -translate-x-1/2 translate-y-1/2 orange-gradient transition-all duration-500"></span>
    </div>
  );
};

export default ServiceCard;

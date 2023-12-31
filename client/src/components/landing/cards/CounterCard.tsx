import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import { CounterConfigType } from "@/types/config";
import { expandVariant } from "@/utils/animations";

const CounterCard = (props: CounterConfigType) => {
  const { theme } = useTheme();
  const { id, icon, title, count } = props;
  const [iconEle, setIconEle] = useState<any>(null);

  useEffect(() => {
    setIconEle(React.createElement(icon, { color: theme === "dark" ? "white" : "#F56200" }));
  }, [theme, icon]);

  return (
    <div className="w-1/2 lg:w-1/3 p-1 md:p-3">
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={expandVariant(0.7, 0.1 * id)}
        className="flex flex-col relative p-3 md:p-6
          rounded-[10px] border-[1px] border-primary text-black bg-[#EEEEEE] bg-opacity-25 overflow-hidden
          dark:border-[#453628] dark:bg-[#301E0E] dark:bg-opacity-25 dark:text-white
          [&>span:nth-child(4)]:hover:translate-x-0 [&>span:nth-child(4)]:hover:translate-y-0"
      >
        <div className="scale-75 md:scale-100 w-9 md:w-12">{iconEle}</div>
        <h2 className="text-[10px] md:text-base my-1 md:my-3">{title}</h2>
        <h1 className="text-primary text-xl md:text-[40px]">
          <CountUp end={count} duration={2} enableScrollSpy scrollSpyOnce />
        </h1>

        <span className="absolute top-0 right-0 w-full h-full translate-x-1/2 -translate-y-1/2 orange-gradient transition-all duration-500"></span>
      </motion.div>
    </div>
  );
};

export default CounterCard;

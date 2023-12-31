import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import TeamCard from "@/components/landing/cards/TeamCard";
import { teamConfig } from "@/config/landing";
import { TeamConfigType } from "@/types/config";
import { shrinkVariant } from "@/utils/animations";

const TeamSection = () => {
  const { theme } = useTheme();
  const [backGradient, setBackGradient] = useState("white");

  useEffect(() => {
    setBackGradient(theme === "dark" ? "#121212" : "white");
  }, [theme]);

  return (
    <div className="flex flex-col items-center">
      <div className="container">
        <div className="flex flex-col justify-center items-center relative my-20">
          <div className="absolute">
            <Image alt="svg" src={"/assets/shapes/skew-rectangle.svg"} width={1440} height={563} />

            <span
              className="absolute top-0 left-0 w-1/3 h-full"
              style={{ background: `linear-gradient(to right, ${backGradient}, transparent)` }}
            />

            <span
              className="absolute top-0 right-0 w-1/3 h-full"
              style={{ background: `linear-gradient(to left, ${backGradient}, transparent)` }}
            />
          </div>

          <motion.h1
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={shrinkVariant(0.5, 0.25)}
            className="text-primary text-2xl my-12"
          >
            MEET OUR TEAM
          </motion.h1>

          <div className="flex flex-wrap w-full lg:w-3/4 z-10">
            {teamConfig.map((memberInfo: TeamConfigType) => (
              <TeamCard key={memberInfo.id} {...memberInfo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

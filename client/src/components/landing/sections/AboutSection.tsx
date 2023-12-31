import Image from "next/image";
import {useTheme} from "next-themes";
import {useEffect, useRef, useState} from "react";
import {AnyAction, Dispatch} from "redux";
import {useDispatch} from "react-redux";

import {motion} from "framer-motion";
import CounterCard from "@/components/landing/cards/CounterCard";
import CheckIcon from "@/components/shared/icons/CheckIcon";

import {aboutConfig, counterAnalytics} from "@/config/landing";
import {setPreviousHeight} from "@/store/actions/landing.action";
import {CounterConfigType} from "@/types/config";
import {fadeSmallLeftVariant, fadeSmallUpVariant} from "@/utils/animations";

const AboutSection = () => {
  const {theme} = useTheme();
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const [iconColor, setIconColor] = useState("black");
  const containerRef = useRef<any>(null);

  useEffect(() => {
    dispatch(setPreviousHeight(containerRef.current.clientHeight + window.innerHeight));
  }, [dispatch]);

  useEffect(() => {
    setIconColor(theme === "dark" ? "white" : "black");
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="flex justify-center relative w-full py-20 bg-white dark:bg-[#121212]"
    >
      <Image
        alt="circle-decorator"
        src={"/assets/shapes/circle-bubble.svg"}
        width={450}
        height={556}
        className="absolute top-0 right-0"
        priority
      />

      <div className="container">
        <div className="flex justify-center items-center px-1 xl:px-20 dx:px-40">
          <div className="flex flex-wrap">
            {counterAnalytics.map((analytic: CounterConfigType) => (
              <CounterCard key={analytic.id} {...analytic} />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center px-8 pt-20 lg:pt-28">
          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{once: true}}
            variants={fadeSmallLeftVariant(0.75, 0.25)}
          >
            <Image
              alt="drive-thru-1"
              src={aboutConfig.image}
              width={400}
              height={400}
              className="hidden lg:block rounded-se-[128px] rounded-es-[128px]"
              priority
            />
          </motion.div>

          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{once: true}}
            variants={fadeSmallUpVariant(0.75, 0.25)}
            className="w-full lg:w-3/5 p-4 text-black dark:text-white text-lg md:text-xl"
          >
            <h1 className="text-2xl md:text-3xl text-center lg:text-left text-primary dark:text-white mb-12">
              {aboutConfig.title}
            </h1>

            <p className="my-8">{aboutConfig.description}</p>

            {aboutConfig.points.map((point: string, index) => (
              <div key={index} className="flex items-center text-base md:text-lg">
                <CheckIcon color={iconColor}/>
                <p className="mx-2">{point}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

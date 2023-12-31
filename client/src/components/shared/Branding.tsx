import Image from "next/image";
import { motion } from "framer-motion";

import { BrandConfigType } from "@/types/config";
import { fadeVariant, shrinkVariant } from "@/utils/animations";

const Branding = (props: BrandConfigType) => {
  return (
    <div className="relative">
      <Image alt="banner" src={props.image} width={1920} height={800} priority />
      <motion.span
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeVariant()}
        className="absolute top-0 left-0 w-full h-full banner-effect"
      />

      <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full text-white">
        <motion.h1
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={shrinkVariant(0.75)}
          className="hidden md:block text-5xl"
        >
          {props.title}
        </motion.h1>

        <motion.h1
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={shrinkVariant(0.75)}
          className="md:hidden text-2xl mt-8"
        >
          {props.small}
        </motion.h1>

        <motion.p
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={shrinkVariant(0.75, 0.5)}
          className="hidden md:block font-normal text-lg text-center w-1/2 dx:w-1/3 pt-8"
        >
          {props.subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default Branding;
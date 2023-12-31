import Image from "next/image";
import { motion } from "framer-motion";

import { TeamConfigType } from "@/types/config";
import { fadeVariant } from "@/utils/animations";

const MemeberDescription = (props: TeamConfigType) => {
  const { name, photo, designation, description } = props;

  return (
    <motion.div
      initial="hide"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeVariant(1)}
      className="flex flex-col w-full md:w-1/2 xl:w-1/3 p-8 font-normal"
    >
      <Image
        alt="avatar"
        src={photo}
        width={128}
        height={128}
        className="rounded-md"
      />

      <h1 className="text-xl my-1">{name}</h1>
      <h2 className="text-sm mb-8">{designation}</h2>

      <p>{description}</p>
    </motion.div>
  );
};

export default MemeberDescription;

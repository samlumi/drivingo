import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { TeamConfigType } from "@/types/config";
import { expandVariant } from "@/utils/animations";

const TeamCard = (props: TeamConfigType) => {
  const { id, name, designation, photo, twitter, facebook, instagram, linkedin } = props;

  return (
    <div className="w-1/2 md:w-1/3 px-4 py-2 md:px-16 md:py-6">
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={expandVariant(0.5, 0.15 * id)}
        className="flex flex-col text-primary dark:text-white"
      >
        <div className="relative member-card">
          <Image alt="avatar" src={photo} width={400} height={400} className="rounded-full" />
          <span className="absolute top-1/2 left-1/2 w-full h-full rounded-full border-2 border-primary dark:border-dark transition-all duration-500" />

          <div className="action-bar flex justify-center items-center absolute top-1/2 left-1/2 w-full h-full bg-primary dark:bg-dark bg-opacity-50 dark:bg-opacity-50 rounded-full transition-all duration-500">
            <Link href={twitter} target="_blank" className="mx-2">
              <Image
                alt="twitter"
                src={"/assets/images/social-media/twitter.png"}
                width={20}
                height={20}
                className="w-4xl h-4xl"
                priority
              />
            </Link>

            <Link href={facebook} target="_blank" className="mx-2">
              <Image
                alt="facebook"
                src={"/assets/images/social-media/facebook.png"}
                width={20}
                height={20}
                className="w-4xl h-4xl"
                priority
              />
            </Link>

            <Link href={instagram} target="_blank" className="mx-2">
              <Image
                alt="instagram"
                src={"/assets/images/social-media/instagram.png"}
                width={20}
                height={20}
                className="w-4xl h-4xl"
                priority
              />
            </Link>

            <Link href={linkedin} target="_blank" className="mx-2">
              <Image
                alt="linkedin"
                src={"/assets/images/social-media/linkedin.png"}
                width={20}
                height={20}
                className="w-4xl h-4xl"
                priority
              />
            </Link>
          </div>
        </div>

        <div className="p-4 text-center">
          <h1 className="text-sm md:text-xl">{name}</h1>
          <p className="text-[10px] md:text-base">{designation}</p>
        </div>
      </motion.div>

      <style jsx>{`
        .member-card span {
          transform: translate(-50%, -50%) scale(1);
        }

        .member-card:hover span {
          transform: translate(-50%, -50%) scale(1.075);
        }

        .member-card .action-bar {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.75);
        }
        .member-card:hover .action-bar {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      `}</style>
    </div>
  );
};

export default TeamCard;

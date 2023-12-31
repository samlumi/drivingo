import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnyAction, Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import MemberDescription from "@/components/about/MemberDescription";
import Button from "@/components/shared/Button";
import Branding from "@/components/shared/Branding";
import { teamConfig } from "@/config/landing";
import { aboutBrandConfig } from "@/config/brand";
import { fadeSmallUpVariant, shrinkVariant } from "@/utils/animations";
import { selectNavItem } from "@/store/actions/landing.action";

import { TeamConfigType } from "@/types/config";

export default function About() {
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const [collapse, setCollapse] = useState(true);

  useEffect((): void => {
    dispatch(selectNavItem(2));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Drivingo | About</title>
      </Head>

      <main>
        <Branding {...aboutBrandConfig} />

        <div
          className="flex justify-center bg-[#353535] dark:bg-secondary font-normal text-white text-lg md:text-2xl pb-20 md:pb-48">
          <div className="container flex justify-center">
            <Link href={"#story"} className="px-8 md:px-20 py-12">Our Story</Link>
            <Link href={"#team"} className="px-8 md:px-20 py-12">Meet Our Team</Link>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="container px-4 md:px-20">
            <motion.div
              id="story"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeSmallUpVariant()}
              className="flex flex-col justify-center items-center w-full shadow-lg px-8 py-16 -mt-20 md:-mt-48 rounded-md bg-white dark:bg-dark text-sm md:text-lg [&>p]:font-normal [&>p]:text-center [&>p]:my-6 [&>p>span]:text-primary"
            >
              <h1 className="text-primary text-2xl text-center mb-8">OUR STORY</h1>

              <p>
                At <span className="font-bold">Drivingo</span>, our journey is rooted in a simple yet powerful
                idea: <span>accessibility</span> for all. It&apos;s a story of determination, innovation, and a
                commitment to <span>breaking down barriers</span> in the drive-thru experience.
              </p>

              <p>
                This is our story, and it&apos;s a story of empowerment, inclusivity, and a commitment to a more
                accessible future. Welcome to Drivingo - <span>where accessibility meets innovation</span>.
              </p>

              <p className={collapse ? "hidden" : "block"}>
                The QSR industry loses billions of dollars by ignoring the needs of over 203.9 million non-verbal
                individuals in the US. This results in dehumanizing experiences, lasting emotional trauma, and damages
                brand reputations. Additionally, employees lack training to assist non-English speaking or sign
                language-reliant customers, leading to costly discrimination lawsuits.<br />
                With Drivingo, a fully automated service, QSRs can expand their customer base and increase revenue while
                improving accessibility and inclusivity for all customers.
              </p>

              <Button className={`${collapse ? "block" : "hidden"} w-48 p-3 mt-8 md:mt-12`} onClick={() => setCollapse(false)}>Read more</Button>
            </motion.div>

            <div className="flex justify-center w-full py-24">
              <motion.iframe
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeSmallUpVariant(0.5, 0.5)}
                title="Introduction"
                src="https://www.youtube.com/embed/M09uYrC0Ob8"
                className="w-[800px] h-[250px] md:h-[450px] border-8 border-primary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div id="team" className="flex flex-col w-full md:px-8 md:py-12 overflow-hidden">
              <motion.h1
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                variants={shrinkVariant()}
                className="text-primary text-2xl text-center mb-8"
              >MEET OUR TEAM
              </motion.h1>

              <div className="flex flex-wrap">
                {
                  teamConfig.map((member: TeamConfigType) => (
                    <MemberDescription key={member.id} {...member} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

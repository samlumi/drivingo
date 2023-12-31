import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import Branding from "@/components/shared/Branding";
import { productBrandConfig } from "@/config/brand";
import { productDescription } from "@/config/product";
import { selectNavItem } from "@/store/actions/landing.action";
import { fadeSmallLeftVariant, fadeSmallRightVariant, fadeSmallUpVariant, flipVariant, shrinkVariant } from "@/utils/animations";

export default function DriveThruProduct() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectNavItem(5));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Drivingo | Product</title>
      </Head>

      <main>
        <Branding {...productBrandConfig} />

        <div className="flex justify-center">
          <div className="container py-16 md:py-28">
            <div className="flex justify-between items-center px-12 py-4">
              <div className="w-full md:w-1/2">
                <motion.h1
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={flipVariant(0.5, 0.25)}
                  className="text-xl md:text-3xl text-primary mb-8"
                >
                  {productDescription[0].subject}
                </motion.h1>

                <motion.p
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeSmallUpVariant(0.5, 0.5)}
                  className="font-normal text-sm md:text-lg">
                  {productDescription[0].description}
                </motion.p>
              </div>

              <motion.div
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeSmallRightVariant()}
                className="hidden md:block"
              >
                <Image
                  alt="display-1"
                  src={"/assets/images/product/drive-thru-1.png"}
                  width={450}
                  height={525}
                />
              </motion.div>
            </div>

            <div className="flex justify-between items-center px-12 py-4">
              <div className="flex">
                <motion.div
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeSmallLeftVariant()}
                  className="hidden md:block"
                >
                  <Image
                    alt="display-2"
                    src={"/assets/images/product/drive-thru-2.png"}
                    width={400}
                    height={600}
                    className="-ml-12"
                  />
                </motion.div>

                <motion.div
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeSmallLeftVariant(0.5, 0.25)}
                  className="hidden md:block"
                >
                  <Image
                    alt="display-3"
                    src={"/assets/images/product/drive-thru-3.png"}
                    width={300}
                    height={600}
                    className="-ml-20"
                  />
                </motion.div>
              </div>

              <div className="w-full md:w-1/2">
                <motion.h1
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={flipVariant(0.5, 0.5)}
                  className="text-xl md:text-3xl text-primary mb-8"
                >
                  {productDescription[1].subject}
                </motion.h1>

                <motion.p
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeSmallUpVariant(0.5, 0.75)}
                  className="font-normal text-sm md:text-lg">
                  {productDescription[1].description}
                </motion.p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center overflow-hidden px-8 py-8">
              <motion.h1
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                variants={shrinkVariant(0.5, 0.25)}
                className="text-primary text-2xl my-12"
              >
                WATCH THE VIDEO
              </motion.h1>

              <motion.div
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeSmallUpVariant(0.5, 0.25)}
                className="flex flex-col md:flex-row w-full"
              >
                <iframe
                  title="Drive Thru"
                  src="https://www.youtube.com/embed/GlNctMXzDlg"
                  className="w-full h-48 md:h-96 my-2 md:m-4"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

                <iframe
                  title="Drive Thru"
                  src="https://www.youtube.com/embed/r2wwBhIbn-0"
                  className="w-full h-48 md:h-96 my-2 md:m-4"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </motion.div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

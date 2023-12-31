import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

import Button from "@/components/shared/Button";
import { fadeSmallDownVariant, fadeSmallRightVariant, fadeSmallUpVariant } from "@/utils/animations";

const ProductSection = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <div className="container">
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="w-full text-center md:text-left md:w-2/5 p-8">
            <motion.h1
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeSmallDownVariant(0.75, 0.25)}
              className="text-3xl md:text-4xl text-center md:text-left tracking-wide md:leading-relaxed
              [&>span]:text-primary"
            >
              A fully automated Drive-Thru System with <span>TOUCH</span>, <span>SIGN</span> and <span>SPEECH</span>
            </motion.h1>

            <motion.div
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeSmallUpVariant(0.75, 0.25)}
            >
              <Button
                onClick={() => router.push("/product")}
                className="px-12 py-3 mt-8 md:mt-16 text-lg"
              >
                Learn more
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeSmallRightVariant(0.75, 0.5)}
            className="relative m-8"
          >
            <iframe
              title="Drive Thru"
              src="https://www.youtube.com/embed/GlNctMXzDlg"
              className="absolute top-1/2 left-1/2 w-[94%] h-[76%] -translate-x-1/2 -translate-y-[60%]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            <Image
              alt="display"
              src={"/assets/images/landing/display.png"}
              width={850}
              height={600}
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

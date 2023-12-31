import Image from "next/image";
import Head from "next/head";
import {useEffect} from "react";
import {AnyAction, Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {motion} from "framer-motion";

import Branding from "@/components/shared/Branding";
import {serviceBrandConfig} from "@/config/brand";
import {serviceDescription} from "@/config/service";
import {selectNavItem} from "@/store/actions/landing.action";

import {ServiceDescriptionType} from "@/types/config";
import {fadeSmallLeftVariant, fadeSmallRightVariant, fadeSmallUpVariant} from "@/utils/animations";

export default function Service() {
  const dispatch: Dispatch<AnyAction> = useDispatch();

  useEffect((): void => {
    dispatch(selectNavItem(4));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Drivingo | Service</title>
      </Head>

      <main className="flex flex-col justify-center items-center">
        <Branding {...serviceBrandConfig} />

        {
          serviceDescription.map((service: ServiceDescriptionType) => (
            <div key={service.id} className={`flex justify-center w-full p-20 ${service.id % 2 === 0 && "bg-[#EEEEEE] dark:bg-background"}`}>
              <div className={`container flex ${service.id % 2 === 0 ? "flex-row-reverse" : "flex-row"} justify-between items-center`}>
                <motion.div
                  initial="hide"
                  whileInView="show"
                  viewport={{once: true}}
                  variants={fadeSmallUpVariant(0.5, 0.3)}
                  className="font-normal w-1/2"
                >
                  <h1 className="font-bold text-primary text-3xl">{service.title}</h1>
                  <p className="text-xl my-8">{service.description}</p>
                </motion.div>

                <motion.div
                  initial="hide"
                  whileInView="show"
                  viewport={{once: true}}
                  variants={service.id % 2 === 0 ? fadeSmallLeftVariant() : fadeSmallRightVariant()}
                >
                  <Image src={service.image} width={500} height={500} alt="image"/>
                </motion.div>
              </div>
            </div>
          ))
        }
      </main>
    </>
  );
};

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import TextArea from "@/components/shared/TextArea";
import { footerMenu } from "@/config/footer";
import { fadeSmallUpVariant } from "@/utils/animations";
import { selectNavItem } from "@/store/actions/landing.action";

export default function Contact() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(selectNavItem(6));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Drivingo | Contact</title>
      </Head>

      <main className="flex flex-col justify-center items-center">
        <span className="w-full h-[72px] md:h-[88px] bg-primary dark:bg-opacity-0" />

        <div className="container p-4 md:p-12">
          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeSmallUpVariant()}
            className="flex w-full rounded-lg overflow-hidden shadow-xl"
          >
            <div className="hidden md:block relative w-1/3 p-8 md:p-12 bg-primary dark:bg-secondary text-white overflow-hidden">
              <span className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-opacity-40 rounded-full bg-dark dark:bg-primary dark:bg-opacity-40 translate-x-1/3 translate-y-1/3" />
              <span className="absolute bottom-0 right-0 w-36 h-36 m-16 md:w-60 md:h-60 md:m-36 bg-opacity-40 rounded-full bg-dark dark:bg-primary dark:bg-opacity-40 translate-x-1/3 translate-y-1/3" />

              <h1 className="text-3xl mb-4">Contact Information</h1>
              <p className="font-normal text-lg">Contact us directly!</p>

              <div className="flex flex-col font-normal mt-12">
                {Object.keys(footerMenu.contact.info).map((key: string, index: number) => (
                  <Link
                    key={index}
                    href={footerMenu.contact.info[key].link}
                    className="flex items-center py-4 z-10"
                  >
                    {React.createElement(footerMenu.contact.info[key].icon)}
                    <p className="mx-2">{footerMenu.contact.info[key].content}</p>
                  </Link>
                ))}

                <div className="flex justify-between items-center w-1/2 my-8">
                  {Object.keys(footerMenu.contact.social).map((key: string, index: number) => (
                    <Link key={index} href={footerMenu.contact.social[key].link} target="_blank" className="z-10">
                      <Image
                        alt="social media"
                        src={footerMenu.contact.social[key].logo}
                        width={22}
                        height={22}
                        className="w-5xl h-5xl"
                        priority
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 p-8 md:p-12 bg-[#EEEEEE] dark:bg-dark">
              <h1 className="text-xl md:text-3xl text-primary mb-4">Contact us!</h1>
              <p className="font-normal text-sm md:text-lg">Any questions, suggestions or remarks?</p>
              <p className="font-normal text-sm md:text-lg">Just send us a message! We will get back to you within 2 business days.</p>

              <div className="flex flex-col mt-8">
                <div className="flex flex-col md:flex-row">
                  <Input
                    placeholder="Enter your name"
                    className="w-full md:mr-2 my-2 md:my-4"
                    value={name}
                    handler={setName}
                  />
                  
                  <Input
                    placeholder="Enter your email"
                    className="w-full md:ml-2 my-2 md:my-4"
                    value={email}
                    handler={setEmail}
                  />
                </div>

                <TextArea
                  rows={5}
                  placeholder="Text your message..."
                  className="my-2"
                  value={message}
                  handler={setMessage}
                />
              </div>

              <Button className="w-full md:w-40 p-3 my-4">Submit Message</Button>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

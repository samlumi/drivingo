import Image from "next/image";
import Link from "next/link";
import React from "react";

import { footerMenu } from "@/config/footer";
import { FooterMenu } from "@/types/config";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center p-10 bg-[#353535] dark:bg-background font-normal text-white">
        <div className="container flex flex-wrap">
          <div className="w-full md:w-2/3 lg:w-4/12">
            <Image alt="logo" src={footerMenu.summary.logo} width={120} height={40} className="w-auto h-auto" priority />

            <p className="w-full md:w-2/3 mt-4">
              {footerMenu.summary.content}
            </p>
          </div>

          <div className="w-1/2 py-8 md:py-0 md:w-1/3 lg:w-2/12">
            <h1 className="font-bold mb-8">
              {footerMenu.links.title}
            </h1>

            <div className="flex flex-col">
              {footerMenu.links.items.map((item: FooterMenu) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="py-1 transition-all duration-500 hover:ml-2"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-1/2 py-8 md:py-0 md:w-1/3 lg:w-3/12">
            <h1 className="font-bold mb-8">{footerMenu.services.title}</h1>

            <div className="flex flex-col">
              {footerMenu.services.items.map((item: FooterMenu) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="py-1 transition-all duration-500 hover:ml-2"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/3 lg:w-3/12">
            <h1 className="font-bold mb-8">{footerMenu.contact.title}</h1>

            <div className="flex flex-col">
              {Object.keys(footerMenu.contact.info).map((key: string, index: number) => (
                <Link
                  key={index}
                  href={footerMenu.contact.info[key].link}
                  className="flex items-center py-1"
                >
                  {React.createElement(footerMenu.contact.info[key].icon)}
                  <p className="mx-2">{footerMenu.contact.info[key].content}</p>
                </Link>
              ))}

              <div className="flex justify-between items-center w-1/2 my-8">
                {Object.keys(footerMenu.contact.social).map((key: string, index: number) => (
                  <Link key={index} href={footerMenu.contact.social[key].link} target="_blank">
                    <Image
                      alt="social media"
                      src={footerMenu.contact.social[key].logo}
                      width={18}
                      height={18}
                      className="w-4xl h-4xl"
                      priority
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-primary dark:bg-secondary font-normal text-white text-center">
        drivingo.io © 2022 - 2023 All rights reserved
      </div>
    </div>
  );
};

export default Footer;

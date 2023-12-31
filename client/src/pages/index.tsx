import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import HeaderSection from "@/components/landing/sections/HeaderSection";
import AboutSection from "@/components/landing/sections/AboutSection";
import ServiceSection from "@/components/landing/sections/ServiceSection";
import ProductSection from "@/components/landing/sections/ProductSection";
import TeamSection from "@/components/landing/sections/TeamSection";
import CustomerSection from "@/components/landing/sections/CustomerSection";
import BlogSection from "@/components/landing/sections/BlogSection";
import SubscribeSection from "@/components/landing/sections/SubscribeSection";
import VendorSection from "@/components/landing/sections/VendorSection";
import { selectNavItem } from "@/store/actions/landing.action";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectNavItem(1));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Drivingo | Home</title>
      </Head>

      <main>
        <HeaderSection />
        <AboutSection />
        <ServiceSection />
        <ProductSection />
        <TeamSection />
        <CustomerSection />
        <BlogSection />
        <SubscribeSection />
        <VendorSection />
      </main>
    </>
  );
};

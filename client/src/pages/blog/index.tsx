import Head from "next/head";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {motion} from "framer-motion";

import BlogTopicBar from "@/components/blog/BlogTopicBar";
import Branding from "@/components/shared/Branding";
import BlogPost from "@/components/shared/BlogPost";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import SkeletonLoader from "@/components/shared/SkeletonLoader";
import {blogBrandConfig} from "@/config/brand";

import {isEmail} from "@/utils/functions";
import {fadeSmallUpVariant} from "@/utils/animations";
import {selectNavItem} from "@/store/actions/landing.action";
import { getBlogList } from "@/store/actions/blog.action";
import { BlogConfigType } from "@/types/config";

export default function Blog() {
  const dispatch = useDispatch();
  const { isLoading, blogs } = useSelector(({ blog }) => blog);

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = () => {
    setEmail("");
    setErrorMessage("");
  };

  const subscribe = () => {
    if (!email) {
      setErrorMessage("Email field is required.");
    } else if (!isEmail(email)) {
      setErrorMessage("Email is invalid.");
    } else {
      resetForm();
      console.log(email);
    }
  };

  useEffect((): void => {
    dispatch(selectNavItem(3));
    dispatch(getBlogList());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Drivingo | Blog</title>
      </Head>

      <main>
        <Branding {...blogBrandConfig} />

        <div className="flex justify-center">
          <div className="container px-2 md:px-12">
            <BlogTopicBar/>

            <div className="flex flex-wrap py-4">
              {
                isLoading ? Array.from({length: 6}, (_, i) => (
                  <div key={i} className="w-full md:w-1/3 p-2 md:p-4">
                    <SkeletonLoader className="w-full h-[512px]" />
                  </div>
                )) : blogs.map((blog: BlogConfigType) => (
                  <BlogPost key={blog.id} {...blog} />
                ))
              }
            </div>

            <motion.div
              initial="hide"
              whileInView="show"
              viewport={{once: true}}
              variants={fadeSmallUpVariant()}
              className="relative p-12 my-16 rounded-lg overflow-hidden bg-[#EEEEEE] dark:bg-dark"
            >
              <span className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-opacity-40 rounded-full bg-primary translate-x-1/3 translate-y-1/3"/>
              <span className="absolute bottom-0 right-0 w-36 h-36 m-16 md:w-60 md:h-60 md:m-36 bg-opacity-40 rounded-full bg-primary translate-x-1/3 translate-y-1/3"/>

              <h2 className="font-normal text-lg text-primary">Stay up to date with Drivingo</h2>
              <h1 className="text-3xl my-4">Join our newsletter</h1>

              <div className="flex flex-col md:flex-row">
                <Input value={email} handler={setEmail} className="w-full md:w-96 z-10" placeholder="Enter your email"/>
                <Button onClick={subscribe} className="w-full md:w-36 p-3 my-4 md:mx-4 md:my-0 text-xl z-10">Subscribe</Button>
              </div>

              <p className="text-sm text-[#FF0000] mx-2 my-1">{errorMessage}</p>
              <p className="text-sm opacity-50 my-8">* You can unsubscribe any time.</p>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

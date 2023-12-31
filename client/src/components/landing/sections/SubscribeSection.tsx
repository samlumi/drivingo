import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import { fadeSmallLeftVariant, fadeSmallRightVariant } from "@/utils/animations";

const SubscribeSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string[]>(["", "text-[#000000]"]);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage(["", "text-[#000000]"]);
  };

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name) {
      setMessage(["Please enter your name.", "text-[#FF0000]"]);
    } else if (!email) {
      setMessage(["Please enter your email.", "text-[#FF0000]"]);
    } else {
      resetForm();
      console.log(name, email);
    }
  };

  return (
    <div className="flex justify-center py-4 md:py-20">
      <div className="container flex justify-between items-center p-4 md:p-12">
        <motion.div
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeSmallLeftVariant(0.5, 0.25)}
        >
          <Image
            alt="banner"
            src={"/assets/images/landing/drive-thru-2.png"}
            width={512}
            height={512}
            className="hidden md:block"
            priority
          />
        </motion.div>

        <motion.div
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeSmallRightVariant(0.5, 0.25)}
          className="flex flex-col w-[480px] px-8 py-12 rounded-lg bg-[#EEEEEE] dark:bg-secondary border-[1px] border-primary dark:border-[#453527] shadow-xl"
        >
          <h1 className="text-3xl text-primary">Subscribe</h1>
          <p className="text-2xl">to receive future updates</p>

          <span className="w-full h-[1px] bg-[#CCCCCC] my-4" />
          <p className={`h-8 mb-12 ${message[1]}`}>{message[0]}</p>

          <form className="flex flex-col" onSubmit={handleSubscribe}>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              handler={setName}
              className="my-3"
            />

            <Input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={email}
              handler={setEmail}
              className="my-3"
            />

            <Button type="submit" className="flex justify-center p-3 mt-6 text-2xl">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SubscribeSection;

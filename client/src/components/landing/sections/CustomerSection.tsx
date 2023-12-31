import { useSpringCarousel } from "react-spring-carousel";
import { motion } from "framer-motion";

import { customers } from "@/utils/mockData";
import CustomerView from "@/components/landing/cards/CustomerView";
import { shrinkVariant } from "@/utils/animations";
import ArrowLeftIcon from "@/components/shared/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/components/shared/icons/ArrowRightIcon";

const CustomerSection = () => {
  const { slideToNextItem, slideToPrevItem, carouselFragment } = useSpringCarousel({
    withLoop: true,
    items: customers.map((customer: any) => ({
      id: customer.id,
      renderItem: <CustomerView {...customer} />,
    })),
  });

  return (
    <div className="flex justify-center relative bg-[#EEEEEE] dark:bg-secondary">
      <div className="container flex flex-col justify-center items-center my-20">
        <motion.h1
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={shrinkVariant(0.5, 0.25)}
          className="relative text-primary text-2xl my-12"
        >
          WHAT OUR CUSTOMERS SAY
        </motion.h1>

        <div className="flex justify-center w-4/5 md:w-2/3 overflow-hidden">{carouselFragment}</div>
      </div>

      <button
        className="hidden md:block absolute top-1/2 left-4 -translate-y-1/2 border-none rounded-full outline-none p-4 transition"
        onClick={slideToPrevItem}
      >
        <ArrowLeftIcon size={56} color="#F56200" />
      </button>

      <button
        className="hidden md:block absolute top-1/2 right-4 -translate-y-1/2 border-none rounded-full outline-none p-4 transition"
        onClick={slideToNextItem}
      >
        <ArrowRightIcon size={56} color="#F56200" />
      </button>
    </div>
  );
};

export default CustomerSection;

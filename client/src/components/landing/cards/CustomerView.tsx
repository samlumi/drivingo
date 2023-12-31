import Image from "next/image";
import { CustomerConfigType } from "@/types/config";

const CustomerView = (props: CustomerConfigType) => {
  const { name, designation, avatar, comment } = props;

  return (
    <div className="flex flex-col justify-center items-center w-full select-none font-normal text-black dark:text-white cursor-grab">
      <div className="relative p-2">
        <Image alt="avatar" src={avatar} width={128} height={128} className="rounded-full" />
        <span className="absolute top-1/2 left-1/2 w-full h-full rounded-full -translate-x-1/2 -translate-y-1/2 border-2 border-primary" />
      </div>

      <h1 className="font-bold text-2xl mt-3">{name}</h1>
      <h2 className="text-lg">{designation}</h2>
      <p className="my-8">{comment}</p>
    </div>
  );
};

export default CustomerView;

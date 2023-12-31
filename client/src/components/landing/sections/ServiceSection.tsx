import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import ServiceCard from "@/components/landing/cards/ServiceCard";
import { serviceConfig } from "@/config/landing";
import { ServiceConfigType } from "@/types/config";

const ServiceSection = () => {
  const { aboutSectionHeight } = useSelector(({ landing }) => landing);
  const [kioskOffset, setKioskOffset] = useState(0);
  const [carOffset, setCarOffset] = useState(-50);
  const [jeepDegree, setJeepDegree] = useState(0);
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const updateBackground = () => {
      if (containerRef.current) {
        const sectionScrollHeight = window.pageYOffset - aboutSectionHeight;
        const containerHeight = containerRef.current.clientHeight - window.innerHeight;
        setJeepDegree(sectionScrollHeight);

        setKioskOffset((sectionScrollHeight / containerHeight) * 100);
        setCarOffset((sectionScrollHeight / containerHeight) * 100);
      }
    };

    window.addEventListener("scroll", updateBackground);

    return () => window.removeEventListener("scroll", updateBackground);
  });

  return (
    <div className="flex justify-center">
      <div ref={containerRef} className="container p-4 md:p-8">
        <Image
          alt="kiosk"
          src={"/assets/images/landing/kiosk.png"}
          width={240}
          height={320}
          className="fixed top-1/2 -translate-x-full -translate-y-2/3 w-1/3 md:w-auto md:h-auto"
          style={{ left: `${kioskOffset}%` }}
          priority
        />

        <div
          className="fixed top-1/2 translate-x-1/2 -translate-y-1/4 w-[400px] sm:w-[600px] md:w-[900px] h-auto"
          style={{ right: `${carOffset}%` }}
        >
          <Image
            alt="car"
            src={"/assets/images/landing/car.png"}
            width={900}
            height={300}
            priority
          />

          <div
            className="absolute top-[59.5%] left-[18.5%] w-[10.5%] h-[32%]"
            style={{ transform: `rotateZ(${jeepDegree < 0 ? Math.abs(jeepDegree) : -jeepDegree}deg)` }}
          >
            <Image
              alt="jeep"
              src={"/assets/images/landing/jeep.png"}
              width={150}
              height={150}
              className="w-auto h-auto"
            />
          </div>

          <div
            className="absolute top-[59.5%] left-[74%] w-[10.5%] h-[32%]"
            style={{ transform: `rotateZ(${jeepDegree < 0 ? Math.abs(jeepDegree) : -jeepDegree}deg)` }}
          >
            <Image
              alt="jeep"
              src={"/assets/images/landing/jeep.png"}
              width={150}
              height={150}
              className="w-auto h-auto"
            />
          </div>
        </div>

        {serviceConfig.map((service: ServiceConfigType) => (
          <div
            key={service.id}
            className={`flex ${service.id % 2 === 0 ? "justify-end" : "justify-start"
              } items-center w-full h-screen`}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;

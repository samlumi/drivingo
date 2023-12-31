import {useTheme} from "next-themes";
import Image from "next/image";
import {useEffect, useState} from "react";

import {vendorConfig} from "@/config/landing";

const VendorSection = () => {
  const {theme} = useTheme();
  const [backGradient, setBackGradient] = useState("white");

  useEffect(() => {
    setBackGradient(theme === "dark" ? "#121212" : "white");
  }, [theme]);

  return (
    <div className="flex justify-center py-20">
      <div className="container">
        <div className="vendor-container">
          <div className="vendor-track hidden md:flex">
            {vendorConfig.map((url: string, index: number) => (
              <Image key={index} alt="vendor" src={url} width={240} height={120} className="mx-12"/>
            ))}
          </div>

          <div className="vendor-track-mobile flex md:hidden">
            {vendorConfig.map((url: string, index: number) => (
              <Image key={index} alt="vendor" src={url} width={120} height={60} className="mx-2"/>
            ))}
          </div>

          <span
            className="absolute top-0 left-0 w-1/3 h-full"
            style={{background: `linear-gradient(to right, ${backGradient}, transparent)`}}
          />

          <span
            className="absolute top-0 right-0 w-1/3 h-full"
            style={{background: `linear-gradient(to left, ${backGradient}, transparent)`}}
          />
        </div>
      </div>

      <style jsx>{`
        .vendor-container {
          position: relative;
          width: 100%;
          padding: 24px 0;
          overflow: hidden;
        }

        .vendor-track {
          width: 4704px;
          animation: vendor_slide 40s linear infinite;
        }

        .vendor-track-mobile {
          width: 1904px;
          animation: vendor_mobile_slide 30s linear infinite;
        }

        @keyframes vendor_slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-3024px);
          }
        }

        @keyframes vendor_mobile_slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-1224px);
          }
        }
      `}</style>
    </div>
  );
};

export default VendorSection;

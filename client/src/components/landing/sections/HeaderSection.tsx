import { useTheme } from "next-themes";
import { createRef, useEffect, useState } from "react";

import ArrowLeftIcon from "@/components/shared/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/components/shared/icons/ArrowRightIcon";
import { carouselConfig } from "@/config/landing";
import { CarouselConfigType } from "@/types/config";

const HeaderSection = () => {
  const { theme } = useTheme();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [coverGradient, setCoverGradient] = useState(
    "linear-gradient(to bottom, rgba(255, 196, 1, 0.5), transparent)"
  );

  const slide1Ref = createRef<any>();
  const slide2Ref = createRef<any>();
  const slide3Ref = createRef<any>();

  const refs: any = [slide1Ref, slide2Ref, slide3Ref];

  const movePrevSlide = () => {
    setCarouselIndex(carouselIndex <= 0 ? 2 : carouselIndex - 1);
  };

  const moveNextSlide = () => {
    setCarouselIndex(carouselIndex >= 2 ? 0 : carouselIndex + 1);
  };

  useEffect(() => {
    setCoverGradient(
      `linear-gradient(to bottom, ${theme === "dark" ? "rgba(128, 23, 1, 0.5)" : "rgba(255, 196, 1, 0.5)"
      }, transparent)`
    );
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(
      () => setCarouselIndex(carouselIndex >= 2 ? 0 : carouselIndex + 1),
      7000
    );

    return () => clearInterval(interval);
  }, [carouselIndex]);

  useEffect(() => {
    const updateScroll = () => {
      let windowScrollTop = window.pageYOffset / 3;

      if (slide1Ref.current) {
        slide1Ref.current.style.transform = "translate3d(0," + windowScrollTop * 2 + "px,0)";
        slide2Ref.current.style.transform = "translate3d(0," + windowScrollTop * 2 + "px,0)";
        slide3Ref.current.style.transform = "translate3d(0," + windowScrollTop * 2 + "px,0)";
      }
    };
    window.addEventListener("scroll", updateScroll);

    return function cleanup() {
      window.removeEventListener("scroll", updateScroll);
    };
  });

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {carouselConfig.map((carousel: CarouselConfigType, index: number) => (
          <div key={carousel.id} ref={refs[index]} className="absolute top-0 left-0 w-full h-full">
            <div
              key={carousel.id}
              className={`carousel-slide ${carouselIndex !== index && "active"}`}
              style={{ backgroundImage: carousel.image, backgroundPosition: "center" }}
            >
              <span
                className="absolute top-0 left-0 w-full h-full"
                style={{ background: coverGradient }}
              />
            </div>
          </div>
        ))}

        <div className="absolute top-0 right-0 w-full h-full">
          {carouselConfig.map((carousel: CarouselConfigType, index: number) => (
            <div
              key={carousel.id}
              className="flex flex-col justify-center items-center font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <h5
                className={`relative text-md md:text-2xl text-center transition-all duration-1000 ${
                  carouselIndex !== index && "scale-50 opacity-0"
                }`}
              >
                {carousel.title1}
              </h5>

              <h1
                className={`relative text-3xl md:text-5xl text-center my-6 leading-snug transition-all duration-1000 ${
                  carouselIndex !== index && "translate-y-8 opacity-0"
                }`}
              >
                {carousel.title2}
              </h1>
            </div>
          ))}

          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 border-none rounded-full outline-none p-4 transition"
            onClick={movePrevSlide}
          >
            <ArrowLeftIcon size={56} />
          </button>

          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 border-none rounded-full outline-none p-4 transition"
            onClick={moveNextSlide}
          >
            <ArrowRightIcon size={56} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: all 2s;
          background-size: cover;
        }

        .carousel-slide.active {
          transform: scale(1.2);
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default HeaderSection;

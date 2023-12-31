import Image from "next/image";
import { useEffect, useRef } from "react";

const LoadingSplash = (props: { loaded?: boolean }) => {
  const { loaded } = props;
  const splashRef = useRef<any>(null);

  useEffect(() => {
    if (loaded) {
      const timeout = setTimeout(() => {
        splashRef.current.style.display = "none";
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [loaded]);

  return (
    <>
      <div
        ref={splashRef}
        className={`flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-white dark:bg-secondary z-50 ${
          loaded && "fade-out"
        }`}
      >
        <Image alt="logo" src={"/assets/images/logo-small.png"} width={128} height={128} priority />

        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <style jsx>{`
        .lds-ellipsis {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }

        .lds-ellipsis div {
          position: absolute;
          top: 33px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #f56200;
          animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }

        .lds-ellipsis div:nth-child(1) {
          left: 8px;
          animation: lds-ellipsis1 0.6s infinite;
        }

        .lds-ellipsis div:nth-child(2) {
          left: 8px;
          animation: lds-ellipsis2 0.6s infinite;
        }

        .lds-ellipsis div:nth-child(3) {
          left: 32px;
          animation: lds-ellipsis2 0.6s infinite;
        }

        .lds-ellipsis div:nth-child(4) {
          left: 56px;
          animation: lds-ellipsis3 0.6s infinite;
        }

        .fade-out {
          animation: fade-out-anim 1.5s forwards;
        }

        @keyframes lds-ellipsis1 {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes lds-ellipsis3 {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(0);
          }
        }

        @keyframes lds-ellipsis2 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(24px, 0);
          }
        }

        @keyframes fade-out-anim {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default LoadingSplash;

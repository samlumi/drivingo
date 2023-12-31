import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ThemeToggler from "@/components/shared/ThemeToggler";
import { menuConfig } from "@/config/navbar";
import { NavbarMenu } from "@/types/config";

const Navbar = () => {
  const { activeTab } = useSelector(({ landing }) => landing);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleSubMenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 28) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <div className={`top-0 left-0 w-full flex justify-center p-4 z-50 ${sticky ? "!fixed !z-[9999] !bg-primary !bg-opacity-50 dark:!bg-dark dark:!bg-opacity-50 shadow-sticky px-4 py-2 backdrop-blur-md" : "absolute"}`}>
      <div className="flex justify-between items-center container">
        <div className="flex justify-center items-center">
          <Link href={"/"}>
            <Image alt="logo" src={"/assets/images/logo-white.png"} width={120} height={40} className="w-auto h-auto" priority />
          </Link>
          <ThemeToggler />
        </div>

        <div className="flex items-center px-4">
          <div>
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${navbarOpen ? "top-[7px] rotate-45" : " "}`} />
              <span className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${navbarOpen ? "opacity-0 " : " "}`} />
              <span className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${navbarOpen ? "top-[-8px] -rotate-45" : " "}`} />
            </button>

            <nav
              id="navbarCollapse"
              className={`navbar absolute right-0 z-30 w-[250px] rounded py-4 px-6 mx-4 md:mx-0 duration-300 bg-primary dark:bg-dark lg:bg-opacity-0 lg:dark:bg-opacity-0 dark:border-body-color/20 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen ? "visibility top-full opacity-100" : "invisible top-[120%] opacity-0"}`}
            >
              <ul className="block lg:flex">
                {menuConfig.map((menuItem: NavbarMenu, index: number) => (
                  <li key={menuItem.id} className="group relative">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`flex px-4 py-2 rounded-md font-bold text-base ${menuItem.id === activeTab ? "text-primary bg-white" : "text-white"} uppercase group-hover:opacity-70 lg:inline-flex lg:px-8 lg:py-4`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <a
                          onClick={() => handleSubMenu(index)}
                          className="flex cursor-pointer items-center justify-between font-bold font-primary uppercase py-2 text-base text-primary group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                        >
                          {menuItem.title}
                          <span className="pl-3">
                            <svg width="15" height="14" viewBox="0 0 15 14">
                              <path
                                d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </a>

                        <div
                          className={`submenu font-bold font-primary relative top-full left-0 rounded-md transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                            }`}
                        >
                          {menuItem.subMenu?.map((submenuItem) => (
                            <Link
                              href={submenuItem.path ? submenuItem.path : ""}
                              key={submenuItem.id}
                              className="block rounded py-2.5 text-sm text-primary hover:opacity-70 dark:text-white lg:px-3"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

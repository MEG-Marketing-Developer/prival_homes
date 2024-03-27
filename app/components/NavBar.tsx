"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header
      className={`relative  ${pathname === "/" ? "bg-white" : "bg-[#ECECEC]"} ${
        isMobileMenuOpen ? "bg-white" : ""
      }`}
    >
      <div className="absolute bg-white w-[100%] navBar-clip-path -bottom-1 h-[6.25rem] "></div>
      <div className="sticky top-0 z-10  text-white  ">
        <section
          className={`container mx-auto flex items-center  pb-3 pt-10  sm:px-6 ${
            isMobileMenuOpen ? "justify-end" : "justify-between"
          }`}
        >
          {isMobileMenuOpen ? (
            ""
          ) : (
            <h1 className="">
              <Link href={"/"}>
                <img
                  src={"/images/navBar/logo.svg"}
                  className="pb-4 w-32 2xl:w-36"
                />
              </Link>
            </h1>
          )}
          <div>
            <button
              onClick={toggleMenu}
              className="relative h-8 w-8 cursor-pointer text-3xl lg:hidden "
            >
              {!isMobileMenuOpen ? (
                <div className="text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
              ) : (
                <div className="text-black ">
                  <IoClose />
                </div>
              )}
            </button>
            <nav
              className={`hidden 
              md:space-x-6 lg:space-x-14 2xl:space-x-24
              md:text-[1rem] 2xl:text-lg
              lg:block ${isMobileMenuOpen ? "hidden" : "flex"}`}
              aria-label="main"
            >
              <Link
                className="hover:opacity-90  main-color font-blissful "
                href={"/about-us"}
              >
                ABOUT US
              </Link>
              <Link
                href={"/why-us"}
                className="hover:opacity-90   main-color font-blissful "
              >
                WHY US
              </Link>
              <Link
                href={"/properties"}
                className="hover:opacity-90  main-color  font-blissful "
              >
                PROPERTIES
              </Link>
              <Link
                href={"/host-with-us"}
                className="hover:opacity-90  main-color  font-blissful "
              >
                HOST WITH US
              </Link>
              <Link
                href={"/contact-us"}
                className="hover:opacity-90  main-color  font-blissful "
              >
                CONTACT US
              </Link>
            </nav>
          </div>
        </section>
        <section
          id="mobile-menu"
          className={`clip-path-bottom top-36 justify-center transition-all duration-300 absolute -mt-[66px] ${
            isMobileMenuOpen ? "flex" : "hidden"
          } w-full flex-col bg-white text-xl lg:hidden`}
        >
          <nav
            className="flex flex-col items-center  min-h-screen  pt-8 pb-14 px-12 text-2xl tracking-wide"
            aria-label="mobile"
          >
            <Link
              onClick={toggleMenu}
              href={"/about-us"}
              className="w-full flex justify-between py-6  hover:opacity-90 text-[#47664D] font-blissful"
            >
              <span>ABOUT US</span>
              <div className="text-black">
                <IoIosArrowForward />
              </div>
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/why-us"}
              className="w-full py-6 flex justify-between text-center  hover:opacity-90 text-[#47664D] font-blissful"
            >
              <span>WHY US</span>
              <div className="text-black">
                <IoIosArrowForward />
              </div>
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/properties"}
              className="w-full py-6 flex justify-between text-center  hover:opacity-90 text-[#47664D] font-blissful"
            >
              <span>PROPERTIES</span>
              <div className="text-black">
                <IoIosArrowForward />
              </div>
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/host-with-us"}
              className="w-full py-6 flex justify-between text-center  hover:opacity-90 text-[#47664D] font-blissful"
            >
              <span>HOST WITH US</span>
              <div className="text-black">
                <IoIosArrowForward />
              </div>
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/contact-us"}
              className="w-full py-6 flex justify-between text-center  hover:opacity-90 text-[#47664D] font-blissful"
            >
              <span>CONTACT US</span>
              <div className="text-black">
                <IoIosArrowForward />
              </div>
            </Link>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default NavBar;

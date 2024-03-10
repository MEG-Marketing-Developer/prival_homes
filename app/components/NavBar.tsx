"use client";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="relative bg-[#ECECEC]">
      <div className="absolute bg-white w-[100%] navBar-clip-path bottom-0 h-[150px] "></div>
      <div className="container mx-auto sticky top-0 z-10  text-white  ">
        <section className="container mx-auto flex items-center justify-between pb-20 pt-12 px-6">
          <h1 className="text-3xl font-medium">
            <Link href={"/"}>
              <img src={"/images/navBar/logo.svg"} className="pb-4" />
            </Link>
          </h1>
          <div>
            <button
              id="hamburger-button"
              onClick={toggleMenu}
              className="relative h-8 w-8 cursor-pointer text-3xl md:hidden "
            >
              <div
                className={` absolute top-4 -mt-0.5 h-1 w-8 rounded transition-all duration-500 ${
                  isMobileMenuOpen
                    ? "translate-x-4 -translate-y-3 rotate-45"
                    : ""
                }`}
              >
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
              </div>
            </button>
            <nav
              className={`hidden space-x-8 text-xl md:block ${
                isMobileMenuOpen ? "hidden" : "flex"
              }`}
              aria-label="main"
            >
              <Link
                className="hover:opacity-90 text-[#47664D] text-lg  font-blissful tracking-wide"
                href={"/about-us"}
              >
                ABOUT US
              </Link>
              <Link
                href={"/why-us"}
                className="hover:opacity-90 text-[#47664D] text-lg font-blissful tracking-wide"
              >
                WHY US
              </Link>
              <Link
                href={"/properties"}
                className="hover:opacity-90 text-[#47664D] text-lg  font-blissful tracking-wide"
              >
                PROPERTIES
              </Link>
              <Link
                href={"/host-with-us"}
                className="hover:opacity-90 text-[#47664D] text-lg  font-blissful tracking-wide"
              >
                HOST WITH US
              </Link>
              <Link
                href={"/contact-us"}
                className="hover:opacity-90 text-[#47664D] text-lg  font-blissful tracking-wide"
              >
                CONTACT US
              </Link>
            </nav>
          </div>
        </section>
        <section
          id="mobile-menu"
          className={`top-68 justify-center absolute -mt-[66px] ${
            isMobileMenuOpen ? "flex" : "hidden"
          } w-full origin-top animate-open-menu flex-col bg-white text-xl`}
        >
          <nav
            className="flex min-h-screen flex-col items-center py-8"
            aria-label="mobile"
          >
            <Link
              onClick={toggleMenu}
              href={"/about-us"}
              className="w-full flex justify-between py-6 px-3 hover:opacity-90 text-[#47664D] font-blissful"
            >
              <span>ABOUT US</span>
              <div className="text-black">
                <IoIosArrowDropright />
              </div>
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/why-us"}
              className="w-full py-6 flex justify-between text-center px-3 hover:opacity-90 text-[#47664D] font-blissful"
            >
              <span>WHY US</span>
              <div className="text-black">
                <IoIosArrowDropright />
              </div>
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/properties"}
              className="w-full py-6 flex justify-between text-center px-3 hover:opacity-90 text-[#47664D] font-blissful"
            >
              <span>PROPERTIES</span>
              <div className="text-black">
                <IoIosArrowDropright />
              </div>
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/host-with-us"}
              className="w-full py-6 flex justify-between text-center px-3 hover:opacity-90 text-[#47664D] font-blissful"
            >
              <span>HOST WITH US</span>
              <div className="text-black">
                <IoIosArrowDropright />
              </div>
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/contact-us"}
              className="w-full py-6 flex justify-between text-center px-3 hover:opacity-90 text-[#47664D] font-blissful"
            >
              <span>CONTACT US</span>
              <div className="text-black">
                <IoIosArrowDropright />
              </div>
            </Link>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default NavBar;

"use client";
import Link from "next/link";
import profile from "../../public/images/propertyDetails/icons/profile.svg";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import burgerIcon from "@/public/images/home/burgerIcon.svg";
import Image from "next/image";
import User from "./User";

const NavBar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [profileIsOpen, setProfileOpen] = useState(false);
  const user = false;

  
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileIsOpen);
    console.log(profileIsOpen);
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ">
      <header
        className={`relative  ${pathname != "/" && "h-40"}  ${
          pathname === "/" ? "bg-white" : "bg-[#ECECEC]"
        } ${isMobileMenuOpen ? "bg-white" : ""}`}
      >
        <div className="absolute bg-white w-[100%] navBar-clip-path -bottom-1 h-[6.25rem] "></div>
        <div className="sticky top-0 z-10  text-white  ">
          <section
            className={`container mx-auto sm:px-[90px] 2xl:px-[160px] flex items-center  pb-3 pt-10 px-[5px]  ${
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
                    className="pb-4 w-[90px] lg:w-[100px] xl:w-[130px] text-yellow-400"
                  />
                </Link>
              </h1>
            )}
            <div className="flex gap-1">
              <button
                onClick={toggleMenu}
                className="relative h-8 w-8 cursor-pointer text-3xl lg:hidden "
              >
                {!isMobileMenuOpen ? (
                  <div className="text-black ">
                    <Image src={burgerIcon} alt="burgerIcon" />
                  </div>
                ) : (
                  <div className="text-black ">
                    <IoClose />
                  </div>
                )}
              </button>
              {!isMobileMenuOpen && (
                <div>
                  <span
                    onClick={toggleProfile}
                    className="lg:hidden inline-flex justify-center  items-center align-middle xl:gap-1 cursor-pointer"
                  >
                    <Image
                      src={profile}
                      alt="profile"
                      className="w-6 2xl:w-7"
                    />
                    {profileIsOpen ? (
                      <IoIosArrowDown
                        color="green"
                        className="text-lg xl:text-xl "
                      />
                    ) : (
                      <IoIosArrowForward
                        color="green"
                        className="text-lg xl:text-xl"
                      />
                    )}
                  </span>
                </div>
              )}
              <nav
                className={`hidden 
              md:space-x-6 lg:space-x-10 
              xl:space-x-14 
              lg:text-[14px]
              2xl:space-x-16 2xl:text-[18px]
              font-blissful tracking-[1.5px]
              mt-4
              lg:block 
              ${isMobileMenuOpen ? "hidden" : "flex"}`}
                aria-label="main"
              >
                <Link
                  className="hover:opacity-90  main-color "
                  href={"/about-us"}
                >
                  ABOUT US
                </Link>
                <Link
                  href={"/why-us"}
                  className="hover:opacity-90   main-color  "
                >
                  WHY US
                </Link>
                <Link
                  href={"/properties"}
                  className="hover:opacity-90  main-color   "
                >
                  PROPERTIES
                </Link>
                <Link
                  href={"/partner-with-us"}
                  className="hover:opacity-90  main-color   "
                >
                  PARTNER WITH US
                </Link>
                <Link
                  href={"/contact-us"}
                  className="hover:opacity-90  main-color   "
                >
                  CONTACT US
                </Link>
                {user && (
                  <span
                    onClick={toggleProfile}
                    className="inline-flex justify-center items-center align-middle xl:gap-1 cursor-pointer"
                  >
                    <Image
                      src={profile}
                      alt="profile"
                      className="w-6 2xl:w-7"
                    />
                    {profileIsOpen ? (
                      <IoIosArrowDown
                        color="green"
                        className="text-lg xl:text-xl "
                      />
                    ) : (
                      <IoIosArrowForward
                        color="green"
                        className="text-lg xl:text-xl"
                      />
                    )}
                  </span>
                )}
              </nav>
            </div>
          </section>
          <section
            id="mobile-menu"
            className={`clip-path-bottom top-36 justify-center transition-all duration-300 absolute -mt-[66px]    ${
              isMobileMenuOpen ? "flex" : "hidden"
            } w-full flex-col bg-white lg:hidden`}
          >
            <nav
              className="flex flex-col items-center  min-h-screen 
             pt-8 pb-14 px-12 text-xl font-blissful tracking-[1.5px]"
              aria-label="mobile"
            >
              <Link
                onClick={toggleMenu}
                href={"/about-us"}
                className="w-full flex justify-between py-6  hover:opacity-90 main-color"
              >
                <span>ABOUT US</span>
                <div className="text-black">
                  <IoIosArrowForward />
                </div>
              </Link>
              <Link
                onClick={toggleMenu}
                href={"/why-us"}
                className="w-full py-6 flex justify-between text-center  hover:opacity-90 main-color"
              >
                <span>WHY US</span>
                <div className="text-black">
                  <IoIosArrowForward />
                </div>
              </Link>
              <Link
                onClick={toggleMenu}
                href={"/properties"}
                className="w-full py-6 flex justify-between text-center  hover:opacity-90 main-color"
              >
                <span>PROPERTIES</span>
                <div className="text-black">
                  <IoIosArrowForward />
                </div>
              </Link>
              <Link
                onClick={toggleMenu}
                href={"/partner-with-us"}
                className="w-full py-6 flex justify-between text-center  hover:opacity-90 main-color"
              >
                <span>PARTNER WITH US</span>
                <div className="text-black">
                  <IoIosArrowForward />
                </div>
              </Link>
              <Link
                onClick={toggleMenu}
                href={"/contact-us"}
                className="w-full py-6 flex justify-between text-center  hover:opacity-90 main-color"
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
      {profileIsOpen && (
        <div ref={buttonRef} className="absolute z-50 w-full -mt-1">
          <User onTranslate={(bool) => setProfileOpen(bool)} />
        </div>
      )}
    </div>
  );
};

export default NavBar;

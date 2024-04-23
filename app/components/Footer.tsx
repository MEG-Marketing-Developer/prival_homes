import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import foot from "@/public/images/footer/footerLogo.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className=" bg-[#3B543C] footer-clip-path pt-10 mt-10 sm:px-8">
      <div className="container mx-auto py-10 sm:px-[90px] 2xl:px-[160px] ">
        <div className="sm:flex justify-end">
          <div className="ml-32 sm:ml-0 flex gap-12 sm:gap-x-28 mb-5 ">
            <nav className="text-white">
              <h4 className="mb-3 text-[.6rem] sm:text-xl lg:text-3xl whitespace-nowrap">
                know more
              </h4>
              <div className="flex flex-col">
                <Link
                  href={"/about-us"}
                  className="link link-hover mb-1 sm:text-lg lg:text-xl text-[.5rem] "
                >
                  About us
                </Link>
                <Link
                  href={"/host-with-us"}
                  className="link link-hover  mb-1 sm:text-lg lg:text-xl text-[.5rem] "
                >
                  Host with us
                </Link>
                <Link
                  href={"/contact-us"}
                  className="link link-hover mb-1 sm:text-lg lg:text-xl text-[.5rem] "
                >
                  Contact
                </Link>
              </div>
            </nav>
            <nav className="text-white">
              <h4 className="mb-3 text-[.6rem] sm:text-xl lg:text-3xl whitespace-nowrap">
                Information
              </h4>
              <div className="flex flex-col">
                <Link
                  href={"/conditions"}
                  className="link link-hover mb-1 sm:text-lg lg:text-xl text-[.5rem] "
                >
                  Terms & Conditions
                </Link>
                <Link
                  href={"/privacypolicy"}
                  className="link link-hover mb-1 sm:text-lg lg:text-xl text-[.5rem] "
                >
                  Privacy Policy
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <aside className="container ">
            <Link href={"/"}>
              <Image
                src={foot}
                alt="footer-img"
                className="pb-4 w-12 sm:w-28"
              />
            </Link>
            <p className="text-white text-[.4rem] sm:text-[.9rem] whitespace-nowrap w-[230px]">
              Prival Holiday Homes LLC Copyright © 2024 all rights reserved
            </p>
          </aside>
          <div className="container flex gap-3 justify-end sm:mr-8">
            <FaXTwitter
              color="#3f5640"
              className="bg-[white] rounded-md w-[18px] h-[18px] sm:w-[35px] sm:h-[35px] sm:p-2 p-1"
            />
            <FaLinkedin
              color="#3f5640"
              className="bg-[white] rounded-md w-[18px] h-[18px] sm:w-[35px] sm:h-[35px] sm:p-2 p-1"
            />
            <FaInstagram
              color="#3f5640"
              className="bg-[white] rounded-md w-[18px] h-[18px] sm:w-[35px] sm:h-[35px] sm:p-2 p-1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

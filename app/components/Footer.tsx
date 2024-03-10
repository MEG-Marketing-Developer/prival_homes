import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className=" bg-[#3B543C] footer-clip-path">
      <div className="md:flex container mx-auto justify-between py-10 px-6 bg-[#3B543C] text-base-content">
        <aside className="mt-24 md:mt-20">
          <h1 className="text-3xl font-medium mb-5">
            <Link href={"/"}>
              <img src={"/images/footer/footerLogo.svg"} className="pb-4" />
            </Link>
          </h1>
          <p className="text-white">
            Prival Holiday Homes LLC Copyright © 2024 All rights reserved
          </p>
        </aside>
        <div className="flex flex-col gap-y-7 mt-6">
          <div className="flex gap-10">
            <nav className="text-white">
              <h6 className="text-xl md:text-3xl mb-3">know more</h6>
              <div className="flex flex-col">
                <Link href={"/about-us"} className="link link-hover  mb-3 ">
                  About us
                </Link>
                <Link href={"/host-with-us"} className="link link-hover  mb-3">
                  Host with us
                </Link>
                <Link href={"/contact-us"} className="link link-hover mb-3 ">
                  Contact
                </Link>
              </div>
            </nav>
            <nav className="text-white">
              <h6 className="text-xl md:text-3xl mb-3">Information</h6>
              <p className="mb-3">Terms & Conditions</p>
              <p className="mb-3 ">Privacy Policy</p>
            </nav>
          </div>
          <div className="container flex gap-3 justify-end">
            <FaLinkedin size={45} color="white" />
            <FaInstagram size={45} color="white" />
            <FaXTwitter size={45} color="white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

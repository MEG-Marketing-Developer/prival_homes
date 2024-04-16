import React from "react";
import aboutImg from "@/public/images/aboutUs/about-us.svg";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div className="bg-white mb-40">
      <div className="container mx-auto">
        <h3 className="main-color mt-20  mb-4 ">About Us</h3>
        <p className="mb-6 text-gray-500 sm:text-[#161615]">
          Prival excels as a vacation home rental company, harmonizing property
          portfolios with facility management and operational partners for a
          streamlined and effective approach.
        </p>
        <div className="relative h-[180px] sm:h-[700px] w-[100%] rounded-xl">
          <Image
            src={aboutImg}
            alt="about-img"
            fill
            priority
            quality={75}
            className="object-cover rounded-xl "
          />
        </div>
        <h3 className="main-color mt-10 mb-4 ">Vacation Homes Rental</h3>
        <p className="mb-6 text-gray-500 sm:text-[#161615]">
          Vacation home rental involves shorter leases on furnished units,
          transforming your property into a hotel apartment and yielding higher
          profitability.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

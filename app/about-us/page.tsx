import React from "react";
import aboutImg from "@/public/images/aboutUs/about-us.svg";
import Image from "next/image";
const AboutUsPage = () => {
  return (
    <div className="bg-white mb-40 sm:px-8">
      <div className="container mx-auto sm:px-[90px] 2xl:px-[160px]">
        <h3
          className="main-color mt-20  mb-4 font-blissful 
        xl:tracking-[5px] tracking-[2.5px] text-[17px] md:text-[25px] lg:text-[30px] 2xl:text-[50px]
        "
        >
          About Us
        </h3>
        <p
          className="mb-6 text-gray-500 sm:text-[#161615] text-[12px] sm:text-[16px] lg:text-[18px] xl:text-[28px] 
              leading-[1.4]"
        >
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
        <h3
          className="main-color mt-10 mb-4 font-blissful 
        xl:tracking-[5px] tracking-[2.5px] text-[17px] md:text-[25px] lg:text-[30px] 2xl:text-[50px]"
        >
          Vacation Homes Rental
        </h3>
        <p
          className="mb-6 text-gray-500 sm:text-[#161615] text-[12px] sm:text-[16px] lg:text-[18px] xl:text-[28px] 
              leading-[1.4]"
        >
          Vacation home rental involves shorter leases on furnished units,
          transforming your property into a hotel apartment and yielding higher
          profitability.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;

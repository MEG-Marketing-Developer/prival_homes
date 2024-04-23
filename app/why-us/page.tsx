import Image from "next/image";
import React from "react";
import whyUs1 from "@/public/images/whyUs/whyUs1.svg";
import whyUs2 from "@/public/images/whyUs/whyUs2.svg";
import whyUs3 from "@/public/images/whyUs/whyUs3.svg";
import whyUs4 from "@/public/images/whyUs/whyUs4.svg";
const WhyUs = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto my-20 sm:px-[90px] 2xl:px-[160px]">
        <h3
          data-aos="fade-up"
          className="font-blissful main-color mt-20 mb-4 xl:tracking-[5px] tracking-[2.5px] text-[17px] md:text-[25px] lg:text-[30px] 2xl:text-[50px]"
        >
          Why Us
        </h3>
        <p
          data-aos="fade-up"
          className="mb-6 text-[12px] sm:text-[16px] lg:text-[18px] xl:text-[28px] 
             text-gray-500 sm:text-[#161615] leading-[1.4]"
        >
          Prival excels as a vacation home rental company, harmonizing property
          portfolios with facility management and operational partners for a
          streamlined and effective approach.
        </p>
        <div className="flex flex-col gap-10">
          <div
            className="flex justify-around items-start 
          lg:justify-start lg:gap-x-10 lg:py-10 lg:px-16
           rounded-lg bg-[#eee] p-4"
          >
            <figure
              data-aos="fade-right"
              className="relative h-[100px] min-w-[125px] max-w-[125px]
            sm:h-[380px] sm:min-w-[540px] sm:max-w-[540px] 
            
            xl:h-[400px] xl:min-w-[600px] xl:max-w-[600px]"
            >
              <Image
                src={whyUs1}
                alt="street"
                fill
                className="object-cover rounded-lg max-w-[100%]"
              />
            </figure>
            <div className="divider divider-horizontal"></div>
            <div data-aos="fade-left">
              <h3 className="main-color my-2  text-[.6875rem] lg:text-5xl lg:mb-6">
                Local Living Experience
              </h3>
              <p className=" text-[#1D1D1B] text-[.5625rem] lg:text-2xl">
                Blend with the Local
              </p>
            </div>
          </div>
          <div
            className="flex justify-around items-start 
          lg:justify-start lg:gap-x-10 lg:py-10 lg:px-16
           rounded-lg bg-[#eee] p-4"
          >
            <figure
              data-aos="fade-right"
              className="relative h-[100px] min-w-[125px] max-w-[125px] 
            sm:h-[380px] sm:min-w-[540px] sm:max-w-[540px] 
            xl:h-[400px] xl:min-w-[600px] xl:max-w-[600px]"
            >
              <Image
                src={whyUs2}
                alt="street"
                fill
                className="object-cover rounded-lg max-w-[100%]"
              />
            </figure>
            <div className="divider divider-horizontal"></div>
            <div data-aos="fade-left">
              <h3 className="main-color my-2  text-[.6875rem]  lg:text-5xl lg:mb-6">
                Luxury Services for Guests
              </h3>
              <p className=" text-[#1D1D1B] text-[.5625rem] lg:text-2xl">
                Partnered with leaders in the market of Vacation Homes Rental
              </p>
            </div>
          </div>
          <div
            className="flex justify-around items-start 
          lg:justify-start lg:gap-x-10 lg:py-10 lg:px-16
           rounded-lg bg-[#eee] p-4"
          >
            <figure
              data-aos="fade-right"
              className="relative h-[100px] min-w-[125px] max-w-[125px]
            sm:h-[380px] sm:min-w-[540px] sm:max-w-[540px] 
            xl:h-[400px] xl:min-w-[600px] xl:max-w-[600px]"
            >
              <Image
                src={whyUs3}
                alt="street"
                fill
                className="object-cover rounded-lg max-w-[100%]"
              />
            </figure>
            <div className="divider divider-horizontal"></div>
            <div data-aos="fade-left">
              <h3 className="main-color my-2  text-[.6875rem]  lg:text-5xl lg:mb-6">
                Stress Free
              </h3>
              <p className=" text-[#1D1D1B] text-[.5625rem] lg:text-2xl">
                Taking care of everything from managing all the properties to
                handling guests
              </p>
            </div>
          </div>
          <div
            className="flex justify-around items-start 
          lg:justify-start lg:gap-x-10 lg:py-10 lg:px-16
           rounded-lg bg-[#eee] p-4"
          >
            <figure
              data-aos="fade-right"
              className="relative h-[100px] min-w-[125px] max-w-[125px] 
            sm:h-[380px] sm:min-w-[540px] sm:max-w-[540px] 
            xl:h-[400px] xl:min-w-[600px] xl:max-w-[600px]"
            >
              <Image
                src={whyUs4}
                alt="street"
                fill
                className="object-cover rounded-lg max-w-[100%]"
              />
            </figure>
            <div className="divider divider-horizontal"></div>
            <div data-aos="fade-left">
              <h3 className="main-color my-2  text-[.6875rem]  lg:text-5xl lg:mb-6">
                Having Control
              </h3>
              <p className=" text-[#1D1D1B] text-[.5625rem] lg:text-2xl">
                Having control of your home on dates that you would like to
                stay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

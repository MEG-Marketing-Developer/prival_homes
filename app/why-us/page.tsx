import Image from "next/image";
import React from "react";
import whyUs1 from "@/public/images/whyUs/whyUs1.jpg";
import whyUs2 from "@/public/images/whyUs/whyUs2.jpg";
import whyUs3 from "@/public/images/whyUs/whyUs3.jpg";
import whyUs4 from "@/public/images/whyUs/whyUs4.jpg";
const WhyUs = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto my-20">
        <h1 className="main-color mt-20 px-4 mb-4 text-[45px] md:text-[55px]">
          Why Us
        </h1>
        <p className="mb-6 text-3xl px-4 md:text-2xl leading-10">
          Prival excels as a vacation home rental company, harmonizing property
          portfolios with facility management and operational partners for a
          streamlined and effective approach.
        </p>
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 rounded-2xl bg-[#eee] p-10">
            <figure className="relative gap-5 md:flex  h-[400px]">
              <Image
                src={whyUs1}
                alt="street"
                className="object-cover rounded-xl"
              />
            </figure>
            <div className="px-12 py-4">
              <h1 className="main-color mb-6 text-[45px] md:text-[50px]">
                Local Living Experience
              </h1>
              <p className="text-4xl text-[#1D1D1B]">Blend with the Local</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 rounded-2xl bg-[#eee] p-10">
            <figure className="relative gap-5 md:flex h-[400px]">
              <Image
                src={whyUs2}
                alt="street"
                fill
                className="object-cover rounded-xl"
              />
            </figure>
            <div className="px-12 py-4">
              <h1 className="main-color mb-6 text-[45px] md:text-[50px]">
                Luxury Services for Guests
              </h1>
              <p className="text-4xl text-[#1D1D1B]">
                Partnered with leaders in the market of Vacation Homes Rental
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 rounded-2xl bg-[#eee] p-10">
            <figure className="relative gap-5 md:flex  h-[400px]">
              <Image
                src={whyUs3}
                alt="street"
                className="object-cover rounded-xl"
              />
            </figure>
            <div className="px-12 py-4">
              <h1 className="main-color mb-6 text-[45px] md:text-[50px]">
                Stress Free
              </h1>
              <p className="text-4xl text-[#1D1D1B]">
                Taking care of everything from managing all the properties to
                handling guests
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 rounded-2xl bg-[#eee] p-10">
            <figure className="relative gap-5 md:flex  h-[400px]">
              <Image
                src={whyUs4}
                alt="street"
                className="object-cover rounded-xl"
              />
            </figure>
            <div className="px-12 py-4">
              <h1 className="main-color mb-6 text-[45px] md:text-[50px]">
                Having Control
              </h1>
              <p className="text-4xl text-[#1D1D1B]">
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

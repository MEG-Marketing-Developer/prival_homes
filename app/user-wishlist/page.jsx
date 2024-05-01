"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdBathroom } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { MdBedroomParent } from "react-icons/md";
import prop1 from "@/public/images/properties/prop1.svg";
import prop2 from "@/public/images/properties/prop2.svg";
import prop3 from "@/public/images/properties/prop3.svg";
import prop4 from "@/public/images/properties/prop4.svg";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
const UserWishlistPage = () => {
  const [inWishlist, setAddInWishlist] = useState(true);
  const addToWishlist = () => {
    // handle create a new wishlist for that user
    setAddInWishlist(!inWishlist);
  };
  return (
    <div className="container mx-auto sm:px-[90px] 2xl:px-[160px] py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-10 gap-8">
        <div data-aos="fade-up" className="relative shadow-md max-w-[25rem] ">
          <figure
            onClick={addToWishlist}
            className="absolute text-4xl right-6 top-7 z-40"
          >
            {inWishlist ? <FaHeart color="red" /> : <FaRegHeart />}
          </figure>
          <Link href={"/property-details"}>
            <figure className="relative h-[180px] lg:h-[300px] ">
              <Image
                src={prop1}
                alt="properties"
                fill
                className="object-cover rounded-xl"
              />
            </figure>
          </Link>
          <div className="px-3 py-4">
            <h4 className="text-[15px] lg:text-lg lg:min-h-16">
              Sky-High Living at The Palm Tower - St. Regis
            </h4>
            <div className="flex gap-2 mt-4">
              <div className=" flex bg-[#E6E6E6] justify-center md:justify-start w-full items-center p-2 rounded-md ">
                <span>
                  <MdBedroomParent className="main-color mr-1 md:ml-2 " />
                </span>
                <span className="text-[14px] md:text-xs whitespace-nowrap">
                  1 bedroom
                </span>
              </div>
              <div className=" flex bg-[#E6E6E6] justify-center md:justify-start w-full items-center p-2 rounded-md ">
                <span>
                  <MdBathroom className="main-color mr-1 md:ml-2 " />
                </span>
                <span className="text-[14px] md:text-xs whitespace-nowrap">
                  1 bathroom
                </span>
              </div>
            </div>
            <h4 className=" mt-5 text-xs lg:text-lg">AED 700.00 /Night</h4>
          </div>
        </div>

        <div data-aos="fade-up" className="relative shadow-md max-w-[25rem] ">
          <figure
            onClick={addToWishlist}
            className="absolute text-4xl right-6 top-7 z-40"
          >
            {inWishlist ? <FaHeart color="red" /> : <FaRegHeart />}
          </figure>
          <Link href={"/property-details"}>
            <figure className="relative h-[180px] lg:h-[300px]">
              <Image
                src={prop2}
                alt="properties"
                fill
                className="object-cover rounded-xl"
              />
            </figure>
          </Link>
          <div className="px-3 py-4">
            <h4 className="text-[15px] lg:text-lg lg:min-h-16">
              The Address in Dubai Mall
            </h4>
            <div className="flex gap-2 mt-4">
            <div className=" flex bg-[#E6E6E6] justify-center md:justify-start w-full items-center p-2 rounded-md ">
                <span>
                  <MdBedroomParent className="main-color mr-1 md:ml-2 " />
                </span>
                <span className="text-[14px] md:text-xs whitespace-nowrap">
                  1 bedroom
                </span>
              </div>
              <div className=" flex bg-[#E6E6E6] justify-center md:justify-start w-full items-center p-2 rounded-md ">
                <span>
                  <MdBathroom className="main-color mr-1 md:ml-2 " />
                </span>
                <span className="text-[14px] md:text-xs whitespace-nowrap">
                  1 bathroom
                </span>
              </div>
            </div>
            <h4 className=" mt-5 text-xs lg:text-lg">AED 4,200.00 /Night</h4>
          </div>
        </div>

        <div data-aos="fade-up" className="relative shadow-md max-w-[25rem]">
          <figure
            onClick={addToWishlist}
            className="absolute text-4xl right-6 top-7 z-40"
          >
            {inWishlist ? <FaHeart color="red" /> : <FaRegHeart />}
          </figure>

          <Link href={"/property-details"}>
            <figure className="relative h-[180px] lg:h-[300px] rounded-xl">
              <Image
                src={prop3}
                alt="properties"
                fill
                className="object-cover rounded-xl"
              />
            </figure>
          </Link>

          <div className="px-3 py-4">
            <h4 className="text-[15px] lg:text-lg lg:min-h-16">
              Sky-High Living at The Palm Tower - St. Regis
            </h4>
            <div className="flex gap-2 mt-4">
            <div className=" flex bg-[#E6E6E6] justify-center md:justify-start w-full items-center p-2 rounded-md ">
                <span>
                  <MdBedroomParent className="main-color mr-1 md:ml-2 " />
                </span>
                <span className="text-[14px] md:text-xs whitespace-nowrap">
                  1 bedroom
                </span>
              </div>
              <div className=" flex bg-[#E6E6E6] justify-center md:justify-start w-full items-center p-2 rounded-md ">
                <span>
                  <MdBathroom className="main-color mr-1 md:ml-2 " />
                </span>
                <span className="text-[14px] md:text-xs whitespace-nowrap">
                  1 bathroom
                </span>
              </div>
            </div>
            <h4 className=" mt-5 text-xs lg:text-lg">AED 900.00 /Night</h4>
          </div>
        </div>

        <div data-aos="fade-up" className="relative shadow-md max-w-[25rem]">
          <figure
            onClick={addToWishlist}
            className="absolute text-4xl right-6 top-7 z-40"
          >
            {inWishlist ? <FaHeart color="red" /> : <FaRegHeart />}
          </figure>
          <Link href={"/property-details"}>
            <figure className="relative h-[180px] lg:h-[300px]">
              <Image
                src={prop4}
                alt="properties"
                fill
                className="object-cover rounded-xl"
              />
            </figure>
          </Link>
          <div className="px-3 py-4">
            <h4 className="text-[15px] lg:text-lg lg:min-h-16">
              Sky-High Living at The Palm Tower - St. Regis
            </h4>
            <div className="flex gap-2 mt-4">
            <div className=" flex bg-[#E6E6E6] justify-center md:justify-start w-full items-center p-2 rounded-md ">
                <span>
                  <MdBedroomParent className="main-color mr-1 md:ml-2 " />
                </span>
                <span className="text-[14px] md:text-xs whitespace-nowrap">
                  1 bedroom
                </span>
              </div>
              <div className=" flex bg-[#E6E6E6] justify-center md:justify-start w-full items-center p-2 rounded-md ">
                <span>
                  <MdBathroom className="main-color mr-1 md:ml-2 " />
                </span>
                <span className="text-[14px] md:text-xs whitespace-nowrap">
                  1 bathroom
                </span>
              </div>
            </div>
            <h4 className=" mt-5 text-xs lg:text-lg">AED 6,200.00 /Night</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWishlistPage;

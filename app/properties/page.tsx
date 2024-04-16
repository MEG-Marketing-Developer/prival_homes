"use client";
import Image from "next/image";
import React from "react";
import { MdBathroom } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import map from "@/public/images/properties/map.svg";
import prop1 from "@/public/images/properties/prop1.svg";
import prop2 from "@/public/images/properties/prop2.svg";
import prop3 from "@/public/images/properties/prop3.svg";
import prop4 from "@/public/images/properties/prop4.svg";
const Properties = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto mt-10">
        <form
          className="font-blissful"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex gap-4 md:gap-10  md:flex-nowrap lg:justify-between -mx-[10px] sm:mx-0">
            <label
              data-aos="zoom-in"
              className="input input-bordered  flex items-center text-xs flex-grow bg-[#ECECEA] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                className="grow ml-2 w-[90px] lg:w-full md:text-lg"
                placeholder="Enter The Location"
              />
            </label>
            <div data-aos="zoom-in" className=" md:w-[250px] ">
              <select className="select select-bordered w-full text-xs bg-[#ECECEA] md:text-lg ">
                <option disabled selected>
                  Sort by: Price
                </option>
                <option>$100</option>
                <option>$200</option>
              </select>
              <div className="flex gap-2 items-center mt-5 text-xs">
                <span className="absolute -left-10 sm:relative md:text-lg sm:left-0">
                  Price
                </span>
                <select className="select select-bordered w-20 text-xs md:w-full  md:text-lg bg-[#ECECEA]">
                  <option disabled selected>
                    Min
                  </option>
                  <option>$100</option>
                  <option>$200</option>
                </select>
                <select className="select select-bordered  w-20 text-xs md:w-full md:text-lg bg-[#ECECEA]">
                  <option disabled selected>
                    Max
                  </option>
                  <option>$100</option>
                  <option>$200</option>
                </select>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className=" grid grid-cols-2 md:grid-cols-4 mt-5 gap-5 lg:max-w-[1000px] xl:-mt-10 -mx-[10px] sm:mx-0"
          >
            <select className="select select-bordered text-xs bg-[#ECECEA] md:text-lg ">
              <option disabled selected>
                Property Type
              </option>
              <option>$100</option>
              <option>$200</option>
            </select>
            <select className="select select-bordere text-xs  bg-[#ECECEA] md:text-lg">
              <option disabled selected>
                Location
              </option>
              <option>$100</option>
              <option>$200</option>
            </select>
            <select className="select select-bordere text-xs  bg-[#ECECEA] md:text-lg">
              <option disabled selected>
                Rooms
              </option>
              <option>$100</option>
              <option>$200</option>
            </select>
            <select className="select select-bordere text-xs bg-[#ECECEA] md:text-lg">
              <option disabled selected>
                Bathroom
              </option>
              <option>$100</option>
              <option>$200</option>
            </select>
          </div>
        </form>
        <div>
          <h3 data-aos="fade-right" className="main-color mt-20 ">
            Properties
          </h3>
          <h4 data-aos="fade-right" className="mb-8 text-[.9rem] md:text-2xl">
            Showing 440 results search
          </h4>
        </div>
        <div className=" lg:flex justify-start items-start gap-10  -mx-[10px] sm:mx-0">
          <div
            data-aos="fade-up"
            className="relative h-[600px] mb-8 w-full lg:h-[1100px] md:w-3/4 md:mx-auto lg:w-[45%] order-2"
          >
            <Image
              src={map}
              alt="map"
              fill
              priority
              quality={100}
              className="rounded-3xl object-cover "
            />
          </div>
          <div className="grid grid-cols-2 mb-10 gap-4 md:justify-items-center lg:gap-8 order-1 md:w-3/4 md:mx-auto">
            <div
              data-aos="fade-up"
              className="card  bg-base-100 shadow-xl max-w-[25rem] "
            >
              <figure className="h-[180px] lg:h-[300px]">
                <Image src={prop1} alt="properties" />
              </figure>
              <div className="px-3 py-4">
                <h4 className="text-[.5rem] lg:text-lg">
                  Sky-High Living at The Palm Tower - St. Regis
                </h4>
                <div className="flex gap-2 mt-4">
                  <div className="flex bg-[#E6E6E6] justify-center md:justify-start w-full items-center p-[.1875rem] sm:p-2 rounded-sm ">
                    <span>
                      <MdBedroomParent className="main-color mr-1 md:ml-2 " />
                    </span>
                    <span className="text-[.4rem] md:text-xs whitespace-nowrap">
                      1 bedroom
                    </span>
                  </div>
                  <div className="flex bg-[#E6E6E6] justify-center md:justify-start w-full items-center p-[.1875rem] sm:p-2 rounded-sm">
                    <span>
                      <MdBathroom className="main-color mr-1 md:ml-2 " />
                    </span>
                    <span className="text-[.4rem] md:text-xs whitespace-nowrap">
                      1 bathroom
                    </span>
                  </div>
                </div>
                <h4 className=" mt-5 text-xs lg:text-lg">AED 700.00 /Night</h4>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="card bg-base-100 shadow-xl max-w-[25rem] "
            >
              <figure className="h-[180px] lg:h-[300px]">
                <Image src={prop2} alt="properties" />
              </figure>
              <div className="px-3 py-4">
                <h4 className="text-[.5rem] lg:text-lg">
                  The Address in Dubai Mall
                </h4>
                <div className="flex gap-2 mt-4">
                  <div className="flex bg-[#E6E6E6] justify-center md:justify-start w-full items-center  p-[.1875rem] sm:p-2 rounded-sm ">
                    <span>
                      <MdBedroomParent className="main-color mr-1 md:ml-2 " />
                    </span>
                    <span className="text-[.4rem] md:text-xs whitespace-nowrap">
                      1 bedroom
                    </span>
                  </div>
                  <div className="flex bg-[#E6E6E6] justify-center md:justify-start w-full items-center  p-[.1875rem] sm:p-2 rounded-sm">
                    <span>
                      <MdBathroom className="main-color mr-1 md:ml-2 " />
                    </span>
                    <span className="text-[.4rem] md:text-xs whitespace-nowrap">
                      1 bathroom
                    </span>
                  </div>
                </div>
                <h4 className=" mt-5 text-xs lg:text-lg">
                  AED 4,200.00 /Night
                </h4>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="card bg-base-100 shadow-xl max-w-[25rem] "
            >
              <figure className="h-[180px] lg:h-[300px]">
                <Image src={prop3} alt="properties" />
              </figure>
              <div className="px-3 py-4">
                <h4 className="text-[.5rem] lg:text-lg">
                  Sky-High Living at The Palm Tower - St. Regis
                </h4>
                <div className="flex gap-2 mt-4">
                  <div className="flex bg-[#E6E6E6] justify-center md:justify-start w-full items-center p-[.1875rem] sm:p-2 rounded-sm ">
                    <span>
                      <MdBedroomParent className="main-color mr-1 md:ml-2 " />
                    </span>
                    <span className="text-[.4rem] md:text-xs whitespace-nowrap">
                      1 bedroom
                    </span>
                  </div>
                  <div className="flex bg-[#E6E6E6] justify-center md:justify-start w-full items-center p-[.1875rem] sm:p-2 rounded-sm">
                    <span>
                      <MdBathroom className="main-color mr-1 md:ml-2 " />
                    </span>
                    <span className="text-[.4rem] md:text-xs whitespace-nowrap">
                      1 bathroom
                    </span>
                  </div>
                </div>
                <h4 className=" mt-5 text-xs lg:text-lg">AED 900.00 /Night</h4>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="card bg-base-100 shadow-xl max-w-[25rem] "
            >
              <figure className="h-[180px] lg:h-[300px]">
                <Image src={prop4} alt="properties" />
              </figure>
              <div className="px-3 py-4">
                <h4 className="text-[.5rem] lg:text-lg">
                  Sky-High Living at The Palm Tower - St. Regis
                </h4>
                <div className="flex gap-2 mt-4">
                  <div className="flex bg-[#E6E6E6] justify-center md:justify-start  w-full items-center p-[.1875rem] sm:p-2 rounded-sm ">
                    <span>
                      <MdBedroomParent className="main-color mr-1 md:ml-2" />
                    </span>
                    <span className="text-[.4rem] md:text-xs whitespace-nowrap">
                      1 bedroom
                    </span>
                  </div>
                  <div className="flex bg-[#E6E6E6] justify-center md:justify-start  w-full items-center p-[.1875rem] sm:p-2 rounded-sm">
                    <span>
                      <MdBathroom className="main-color mr-1 md:ml-2 " />
                    </span>
                    <span className="text-[.4rem] md:text-xs whitespace-nowrap">
                      1 bathroom
                    </span>
                  </div>
                </div>
                <h4 className=" mt-5 text-xs lg:text-lg">
                  AED 6,200.00 /Night
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start items-center lg:ml-32 xl:ml-52 2xl:ml-72 lg:-mt-16 ">
          <div
            data-aos="fade-up"
            className="btn w-[200px] lg:w-[300px] lg:text-xl"
          >
            Learn more
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;

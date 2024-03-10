"use client";
import React from "react";
import { MdBathroom } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";

const Properties = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 mt-10">
        <form
          className="font-blissful"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex gap-2 md:gap-10 flex-wrap md:flex-nowrap justify-center">
            <label className="input input-bordered flex items-center grow ">
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
                className="grow ml-2"
                placeholder="Enter The Location"
              />
            </label>
            <div className="">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Sort by: Price
                </option>
                <option>$100</option>
                <option>$200</option>
              </select>
              <div className="flex gap-5 items-center mt-5">
                <span>Price</span>
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Min
                  </option>
                  <option>$100</option>
                  <option>$200</option>
                </select>
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Max
                  </option>
                  <option>$100</option>
                  <option>$200</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-5">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Property Type
              </option>
              <option>$100</option>
              <option>$200</option>
            </select>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Location
              </option>
              <option>$100</option>
              <option>$200</option>
            </select>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Rooms
              </option>
              <option>$100</option>
              <option>$200</option>
            </select>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Bathroom
              </option>
              <option>$100</option>
              <option>$200</option>
            </select>
          </div>
        </form>
        <div>
          <h1 className="main-color mt-20 mb-4 text-[45px] md:text-[55px]">
            Properties
          </h1>
          <h2 className="mb-12 text-3xl md:text-2xl leading-10">
            Showing 440 results search
          </h2>
        </div>
        <div className="mx-10 lg:flex justify-start items-start gap-10">
          <div className=" h-[1200px]">
            <img
              src="/images/properties/map.png"
              className="rounded-xl h-[100%] object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-20 gap-8 ">
            <div className="card bg-base-100 shadow-xl ">
              <figure className="h-[320px]">
                <img src="images/properties/prop1.png" alt="prop" />
              </figure>
              <div className="card-body">
                <h2 className="card-title tracking-wider leading-7">
                  Sky-High Living at The Palm Tower - St. Regis
                </h2>
                <div className="card-actions justify-between mt-2">
                  <div className="badge bg-[#E6E6E6] py-5 px-3 rounded-lg ">
                    <span>
                      <MdBedroomParent className="main-color mr-2 text-3xl" />
                    </span>
                    <h2>1 bedroom</h2>
                  </div>
                  <div className="badge bg-[#E6E6E6] py-5 px-3 rounded-lg">
                    <span>
                      <MdBathroom className="main-color mr-2 text-3xl" />
                    </span>
                    <h2>1 bathroom</h2>
                  </div>
                </div>
                <h1 className="tracking-widest text-2xl mt-2">
                  AED 700.00 /Night
                </h1>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl ">
              <figure className="h-[320px]">
                <img src="images/properties/prop2.png" alt="prop" />
              </figure>
              <div className="card-body">
                <h2 className="card-title tracking-wider leading-7">
                  The Address in Dubai Mall
                </h2>
                <div className="card-actions justify-between mt-2">
                  <div className="badge bg-[#E6E6E6] py-5 px-3 rounded-lg ">
                    <span>
                      <MdBedroomParent className="main-color mr-2 text-3xl" />
                    </span>
                    <h2>1 bedroom</h2>
                  </div>
                  <div className="badge bg-[#E6E6E6] py-5 px-3 rounded-lg">
                    <span>
                      <MdBathroom className="main-color mr-2 text-3xl" />
                    </span>
                    <h2>1 bathroom</h2>
                  </div>
                </div>
                <h1 className="tracking-widest text-2xl mt-2">
                  AED 4,200.00 /Night
                </h1>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl ">
              <figure className="h-[320px]">
                <img src="images/properties/prop3.png" alt="prop" />
              </figure>
              <div className="card-body">
                <h2 className="card-title tracking-wider leading-7">
                  Sky-High Living at The Palm Tower - St. Regis
                </h2>
                <div className="card-actions justify-between mt-2">
                  <div className="badge bg-[#E6E6E6] py-5 px-3 rounded-lg ">
                    <span>
                      <MdBedroomParent className="main-color mr-2 text-3xl" />
                    </span>
                    <h2>1 bedroom</h2>
                  </div>
                  <div className="badge bg-[#E6E6E6] py-5 px-3 rounded-lg">
                    <span>
                      <MdBathroom className="main-color mr-2 text-3xl" />
                    </span>
                    <h2>1 bathroom</h2>
                  </div>
                </div>
                <h1 className="tracking-widest text-2xl mt-2">
                  AED 900.00 /Night
                </h1>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl ">
              <figure className="h-[320px]">
                <img src="images/properties/prop4.png" alt="prop" />
              </figure>
              <div className="card-body">
                <h2 className="card-title tracking-wider leading-7">
                  Sky-High Living at The Palm Tower - St. Regis
                </h2>
                <div className="card-actions justify-between mt-2">
                  <div className="badge bg-[#E6E6E6] py-5 px-3 rounded-lg ">
                    <span>
                      <MdBedroomParent className="main-color mr-2 text-3xl" />
                    </span>
                    <h2>1 bedroom</h2>
                  </div>
                  <div className="badge bg-[#E6E6E6] py-5 px-3 rounded-lg">
                    <span>
                      <MdBathroom className="main-color mr-2 text-3xl" />
                    </span>
                    <h2>1 bathroom</h2>
                  </div>
                </div>
                <h1 className="tracking-widest text-2xl mt-2">
                  AED 6,200.00 /Night
                </h1>
              </div>
            </div>

            <div className="btn">Learn more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;

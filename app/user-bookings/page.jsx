import Image from "next/image";
import React from "react";
import prop5 from "@/public/images/propertyDetails/propDetails5.png";
import Link from "next/link";

const UserBookingsPage = () => {
  return (
    <div className="container mx-auto sm:px-[90px] 2xl:px-[160px] py-14 lg:py-20">
      <div className="flex justify-between items-center">
        <h1 className="text-lg lg:text-4xl font-blissful main-color tracking-widest mb-4">
          Bookings
        </h1>
        <div className="flex justify-center items-center gap-4 font-blissful tracking-widest">
          <span className="text-lg">Filter</span>
          <select className="select bg-[#E7E7E5] w-full max-w-xs tracking-widest">
            <option disabled selected>
              Year
            </option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>React</option>
          </select>
          <select className="select bg-[#E7E7E5] w-full max-w-xs tracking-widest">
            <option disabled selected>
              Month
            </option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>React</option>
          </select>
        </div>
      </div>
      <p className="mt-10 text-xl font-semibold">2024</p>
      <div className="divider divider-start text-xl font-semibold mb-10">
        March
      </div>
      <div className="bg-[#F1F1F1] p-9 rounded-md">
        <h1 className="text-lg main-color font-blissful tracking-widest ml-10 mb-3">
          Booking No : 33211120
        </h1>
        <div className="flex justify-center items-center gap-10">
          <div className="relative max-w-[320px] max-h-[200px] rounded-md">
            <Image
              src={prop5}
              alt="prop5"
              className="object-cover max-h-[200px] rounded-md"
            />{" "}
          </div>
          <div>
            <h1 className="text-lg lg:text-xl font-blissful main-color tracking-widest mb-4">
              Sky-High Living at The Palm Tower - St. Regis
            </h1>
            <div>1 twin single bed | 2 king size bed | 3 bathroom</div>
            <div>2 Night Stay | 1 adult, 3 Children</div>
            <div>(25/03/2023 - 28/03/2024)</div>
            <div className="font-blissful text-lg main-color tracking-widest mt-4">
              AED 1,200 <span> /3 Days</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <Link
              href={"/change-booking"}
              className="text-center text-lg bg-[#D3D3D3] main-color rounded-full xl:min-w-56 tracking-widest  font-blissful py-4"
            >
              CHANGE BOOKING
            </Link>
            <Link
              href={"/booking-details"}
              className="text-center text-lg main-color-bg  text-white rounded-full xl:min-w-56 tracking-widest font-blissful  py-4"
            >
              VIEW DETAILS
            </Link>
            <p className="text-[#A51421] underline ml-8 font-blissful tracking-widest text-lg">
              cancel booking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBookingsPage;

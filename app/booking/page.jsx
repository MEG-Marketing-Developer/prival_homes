import Image from "next/image";
import React from "react";
import prop3 from "@/public/images/propertyDetails/propDetails4.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import google from "@/public/images/propertyDetails/icons/google.svg";
import map from "@/public/images/propertyDetails/icons/map.svg";
const BookingPage = () => {
  return (
    <div className="container mx-auto sm:px-[90px] 2xl:px-[160px] py-10">
      <h1 className="text-lg lg:text-2xl xl:text-4xl font-blissful tracking-widest mb-5">
        Your Booking is confirmed
      </h1>
      <p className=" font-blissful tracking-widest text-sm lg:text-xl lg:pl-1">
        Reservation Code : 2333111
      </p>
      <div className="relative mt-4 rounded-md">
        <Image src={prop3} alt="prop3" className="object-cover rounded-md" />
      </div>
      <h1 className="main-color text-lg lg:text-2xl xl:text-5xl  font-blissful tracking-widest mt-10">
        Summary
      </h1>
      <h2 className=" text-sm lg:text-lg xl:text-3xl  font-blissful tracking-widest mt-10">
        Stay Duration
      </h2>
      <div className="flex justify-between items-center my-4 font-bold">
        <div>
          <p className="text-sm lg:text-lg">
            Mon, 25 Mar 2023 to Wed, 28 Mar 2023 (3 Days)
          </p>
          <div className="text-xs lg:text-lg flex items-center gap-2">
            <span className=" flex items-center">
              Checkin <MdKeyboardArrowRight /> 14:00 |
            </span> 
            <span className=" flex items-center">
               Checkout <MdKeyboardArrowRight /> 12:00
            </span>
          </div>
        </div>
        <span className="text-xs lg:text-lg">AED 1400,00</span>
      </div>

      <div className=" text-sm lg:text-lg  flex justify-between items-center mb-2">
        <p>x2 Baby high chair</p>
        <p>AED 1200</p>
      </div>
      <div className=" text-sm lg:text-lg  flex justify-between items-center mb-2">
        <h3>Sub Total </h3>
        <p>AED 1200</p>
      </div>
      <div className=" text-sm lg:text-lg  flex justify-between items-center mb-2">
        <p>Tourist Tax </p>
        <p>AED 1200</p>
      </div>
      <div className=" text-sm lg:text-lg  flex justify-between items-center mb-2">
        <p>VAT (5%)</p>
        <p>AED 1200</p>
      </div>
      <div className=" text-sm lg:text-lg  flex justify-between items-center mb-2">
        <p>Security Deposits</p>
        <p>AED 1200</p>
      </div>
      <div className="text-lg lg:text-xl flex justify-between items-center mt-10 font-bold">
        <p>Total</p>
        <p>AED 2,220.00</p>
      </div>

      <p className="divider m-0 p-0"></p>
      
      <h1 className="main-color text-lg lg:text-2xl xl:text-5xl  font-blissful tracking-widest mt-10">
        Payment Details
      </h1>
      <div className="flex justify-between items-center mt-8">
        <div className="text-sm lg:text-xl">
          <p className="mb-2">MASTERCARD (**** **** **** 4321)</p>
          <p>Mar 2023 - 21:30 GMT</p>
        </div>
        <span>AED 2,220.00</span>
      </div>
      <p className="divider h-20"></p>
      <div className="mt-10">
        <div className="flex justify-between items-center ">
          <h1 className="text-lg lg:text-4xl font-blissful main-color tracking-widest lg:mb-6">
            Location
          </h1>
          <button className="text-xs lg:text-[26px]  justify-center items-center  text-white font-blissful tracking-widest rounded-xl flex border main-color-bg lg:pl-6 py-1 lg:py-3 px-4 lg:px-16 ">
            <Image
              src={google}
              alt="heart"
              className="w-5  mr-4 lg:mr-8 lg:w-10 "
            />
            Drive here
          </button>
        </div>
        <div>
          <Image
            src={map}
            alt="heart"
            className="object-cover mt-8 h-40 lg:h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

import React from "react";
import prop4 from "@/public/images/propertyDetails/propDetails4.png";
import Image from "next/image";
import questionMark from "@/public/images/propertyDetails/icons/questionMark.svg";
import heart from "@/public/images/propertyDetails/icons/heart.svg";
import Link from "next/link";

const ChangeBookingPage = () => {
  return (
    <div className="container mx-auto sm:px-[90px] 2xl:px-[160px] py-14 lg:py-20">
      <h1 className="text-lg lg:text-4xl font-blissful main-color tracking-widest mb-4">
        Change Bookings for details below
      </h1>
      <div className="relative rounded-md mt-6 ">
        <Image
          src={prop4}
          alt="prop4"
          className="object-cover rounded-md xl:h-[700px]"
        />
      </div>
      <h1 className="main-color text-2xl xl:text-5xl  font-blissful tracking-widest mt-10">
        Summary
      </h1>
      <p className="text-3xl font-blissful tracking-widest mt-5">
        Reservation Code : 2311111
      </p>
      <div className="flex justify-between items-center my-8">
        <div className="flex lg:flex-col text-[18px] lg:text-[50px] tracking-wider ">
          <div>
            <p className="flex font-blissful flex-col lg:flex-row">
              AED 1200{" "}
              <span className="text-[12px] lg:text-[35px] ml-20 -mt-4 lg:ml-1 lg:mt-4">
                /3 Days
              </span>
            </p>
            <p className="text-[#535353] text-[12px] lg:text-[24px] lg:mt-2 italic">
              AED 400 Per Night
            </p>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="flex lg:ml-10">
          <div className="text-xl relative border border-[#141414] flex items-center justify-center  lg:px-6 lg:h-16 rounded-md lg:mr-5 ">
            <p className="absolute -top-3 left-5 px-1 bg-white text-sm lg:text-lg">
              FROM
            </p>
            25/03/2023
          </div>
          <div className="text-xl relative border border-[#141414] flex items-center justify-center  lg:px-6 lg:h-16   rounded-md lg:mr-10">
            <p className="absolute -top-3 left-5 px-1 bg-white text-sm lg:text-lg">
              TO
            </p>
            28/03/2023
          </div>
          <Link href={"/"}>
            <button className="hidden lg:block text-2xl rounded-full px-28 py-5 main-color-bg text-white font-blissful tracking-widest ">
              Change
            </button>
          </Link>
        </div>
      </div>

      <div className="xl:flex justify-between items-start gap-16 ">
        <div className="xl:min-w-[400px] grow">
          <div className="mt-10">
            <p className="text-lg xl:text-xl font-bold mb-5">Stay Duration</p>
            <div className="flex justify-between items-center text-xs lg:text-lg ">
              <div>
                <p className="mb-2">3 Night Stay</p>
                <p>(25/03/2023 - 28/03/2024)</p>
              </div>
              <div>
                <p className="mb-2">AED 1,140.00</p>
                <p>(excluding tax)</p>
              </div>
            </div>
            <p className=" divider h-5"></p>
          </div>
          <div className="mt-10">
            <p className="text-lg xl:text-xl font-bold mb-5">Add Ons</p>
            <div className="flex mb-3">
              <input
                id="highchair"
                type="checkbox"
                className="mr-3 checkbox [--chkbg:#3B543C] [--chkfg:white] "
              />
              <label htmlFor="highchair" className="text-lg xl:text-xl">
                Baby high chair: AED 60 / Night
              </label>
            </div>
            <div className="flex">
              <input
                id="disinfection"
                type="checkbox"
                className="mr-2 checkbox  [--chkbg:#3B543C] [--chkfg:white]"
              />
              <label htmlFor="disinfection" className="text-lg xl:text-xl">
                Certified disinfection: AED 60 / Night{" "}
              </label>
            </div>
            <div className="flex justify-between mt-8">
              <p className="text-lg">x3 Baby high chair</p>
              <p className="text-lg">AED 180</p>
            </div>
          </div>
        </div>
        <p className=" divider h-10"></p>
        <div className="grow">
          <div className="lg:p-10 p-4 bg-[#EFEFEF] rounded-md mt-8">
            <h1 className="main-color text-2xl  font-blissful tracking-widest mb-7 text-center">
              Price change details below
            </h1>
            <div className="text-xs lg:text-lg flex justify-between items-center mb-1">
              <p>x1 Night</p>
              <p>AED 20</p>
            </div>
            <div className="text-xs lg:text-lg flex justify-between items-center mb-5">
              <p>x1 Baby High Chair</p>
              <p>AED 20</p>
            </div>
            <div className="text-sm lg:text-xl flex justify-between items-center mb-1 font-bold">
              <h3>Sub Total</h3>
              <h3>AED 1,320.00</h3>
            </div>
            <div className="text-xs lg:text-lg flex justify-between items-center mb-5">
              <p>VAT (5%) </p>
              <p>AED 67</p>
            </div>

            <div className="text-sm lg:text-xl flex justify-between items-center mt-4 font-bold">
              <p>Total</p>
              <p>AED 2700.00</p>
            </div>
          </div>
        </div>
      </div>
      <p className=" divider h-10"></p>
      <Link
        href={"/booking-details"}
        className="flex justify-center items-center mt-4 rounded-md"
      >
        <button className="px-14 py-4 rounded-md  main-color-bg text-white font-blissful text-xl tracking-widest">
          Confirm
        </button>
      </Link>
    </div>
  );
};

export default ChangeBookingPage;

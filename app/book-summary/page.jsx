"use client";
import Image from "next/image";
import React, { useState } from "react";
import prop4 from "@/public/images/propertyDetails/propDetails4.png";
import questionMark from "@/public/images/propertyDetails/icons/questionMark.svg";
import Link from "next/link";
import Login from "@/app/components/Login";

const BookSummaryPage = () => {
    const [login, setLogin] = useState(false);
    const [details, setDetails] = useState(false);
  return (
    <div className="container mx-auto sm:px-[90px] 2xl:px-[160px] py-10">
      <div className="max-w-2xl">
        <h1 className="xl:text-5xl font-blissful tracking-widest">
          Sky-High Living at The Palm Tower - St. Regis
        </h1>
        <p className="xl:text-2xl mt-2 xl:pl-1">Dubai, UAE</p>
      </div>
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
      <div className="xl:flex justify-between items-start ">
        <div className="xl:min-w-[400px]">
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
        <div className="">
          <div>
            <input
              type="text"
              placeholder="Promo Code"
              className="input input-bordered bg-[#EFEFEF] mr-4 xl:min-w-96 "
            />
            <button className="btn main-color-bg rounded-full xl:px-10 text-white font-blissful tracking-widest">
              APPLAY
            </button>
          </div>
          <div className="lg:p-10 p-4 bg-[#EFEFEF] rounded-md mt-8">
            <div className="text-sm lg:text-xl flex justify-between items-center mb-4 font-bold">
              <h3>Sub Total</h3>
              <h3>AED 1,320.00</h3>
            </div>
            <div className="text-xs lg:text-lg flex justify-between items-center mb-1">
              <p>Tourist Tax</p>
              <p>AED 20</p>
            </div>
            <div className="text-xs lg:text-lg flex justify-between items-center mb-1">
              <p>VAT (5%) </p>
              <p>AED 67</p>
            </div>
            <div className="text-xs lg:text-lg flex justify-between items-center mb-1">
              <p className="flex gap-1 ">
                Security Deposits{" "}
                <Image src={questionMark} alt="question-mark" className="w-4" />
              </p>
              <p>AED 1000.00</p>
            </div>
            <div className="text-sm lg:text-xl flex justify-between items-center mt-4 font-bold">
              <p>Total</p>
              <p>AED 2700.00</p>
            </div>
          </div>
        </div>
      </div>
      <p className=" divider h-10"></p>
      {!login && !details && (
        <div>
          <h1 className="text-2xl xl:text-4xl font-blissful tracking-widest my-10">
            Checkout to reserve your booking
          </h1>
          <div className="flex flex-col lg:flex-row justify-around items-center">
            <button
              onClick={() => {
                setLogin(true);
                setDetails(false);
              }}
              className="xl:px-24 xl:py-5 px-14 py-3 rounded-full main-color-bg text-white xl:text-2xl tracking-widest font-blissful"
            >
              REGISTER OR LOGIN
            </button>
            <span className="xl:text-3xl font-bold my-5 lg:my-0 xl:mx-10 ">
              ( or )
            </span>
            <button
              onClick={() => setDetails(true)}
              className="xl:px-24 xl:py-5 px-14 py-3 rounded-full bg-[#D3D3D3] main-color xl:text-2xl tracking-widest font-blissful"
            >
              PROCEED AS GUEST
            </button>
          </div>
        </div>
      )}
      {login && <Login onLoginSuccess={(success) =>{
         setLogin(success)
         setDetails(true)
         }} />}
      {details && (
        <>
          <div>
            <h1 className="text-2xl xl:text-4xl font-blissful tracking-widest mb-10">
              Fill in your details
            </h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="lg:flex justify-between items-center gap-10 mb-4 ">
                <input
                  type="text"
                  className="input input-bordered grow w-full mb-4 "
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="input input-bordered grow w-full mb-4"
                  placeholder="Email"
                />
              </div>
              <div className="lg:flex justify-between items-center gap-10 mb-4">
                <input
                  type="text"
                  className="input input-bordered grow w-full mb-4"
                  placeholder="Country of Residence"
                />
                <input
                  type="text"
                  className="input input-bordered grow w-full mb-4"
                  placeholder="Nationality"
                />
              </div>
              <div className="lg:flex justify-between items-center gap-10 mb-4">
                <input
                  type="text"
                  className="input input-bordered grow w-full mb-4"
                  placeholder="Contact No"
                />
                <input
                  type="text"
                  className="input input-bordered grow w-full mb-4"
                  placeholder="Passport No"
                />
              </div>
              <textarea
                placeholder="Message"
                className="textarea textarea-bordered w-full h-56"
              ></textarea>
              <Link
                href={"/booking"}
                className="flex justify-center items-center mt-4 rounded-md"
              >
                <button className="px-14 py-4 rounded-md  main-color-bg text-white font-blissful text-xl tracking-widest">
                  Confirm
                </button>
              </Link>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default BookSummaryPage

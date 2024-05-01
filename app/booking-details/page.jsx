"use client";
import Image from "next/image";
import prop1 from "@/public/images/propertyDetails/propDetails1.png";
import prop2 from "@/public/images/propertyDetails/propDetails2.png";
import prop3 from "@/public/images/propertyDetails/propDetails3.png";
import prop4 from "@/public/images/propertyDetails/propDetails4.png";
import prop5 from "@/public/images/propertyDetails/propDetails5.png";
import bed from "@/public/images/propertyDetails/icons/bedIcon.svg";
import bathroom from "@/public/images/propertyDetails/icons/bathroom.svg";
import floor from "@/public/images/propertyDetails/icons/bathroom.svg";
import spm from "@/public/images/propertyDetails/icons/spm.svg";
import walk from "@/public/images/propertyDetails/icons/walk.svg";
import persons from "@/public/images/propertyDetails/icons/persons.svg";
import heart from "@/public/images/propertyDetails/icons/heart.svg";
import google from "@/public/images/propertyDetails/icons/google.svg";
import map from "@/public/images/propertyDetails/icons/map.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import questionMark from "@/public/images/propertyDetails/icons/questionMark.svg";

const BookingDetailsPage = () => {
  const router = useRouter();

  const services = [
    { name: "Additional Towel" },
    { name: "Late Check-Out" },
    { name: "Luxury Car Rental" },
    { name: "Full Cleaning Service" },
    { name: "Amenity Kit" },
    { name: "Swimming Pool" },
    { name: "WIFI" },
    { name: "Air-Conditioned" },
    { name: "Free Parking" },
  ];
  const facilities = [
    { name: "Air Conditioning" },
    { name: "Coffee Maker" },
    { name: "Dishes and silverware" },
    { name: "Flat-screen TV" },
    { name: "Free Parking on premises" },
    { name: "Hair Dryer" },
    { name: "Microwave" },
    { name: "Swimming Pool" },
    { name: "Towels, bedsheets, soap and toilet paper" },
    { name: "Washing Machine" },
  ];
  const addOnes = [
    { name: "Baby high chair: AED 60 / Night" },
    { name: "Certiﬁed disinfection: AED 60 / Night" },
  ];

  return (
    <div className="container mx-auto sm:px-[90px] 2xl:px-[160px] py-10">
      <h1 className="font-blissful tracking-widest text-4xl main-color">
        Booking No : 2333111
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
      <h2 className=" text-sm lg:text-lg xl:text-3xl  font-blissful tracking-widest mt-10">
        Stay Duration
      </h2>
      <div className="flex justify-between items-center my-4 font-bold">
        <div>
          <p className="text-sm lg:text-lg">
            Mon, 25 Mar 2023 to Wed, 28 Mar 2023 (3 Days)
          </p>
          <p className="text-xs lg:text-lg flex items-center gap-2">
            <p className=" flex items-center">
              Checkin <MdKeyboardArrowRight /> 14:00 |
            </p>
            <p className=" flex items-center">
              Checkout <MdKeyboardArrowRight /> 12:00
            </p>
          </p>
        </div>
        <span className="text-xs lg:text-lg">AED 1400,00</span>
      </div>
      <div className=" rounded-md mt-8">
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
      <p className="divider h-10"></p>
      <div>
        <h1 className="text-lg lg:text-4xl font-blissful main-color tracking-widest mb-10">Payment Details</h1>
        <div className="flex justify-between items-center">
          <div className="text-lg">
            <p>MASTERCARD (**** **** **** 4321)</p>
            <p> Mar 2023 - 21:30 GMT</p>
          </div>
          <span className="text-lg">AED 2,220.00</span>
        </div>
      </div>
      <p className="divider h-10"></p>
      <div className="mt-10 ">
        <h1 className="text-lg lg:text-4xl font-blissful main-color tracking-widest">
          About the Property
        </h1>
        <p className="mt-4 text-xs leading-5 lg:text-2xl">
          DAMAC Privé is an exceptional collection of apartments designed and
          finished to the highest standards, looking out over the Dubai Canal
          waterway and beyond. The apartments are a reflection of the signature
          Dubai lifestyle and seem to be perfect that has been designed to
          present you with an unmatched way of life. Lined with exceptional
          amenities and facilities, the development aims to enhance and enrich
          your whole quality of living standards.
        </p>
        <p className="divider h-20 "></p>
      </div>
      <div>
        <h1 className="text-lg lg:text-4xl font-blissful main-color tracking-widest mb-4">
          Services
        </h1>
        <div className="flex justify-start items-center gap-4 flex-wrap h-32">
          {services.map((service, index) => (
            <span
              key={index}
              className="bg-[#E1E1E1] text-[10px] lg:text-lg px-4 lg:px-6 py-2 rounded-md "
            >
              {service.name}
            </span>
          ))}
        </div>
        <p className="divider h-20 mt-14 lg:mt-0 "></p>
      </div>
      <div>
        <h1 className="text-lg lg:text-4xl font-blissful main-color tracking-widest mb-6">
          Other Facilities
        </h1>
        <div className="flex justify-start items-center gap-4 flex-wrap  h-32">
          {facilities.map((facility, index) => (
            <span
              key={index}
              className="bg-[#E1E1E1] text-[10px] lg:text-lg px-4 lg:px-6 py-2 rounded-md "
            >
              {facility.name}
            </span>
          ))}
        </div>
        <p className="divider h-20 mt-36 lg:mt-0"></p>
      </div>
      <div className="lg:mt-10">
        <h1 className="text-lg lg:text-4xl font-blissful main-color tracking-widest mb-6">
          Add Ons
        </h1>
        <ul className="list-disc text-xs lg:text-lg ml-4 ">
          <li className="mb-2">Baby high chair: AED 60 / Night</li>
          <li>Certiﬁed disinfection: AED 60 / Night</li>
        </ul>
        <p className="divider h-20 "></p>
      </div>
      <div>
        <h1 className="text-lg lg:text-4xl font-blissful main-color tracking-widest mb-6">
          Duration
        </h1>
        <div className="flex gap-10">
          <div className="flex flex-col w-64">
            <p className="text-xs lg:text-xl">Check In</p>
            <p className="divider m-0"></p>
            <p className="text-lg lg:text-2xl font-bold">2:00 PM</p>
          </div>
          <div className="flex flex-col w-64">
            <p className="text-xs lg:text-xl">Check Out</p>
            <p className="divider m-0"></p>
            <p className="text-lg lg:text-2xl font-bold">12:00 AM</p>
          </div>
        </div>
        <p className="divider h-20 "></p>
      </div>
      <div>
        <h1 className="text-lg lg:text-4xl font-blissful main-color tracking-widest mb-6">
          Instructions
        </h1>
        <ul className="list-disc text-xs lg:text-xl ml-4">
          <li className="mb-2">No smoking</li>
          <li>No parties or events</li>
        </ul>
        <p className="divider h-20 "></p>
      </div>
      <div>
        <div className="flex justify-between items-center ">
          <h1 className="text-lg lg:text-4xl font-blissful main-color tracking-widest lg:mb-6">
            Location
          </h1>
          <button className="text-xs lg:text-[26px]  justify-center items-center  text-white font-blissful tracking-widest rounded-xl flex border main-color-bg lg:pl-6 py-1 lg:py-3 px-4 lg:px-9 ">
            <Image
              src={google}
              alt="heart"
              className="w-5  mr-4 lg:mr-8 lg:w-10"
            />
            view on google
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

export default BookingDetailsPage;

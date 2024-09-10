"use client";
import Image from "next/image";
import prop1 from "@/public/images/propertyDetails/prive-actii/1.PNG";
import prop2 from "@/public/images/propertyDetails/prive-actii/2.PNG";
import prop3 from "@/public/images/propertyDetails/prive-actii/3.PNG";
import prop4 from "@/public/images/propertyDetails/prive-actii/4.PNG";
import prop5 from "@/public/images/propertyDetails/prive-actii/5.PNG";
import prop6 from "@/public/images/propertyDetails/prive-actii/6.PNG";
import prop7 from "@/public/images/propertyDetails/prive-actii/7.PNG";
import prop8 from "@/public/images/propertyDetails/prive-actii/8.PNG";
import prop9 from "@/public/images/propertyDetails/prive-actii/9.PNG";
import prop10 from "@/public/images/propertyDetails/prive-actii/10.PNG";
import prop11 from "@/public/images/propertyDetails/prive-actii/11.PNG";
import prop12 from "@/public/images/propertyDetails/prive-actii/12.PNG";
import prop13 from "@/public/images/propertyDetails/prive-actii/13.PNG";
import prop14 from "@/public/images/propertyDetails/prive-actii/14.PNG";
import prop15 from "@/public/images/propertyDetails/prive-actii/15.PNG";
import bed from "@/public/images/propertyDetails/icons/bedIcon.svg";
import bathroom from "@/public/images/propertyDetails/icons/bathroom.svg";
import floor from "@/public/images/propertyDetails/icons/bathroom.svg";
import spm from "@/public/images/propertyDetails/icons/spm.svg";
import walk from "@/public/images/propertyDetails/icons/walk.svg";
import persons from "@/public/images/propertyDetails/icons/persons.svg";
import heart from "@/public/images/propertyDetails/icons/heart.svg";
import google from "@/public/images/propertyDetails/icons/google.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PrivalActII = () => {
  const router = useRouter();
  const items = [
    { name: "item1", img: prop1, alt: "prop1" },
    { name: "item2", img: prop2, alt: "prop2" },
    { name: "item3", img: prop3, alt: "prop3" },
    { name: "item4", img: prop4, alt: "prop4" },
    { name: "item5", img: prop5, alt: "prop5" },
    { name: "item6", img: prop6, alt: "prop6" },
    { name: "item7", img: prop7, alt: "prop7" },
    { name: "item8", img: prop8, alt: "prop8" },
    { name: "item9", img: prop9, alt: "prop9" },
    { name: "item10", img: prop10, alt: "prop10" },
    { name: "item11", img: prop11, alt: "prop11" },
    { name: "item12", img: prop12, alt: "pro12" },
    { name: "item13", img: prop13, alt: "prop13" },
    { name: "item14", img: prop14, alt: "prop14" },
    { name: "item15", img: prop15, alt: "prop15" },
  ];
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
  const times = [
    { place: "Burj Khalifa", mins: "10 mins. drive " },
    { place: "Dubai Fountain", mins: "10 mins.  drive" },
    { place: "Dubai Opera", mins: "10 mins.  drive away" },
    { place: "Burj Al Arab", mins: "20 mins. Drive " },
    { place: "The Walk JBR ", mins: "25 mins. Drive" },
    { place: "Palm Jumeirah", mins: "25 mins Drive" },
    { place: "Metro", mins: "5-10 mins Drive" },
    { place: "City Walk", mins: "15 mins. Drive " },
    {
      place: "Dubai International Airport (DXB)",
      mins: "Approximately 20-25 minutes drive ",
    },
    {
      place: "Al Maktoum International Airport (DWC)",
      mins: "Located about 40-50 minutes Drive",
    },
  ];
  const facilities = [
    { name: "Sauna" },
    { name: "Jacuzzis" },
    { name: "Gym" },
    { name: "Steam" },
    // { name: "Free Parking on premises" },
    // { name: "Hair Dryer" },
    // { name: "Microwave" },
    // { name: "Swimming Pool" },
    // { name: "Towels, bedsheets, soap and toilet paper" },
    // { name: "Washing Machine" },
  ];
  const addOnes = [
    { name: "Baby high chair: AED 60 / Night" },
    { name: "Certiﬁed disinfection: AED 60 / Night" },
  ];
  const [currentItem, setCurrentItem] = useState(1);
  const totalItems = items.length + 1; // Total number of items in the carousel

  const nextItem = () => {
    setCurrentItem((prev) => (prev === totalItems - 1 ? 1 : prev + 1));
    router.push(`prive-actii#item${currentItem}`);
  };

  const prevItem = () => {
    setCurrentItem((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
    router.push(`prive-actii#item${currentItem}`);
  };
  return (
    <div className="container mx-auto sm:px-[90px] 2xl:px-[160px] py-10">
      <div>
        <div className="flex space-x-1 items-center lg:mb-4 mb-2 font-blissful lg:text-2xl text-[9px]">
          <span>Home</span>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <span>Properties</span>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <span>Prival Act II</span>
        </div>
        <div className=" carousel w-full ">
          {items.map((item, index) => (
            <div
              key={index}
              id={item.name}
              className="relative carousel-item w-full lg:h-[700px] h-[165px] rounded-lg"
            >
              <Image
                src={item.img}
                alt={item.alt}
                className="object-cover w-full rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="relative flex justify-center w-full lg:mt-5 mt-2 gap-1 lg:gap-2 ">
          <span
            onClick={nextItem}
            className="absolute cursor-pointer opacity-90 lg:top-[70px] top-[50px] lg:-right-4 -right-2 z-20 -translate-y-10 lg:-translate-y-6 rounded-full flex justify-center items-center main-color-bg w-5 h-5  lg:w-20 lg:h-20"
          >
            <MdKeyboardArrowRight
              color="white"
              className="text-xs lg:text-5xl"
            />
          </span>
          <span
            onClick={prevItem}
            className="absolute cursor-pointer opacity-90 lg:top-[70px] top-[50px] lg:-left-4 -left-2  transform -translate-y-10 lg:-translate-y-6 z-20 rounded-full flex justify-center items-center main-color-bg  w-5 h-5 lg:w-20 lg:h-20"
          >
            <MdKeyboardArrowLeft
              color="white"
              className="text-xs lg:text-5xl "
            />
          </span>
          {items.map((item, index) => (
            <Link
              onClick={() => setCurrentItem(index + 1)}
              key={index}
              href={`#${item.name}`}
              className="relative"
            >
              <Image
                src={item.img}
                alt={item.alt}
                className="w-[62px] h-[40px] lg:w-[230px] lg:h-[170px] object-cover rounded-md"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-[#E1E1E1]  rounded-md flex flex-col mt-6 lg:mt-11 lg:py-16 lg:px-16 px-6 py-6 ">
        <div className="grid grid-cols-3 justify-items-center ">
          <div className="text-[6px] lg:text-[22px] xl:text-[24px] flex items-center">
            <Image
              src={bed}
              alt="bed"
              className="w-3 h-3 lg:w-8 lg:h-8 xl:w-8 xl:h-8  mr-1"
            />
            <Image
              src={bed}
              alt="bed"
              className="w-3 h-3 lg:w-8 lg:h-8 xl:w-8 xl:h-8 mr-3"
            />{" "}
            1 twin single bed
          </div>
          <div className="text-[6px] lg:text-[22px] xl:text-[24px] flex items-center">
            <Image
              src={bed}
              alt="bed"
              className="w-3 h-3 lg:w-8 lg:h-8 xl:w-8 xl:h-8 mr-1 lg:mr-3"
            />{" "}
            1 Queen size bed
          </div>
          <div className="text-[6px] lg:text-[22px] xl:text-[24px] flex items-center">
            <Image
              src={bathroom}
              alt="bed"
              className="w-3 h-3 lg:w-8 lg:h-8 xl:w-8 xl:h-8 mr-1 lg:mr-3"
            />{" "}
            1 bathroom
          </div>
        </div>
        <div className="grid grid-cols-3 justify-items-center lg:mt-16 mt-8">
          <div className="text-[6px] lg:text-[22px] xl:text-[24px] flex items-center">
            <Image
              src={floor}
              alt="bed"
              className="w-3 h-3 lg:w-8 lg:h-8 xl:w-8 xl:h-8 mr-1 lg:mr-3"
            />
            25th Floor
          </div>
          <div className="text-[6px] lg:text-[22px] xl:text-[24px] flex items-center">
            <Image
              src={spm}
              alt="bed"
              className="w-3 h-3 lg:w-8 lg:h-8 xl:w-8 xl:h-8 mr-1 lg:mr-3"
            />{" "}
            71 sqm
          </div>
          {/* <div className="text-[6px] lg:text-[22px] xl:text-[24px] flex items-center">
            <Image
              src={walk}
              alt="bed"
              className="w-3 h-3 lg:w-8 lg:h-8 xl:w-8 xl:h-8 mr-1 lg:mr-3"
            />
            10 mins drive
          </div> */}
          <div className="text-[6px] lg:text-[22px] xl:text-[24px] flex items-center">
            <Image
              src={persons}
              alt="bed"
              className="w-3 h-3 lg:w-8 lg:h-8 xl:w-8 xl:h-8 mr-1 lg:mr-3"
            />
            2 adults, 1 Children
          </div>
        </div>
      </div>
      <div className="flex mt-16 justify-between lg:justify-start items-center flex-wrap">
        <div className="flex lg:flex-col text-[18px] lg:text-[50px] tracking-wider ">
          {/* <div>
            <div className="flex font-blissful flex-col lg:flex-row">
              AED 1200{" "}
              <span className="text-[12px] lg:text-[35px] ml-20 -mt-4 lg:ml-1 lg:mt-4">
                /3 Days
              </span>
              <p className="hidden lg:flex ml-5 divider lg:divider-horizontal lg:h-20"></p>
            </div>
            <div className="text-[#535353] text-[12px] lg:text-[24px] lg:mt-2 italic">
              AED 400 Per Night
            </div>
          </div> */}
          <div className="lg:hidden flex gap-3 lg:gap-0 ml-6 lg:ml-0 ">
            <div className="text-[10px] relative border border-[#141414] flex items-center justify-center px-2 h-10 lg:px-6 lg:h-16 rounded-md lg:mr-5 ">
              <div className="absolute -top-3 left-5 px-1 bg-white text-sm">
                FROM
              </div>
              25/03/2023
            </div>
            <div className="text-[10px] relative border border-[#141414] flex items-center justify-center px-2 h-10 lg:px-6 lg:h-16  rounded-md lg:mr-10">
              <span className="absolute -top-3 left-5 px-1 bg-white text-sm">
                TO
              </span>
              28/03/2023
            </div>
          </div>
        </div>
        <div>
          <div className="hidden lg:flex lg:ml-10">
            <div className="text-xl relative border border-[#141414] flex items-center justify-center  lg:px-6 lg:h-16 rounded-md lg:mr-5 ">
              <div className="absolute -top-3 left-5 px-1 bg-white text-sm lg:text-lg">
                FROM
              </div>
              25/03/2023
            </div>
            <div className="text-xl relative border border-[#141414] flex items-center justify-center  lg:px-6 lg:h-16   rounded-md lg:mr-10">
              <div className="absolute -top-3 left-5 px-1 bg-white text-sm lg:text-lg">
                TO
              </div>
              28/03/2023
            </div>
            <Link
              href="https://wa.me/+201200000000?text=Hello%20Ahmed%2C%20I%20am%20interested%20in%20Prival Act II!"
              target="_blank"
            >
              <button className="hidden lg:block text-2xl rounded-full px-28 py-5 main-color-bg text-white font-blissful tracking-widest ">
                Book
              </button>
            </Link>
          </div>
          <div className="flex lg:block justify-center items-center gap-4 my-8">
            <Link
              href="https://wa.me/+201200000000?text=Hello%20Ahmed%2C%20I%20am%20interested%20in%20Prival Act II!"
              target="_blank"
            >
              <button className="lg:hidden  text-xs rounded-full px-14 py-3  main-color-bg text-white font-blissful tracking-widest ">
                Book
              </button>
            </Link>
            <div className="flex lg:justify-end lg:mt-6  ">
              <button className="text-[12px] lg:text-[20px] font-blissful tracking-widest rounded-xl flex border border-[#262626] pl-4 lg:pl-8  h-10 pt-2 lg:py-12 lg:pt-5 px-8 lg:px-10">
                Save as wishlist
                <Image
                  src={heart}
                  alt="heart"
                  className="w-4 lg:w-6 ml-3 lg:ml-6 mt-1 "
                />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h1 className="text-lg lg:text-4xl font-blissful main-color tracking-widest">
            Description
          </h1>
          <p className="mt-4 text-xs leading-5 lg:text-2xl">
            Prival Homes offers a fully furnished 1-bedroom apartment situated
            in one of Emaar's latest upscale project, Act One | Act Two. This
            property is centrally located in the vibrant Opera District, close
            proximity to Dubai's premier attractions, including the Burj
            Khalifa, Dubai Mall.
          </p>
          <p className="divider h-20 "></p>
        </div>
      </div>
      <div>
        <h1 className="text-lg lg:text-4xl font-blissful main-color tracking-widest mb-4">
          Time to Arrive
        </h1>
        <p className="mt-4 text-xs leading-5 lg:text-2xl">
          5 mins walk to Dubai Water Canal which attracts you for line of
          restaurants, jogging and cycling activities.
        </p>
        <div className="flex justify-start items-center gap-4 flex-wrap h-auto mt-4">
          {times.map((time, index) => (
            <span
              key={index}
              className="bg-[#E1E1E1] text-[10px] lg:text-lg px-4 lg:px-6 py-2 rounded-md "
            >
              <strong>{time.place}: </strong>
              {time.mins}
            </span>
          ))}
        </div>
        <p className="divider h-20 mt-14 lg:mt-0 "></p>
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
          <Link
            href="https://maps.app.goo.gl/7qSVSLXdXyDYDDma7"
            target="_blank"
          >
            <button className="text-xs lg:text-[26px]  justify-center items-center  text-white font-blissful tracking-widest rounded-xl flex border main-color-bg lg:pl-6 py-1 lg:py-3 px-4 lg:px-9 ">
              <Image
                src={google}
                alt="heart"
                className="w-5  mr-4 lg:mr-8 lg:w-10"
              />
              view on google
            </button>
          </Link>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.3233615142735!2d55.2711273!3d25.192315400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682b1f12c5cd%3A0x2eadf3315abd1baf!2sAct%20One%20%7C%20Act%20Two%20-%20Downtown%20-%20Emaar!5e0!3m2!1sen!2seg!4v1725970218399!5m2!1sen!2seg"
            width="100%"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="object-cover mt-8 h-40 lg:h-80"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PrivalActII;

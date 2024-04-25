"use client";
import Image from "next/image";
import prop1 from "@/public/images/propertyDetails/propDetails1.png";
import prop2 from "@/public/images/propertyDetails/propDetails2.png";
import prop3 from "@/public/images/propertyDetails/propDetails3.png";
import prop4 from "@/public/images/propertyDetails/propDetails4.png";
import prop5 from "@/public/images/propertyDetails/propDetails5.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PropertyDetails = () => {
  const router = useRouter();
  const items = [
    { name: "item1", img: prop1, alt: "prop1" },
    { name: "item2", img: prop2, alt: "prop2" },
    { name: "item3", img: prop3, alt: "prop3" },
    { name: "item4", img: prop4, alt: "prop4" },
    { name: "item5", img: prop5, alt: "prop5" },
  ];
  const [currentItem, setCurrentItem] = useState(1);
  const totalItems = items.length + 1; // Total number of items in the carousel

  const nextItem = () => {
    setCurrentItem((prev) => (prev === totalItems - 1 ? 1 : prev + 1));
    router.push(`property-details#item${currentItem}`);
  };

  const prevItem = () => {
    setCurrentItem((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
    router.push(`property-details#item${currentItem}`);
  };
  return (
    <div className="container mx-auto sm:px-[90px] 2xl:px-[160px] py-10">
      <div>
        <p className="flex space-x-1 items-center mb-4 font-blissful text-2xl">
          <span>Home</span>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <span>Downtown</span>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <span>Sky-High Living at The Palm Tower - St. Regis</span>
        </p>
        <div className=" carousel w-full ">
          {items.map((item, index) => (
            <div
              key={index}
              id={item.name}
              className="relative carousel-item w-full h-[700px] rounded-lg"
            >
              <Image
                src={item.img}
                alt={item.alt}
                className="object-cover w-full rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="relative flex justify-center w-full mt-5 gap-4">
          <span
            onClick={nextItem}
            className="absolute cursor-pointer opacity-90 top-[70px] -right-9 z-20 -translate-y-6 rounded-full flex justify-center items-center main-color-bg w-20 h-20"
          >
            <MdKeyboardArrowRight color="white" className="text-4xl" />
          </span>
          <span
            onClick={prevItem}
            
            className="absolute cursor-pointer opacity-90 top-[70px] -left-9 transform -translate-y-6 z-20 rounded-full flex justify-center items-center main-color-bg w-20 h-20"
          >
            <MdKeyboardArrowLeft color="white" className="text-4xl " />
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
                className="w-[265px] h-[170px] object-cover rounded-md"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

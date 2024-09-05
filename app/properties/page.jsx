"use client";
import axios from 'axios';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MdBathroom } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdBedroomParent } from "react-icons/md";
import map from "@/public/images/properties/map.svg";
import prop1 from "@/public/images/properties/prop1.svg";
import act from "@/public/images/properties/ACTII.PNG";
import merano from "@/public/images/properties/Merano.jpeg";
import prive from "@/public/images/properties/Prive.jpg";
import waves from "@/public/images/properties/Waves.jpg";
import west from "@/public/images/properties/west.jpg";
import Link from "next/link";
const PropertiesPage = () => {
  const [inWishlist, setAddInWishlist] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const [data, setData] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addToWishlist = (id) => {
    // Check if the item is already in the wishlist
    if (wishlist.includes(id)) {
      // Remove from wishlist
      setWishlist(wishlist.filter((itemId) => itemId !== id));
    } else {
      // Add to wishlist
      setWishlist([...wishlist, id]);
    }
  };

  const Images = [prive, west, act , merano , prop1 ,  waves]
  // console.log(Images, "Images")
  useEffect(() => {
    axios.get("/api/get-properties")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        setImageUrl(data.image);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  // const idArray = data.map(item => item.id);
  //       console.log(idArray)
  //       console.log(Array.isArray(idArray))  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white">
      <div className="container mx-auto sm:px-[90px] 2xl:px-[160px] mt-10">
        <form>
          <div className="font-blissful font-bold xl:flex justify-between items-center">
            <div className="flex flex-col xl:max-w-[450px] mb-10 xl:mb-0 ">
              <label className="bg-[#E7E7E5] input input-bordered flex items-center gap-2 xl:min-w-[450px]  mb-5">
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
                  className="grow "
                  placeholder="Enter The Location"
                />
              </label>
              <div className="flex items-center justify-between gap-4">
                <Link
                  href={"/contact-us"}
                  className="flex justify-center items-center bg-[#E7E7E5] select select-bordered w-full max-w-xs xl:min-w-[100px] tracking-[2px]"
                >
                  From
                  {/* <select className="bg-[#E7E7E5] select select-bordered w-full max-w-xs xl:min-w-[100px] tracking-[2px]">
                  <option disabled selected>
                    From
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select> */}
                </Link>
                <Link
                  href={"/contact-us"}
                  className="flex justify-center items-center bg-[#E7E7E5] select select-bordered w-full max-w-xs xl:min-w-[100px] tracking-[2px]"
                >
                  To
                  {/* <select className="bg-[#E7E7E5] select select-bordered w-full max-w-xs xl:min-w-[100px] ml-2 tracking-[2px]">
                   <option disabled selected>
                    To
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option> 
                </select> */}
                </Link>
                <Link
                  href={"/contact-us"}
                  className="flex justify-center items-center bg-[#E7E7E5] select select-bordered w-full max-w-xs xl:min-w-[100px] tracking-[2px]"
                >
                  Guests
                  {/* <select className="bg-[#E7E7E5] select select-bordered w-full max-w-lg xl:min-w-[200px] ml-2 tracking-[2px]">
                    <option disabled selected>
                      Guests
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select> */}
                </Link>
              </div>
            </div>
            <div className="mb-10 xl:mb-0">
              <Link
                href={"/contact-us"}
                className="flex justify-center items-center bg-[#E7E7E5] select select-bordered w-full 
                           xl:min-w-[230px] px-24 tracking-[3px] mb-5  "
              >
                Property Type?
                {/* <select
                className="bg-[#E7E7E5] select select-bordered w-full 
                           xl:min-w-[230px] px-24 tracking-[3px] mb-5  "
              >
                <option disabled selected>
                  Property Type?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option> 
              </select> */}
              </Link>

              <div className="flex">
                <Link
                  href={"/contact-us"}
                  className="flex justify-center items-center bg-[#E7E7E5] select select-bordered w-full max-w-xs ml-5 tracking-[3px]"
                >
                  Rooms
                  {/* <select className="bg-[#E7E7E5] select select-bordered w-full max-w-xs tracking-[3px]">
                   <option disabled selected>
                    Rooms
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select> */}
                </Link>
                <Link
                  href={"/contact-us"}
                  className="flex justify-center items-center bg-[#E7E7E5] select select-bordered w-full max-w-xs ml-5 tracking-[3px]"
                >
                  Bathroom
                  {/* <select className="bg-[#E7E7E5] select select-bordered w-full max-w-xs ml-5 tracking-[3px]">
                   <option disabled selected>
                    Bathroom
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option> 
                </select> */}
                </Link>
              </div>
            </div>
            <div>
              <Link
                href={"/contact-us"}
                className="flex justify-center items-center bg-[#E7E7E5] select select-bordered w-full max-w-xs px-24 tracking-[3px] mb-5"
              >
                Sort By : Price
                {/* <select className="bg-[#E7E7E5] select select-bordered w-full max-w-xs px-24 tracking-[3px] mb-5">
                Sort By : Price

               <option disabled selected>
                  Sort By : Price
                </option>
                <option>Han Solo</option>
                <option>Greedo</option> 
              </select> */}
              </Link>
              <div className="flex gap-4">
                <Link
                  href={"/contact-us"}
                  className="flex justify-center items-center  bg-[#E7E7E5] select select-bordered w-full max-w-xs tracking-[3px]"
                >
                  Min
                  {/* <select className="bg-[#E7E7E5] select select-bordered w-full max-w-xs tracking-[3px]">
                   <option disabled selected>
                    Min
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option> 
                </select> */}
                </Link>
                <Link
                  href={"/contact-us"}
                  className="flex justify-center items-center bg-[#E7E7E5] select select-bordered w-full max-w-xs tracking-[3px]"
                >
                  Max
                  {/* <select className="bg-[#E7E7E5] select select-bordered w-full max-w-xs ml-5 tracking-[3px]">
                   <option disabled selected>
                    Max
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select> */}
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <button className="px-16 py-4 text-white mt-10 tracking-[3px] rounded-full main-color-bg uppercase">
              Search
            </button>
          </div>
        </form>
        <div>
          <h3
            data-aos="fade-right"
            className="main-color mt-20 font-blissful text-[17px] sm:text-[25px] lg:text-[35px] xl:text-[50px] tracking-[2.5px] "
          >
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
          {data.map(item => (
            <div key={item.id}
              data-aos="fade-up"
              className="relative shadow-md max-w-[25rem] w-[21rem]"
              >
               <figure
            onClick={() => addToWishlist(item.id)}
            className="absolute text-4xl right-6 top-7 z-40 cursor-pointer"
          >
            {wishlist.includes(item.id) ? (
              <FaHeart color="red" />
            ) : (
              <FaRegHeart />
            )}
          </figure>
              <Link href={`/${item.name.replace(/\s+/g, '').replace(/–/g, "-").toLowerCase()}`}>
                <figure className="relative h-[180px] lg:h-[300px] rounded-xl">
                  <Image
                    src= {Images[item.id % Images.length]}
                    fill
                    alt="properties"
                    className="object-cover rounded-xl"
                  />
                </figure>
              </Link>
              <div className="px-3 py-4">
                <h4 className="text-[.5rem] lg:text-lg min-h-16">
                  {item.name} 
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
                {/* <h4 className=" mt-5 text-xs lg:text-lg">AED 700.00 /Night</h4> */}
                <Link href={`/${item.name.replace(/\s+/g, '').replace(/–/g, "-").toLowerCase()}`}>
                <button className="px-8 py-2 text-white mt-10 tracking-[3px] rounded-full main-color-bg uppercase">
                  Book Now
                 </button>
                 </Link>
              </div>
            </div>
          ))}
            

  

       
       
          </div>
        </div>
        <div className="flex justify-center lg:justify-start items-center lg:ml-32 xl:ml-52 2xl:ml-72 lg:-mt-16 ">
          <div
            data-aos="fade-up"
            className="btn w-[200px] lg:w-[300px] lg:text-xl mt-10"
          >
            Learn more
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;

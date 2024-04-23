import User from './components/User'
import Link from "next/link";
import Image from "next/image";
import hero from "@/public/images/home/hero.svg";
import location from "@/public/images/home/location.svg";
import interior from "@/public/images/home/interior.svg";
import facilities from "@/public/images/home/facilities.svg";
import services from "@/public/images/home/services.svg";
import downtown from "@/public/images/home/home 1.svg";
import golf from "@/public/images/home/home 2.svg";
import palm from "@/public/images/home/home 3.svg";
import bedRoom from "@/public/images/home/bed-room.svg";

import hosting11 from "@/public/images/hosting/hosting1.svg";
import hosting22 from "@/public/images/hosting/hosting2.svg";
import hosting33 from "@/public/images/hosting/hosting3.svg";
import hosting44 from "@/public/images/hosting/hosting4.svg";

import hosting2 from "@/public/images/home/our-ota-partners/PropertyFinder.svg";
import hosting1 from "@/public/images/home/our-ota-partners/RMS.svg";
import hosting3 from "@/public/images/home/our-ota-partners/Tripadvisor.svg";
import hosting4 from "@/public/images/home/our-ota-partners/agoda.svg";
import hosting5 from "@/public/images/home/our-ota-partners/airbnb.svg";
import hosting6 from "@/public/images/home/our-ota-partners/bayut.svg";
import hosting7 from "@/public/images/home/our-ota-partners/booking.svg";
import hosting8 from "@/public/images/home/our-ota-partners/dubizzle.svg";
import hosting9 from "@/public/images/home/our-ota-partners/expedia.svg";
import hosting10 from "@/public/images/home/our-ota-partners/hotels.svg";

import hosting_1 from "@/public/images/home/our-coalition/FireLec.svg";
import hosting_2 from "@/public/images/home/our-coalition/Hirz.svg";
import hosting_3 from "@/public/images/home/our-coalition/Overseas.svg";
import hosting_4 from "@/public/images/home/our-coalition/SIS.svg";
import hosting_5 from "@/public/images/home/our-coalition/SK.svg";
import hosting_6 from "@/public/images/home/our-coalition/SSS.svg";

import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
export default function Home() {
  const items_1 = [
    { image: hosting1 },
    { image: hosting2 },
    { image: hosting3 },
    { image: hosting4 },
    { image: hosting5 },
    { image: hosting6 },
    { image: hosting7 },
    { image: hosting8 },
    { image: hosting9 },
    { image: hosting10 },
  ];
  const items_2 = [
    { image: hosting_1 },
    { image: hosting_2 },
    { image: hosting_3 },
    { image: hosting_4 },
    { image: hosting_5 },
    { image: hosting_6 },
  ];
  return (
    <>
      {/* <div
        className={`hero-clip-path relative hero min-h-screen `}
        style={{ minHeight: "calc(100vh - 140px)" }}
      >
        <Image
          src={hero}
          alt="hero"
          fill
          quality={100}
          priority
          className="object-cover -z-10 hero-clip-path "
        />
        <div className="hero-content text-center ">
          <div className="max-w-5xl">
            <h1
              className="mb-12 text-white xl:tracking-[5px] tracking-[2.5px] text-[17px] md:text-[25px] lg:text-[30px] 2xl:text-[50px] "
            >
              EXPLORE YOUR LIVING WITH PRIVAL
            </h1>
            <button
              data-aos="zoom-in"
              className="bg-white main-color px-14
               font-blissful tracking-widest
              uppercase text-lg rounded-3xl py-4
              sm:text-[1.25rem] lg:text-[1.3rem] 2xl:text-[1.4rem]
           "
            >
              <Link href={"/properties"}>Book Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[40px] xl:pt-[75px] pb-16 xl:pb-32">
        <div className="container mx-auto sm:px-[90px] 2xl:px-[160px]">
          <div data-aos="fade-right">
            <h2 className="main-color mt-10 mb-8 font-blissful text-[17px] sm:text-[25px] lg:text-[35px] xl:text-[50px] tracking-[2.5px]">
              Be our guest
            </h2>
            <p className="text-[12px] sm:text-[16px] lg:text-[18px] xl:text-[28px] 
             text-gray-500 sm:text-[#161615] leading-[1.4]">
              Welcome to Prival Homes in Dubai! Enjoy stunning views, modern
              interiors, and top-notch amenities for an unforgettable stay. Our
              dedicated concierge ensures personalized hospitality, making
              Prival Homes the perfect choice for your Dubai getaway.
            </p>
          </div>
          <div className="max-w-5xl  grid grid-cols-4 items-center mt-14 lg:mt-28 ">
            <div className="p-5 flex flex-col justify-center items-center gap-4 ">
              <Image src={location} alt="location" className="w-[38px] lg:w-16  xl:w-24" />
              <p className="main-color  text-[10px] lg:text-[18px] xl:text-[26px] mt-2">Loaction</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center gap-4 ">
              <Image src={interior} alt="interior" className="w-[38px]  lg:w-16  xl:w-24" />
              <p className="main-color  text-[10px] lg:text-[18px] xl:text-[26px] mt-2">Interior</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center gap-4 ">
              <Image
                src={facilities}
                alt="facilities"
                className="w-[38px] lg:w-16  xl:w-24"
              />
              <p className="main-color  text-[10px] lg:text-[18px] xl:text-[26px] mt-2">
                Facilities
              </p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center gap-4 ">
              <Image src={services} alt="services" className="w-[38px] lg:w-16  xl:w-24" />
              <p className="main-color text-[10px] lg:text-[18px] xl:text-[26px] mt-2 ">Services</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#DDDDDD] clip-our-location-top lg:clip-our-location-top-xl py-20">
        <div className="container mx-auto sm:px-[90px] 2xl:px-[160px] pt-28 pb-10 lg:pb-16">
          <h2 className="main-color text-center text-2xl xl:text-[50px] mb-10 lg:mb-20  font-blissful tracking-[3px] ">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10  ">
            <div className="mb-14 mx-auto ">
              <div className="relative h-[28rem] w-[15rem] xl:w-[20rem]  ">
                <Image
                  data-aos="fade-up"
                  src={downtown}
                  alt="downtown-img"
                  fill
                  quality={75}
                  className="object-cover location-clip-path  "
                />
              </div>
              <h4
                data-aos="zoom-in"
                className="mt-8 text-center text-2xl xl:text-3xl  font-blissful tracking-[2px] "
              >
                Downtown
              </h4>
            </div>
            <div className="mb-14 mx-auto ">
              <div className="relative h-[28rem] w-[15rem] xl:w-[20rem]">
                <Image
                  data-aos="fade-up"
                  src={golf}
                  alt="golf-img"
                  fill
                  quality={75}
                  className="object-cover location-clip-path  "
                />
              </div>
              <h4
                data-aos="zoom-in"
                className=" mt-8 text-center text-2xl xl:text-3xl font-blissful  tracking-[2px]"
              >
                Palm Jumeriah
              </h4>
            </div>
            <div className="mb-14 mx-auto ">
              <div className="relative h-[28rem] w-[15rem] xl:w-[20rem]">
                <Image
                  data-aos="fade-up"
                  src={palm}
                  alt="downtown-img"
                  fill
                  quality={75}
                  className="object-cover location-clip-path  "
                />
              </div>
              <h4
                data-aos="zoom-in"
                className=" mt-8 text-center text-2xl xl:text-3xl font-blissful  tracking-[2px]"
              >
                Golf retreat
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 -mt-20 md:mt-0 clip-our-location-top bg-white sm:px-10">
        <div className="container mx-auto sm:px-[90px] 2xl:px-[160px]">
          <div data-aos="fade-right" className="mb-20">
            <h2 className="main-color mb-4 text-[19px] sm:text-[25px] lg:text-[35px] xl:text-[50px] tracking-[4.7px] font-blissful">
              Elevate your hosting potential
            </h2>
            <p className="max-w-5xl text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[28px] leading-[1.4] text-left text-gray-500 sm:text-[#161615]">
              We are a modern and innovative property management solution that
              converts your property into a luxury hotel room. We manage
              everything for you, taking away the hassle and never-ending
              details.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className="flex justify-center sm:justify-start mb-10"
          >
            <button
              className="uppercase main-button main-color-bg text-white text-xs 
            rounded-full px-14 sm:px-10 lg:text-[18px] py-6 
             font-blissful tracking-[2.5px] xl:mb-5 xl:px-16"
            >
              get in touch with us
            </button>
          </div>
          <div className=" sm:flex md:gap-x-10 md:-mt-28">
            <div
              className="relative 
             h-[20rem] w-[20rem]
             md:w-[30rem] md:h-[25rem]
             lg:w-[34rem] lg:h-[32rem]
             order-2"
            >
              <Image
                data-aos="fade-up"
                src={bedRoom}
                alt="bed-room"
                fill
                className="object-cover clip-path-bottom  "
              />
            </div>
            <div className="xl:w-1/2 grid grid-cols-2 items-center gap-x-24 md:gap-x-2 my-8 sm:mt-16 order-1 ">
              <div
                data-aos="zoom-in"
                className="py-5 flex flex-col justify-center items-center gap-4"
              >
                <Image
                  src={hosting11}
                  alt="hosting"
                  className="w-[2.5rem] lg:w-[4rem] xl:w-[4.5rem]"
                />
                <p className="main-color text-center text-[12px] xl:text-[17px]">
                  Stress Free
                </p>
              </div>
              <div
                data-aos="zoom-in"
                className="py-5 flex flex-col justify-center items-center gap-4"
              >
                <Image
                  src={hosting44}
                  alt="hosting"
                  className="w-[2.5rem] lg:w-[4rem]  xl:w-[4.5rem]"
                />
                <p className="main-color  text-center text-[12px] xl:text-[17px]">
                  Having Control
                </p>
              </div>
              <div
                data-aos="zoom-in"
                className="py-5 flex flex-col justify-center items-center gap-4 md:self-start"
              >
                <Image
                  src={hosting22}
                  alt="hosting"
                  className="w-[2.5rem] lg:w-[4rem] xl:w-[4.5rem]"
                />
                <p className="main-color  text-center sm:w-1/2 text-[12px] xl:text-[17px]">
                  Local Living Experience
                </p>
              </div>
              <div
                data-aos="zoom-in"
                className="py-5 flex flex-col justify-center items-center gap-4 md:self-start"
              >
                <Image
                  src={hosting33}
                  alt="hosting"
                  className="w-[2.5rem] lg:w-[4rem] xl:w-[4.5rem]"
                />
                <p className="main-color  text-center  sm:w-3/4 text-[12px] xl:text-[17px]">
                  Luxury Services for Guests
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#DDDDDD]  clip-path-top -mb-36 sm:px-8 py-20">
        <div className="container mx-auto sm:px-[90px] 2xl:px-[160px] pt-20 ">
          <h2
             data-aos="fade-down"
            className="main-color text-lg md:text-3xl mb-14 font-blissful tracking-[3px]"
          >
            Our Coalition
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 mb-10">
            <div data-aos="zoom-in" className="relative w-24 md:w-48 ">
              <Image
                src={hosting_1}
                alt="hosting_platforms"
                className="object-cover "
              />
            </div>
            <div data-aos="zoom-in" className="relative w-24 md:w-48">
              <Image
                src={hosting_2}
                alt="hosting_platforms"
                className="object-cover"
              />
            </div>
            <div data-aos="zoom-in" className="relative w-24 md:w-48 ">
              <Image
                src={hosting_3}
                alt="hosting_platforms"
                className="object-cover"
              />
            </div>
            <div data-aos="zoom-in" className="relative w-24 md:w-48">
              <Image
                src={hosting_4}
                alt="hosting_platforms"
                className="object-cover"
              />
            </div>
            <div data-aos="zoom-in" className="relative w-24 md:w-48">
              <Image
                src={hosting_5}
                alt="hosting_platforms"
                className="object-cover md:w-32"
              />
            </div>
            <div data-aos="zoom-in" className="relative w-24 md:w-48 pt-4">
              <Image
                src={hosting_6}
                alt="hosting_platforms"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto sm:px-[90px] 2xl:px-[160px] pb-28 pt-10 sm:pt-24 sm:pb-40">
          <h2
            data-aos="fade-down"
            className="main-color text-lg md:text-3xl mb-10 sm:mb-10 font-blissful tracking-[3px]"
          >
            Our OTA Partners
          </h2>
          <div className="h-[10rem] rounded-md flex flex-col antialiased bg-[#DDDDDD]  items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={items_1}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div> */}
            <User />

    </>
  );
}
//dark:bg-black dark:bg-grid-white/[0.05]

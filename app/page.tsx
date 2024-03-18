import Link from "next/link";
import Image from "next/image";
import hero from "@/public/images/home/hero.jpg";
import location from "@/public/images/home/location.svg";
import interior from "@/public/images/home/interior.svg";
import facilities from "@/public/images/home/facilities.svg";
import services from "@/public/images/home/services.svg";
import downtown from "@/public/images/home/home1.png";
import golf from "@/public/images/home/home2.png";
import palm from "@/public/images/home/home3.png";
import bedRoom from "@/public/images/home/bed-room.png";
import hosting1 from "@/public/images/hosting/hosting1.svg";
import hosting2 from "@/public/images/hosting/hosting2.svg";
import hosting3 from "@/public/images/hosting/hosting3.svg";
import hosting4 from "@/public/images/hosting/hosting4.svg";
import Slider from "./components/Slider";
export default function Home() {
  const data = [
    { image: hosting1 },
    { image: hosting2 },
    { image: hosting3 },
    { image: hosting4 },
  ];
  return (
    <>
      <div
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
        <div className="hero-overlay hero-clip-path hero-overlay-gradient"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 data-aos="zoom-in" className="mb-12">
              EXPLORE YOUR LIVING WITH PRIVAL
            </h1>
            <button
              data-aos="zoom-in"
              className="btn main-color rounded-full px-20 pt-6 pb-12
            uppercase text-lg 
            sm:text-[1.25rem] lg:text-[1.625rem] 2xl:text-[1.75rem]
            tracking-[1px]"
            >
              <Link href={"/properties"}>Book Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className=" min-h-min py-9">
        <div className="container mx-auto ">
          <div data-aos="fade-right">
            <h2 className="main-color mt-10 mb-5">Be our guest</h2>
            <p className="mb-10 text-gray-500 sm:text-[#161615]">
              Welcome to Prival Homes in Dubai! Enjoy stunning views, modern
              interiors, and top-notch amenities for an unforgettable stay. Our
              dedicated concierge ensures personalized hospitality, making
              Prival Homes the perfect choice for your Dubai getaway.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="grid grid-cols-4 items-center mt-20 sm:mt-36"
          >
            <div className="p-5 flex flex-col justify-center items-center gap-4 ">
              <Image src={location} alt="location" />
              <p className="main-color ">Loaction</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center gap-4 ">
              <Image src={interior} alt="interior" />
              <p className="main-color ">Interior</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center gap-4 ">
              <Image src={facilities} alt="facilities" />
              <p className="main-color ">Facilities</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center gap-4 ">
              <Image src={services} alt="services" />
              <p className="main-color ">Services</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#DDDDDD] clip-our-location-top lg:clip-our-location-top-xl">
        <div className="container mx-auto pt-28 pb-10 lg:pb-16">
          <h2 data-aos="fade-up" className="main-color text-center mb-10">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10  ">
            <div className="mb-14 mx-auto lg:-mr-2 2xl:-mr-12">
              <div className="relative h-[24rem] w-[17rem] xl:w-[20rem]  ">
                <Image
                  data-aos="fade-up"
                  src={downtown}
                  alt="downtown-img"
                  fill
                  quality={75}
                  className="object-cover location-clip-path  "
                />
              </div>
              <h4 data-aos="zoom-in" className=" mt-6 text-center">
                Downtown
              </h4>
            </div>
            <div className="mb-14 mx-auto ">
              <div className="relative h-[24rem] w-[17rem] xl:w-[20rem]">
                <Image
                  data-aos="fade-up"
                  src={golf}
                  alt="golf-img"
                  fill
                  quality={75}
                  className="object-cover location-clip-path  "
                />
              </div>
              <h4 data-aos="zoom-in" className=" mt-6 text-center">
                Palm Jumeriah
              </h4>
            </div>
            <div className="mb-14 mx-auto lg:-ml-2 2xl:-ml-12 ">
              <div className="relative h-[24rem] w-[17rem] xl:w-[20rem]">
                <Image
                  data-aos="fade-up"
                  src={palm}
                  alt="downtown-img"
                  fill
                  quality={75}
                  className="object-cover location-clip-path  "
                />
              </div>
              <h4 data-aos="zoom-in" className=" mt-6 text-center">
                Golf retreat
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-2 pt-5 -mt-20 md:mt-0 clip-our-location-top bg-white ">
        <div className="container mx-auto">
          <div data-aos="fade-right" className="mb-10">
            <h2 className="main-color mb-4 pt-9">
              Elevate your hosting potential
            </h2>
            <p className="text-left text-gray-500 sm:text-[#161615]">
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
            <button className="uppercase main-button main-color-bg text-white text-xs rounded-full px-14 py-4 sm:py-6">
              get in touch with us
            </button>
          </div>
          <div className="sm:flex md:gap-x-10 md:-mt-24">
            <div
              className="relative 
             h-[20rem] w-[20rem]
             md:w-[35rem] md:h-[28rem]
             lg:w-[43rem] lg:h-[42rem]
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
            <div className="grid grid-cols-2 items-center gap-x-24 md:gap-x-2 my-8 sm:mt-16 order-1 ">
              <div
                data-aos="zoom-in"
                className="py-5 flex flex-col justify-center items-center gap-4"
              >
                <Image
                  src={hosting1}
                  alt="hosting"
                  className="w-[3.125rem] lg:w-[5.375rem]"
                />
                <p className="main-color text-center">Stress Free</p>
              </div>
              <div
                data-aos="zoom-in"
                className="py-5 flex flex-col justify-center items-center gap-4"
              >
                <Image
                  src={hosting4}
                  alt="hosting"
                  className="w-[3.125rem] lg:w-[5.375rem]"
                />
                <p className="main-color  text-center">Having Control</p>
              </div>
              <div
                data-aos="zoom-in"
                className="py-5 flex flex-col justify-center items-center gap-4 md:self-start"
              >
                <Image
                  src={hosting2}
                  alt="hosting"
                  className="w-[3.125rem] lg:w-[5.375rem]"
                />
                <p className="main-color  text-center sm:w-1/2 ">
                  Local Living Experience
                </p>
              </div>
              <div
                data-aos="zoom-in"
                className="py-5 flex flex-col justify-center items-center gap-4 md:self-start"
              >
                <Image
                  src={hosting3}
                  alt="hosting"
                  className="w-[3.125rem] lg:w-[5.375rem]"
                />
                <p className="main-color  text-center  sm:w-3/4">
                  Luxury Services for Guests
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#DDDDDD]  clip-path-top -mb-36">
        <div className="container mx-auto py-40 ">
          <h2 data-aos="fade-down" className="main-color text-lg md:text-3xl">
            Our Hosting Platforms
          </h2>
          <Slider />
        </div>
      </div>
    </>
  );
}

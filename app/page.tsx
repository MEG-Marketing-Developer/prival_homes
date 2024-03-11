import Link from "next/link";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TfiPanel } from "react-icons/tfi";
import { TbStarsFilled } from "react-icons/tb";
import { MdOutlineLiving } from "react-icons/md";
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
export default function Home() {
  return (
    <>
      <div className="hero-clip-path relative hero min-h-screen -mt-16 ">
        <Image
          src={hero}
          alt="hero"
          fill
          quality={100}
          priority
          className="object-cover -z-10 hero-clip-path "
        />
        <div className="hero-overlay bg-opacity-60 bg-[#3F5640] hero-clip-path"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-12 text-5xl tracking-widest ">
              EXPLORE YOUR LIVING WITH PRIVAL
            </h1>
            <button className="btn main-color rounded-full px-16">
              <Link href={"/properties"}>Book Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="hero-clip-path">
        <div className="container mx-auto p-6 my-5">
          <div>
            <h1 className="main-color my-4 text-[55px]">Be our guest</h1>
            <p className="tracking-normal text-3xl text-[#161615]">
              Welcome to Prival Homes in Dubai! Enjoy stunning views, modern
              interiors, and top-notch making Prival Homes the perfect choice
              for your Dubai getaway.
            </p>
          </div>
          <div className="grid grid-cols-4 items-center mt-32">
            <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
              <Image src={location} alt="location" />
              <p className="main-color text-2xl">Loaction</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
              <Image src={interior} alt="interior" />
              <p className="main-color text-2xl">Interior</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
              <Image src={facilities} alt="facilities" />
              <p className="main-color text-2xl">Facilities</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
              <Image src={services} alt="services" />
              <p className="main-color text-2xl">Services</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-clip-path bg-[#DDDDDD]">
        <div className="container mx-auto pb-40 pt-32">
          <h1 className="text-4xl sm:text-[55px] main-color my-16 text-center">
            Our Locations
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-10 gap-16 mx-20 sm:mx-2">
            <div className=" mb-20 ">
              <div className="relative min-h-[600px] max-w-[470px]">
                <Image
                  src={downtown}
                  alt="downtown-img"
                  fill
                  quality={75}
                  className="object-cover hero-clip-path rounded-2xl "
                />
              </div>
              <h1 className="text-4xl sm:text-5xl mt-10 text-center tracking-wide">
                Downtown
              </h1>
            </div>
            <div className="min-h-[620px] max-w-[470px] mb-20">
              <div className="relative min-h-[600px] max-w-[470px]">
                <Image
                  src={golf}
                  alt="golf-img"
                  fill
                  quality={75}
                  className="object-cover hero-clip-path rounded-2xl "
                />
              </div>
              <h1 className="text-4xl sm:text-5xl mt-10 text-center tracking-wide">
                Golf retreat
              </h1>
            </div>
            <div className="min-h-[620px] max-w-[470px] mb-28">
              <div className="relative min-h-[600px] max-w-[470px]">
                <Image
                  src={palm}
                  alt="palm-img"
                  fill
                  quality={75}
                  className="object-cover hero-clip-path rounded-2xl "
                />
              </div>
              <h1 className="text-4xl sm:text-5xl mt-[70px] text-center tracking-wide">
                Palm Jumeriah
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-clip-path">
        <div className="container mx-auto p-6">
          <div>
            <h1 className="main-color mt-20 mb-4 text-[45px] md:text-[55px]">
              Elevate your hosting potential
            </h1>
            <p className="tracking-normal text-[25px] md:text-3xl text-[#161615]">
              We are a modern and innovative property management solution that
              converts your property into a luxury hotel room. We manage
              everything for you, taking away the hassle and never-ending
              details.
            </p>
          </div>
          <div className="flex justify-center sm:justify-start mb-20">
            <button className=" mt-10 text-white main-color-bg  max-w-[470px]  px-[80px] py-[25px] md:py-6 md:px-28 rounded-full tracking-wide">
              GET IN TOUCH WITH US
            </button>
          </div>
          <div className="my-20 md:-mt-10 ml-14 lg:flex justify-around items-center gap-20 ">
            <div className="grid grid-cols-2 items-center gap-10 ">
              <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
                <MdOutlineFreeBreakfast size={100} className="main-color" />
                <p className="main-color text-2xl text-center">Stress Free</p>
              </div>
              <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
                <MdOutlineLiving size={100} className="main-color" />
                <p className="main-color text-2xl text-center">
                  Having Control
                </p>
              </div>
              <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
                <TbStarsFilled size={100} className="main-color" />
                <p className="main-color text-2xl text-center ">
                  Local Living Experience
                </p>
              </div>
              <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
                <TfiPanel size={100} className="main-color" />
                <p className="main-color text-2xl text-center">
                  Luxury Services for Guests
                </p>
              </div>
            </div>
            <div className="relative w-full max-w-[700px] min-h-[700px] my-10 flex justify-center items-center">
              <Image
                src={bedRoom}
                alt="bed-room"
                fill
                className="object-cover clip-path-bottom"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#DDDDDD] -mb-32"
        style={{ clipPath: "polygon(0 0, 100% 18%, 100% 89%, 0 99%)" }}
      >
        <div className="container mx-auto pb-36 pt-28 px-6">
          <h1 className="text-5xl main-color pt-10 pb-16">
            Our Hosting Platforms
          </h1>
          <div className="flex justify-start items-center flex-wrap gap-10 max-w-[1200px]">
            <img src="/images/home/hosting1.svg" />
            <img src="/images/home/hosting2.svg" />
            <img src="/images/home/hosting3.svg" />
            <img src="/images/home/hosting4.svg" />
            <img src="/images/home/hosting5.svg" />
            <img src="/images/home/hosting6.svg" />
            <img src="/images/home/hosting7.svg" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61.332"
              height="61.408"
              viewBox="0 0 61.332 61.408"
            >
              <path
                id="Path_307"
                data-name="Path 307"
                d="M995.03,4497.181a30.716,30.716,0,0,0-30.62,29.259c-.023.482-.046.963-.046,1.445s.023.963.046,1.444a30.661,30.661,0,1,0,30.62-32.148m11.932,30.681a11.909,11.909,0,1,1-11.909-11.924,11.922,11.922,0,0,1,11.909,11.924m-11.932-13.873a13.9,13.9,0,0,0,0,27.792,13.686,13.686,0,0,0,5.336-1.078,15.03,15.03,0,1,1-7.832-27.861,14.722,14.722,0,0,1,7.832,2.225,13.285,13.285,0,0,0-5.336-1.078m-2.473-3.119a16.992,16.992,0,1,0,6.756,32.585A17.846,17.846,0,0,1,990.06,4546a18.138,18.138,0,1,1,9.253-33.731,17.13,17.13,0,0,0-6.756-1.4m18.184,16.992a23.219,23.219,0,0,0-23.177-23.206,25.142,25.142,0,0,0-3.733.3,23.282,23.282,0,0,1,6.206-.825,23.733,23.733,0,0,1,0,47.466,24.01,24.01,0,0,1-6.206-.825,22.124,22.124,0,0,0,3.71.3,23.194,23.194,0,0,0,23.2-23.206m-44.362-1.078a21.252,21.252,0,0,1,21.185-20.156,20.922,20.922,0,0,1,10.649,2.889,19.884,19.884,0,0,0-8.176-1.742,20.11,20.11,0,0,0,0,40.22,19.869,19.869,0,0,0,8.176-1.743,21.2,21.2,0,0,1-31.856-17.267c-.023-.366-.023-.733-.023-1.1,0-.39.023-.734.045-1.1m23.681,26.806a25.716,25.716,0,0,0,0-51.433,26.355,26.355,0,0,0-4.282.366,26.234,26.234,0,1,1,0,50.677,23.927,23.927,0,0,0,4.282.39m4.97,3.027a28.857,28.857,0,0,1-7.352-.963,28.2,28.2,0,1,0,0-55.538,28.725,28.725,0,1,1,7.352,56.5"
                transform="translate(-964.364 -4497.181)"
                fill="#13c1c9"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.512"
              height="31.003"
              viewBox="0 0 25.512 31.003"
              className="-ml-8"
            >
              <path
                id="Path_304"
                data-name="Path 304"
                d="M1061.606,4523.07c0-6.466-5.152-10.663-12.3-10.663h-13.214v31h6.595v-9.631h.825a21.5,21.5,0,0,0,17.978,9.608v-6.031a15.507,15.507,0,0,1-10.214-3.807,24.252,24.252,0,0,0,3.847-.871c4.123-1.353,6.481-5.091,6.481-9.608m-12.527,4.655h-6.367v-9.31h6.367c3.321,0,6,1.789,6,4.655.023,2.821-2.679,4.655-6,4.655"
                transform="translate(-1036.094 -4512.407)"
                fill="#00162c"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32.567"
              height="31.025"
              viewBox="0 0 32.567 31.025"
              className="-ml-9"
            >
              <path
                id="Path_305"
                data-name="Path 305"
                d="M1083.363,4530.637l-11.566-18.253h-4.74v31.025h6.664s-2.015-15.793-.091-16.968,7.786,12.268,7.786,12.268v.045h3.871l7.741-12.176v16.831h6.6v-31.025h-4.7Z"
                transform="translate(-1067.057 -4512.384)"
                fill="#00162c"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.88"
              height="32.31"
              viewBox="0 0 25.88 32.31"
              className="-ml-9"
            >
              <path
                id="Path_306"
                data-name="Path 306"
                d="M1120.236,4525.432l-3.825-.78c-2.817-.55-4.374-1.467-4.374-3.554,0-2.408,1.649-3.783,4.878-3.783,3.733,0,4.466,1.834,4.878,4.563h6.505c-.733-8.026-6.688-10.159-11.887-10.159-7.1,0-11.336,3.967-11.336,9.929,0,4.839,2.679,7.889,8.84,9.127l5.061.963c3.138.6,3.871,1.926,3.871,3.187,0,2.087-1.832,3.325-5.107,3.325-4.146,0-6.871-1.949-7.375-5.113h-6.55c.55,6.925,6.092,10.892,13.581,10.892,7.42,0,12.3-3.921,12.3-9.837-.023-5.206-3.527-7.476-9.459-8.76"
                transform="translate(-1103.815 -4511.719)"
                fill="#00162c"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="hero-clip-path hero bg-hero min-h-screen -mt-16 bg-cover">
        <div className="hero-overlay bg-opacity-60 bg-[#3F5640]"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-12 text-5xl tracking-widest ">
              EXPLORE YOUR LIVING WITH PRIVAL
            </h1>
            <button className="btn btn-primary rounded-full px-10">
              <Link href={"/properties"}>Book Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="hero-clip-path">
        <div className="container mx-auto p-6">
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
              <img src="/images/home/location.svg" className="object-contain" />
              <p className="main-color text-2xl">Loaction</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
              <img src="/images/home/interior.svg" />
              <p className="main-color text-2xl">Interior</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
              <img src="/images/home/facilities.svg" />
              <p className="main-color text-2xl">Facilities</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
              <img src="/images/home/services.svg" />
              <p className="main-color text-2xl">Services</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-clip-path bg-[#DDDDDD]">
        <div className="container mx-auto pb-40 pt-32">
          <h1 className="text-4xl sm:text-[55px] main-color my-8 text-center">
            Our Locations
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-10 gap-16 mx-20 sm:mx-2">
            <div className="min-h-[620px] max-w-[470px] mb-20">
              <img
                src="images/home/home1.png"
                className="object-fill h-[100%] hero-clip-path"
              />
              <h1 className="text-4xl sm:text-5xl mt-10 text-center tracking-wide">
                Downtown
              </h1>
            </div>
            <div className="min-h-[620px] max-w-[470px] mb-20">
              <img
                src="images/home/home3.png"
                className="object-fill w-[100%] h-[100%] hero-clip-path"
              />
              <h1 className="text-4xl sm:text-5xl mt-10 text-center tracking-wide">
                Golf retreat
              </h1>
            </div>
            <div className="min-h-[620px] max-w-[470px] mb-28">
              <img
                src="images/home/home2.png"
                className="object-fill w-[100%] h-[100%] hero-clip-path"
              />
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
          <div className="flex justify-center">
            <button className="  mt-10 text-white main-color-bg  max-w-[470px]  px-[80px] py-[25px] md:py-6 md:px-28 rounded-full tracking-wide">
              GET IN TOUCH WITH US
            </button>
          </div>
          <div className="my-20 ml-14 lg:flex justify-around items-center gap-20 ">
            <div className="max-w-[600px] my-10 flex justify-center items-center">
              <img
                src="/images/home/bed-room.png"
                className="object-cover w-[100%] min-h-[700px] clip-path-bottom mx-auto "
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-10 ">
              <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
                <img
                  src="/images/home/location.svg"
                  className="object-contain"
                />
                <p className="main-color text-2xl text-center">Stress Free</p>
              </div>
              <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
                <img src="/images/home/interior.svg" />
                <p className="main-color text-2xl text-center">
                  Having Control
                </p>
              </div>
              <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
                <img src="/images/home/facilities.svg" />
                <p className="main-color text-2xl text-center ">
                  Local Living Experience
                </p>
              </div>
              <div className="p-5 flex flex-col justify-center items-center gap-4 tracking-wide">
                <img src="/images/home/services.svg" />
                <p className="main-color text-2xl text-center">
                  Luxury Services for Guests
                </p>
              </div>
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
          </div>
        </div>
      </div>
    </>
  );
}

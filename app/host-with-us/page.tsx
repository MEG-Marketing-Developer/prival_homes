import React from "react";

const HostWithUs = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <h4 data-aos="fade-right" className="main-color mt-20  mb-4">
          Host with Us
        </h4>
        <p data-aos="fade-right" className="mb-6 text-gray-500">
          Join forces with Prival Homes for a mutually beneficial partnership in
          providing exceptional holiday accommodations in Dubai. Together, we
          can create memorable experiences for guests seeking comfort, luxury,
          and convenience
        </p>

        <div className="grid  grid-cols-1 sm:grid-cols-2 gap-10">
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Full Name"
            className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
          />
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Company Name"
            className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
          />
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Contact Us"
            className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
          />
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Email"
            className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
          />
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Current Portfolio Value"
            className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
          />
        </div>
        <div
          data-aos="zoom-out"
          className="  my-10 flex justify-center items-center sm:block"
        >
          <button className="btn  uppercase px-20 text-white main-color-bg rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostWithUs;

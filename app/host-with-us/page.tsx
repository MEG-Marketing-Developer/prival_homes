import React from "react";

const HostWithUs = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <h1 className="main-color mt-20 px-4 mb-4 text-[45px] md:text-[55px]">
          Host with Us
        </h1>
        <p className="mb-6 text-3xl px-4 md:text-2xl leading-10">
          Join forces with Prival Homes for a mutually beneficial partnership in
          providing exceptional holiday accommodations in Dubai. Together, we
          can create memorable experiences for guests seeking comfort, luxury,
          and convenience
        </p>

        <div className="grid grid-cols-2 gap-10">
          <input
            type="text"
            placeholder="Type here"
            className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
          />
        </div>
        <div className="my-10">
          <button className="btn ">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default HostWithUs;

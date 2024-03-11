"use client";

import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto my-10">
        <h1 className="main-color mt-20 px-4 mb-4 text-[45px] md:text-[55px]">
          Contact Us
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-wrap gap-x-7 justify-center w-full gap-y-5 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full md:max-w-[48%]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full md:max-w-[48%]"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full md:max-w-[48%]"
            />
            <input
              type="text"
              placeholder="Contact No"
              className="input input-bordered w-full md:max-w-[48%]"
            />
          </div>
          <div>
            <textarea
              className="textarea textarea-bordered w-full min-h-[250px] "
              placeholder="Message"
            ></textarea>
          </div>
          <div className="my-5">
            <button className="btn rounded-full main-color-bg px-20 py-5 uppercase text-white">
              Submit
            </button>
          </div>
        </form>

        <footer className="rounded-lg my-20 sm:flex p-10 bg-[#F1F1F1] justify-between">
          <div>
            <nav className="mb-4">
              <h6 className="footer-title main-color">Prival Offices</h6>
              <div className="flex flex-col">
                <p className="link link-hover">Office P404</p>
                <p className="link link-hover">Bayswater Building</p>
                <p className="link link-hover">Business Bay, Dubai</p>
              </div>
            </nav>
            <nav>
              <h6 className="footer-title main-color">Switzerland Partner</h6>
              <p className="link link-hover">Seattle International Services</p>
            </nav>
          </div>
          <div className="self-end mt-10">
            <div>
              <span className="main-color font-blissful">Email : </span>
              <span className="ml-10">info@theprival.com</span>
            </div>
            <div>
              <span className="main-color font-blissful">Contact us : </span>
              <span className="ml-1">+971 52 683 3344</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;

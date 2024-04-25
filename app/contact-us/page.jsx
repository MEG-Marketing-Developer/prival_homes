"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import useAlert from "../hooks/useAlert";
import Alert from "@/app/components/Alert";

const ContactUs = () => {
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Message: "",
    ContactNo: "",
    Time: new Date().toLocaleString(),
  });
  const [isLoading, setIsLoading] = useState(false);

  const { alert, hideAlert, showAlert } = useAlert();

  const handleChange = (e) => {
    setForm({
      ...form,
      Time: new Date().toLocaleString(),
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(form);
    // Add one line to the sheet
    fetch(
      "https://sheet.best/api/sheets/b91dfea1-6739-4060-b3bc-7b15b5fd853a",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message send successfully!",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setForm({
            FirstName: "",
            LastName: "",
            Email: "",
            Message: "",
            ContactNo: "",
          });
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        showAlert({
          text: "i didnt receive your message",
          type: "danger",
        });
      });
  };

  return (
    <div className="bg-white">
      {alert.show ? <Alert {...alert} /> : ""}
      <div className="container mx-auto sm:px-[90px] 2xl:px-[160px] pt-12">
        <h2
          className="main-color mt-20 px-4 mb-14 font-blissful xl:tracking-[5px] 
          tracking-[2.5px] text-[17px] md:text-[25px] lg:text-[30px] 2xl:text-[50px]"
        >
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-x-7 justify-center w-full gap-y-5 mb-6">
            <input
              data-aos="fade-right"
              type="text"
              name="FirstName"
              placeholder="First Name"
              className="input input-bordered w-full md:max-w-[48%]"
              required
              value={form.FirstName}
              onChange={handleChange}
            />
            <input
              data-aos="fade-left"
              type="text"
              name="LastName"
              placeholder="Last Name"
              className="input input-bordered w-full md:max-w-[48%]"
              required
              value={form.LastName}
              onChange={handleChange}
            />
            <input
              data-aos="fade-right"
              type="email"
              name="Email"
              placeholder="Email"
              className="input input-bordered w-full md:max-w-[48%]"
              required
              value={form.Email}
              onChange={handleChange}
            />
            <input
              data-aos="fade-left"
              type="number"
              name="ContactNo"
              placeholder="Contact No"
              className="input input-bordered w-full md:max-w-[48%]"
              required
              value={form.ContactNo}
              onChange={handleChange}
            />
          </div>
          <div data-aos="fade-down" className="sm:mx-3">
            <textarea
              className="textarea textarea-bordered w-full min-h-[250px]  "
              placeholder="Message"
              name="Message"
              required
              value={form.Message}
              onChange={handleChange}
            />
          </div>
          <div
            data-aos="zoom-out"
            className="my-5 sm:ml-4 flex justify-center items-center sm:block"
          >
            <button
              type="submit"
              disabled={isLoading}
              className=" text-lg  rounded-full main-color-bg px-20 py-4 mt-10 uppercase text-white"
            >
              {isLoading ? "Submiting..." : "Submit"}
            </button>
          </div>
        </form>

        <footer
          data-aos="fade-up"
          className="rounded-lg my-20 sm:flex p-10 bg-[#F1F1F1] justify-between"
        >
          <div>
            <nav className="mb-4">
              <h6 className="footer-title main-color capitalize font-blissful tracking-[3px]">Prival Offices</h6>
              <div className="flex flex-col">
                <p className="link link-hover">Office P404</p>
                <p className="link link-hover">Bayswater Building</p>
                <p className="link link-hover">Business Bay, Dubai</p>
              </div>
            </nav>
            <nav>
              <h6 className="footer-title main-color capitalize font-blissful tracking-[3px] ">Switzerland Partner</h6>
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
              <span className="ml-1">+97145750248</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;

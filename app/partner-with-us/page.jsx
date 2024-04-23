"use client";
import React, { useState } from "react";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const partnerWithUs = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { alert, hideAlert, showAlert } = useAlert();

  const [form, setForm] = useState({
    FullName: "",
    CompanyName: "",
    ContactNo: "",
    Email: "",
    Portfolio: "",
    Time: new Date().toLocaleString(),
  });
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
      "https://sheet.best/api/sheets/81b31174-bac9-48e7-95a1-e59d483d628e",
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
            FullName: "",
            CompanyName: "",
            ContactNo: "",
            Email: "",
            Portfolio: "",
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
      <div className="container mx-auto sm:px-[90px] 2xl:px-[160px] py-20">
        <div className="pb-20">
          <h4
            data-aos="fade-right"
            className="main-color mt-20  mb-4 font-blissful xl:tracking-[5px] tracking-[2.5px] text-[17px] md:text-[25px] lg:text-[30px] 2xl:text-[50px]"
          >
            Partner with Us
          </h4>
          <p
            data-aos="fade-right"
            className="mb-6 text-gray-500 text-[12px] sm:text-[16px] lg:text-[18px] xl:text-[28px]
                sm:text-[#161615] leading-[1.4]"
          >
            Join forces with Prival Homes for a mutually beneficial partnership in
            providing exceptional holiday accommodations in Dubai. Together, we
            can create memorable experiences for guests seeking comfort, luxury,
            and convenience
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid  grid-cols-1 sm:grid-cols-2 gap-10">
            <input
              data-aos="fade-up"
              type="text"
              name="FullName"
              placeholder="Full Name"
              className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
              required
              onChange={handleChange}
            />
            <input
              data-aos="fade-up"
              type="text"
              name="CompanyName"
              placeholder="Company Name"
              className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
              required
              onChange={handleChange}
            />
            <input
              data-aos="fade-up"
              type="number"
              placeholder="Contact No."
              name="ContactNo"
              className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
              required
              onChange={handleChange}
            />
            <input
              data-aos="fade-up"
              type="text"
              name="Email"
              placeholder="Email"
              className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
              required
              onChange={handleChange}
            />
            <input
              data-aos="fade-up"
              type="text"
              name="Portfolio"
              placeholder="Current Portfolio Value"
              className="input border border-b-2 border-b-[#707070] w-full max-w-[700px] rounded-none"
              required
              onChange={handleChange}
            />
          </div>
          <div
            data-aos="zoom-out"
            className="  my-10 flex justify-center items-center sm:block mt-20"
          >
            <button
              type="submit"
              disabled={isLoading}
              className="btn  uppercase px-20 text-white main-color-bg rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default partnerWithUs;

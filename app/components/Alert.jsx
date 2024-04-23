import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-5 left-0 right-0 flex justify-center items-center ">
      <div
        className={`${type === "danger" ? "bg-red-800" : "bg-[#3B543C]"}
         p-2 text-indigo-100 leading-none lg:rounded-full flex items-center lg:inline-flex `}
        role="alert"
      >
        <p
          className={`${type === "danger" ? "bg-red-500" : "bg-[#3B543C]"}
         flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
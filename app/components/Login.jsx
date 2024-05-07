"use client";
import Image from "next/image";
import Link from "next/link";
import googleLogo from "../../public/images/propertyDetails/icons/googlelogo.svg";
import apple from "../../public/images/propertyDetails/icons/apple.svg";
import { useState } from "react";

const Login = ({onLoginSuccess}) => {
  const [signUPbtn, setSignUpbtn] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // HANDLE FORM SUBMISSION
    console.log(loginForm);
    onLoginSuccess(signUPbtn)
  };

  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    country: "",
    nationality: "",
    contactNo: "",
    passportNo: "",
    password: "",
    rePassword: "",
  });

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    // HANDLE FORM SUBMISSION
    console.log(registerForm);
    onLoginSuccess(false)
    setSignUpbtn(false)
  };
  return (
    <>
      {!signUPbtn ? (
        <form onSubmit={handleLoginFormSubmit}>
          <div className="flex flex-col">
            <h1 className="xl:text-5xl font-blissful tracking-widest mb-14 main-color">
              Login
            </h1>
            <div className="flex gap-20 justify-center items-center self-center mb-8">
              <label className="text-3xl font-bold">Email</label>
              <input
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.currentTarget.value })
                }
                required
                name="email"
                type="Email"
                className="input input-bordered grow w-full min-w-[500px]"
              />
            </div>
            <div className="flex gap-6 justify-center items-center self-center">
              <label className="text-3xl font-bold">Password</label>
              <input
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    password: e.currentTarget.value,
                  })
                }
                required
                name="password"
                type="password"
                className="input input-bordered grow w-full min-w-[500px]"
              />
            </div>
            <Link
              href={"/"}
              className="text-lg self-end mr-72 mt-5 underline font-bold"
            >
              Forget Password?
            </Link>
          </div>
          <div className="flex justify-between items-center mt-20">
            <div>
              <button
                type="submit"
                className="uppercase text-2xl text-white px-40 py-4 main-color-bg rounded-full font-blissful tracking-widest"
              >
                Login
              </button>
              <p className="mt-5 text-xl pl-4 font-blissful tracking-widest">
                Dont have an account?,{" "}
                <span onClick={() => setSignUpbtn(true)} className="underline">
                  signup
                </span>
              </p>
            </div>
            <p className="divider divider-horizontal h-72"></p>
            <div className="flex flex-col gap-6">
              <button className="bg-[#EDEDED]  px-32 py-4 rounded-full flex justify-center items-center gap-4 text-lg font-blissful tracking-widest">
                <Image src={googleLogo} alt="googleLogo" /> Continue with Google
              </button>
              <button className="bg-black text-white  px-32 py-4 rounded-full flex justify-center items-center gap-4 text-lg font-blissful tracking-widest">
                <Image src={apple} alt="googleLogo" /> Continue with Apple
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form onSubmit={handleRegisterFormSubmit}>
          <h1 className="xl:text-5xl font-blissful tracking-widest mb-14 main-color">
            Register
          </h1>
          <div className="ml-32 flex flex-col">
            <div className="flex gap-20 items-center mb-8 justify-between">
              <label className="text-3xl font-bold">Full Name*</label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    fullName: e.currentTarget.value,
                  })
                }
                required
                type="text"
                className="input input-bordered grow max-w-[650px] "
              />
            </div>
            <div className="flex gap-20 items-center  mb-8 justify-between ">
              <label className=" text-3xl font-bold">Email</label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    email: e.currentTarget.value,
                  })
                }
                required
                name="email"
                type="Email"
                className="input input-bordered grow max-w-[650px]  "
              />
            </div>
            <div className="flex gap-20 items-center mb-8 justify-between">
              <label className="text-3xl font-bold">
                Country of Residence*
              </label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    country: e.currentTarget.value,
                  })
                }
                required
                type="text"
                className="input input-bordered grow max-w-[650px] "
              />
            </div>
            <div className="flex gap-20 items-center mb-8 justify-between">
              <label className="text-3xl font-bold">Nationality*</label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    nationality: e.currentTarget.value,
                  })
                }
                required
                type="text"
                className="input input-bordered grow max-w-[650px] "
              />
            </div>
            <div className="flex gap-20 items-center mb-8 justify-between">
              <label className="text-3xl font-bold">Contact No*</label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    contactNo: e.currentTarget.value,
                  })
                }
                required
                type="number"
                className="input input-bordered grow max-w-[650px] "
              />
            </div>
            <div className="flex gap-20 items-center mb-8 justify-between">
              <label className="text-3xl font-bold">Passport No*</label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    passportNo: e.currentTarget.value,
                  })
                }
                required
                type="number"
                className="input input-bordered grow max-w-[650px] "
              />
            </div>
            <div className="flex gap-20 items-center mb-8 justify-between">
              <label className="text-3xl font-bold">Password*</label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    password: e.currentTarget.value,
                  })
                }
                required
                name="password"
                type="password"
                className="input input-bordered grow max-w-[650px] "
              />
            </div>
            <div className="flex gap-20 items-center mb-8 justify-between">
              <label className="text-3xl font-bold">Retype Password*</label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    rePassword: e.currentTarget.value,
                  })
                }
                required
                name="password"
                type="password"
                className="input input-bordered grow max-w-[650px] "
              />
            </div>
            <button
              type="submit"
              className="self-center uppercase text-2xl text-white px-40 py-4 main-color-bg rounded-full font-blissful tracking-widest mt-10"
            >
              Register
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Login;

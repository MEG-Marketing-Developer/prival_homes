import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "@/public/images/home/hero.svg";

const page = () => {
  return (
    <div className="container mx-auto  mt-10">
      <div
        className={`conditions-clip-path relative h-36 sm:h-60 xl:h-96 flex justify-start items-end `}
      >
        <Image
          src={hero}
          alt="hero"
          fill
          quality={100}
          priority
          className="object-cover -z-20 "
        />
        <h4
          data-aos="zoom-in"
          className="text-[21px] sm:text-[31px]   text-white pl-5 sm:pl-14 lg:pl-20 xl:pl-24 mb-6 sm:mb-8 lg:mb-12"
        >
          Privacy Policy
        </h4>
      </div>

      <div className="px-4 sm:px-32">
        <div className=" mt-10 mb-8">
          <p>
            Protecting your privacy is important to us at Prival Homes. This
            Privacy Policy outlines how we collect, use, disclose, and protect
            your personal information when you use our website{" "}
            <Link
              href={"https://theprival.com/"}
              className="text-blue-500 hover:text-blue-700 font-semibold transition"
            >
              theprival.com
            </Link>{" "}
            and our vacation home rental services. By accessing or using our
            services, you consent to the collection and use of your personal
            information as described in this policy.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4  text-[20px] sm:text-3xl">
            Information We Collect:
          </h4>
          <p>
            <b>Personal Information:</b> When you make a reservation or create
            an account with Prival, we may collect personal information such as
            your name, email address, phone number, and
          </p>
          <p>
            <b>Usage Information:</b> We may collect information about your
            interactions with our website, including your IP address, browser
            type, and device identifiers.
          </p>
          <p>
            <b>Cookies:</b> We use cookies and similar tracking technologies to
            enhance your browsing experience and analyze website traffic. You
            can control the use of cookies through your browser settings.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4 text-[20px] sm:text-3xl">
            How We Use Your Information:
          </h4>
          <p>
            We use your personal information to process reservations, provide
            customer support, and communicate with you about your bookings.We
            may use your information to personalize your experience, improve our
            services, and send you promotional offers and marketing
            communications. We do not sell or rent your personal information to
            third parties. However, we may share your information with service
            providers and business partners who assist us in operating our
            website and fulfilling your bookings.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4 text-[20px] sm:text-3xl">
            Data Security:
          </h4>
          <p>
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, disclosure,
            alteration, or destruction.Despite our efforts to safeguard your
            information, no method of transmission over the internet or
            electronic storage is completely secure. Therefore, we cannot
            guarantee absolute security.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4 text-[20px] sm:text-3xl">
            Data Retention:
          </h4>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required by law.You may request to delete
            your account and personal information from our records at any time.
            However, please note that we may retain certain information for
            archival purposes, to comply with legal obligations, or to resolve
            disputes.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4 text-[20px] sm:text-3xl">
            Third-Party Links:
          </h4>
          <p>
            Our website may contain links to third-party websites or services
            that are not owned or controlled by Prival Homes. We are not
            responsible for the privacy practices or content of these third
            parties. We encourage you to review the privacy policies of any
            third-party websites you visit.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4 text-[20px] sm:text-3xl">
            Children's Privacy:
          </h4>
          <p>
            Our services are not intended for individuals under the age of 18.
            We do not knowingly collect personal information from children. If
            you believe that we have inadvertently collected information from a
            child, please contact us immediately.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4 text-[20px] sm:text-3xl">
            Changes to Privacy Policy:
          </h4>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be effective immediately upon posting on our
            website. We encourage you to review this Privacy Policy periodically
            for updates.
          </p>
        </div>
        <div className=" py-4">
          <p>
            If you have any questions or concerns about our Privacy Policy,
            please contact us at{" "}
            <Link
              href={"/"}
              className="text-blue-500 hover:text-blue-700 font-semibold transition"
            >
              info@theprival.com
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

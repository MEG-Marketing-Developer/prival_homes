import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "@/public/images/home/hero.svg";

const ConditionsPage = () => {
  return (
    <div className="container mx-auto mt-10 ">
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
          className="px-4 sm:px-32 text-[21px] sm:text-[31px]   text-white  mb-6 sm:mb-8 lg:mb-12"
        >
          Terms & Conditions
        </h4>
      </div>
      <div className="px-4 sm:px-32">
        <div className=" mt-10 mb-8">
          <p>
            Welcome to Prival Homes! Before you embark on your journey with us,
            please take a moment to review the following terms and conditions
            governing the use of our vacation home rental services. By accessing
            or using our website{" "}
            <Link
              href={"https://theprival.com/"}
              className="text-blue-500 hover:text-blue-700 font-semibold transition"
            >
              theprival.com
            </Link>{" "}
            and booking accommodations through Prival, you agree to comply with
            and be bound by these terms. If you do not agree with any part of
            these terms, you may not access or use our services.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4  text-[20px] sm:text-3xl">
            Reservation and Booking:
          </h4>
          <p>
            All bookings are subject to availability and confirmation. By making
            a reservation through Prival, you agree to provide accurate and
            complete information about yourself and any guests accompanying you.
            Prival reserves the right to refuse or cancel bookings at our
            discretion, without liability, if deemed necessary.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4  text-[20px] sm:text-3xl">
            Payment and Fees:
          </h4>
          <p>
            Payment for accommodations must be made in full at the time of
            booking, unless otherwise specified.Additional fees such as cleaning
            fees, security deposits, and taxes may apply. These will be clearly
            communicated during the booking process. Prival accepts payment via
            secure online payment methods. We do not store credit card details
            nor do we share financial information with third parties.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4  text-[20px] sm:text-3xl">
            Cancellation and Refunds:
          </h4>
          <p>
            Cancellation policies vary depending on the property and are
            specified at the time of booking. Please review the cancellation
            policy carefully before making your reservation.Refunds for
            cancellations are subject to the terms of the cancellation policy.
            Prival reserves the right to withhold a portion or all of the
            booking amount in accordance with the policy.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4  text-[20px] sm:text-3xl">
            Check-in and Check-out:
          </h4>
          <p>
            Check-in and check-out times are specified for each property and
            must be adhered to unless alternative arrangements have been made in
            advance.Late check-out may be subject to additional charges.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4  text-[20px] sm:text-3xl">
            Property Use and Conduct:
          </h4>
          <p>
            Guests are expected to treat the property with respect and to leave
            it in the same condition as they found it.Smoking, pets, and parties
            may be prohibited on certain properties. Please review the property
            rules and regulations carefully. Prival reserves the right to charge
            additional fees or terminate the reservation without refund if
            guests engage in inappropriate behavior or violate the property
            rules.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4  text-[20px] sm:text-3xl">
            Liability and Indemnity:
          </h4>
          <p>
            Prival acts solely as an intermediary between property owners and
            guests. We do not own or operate the properties listed on our
            website.Guests are responsible for their own safety and security
            during their stay. Prival disclaims any liability for loss, damage,
            injury, or inconvenience caused during the use of our services. By
            using our services, you agree to indemnify and hold Prival harmless
            from any claims, damages, or losses arising out of your use of the
            website or accommodations booked through us.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4  text-[20px] sm:text-3xl">
            Intellectual Property:
          </h4>
          <p>
            The content and design of our website, including but not limited to
            text, images, logos, and trademarks, are the property of Prival and
            are protected by copyright and other intellectual property laws. You
            may not reproduce, distribute, or use any content from our website
            without prior written permission
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4  text-[20px] sm:text-3xl">
            Governing Law and Jurisdiction
          </h4>
          <p>
            These terms and conditions shall be governed by and construed in
            accordance with the laws of the United Arab Emirates. Any disputes
            arising out of or relating to these terms shall be subject to the
            exclusive jurisdiction of the courts of Dubai.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4  text-[20px] sm:text-3xl">
            Changes to Terms and Conditions:
          </h4>
          <p>
            Prival reserves the right to update or modify these terms and
            conditions at any time without prior notice. Any changes will be
            effective immediately upon posting on our website. It is your
            responsibility to review these terms periodically for updates.
          </p>
        </div>
        <div className=" py-4">
          <h4 className="main-color mt-2 mb-4  text-[20px] sm:text-3xl">
            Changes to Terms and Conditions:
          </h4>
          <p>
            Prival reserves the right to update or modify these terms and
            conditions at any time without prior notice. Any changes will be
            effective immediately upon posting on our website. It is your
            responsibility to review these terms periodically for updates.
          </p>
          <p className="pt-2">
            By using our services, you acknowledge that you have read,
            understood, and agree to be bound by these terms and conditions. If
            you have any questions or concerns, please contact us at{" "}
            <Link
              href={"mailto:info@theprival.com"}
              className="text-blue-500 hover:text-blue-700 font-semibold transition"
            >
              info@theprival.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConditionsPage;

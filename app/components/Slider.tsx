"use client";
import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import hosting1 from "@/public/images/home/hosting1.svg";
import hosting2 from "@/public/images/home/hosting2.svg";
import hosting3 from "@/public/images/home/hosting3.svg";
import hosting4 from "@/public/images/home/hosting4.svg";
import hosting5 from "@/public/images/home/hosting5.svg";
import hosting6 from "@/public/images/home/hosting6.svg";
import hosting7 from "@/public/images/home/hosting7.svg";
import hosting8 from "@/public/images/home/rms.svg";
import Image from "next/image";
const data = [
  { img1: hosting1, img2: hosting2 },
  { img1: hosting3, img2: hosting4 },
  { img1: hosting5, img2: hosting6 },
  { img1: hosting7, img2: hosting8 },
];
function Slider() {
  const [platforms, setPlatforms] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = platforms.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, platforms]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="section-center">
      {platforms.map((platform, platformIndex) => {
        let position = "nextSlide";
        if (platformIndex === index) {
          position = "activeSlide";
        }
        if (
          platformIndex === index - 1 ||
          (index === 0 && platformIndex === platforms.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <>
            <button className="prev" onClick={() => setIndex(index - 1)}>
              <FiChevronLeft />
            </button>
            <article className={position} key={platformIndex}>
              <div className="flex justify-center gap-x-14 relative">
                <Image
                  src={platform.img1}
                  alt="hosting-img"
                  className="w-1/4 "
                />
                <Image
                  src={platform.img2}
                  alt="hosting-img"
                  className="w-1/4 "
                />
              </div>
            </article>
            <button className="next" onClick={() => setIndex(index + 1)}>
              <FiChevronRight />
            </button>
          </>
        );
      })}
    </div>
  );
}

export default Slider;

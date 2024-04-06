"use client";

import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

import { useState } from "react";
import ModalVideo from "react-modal-video";

export const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex overflow-hidden mt-40 relative size-full flex-col justify-center self-stretch px-6 py-20 font-blac
      k text-center text-white min-h-[882px] max-md:px-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url('/portfolio-bg.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "800px",
      }}
    >
      <Parallax translateY={["-200px", "200px"]} speed={10}>
        <div className="flex relative justify-center items-center px-16 mt-40 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[800px]">
            <img
              onClick={() => setIsOpen(true)}
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/598ac9c99c06225e525a03677e98afbce7efb4c1349e42f32939cb334e9b701d?"
              className=" cursor-pointer self-center aspect-[1.01] w-[97px]"
            />
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 1, autoplay: 1, }}
              isOpen={isOpen}
              videoId="AP8PZeNfoeo"
              onClose={() => setIsOpen(false)}
            />
            <div className="flex flex-col items-center px-3 mt-8 max-md:max-w-full">
              <div className="text-6xl uppercase font-black leading-[67.2px] max-md:max-w-full max-md:text-4xl">
                Take a look at our work
              </div>
              <div className="self-stretch mt-4 text-lg leading-8 max-md:max-w-full">
                Nulla egestas sapien integer mi fermentum tellus tristique
                consequat pulvinar sagittis adipiscing
                <br />
                egestas purus et mi tempus semper id vel prci eu magna in
                senectus sit eget justo eget.
              </div>
              <Link
                href={"/contact"}
                className=" hover:bg-orange-300 font-bold justify-center px-7 py-8 mt-12 text-lg leading-5 uppercase bg-orange-200 text-neutral-900 max-md:px-5 max-md:mt-10"
              >
                Book an appointment
              </Link>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

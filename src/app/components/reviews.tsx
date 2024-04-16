"use client";

import Link from "next/link";
import Carousel from "./carousel";

export const Reviews = () => {
  return (
    <div className="flex flex-col p-[5rem] font-black w-full text-neutral-900   bg-[#f8f5ef]">
      <div className="flex justify-start ">
        <div className="flex justify-center gap-4 items-center">
          <div className=" flex items-center shrink-0 self-stretch my-auto w-14 h-0.5 justify-center bg-orange-200" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0739682717f5154ff9757e91ea1b687bd7957a2a28388db47d02a3dab47dbd4d?"
            className="shrink-0 self-stretch aspect-[3.45] w-[51px] sm:h-1/4"
          />
          <div className="shrink-0 self-stretch justify-end my-auto w-14 h-0.5 bg-orange-200" />
        </div>
      </div>

      <div className=" flex justify-between   w-full flex-row text-center text-6xl uppercase leading-[67.2px] max-md:max-w-full max-md:text-4xl">
        <p>What our clients say</p>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef734432de65b36c2b5c08804f07ce77bb388ba2b59096d5c0552b38c5682a43?"
          className="flex self-center max-w-full aspect-[1.72] w-[155px]"
        />
      </div>
      <div className=" flex mb-3 flex-col  w-full self-center text-md leading-8  text-neutral-700 max-md:mt-10 max-md:max-w-full">
        Nulla egestas sapien integer mi fermentum tellus tristique consequat
        <br />
        adipiscing egestas purus et mi tempus semper id vel prci eu magna.
      </div>

      <div className="flex self-center  w-full text-lg leading-5 text-center uppercase max-w-[223px] max-md:mt-10 max-md:max-w-full"></div>
      <Carousel  />

      <Link href={"/contact"} className="justify-center self-center px-7 py-8 mt-40 bg-orange-200 cursor-pointer  hover:bg-[#C09B6B] max-md:px-5 max-md:mt-10">
        Book an appointment
      </Link>
      <div className=" mt-24 border-b border-[#dec7a6] my-8"></div>
    </div>

  
  );
};


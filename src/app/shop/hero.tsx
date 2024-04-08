"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import * as React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center px-16 py-20 mt-8 w-full max-md:px-5 max-md:max-w-full bg-[#1D1D1E]">
      <div className="justify-center mt-16 mb-28 w-full max-w-[1292px] max-md:my-10 max-md:max-w-full">
        <div className="flex justify-center gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex  flex-col items-start font-semibold max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-row justify-center w-1/2 mb-8">
                <div className="shrink-0 self-stretch my-auto w-14 h-0.5 bg-orange-200" />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b4030ca54ae69f670611a3fd901f6f868bcfd9a4baa0c4abcf0590d28fd5d80?"
                  className="shrink-0 self-stretch aspect-[3.45] w-[51px]"
                />
                <div className="shrink-0 self-stretch my-auto w-14 h-0.5 bg-orange-200" />
              </div>

              <div className=" flex  w-full text-white  justify-center uppercase font-barlow text-7xl font-extrabold leading-none">
                <div className="w-full">Browse Our Products</div>
              </div>
              <p className="text-white mt-5">
                Explore our handpicked selection of premium hair care products.
                Tailored for the modern gentleman. From styling pomades to
                nourishing shampoos, find everything you need to keep your hair
                looking sharp and healthy. Perfect for those who value
                sophistication and quality in their grooming routine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

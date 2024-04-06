"use client";

import Link from "next/link";

export const CustomerRating = () => {
  return (
    <div className="justify-center self-stretch p-[50px] bg-[#f8f5ef]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col  w-6/12 max-md:ml-0 max-md:w-full animate-fade-in-up ">
          <img
            loading="lazy"
            src="/customer-rating-img.jpg"
            className="grow self-stretch w-full aspect-[1.01] max-w-[587.9px] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow pr-5 max-w-[614px] max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f81fb80f1aea55a61e5c43995c84dd965fd463f28de5afeb3425afb4b89a5f7f?"
              className="aspect-[3.45] w-[51px]"
            />
            <div className=" animate-fade-in-up mt-6 text-6xl font-black uppercase leading-[67px] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              10+ years making our
              <br />
              customers happy
            </div>
            <div className=" animate-fade-in-up mt-4 text-lg leading-8 text-neutral-700 max-md:mr-2 max-md:max-w-full">
              Nulla egestas sapien integer mi fermentum tellus tristique
              consequat
              <br />
              pulvinar sagittis adipiscing egestas purus et mi tempus semper id
              vel prci
              <br />
              eu magna in senectus sit eget justo eget.
            </div>
            <div className=" animate-fade-in-up justify-between mt-8 max-md:pr-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch py-px font-black uppercase text-neutral-900 max-md:mt-10">
                    <div className="text-8xl leading-[97.98px] max-md:text-4xl">
                      99%
                    </div>
                    <div className="mt-3 text-lg leading-6">
                      Customer satisfaction
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch py-px font-black uppercase text-neutral-900 max-md:mt-10">
                    <div className="text-8xl leading-[97.98px] max-md:text-4xl">
                      10y
                    </div>
                    <div className="mt-3 text-lg leading-6">
                      Years of experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href={"/about"} className="justify-center self-start px-7 py-8 mt-14 text-lg font-black leading-5 text-center uppercase bg-orange-200 text-neutral-900 max-md:px-5 max-md:mt-10">
              More About us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import { scrollToSection } from "@/lib/utils";

export const WhySection = () => {
  return (
    <div className=" mt-10 flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="mt-40 w-full max-w-[1292px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col grow font-black text-neutral-900 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e482a676f02970bf5c4d0a7bc39b2981889e2c3eb5ad34073d187446e6b0fc10?"
                className="aspect-[3.45] w-[51px]"
              />
              <div className="mt-6 text-6xl uppercase leading-[67px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                How we started
                <br />
                our barber shop
              </div>
              <div className="mt-4 text-lg leading-8 text-neutral-700 max-md:mr-2.5 max-md:max-w-full">
                Nulla egestas sapien integer mi fermentum tellus tristique
                consequat
                <br />
                pulvinar sagittis adipiscing egestas purus et mi tempus semper
                id vel prci eu
                <br />
                magna in senectus sit eget justo eget integer mi fermentum.
              </div>
              <div
                onClick={() => scrollToSection("about")}
                className="cursor-pointer justify-center self-start px-7 py-8 mt-12 text-lg leading-5 text-center uppercase bg-orange-200 max-md:px-5 max-md:mt-10 max-md:max-w-full"
              >
                MEET OUR TEAM
              </div>
              <img
                loading="lazy"
                src="/why-2.jpg"
                className="mt-32 w-full aspect-[1.37] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/why-1.jpg"
              className="w-full aspect-[0.85] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

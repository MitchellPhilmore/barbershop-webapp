"use client";

import Link from "next/link";

export const SocialMediaSection = () => {
  return (
    <div className="flex flex-col px-6  bg-[#f8f5ef] max-md:px-5">
      <div className="flex justify-center items-center px-16 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-4 items-center">
          <div className="shrink-0 self-stretch my-auto w-14 h-0.5 bg-orange-200" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/841b6e6ea570af6f66c41ae3fffb8674513ba7d0741a8b7b053c1b6d0eff8edb?"
            className="shrink-0 self-stretch aspect-[3.45] w-[51px]"
          />
          <div className="shrink-0 self-stretch my-auto w-14 h-0.5 bg-orange-200" />
        </div>
      </div>
      <Link
        href={"https://instagram.com"}
        className="self-center mt-6 text-6xl font-black text-center uppercase leading-[67.2px] text-neutral-900 max-md:max-w-full max-md:text-4xl"
      >
        Follow us on instagram
      </Link>
      <div className="mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-8">
              <img
                loading="lazy"
                src="/social-media-mini-1.jpg"
                className="w-full aspect-[0.99]"
              />
              <img
                loading="lazy"
                src="/social-media-mini-2.jpg"
                className="mt-6 w-full aspect-[0.98]"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[51%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/social-media-main.jpg"
              className="w-full aspect-square max-md:mt-8 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-8">
              <img
                loading="lazy"
                src="/social-media-mini-3.jpg"
                className="w-full aspect-[0.99]"
              />
              <img
                loading="lazy"
                src="/social-media-mini-4.jpg"
                className="mt-6 w-full aspect-[0.98]"
              />
            </div>
          </div>
        </div>
      </div>
      <Link
        href={"https://www.instagram.com"}
        className="justify-center mb-10 self-center px-7 py-8 mt-16 text-lg font-black leading-5 text-center uppercase bg-orange-200 text-neutral-900 cursor-pointer  hover:bg-[#C09B6B] max-md:px-5 max-md:mt-10"
      >
        Follow us
      </Link>
    </div>
  );
};

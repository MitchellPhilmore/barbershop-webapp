"use client";
import Link from "next/link";

import { useParallax } from "react-scroll-parallax";
import { useCartStore } from "../cart-store";
import { Parallax } from "react-scroll-parallax";

export const Header = () => {
  const { items } = useCartStore();

  return (
    <div
      className="relative overflow-hidden bg-black text-white"
      style={{ height: "800px" }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
      <Parallax translateY={["-200px", "200px"]} speed={20}>
        <div
          className="bg-cover p-5"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url('/shop-cover-img.jpg')`,
            height: "800px",
          }}
        >
          <div className="flex gap-5 justify-between items-center self-stretch text-base font-black leading-5 uppercase max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/253d522dfdb3a95b05c4c08239e4c4c0eed3aa78b52918ffb7be2604a7c561dc?"
              className="shrink-0 self-stretch my-auto max-w-full aspect-[5.88] w-[173px]"
            />
            <div className="flex gap-5 justify-end self-stretch px-4 my-auto text-white whitespace-nowrap max-md:flex-wrap">
              <Link href={"/"} className="grow cursor-pointer">
                Home
              </Link>
              <Link href={"/about"} className="cursor-pointer">
                About
              </Link>
              <div className="flex gap-2"></div>
              <Link href={"/services"} className="cursor-pointer">
                Services
              </Link>
              <Link href={"/shop"} className="cursor-pointer">
                Shop
              </Link>
              <Link href={"/contact"} className="cursor-pointer">
                Contact
              </Link>
            </div>
            <div className="flex gap-3.5 justify-end self-stretch">
              <div className="flex gap-0 pr-5 my-auto text-white">
                <div className="grow cursor-pointer">Cart (</div>
                <div className="text-center">{items.length}</div>
                <div>)</div>
              </div>
              <Link
                href={"/contact"}
                className=" justify-center cursor-pointer px-5 py-6 text-center bg-[#dec7a6] text-black font-black hover:bg-[#C09B6B] "
              >
                Book an appointment
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-full mt-[1rem] ">
            <img
              loading="lazy"
              src="/barber-logo.png"
              className="max-w-full aspect-[1.15] w-[248px] animate-fade-in-up"
            />
            <div className=" opacity-1 animate-fade-in-up mt-8 text-8xl text-white font-extrabold uppercase leading-[98px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              A unique barber
              <br />
              experience
            </div>
            <div className="mt-4 text-lg leading-8 text-white max-md:max-w-full animate-fade-in-up">
              Eu, in in pharetra mauris mi pretium magnis nullam et consequat
              vel ina sit ut pharetra ultrices
              <br />
              feugiat etol quam luctus in dictum placerat malesuada sollicitudin
              eu vel diam.
            </div>
            <div className="flex justify-center items-center self-stretch px-16 mt-10 text-lg leading-5 uppercase max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between max-md:flex-wrap">
                <Link
                  href={"/contact"}
                  className=" hover:bg-orange-200 cursor-pointer font-bold justify-center animate-fade-in-up px-7 py-8 bg-white text-neutral-900 max-md:px-5"
                >
                  Book an appointment
                </Link>
                <Link
                  href={"/services"}
                  className="  hover:bg-white hover:text-black hover:font-bold animate-fade-in-up justify-center px-6 py-8 border border-white border-solid max-md:px-5"
                >
                  Browse services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

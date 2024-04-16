"use client";

import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-full items-start p-20 w-full lg:h-[650px] bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3472475e5a10b4966c9e192c6c5fe3130d27eefa3d59bf1cc7004bccae9a00d?"
          className="mt-20 ml-10 aspect-[3.45] w-[51px] max-md:mt-10 max-md:ml-2.5"
        />
        <div className="w-full flex gap-5 justify-between  mt-6  text-white max-w-[1287px] max-md:flex-wrap max-md:max-w-full">
          <div className=" w-full mb-32 text-8xl font-black uppercase leading-[98px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            About our
            <br />
            barber shop
            <div className="flex flex-col lg:flex-row gap-10 mt-12">
              <Link
                href={"/contact"}
                className="  w-60 items-center p-3 text-lg h-14 justify-center flex-row  bg-orange-200 hover:bg-[#C09B6B] text-neutral-900 max-md:px-5"
              >
                Book appointment
              </Link>
              <Link
                href={"/services"}
                className=" w-60 p-3 text-lg text-center h-14 justify-center  text-white border border-white border-solid max-md:px-5"
              >
                Browse services
              </Link>
            </div>
            <div className=" relative flex flex-col gap-5 pr-20 mt-12 mb-52  text-lg font-black leading-5 text-center uppercase max-md:flex-wrap max-md:pr-5 max-md:my-10">
              <div className=" lg:absolute lg:left-0  flex justify-end">
                <img
                  loading="lazy"
                  src="/hero-2.jpg"
                  className="w-full scale-60 h-[751px] sm:flex-col z-50  max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className=" lg:absolute lg:right-0 self-start flex-row mt-5 text-lg leading-8">
            <div className="text-center text-lg mb-5">
              Eu, in in pharetra mauris mi pretium magnis nullam
              <br />
              et consequat vel ina sit ut pharetra ultrices feugiat
              <br />
              etol quam luctus in dictum placerat malesuada
              <br />
              sollicitudin eu vel diam.
            </div>
            <div className=" flex mb-6 flex-col justify-center items-end  pr-16 max-md:max-w-full">
              <img
                loading="lazy"
                src="/hero-1.jpg"
                className="max-w-full lg:w-[562px] z-40 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex z-10 flex-col px-20  w-full max-md:px-5 max-md:max-w-full bg-[#f8f5ef]">
        <div className="self-end mt-24 mr-14 text-lg leading-8 text-neutral-700 max-md:mr-2.5 max-md:max-w-full">
          <div className="self-end mt-24 mr-60 text-6xl font-black uppercase leading-[67.2px] text-neutral-900 max-md:mr-2.5 max-md:text-4xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a302a2f4a8791c3b4c9f2402b573d48601d26fcfb08927608e846dfdfb798117?"
              className="self-center mt-56 ml-36 aspect-[3.45] w-[51px] max-md:mt-10"
            />

            <p> Who we are</p>
          </div>
          <div>
            Eu, in in pharetra mauris mi pretium magnis nullam et consequat
            <br />
            vel ina sit ut pharetra ultrices feugiat etol quam luctus in dictum
            <br />
            placerat malesuada sollicitudin eu vel diam eu, in in pharetra
            <br />
            mauris mi pretium magnis nullam et consequat vel ina sit ut
            <br />
            pharetra ultrices feugiat.
            <div className=" flex overflow-hidden flex-col  pt-9 pr-3.5 pb-20  mt-0 w-full max-w-[1292px] max-md:pl-5 max-md:max-w-full">
              <div className="text-lg leading-8 text-neutral-700 max-md:max-w-full">
                Eu, in in pharetra mauris mi pretium magnis nullam et consequat
                <br />
                vel ina sit ut pharetra ultrices feugiat etol quam luctus in
                dictum
                <br />
                placerat malesuada sollicitudin eu vel diam eu.
              </div>
              <Link
                href={"/about"}
                className="justify-center px-7 py-8 mt-10 mr-64 mb-20 text-lg font-black leading-5 text-center uppercase bg-orange-200 text-neutral-900 max-md:px-5 max-md:mr-2.5 max-md:mb-10"
              >
                Book an appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" justify-center  self-center px-5 w-full max-w-[1292px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center self-stretch px-12 font-black text-center text-neutral-900 max-md:px-5 max-md:mt-7">
              <div className="text-8xl uppercase leading-[97.98px] max-md:text-4xl">
                99%
              </div>
              <div className="mt-6 text-2xl leading-9 uppercase">
                Customer satisfaction
              </div>
              <div className="self-stretch mt-2 text-lg leading-8">
                Lorem ipsum dolor sit amet consectet
                <br />
                adipiscing elit eget quamumto.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center self-stretch px-12 font-black text-center text-neutral-900 max-md:px-5 max-md:mt-7">
              <div className="text-8xl uppercase leading-[97.98px] max-md:text-4xl">
                20k+
              </div>
              <div className="mt-6 text-2xl leading-9 uppercase">
                Services provided
              </div>
              <div className="self-stretch mt-2 text-lg leading-8">
                Lorem ipsum dolor sit amet consectet
                <br />
                adipiscing elit eget quamumto.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center self-stretch px-12 font-black text-center text-neutral-900 max-md:px-5 max-md:mt-7">
              <div className="text-8xl uppercase leading-[97.98px] max-md:text-4xl">
                10+
              </div>
              <div className="mt-6 text-2xl leading-9 uppercase">
                Years of Experience
              </div>
              <div className="self-stretch mt-2 text-lg leading-8">
                Lorem ipsum dolor sit amet consectet
                <br />
                adipiscing elit eget quamumto.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

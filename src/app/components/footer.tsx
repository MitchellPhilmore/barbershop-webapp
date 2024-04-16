"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex mt-14 flex-col self-stretch pt-14 bg-neutral-900">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
            <div className="max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/750e82c4af9fca284cf5d5a647113806506cba4a42ad040487184b8515f21706?"
                    className="w-full aspect-[2] max-md:mt-2.5"
                  />
                </div>
                <div className="flex flex-col ml-5 w-full items-center max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-5 mt-24 max-w-[800px] max-md:mt-10 max-md:max-w-full">
                    <div className="flex justify-center items-center px-16 max-md:px-5 max-md:max-w-full">
                      <div className="flex gap-4 items-center">
                        <div className="shrink-0 self-stretch my-auto w-14 h-0.5 bg-orange-200" />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b4030ca54ae69f670611a3fd901f6f868bcfd9a4baa0c4abcf0590d28fd5d80?"
                          className="shrink-0 self-stretch aspect-[3.45] w-[51px]"
                        />
                        <div className="shrink-0 self-stretch my-auto w-14 h-0.5 bg-orange-200" />
                      </div>
                    </div>
                    <div className="self-center mt-6 text-4xl font-black text-center text-white uppercase leading-[52.06px] max-md:max-w-full">
                      Join Our Community!
                    </div>
                    <div className="mt-4 t leading-8 text-sm text-center text-neutral-200 max-md:max-w-full">
                      Subscribe to our newsletter and stay ahead with the latest
                      news, exclusive insights, and special offers delivered
                      straight to your inbox. Don't miss out on the updates that
                      matter to you. Sign up now to stay connected and informed!
                    </div>
                    <div className="flex gap-5 justify-between items-start self-center pb-5 mt-8 max-w-full uppercase border-b border-solid border-zinc-500 w-[690px] max-md:flex-wrap">
                      <div className="text-lg font-semibold tracking-widest text-neutral-200">
                        Enter your email
                      </div>
                      <div className="justify-center px-5 py-6 text-base font-black leading-5 text-center bg-orange-200 text-neutral-900">
                        Subscribe now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2405c7cf73478c5e5876bd31e55efb7d778e34db10b4962c981109d80635c298?"
              className="grow shrink-0 mt-56 max-w-full aspect-[1.16] w-[300px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="mt-7 w-full bg-neutral-700 min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-col self-center px-6 pt-20 w-full max-w-[1340px] max-md:px-5 max-md:max-w-full">
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b8282042081f2f113a49d7977fbf07551975c8c83a6db5c2eb58f2ffd4f5c54?"
                  className="max-w-full aspect-[5.88] w-[173px]"
                />
                <div className="mt-6 text-lg leading-8 text-white max-md:mr-2.5">
                  Nulla egestas sapien integer mi fermentum tellus
                  <br />
                  tristique consequat pulvinar sagittis adipiscing
                  <br />
                  egestas purus et mi tempus semper.
                </div>
                <div className="flex gap-4 pr-20 mt-10 max-md:pr-5 max-md:mt-10">
                  <div className="flex justify-center items-center px-2.5 w-9 h-9 bg-white">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a00869c35b786397993c8095b9abf3f4e1cbd18a34ce7765703faec09c7b7014?"
                      className="aspect-[1.06] w-[18px]"
                    />
                  </div>
                  <div className="flex justify-center items-center px-2.5 w-9 h-9 bg-white">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3cc92b7da9cc971b684ac73a69c6e1c70a40f9af0aaf8ea4b9673c2d9c49265?"
                      className="aspect-[1.06] w-[18px]"
                    />
                  </div>
                  <div className="flex justify-center items-center px-2.5 w-9 h-9 bg-white">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d984850e23d3c0bae235d18868b80bf58c265a03bdcb434c418853c286cdfdb?"
                      className="aspect-[1.06] w-[18px]"
                    />
                  </div>
                  <div className="flex justify-center items-center px-2.5 w-9 h-9 bg-white">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4359798efe40be4cdc0760dbefc09c4fc170aa000e136f1db58b369cc489200?"
                      className="aspect-[1.06] w-[18px]"
                    />
                  </div>
                  <div className="flex justify-center items-center px-2.5 w-9 h-9 bg-white">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a22f565deb4135048f03c71838458d5da51c0b7095a280458b00608e64973f3?"
                      className="aspect-[1.06] w-[18px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col font-black uppercase max-md:mt-10">
                      <div className="flex gap-5 justify-between mt-8 text-2xl leading-9 text-white">
                        <div className="flex flex-col self-start pb-5">
                          <Link href={"/home"}>Home</Link>
                          <Link href={"/about"} className="mt-5">
                            About
                          </Link>
                          <Link href={"/services"} className="mt-5">
                            Services
                          </Link>
                        </div>
                        <div className="flex flex-col pb-5">
                          <Link href={"/shop"} className="">
                            Shop
                          </Link>
                          <Link href={"/contact"} className="mt-5">
                            Contact
                          </Link>
                          <Link href={"/about"} className="mt-5">
                            Team member
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center px-16 py-14 mt-36 text-lg leading-8 text-center border-t border-solid border-neutral-700 text-neutral-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          Copyright © Beard X
        </div>
      </div>
    </div>
  );
};

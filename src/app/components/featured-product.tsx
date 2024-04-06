"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useProductStore } from "../product-store";

export const FeaturedProduct = () => {
  const { items, setItems } = useProductStore();

  useEffect(() => {
    axios.get("/api/products").then(({ data }) => setItems(data));
  }, []);
  return (
    <div className="flex flex-col items-center justify-end self-stretch py-20  bg-white max-md:pl-5">
      <div className="mt-9 ml-auto w-full flex max-w-[1340px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col grow self-stretch px-3 py-px mt-32 max-md:mt-10 max-md:max-w-full">
              <div className="flex justify-center gap-4 items-center">
                <div className=" flex items-center shrink-0 self-stretch my-auto w-14 h-0.5 justify-center bg-orange-200" />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0739682717f5154ff9757e91ea1b687bd7957a2a28388db47d02a3dab47dbd4d?"
                  className="shrink-0 self-stretch aspect-[3.45] w-[51px]"
                />
                <div className="shrink-0 self-stretch justify-end my-auto w-14 h-0.5 bg-orange-200" />
              </div>

              <div className=" w-full mt-6 text-6xl font-black text-center uppercase leading-[67.2px] text-neutral-900 max-md:max-w-full max-md:text-4xl">
                <p className="flex justify-center">Browse our products</p>
              </div>
              <div className="self-stretch mt-4 text-lg leading-8 text-center text-neutral-700 max-md:max-w-full">
                <p>
                  {" "}
                  Nulla egestas sapien integer mi fermentum tellus tristique
                  consequat pulvinar sagittis adipiscing
                  <br />
                  egestas purus et mi tempus semper id vel prci eu magna in
                  senectus sit eget justo eget.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c29dfc143beb10963c742a4becabf2ac11ae25aa44a5aeabffaa5f9804b2ce20?"
              className="grow w-full aspect-[1.3]"
            />
          </div>
        </div>
      </div>
      <div className="justify-center w-full p-10  py-px mt-10 max-w-full  max-md:pr-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {items &&
            items
              .filter((item: any) => {
                console.log(item);
                return item.featuredProduct;
              })
              .map((item: any) => {
                return (
                  <>
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <Link
                        href={`/shop/${item.id}`}
                        className="flex flex-col grow text-xl font-black leading-7 text-neutral-900 max-md:mt-7"
                      >
                        <img
                          key={item.id}
                          loading="lazy"
                          src={item.imgUrl}
                          className="w-full aspect-square"
                        />
                        <div className="mt-11 text-center uppercase max-md:mt-10 max-md:mr-1">
                          {item.name}
                        </div>
                        <div className="mt-3.5 text-center text-lg leading-8 text-neutral-700 max-md:mr-1">
                          {item.description}
                        </div>
                        <div className="mt-6 text-center uppercase max-md:mr-1">
                          {item.price}
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })}

          {/* <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <Link
              href={``}
              className="flex flex-col grow text-xl font-black leading-7 text-neutral-900 max-md:mt-7"
            >
              <img
                loading="lazy"
                src="/featured-product-1.png"
                className="w-full aspect-square"
              />
              <div className="mt-11 text-center uppercase max-md:mt-10 max-md:mr-1">
                Beard & mustache care oil
              </div>
              <div className="mt-3.5 text-center text-lg leading-8 text-neutral-700 max-md:mr-1">
                Nulla egestas sapien integer mi fermentum tellusol
                <br />
                tristique consequatolm pulvinar sagittis.
              </div>
              <div className="mt-6 text-center uppercase max-md:mr-1">
                $ 19.00 USD
              </div>
            </Link>
          </div> */}
          {/* <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-px text-xl font-black leading-7 text-neutral-900 max-md:mt-7">
              <img
                loading="lazy"
                src="/featured-product-2.png"
                className="w-full aspect-square"
              />
              <div className="mt-11 text-center uppercase max-md:mt-10 max-md:mr-1">
                Beard & hair serum
              </div>
              <div className="mt-3.5 text-center text-lg leading-8 text-neutral-700 max-md:mr-1">
                Nulla egestas sapien integer mi fermentum tellusol
                <br />
                tristique consequatolm pulvinar sagittis.
              </div>
              <div className="mt-6 text-center uppercase max-md:mr-1">
                $ 49.00 USD
              </div>
            </div>
          </div> */}
          {/* <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-px text-xl font-black leading-7 text-neutral-900 max-md:mt-7">
              <img
                loading="lazy"
                src="/featured-product-3.png"
                className="w-full aspect-square"
              />
              <div className="mt-11 text-center uppercase max-md:mt-10 max-md:mr-1">
                Premium Hair Clay
              </div>
              <div className="mt-3.5 text-center text-lg leading-8 text-neutral-700 max-md:mr-1">
                Nulla egestas sapien integer mi fermentum tellusol
                <br />
                tristique consequatolm pulvinar sagittis.
              </div>
              <div className="mt-6 text-center uppercase max-md:mr-1">
                $ 29.00 USD
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Link
        href={"/shop"}
        className="justify-center px-7 py-8 mt-16 text-lg font-black leading-5 text-center uppercase border border-solid border-neutral-900 text-neutral-900 hover:text-white hover:bg-black max-md:px-5 max-md:mt-10"
      >
        Browse all products
      </Link>
    </div>
  );
};

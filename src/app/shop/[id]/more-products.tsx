"use client";

import { useProductStore } from "@/app/product-store";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

export const MoreProducts = ({ products }: any) => {
  const { items, setItems } = useProductStore();

  useEffect(() => {
    axios.get("/api/products").then(({ data }) => setItems(data));
  }, []);
  return (
    <div className="flex mt-20 flex-col px-6 max-md:px-5">
      <div className="flex gap-5 justify-between font-black uppercase text-neutral-900 max-md:flex-wrap max-md:max-w-full">
        <div className="my-auto text-6xl leading-[67.2px] max-md:max-w-full max-md:text-4xl">
          More products
        </div>
        <Link
          href={"/shop"}
          className=" cursor-pointer justify-center px-7 py-8 text-lg leading-5 text-center border border-solid border-neutral-900 max-md:px-5"
        >
          Browse all products
        </Link>
      </div>
      <div className="justify-center py-px mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {items
            .slice(0, 3)
            .map(({ id, imgUrl, name, description, price }: any) => {
              return (
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <Link
                    href={`/shop/${id}`}
                    className="flex flex-col grow py-px text-xl font-black leading-7 text-neutral-900 max-md:mt-7"
                  >
                    <img
                      loading="lazy"
                      srcSet={imgUrl}
                      className="w-full aspect-square"
                    />
                    <div className="mt-11 uppercase max-md:mt-10 max-md:mr-1">
                      {name}
                    </div>
                    <div className="mt-3.5 text-lg leading-8 text-neutral-700 max-md:mr-1">
                      {description}
                    </div>
                    <div className="mt-6 uppercase max-md:mr-1">${price}</div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

"use client";
import prismadb from "@/lib/prismadb";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useProductStore } from "../product-store";

const Products = () => {
  const { items, setItems } = useProductStore();

  useEffect(() => {
    axios.get("/api/products").then(({ data }) => setItems(data));
  }, []);

  return (
    <>
      <div className="flex flex-row w-full">
        <div className=" grid grid-cols-3 gap-4 p-4">
          {items.map(({ id, name, description, price, imgUrl }) => {
            return (
              <div key={id} className=" p-10 flex-wrap  py-px mt-10 max-w-full  max-md:pr-5">
                <div className="flex  max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                    <Link
                      href={`/shop/${id}`}
                      key={id}
                      className="flex cursor-pointer  flex-col grow text-xl transition-transform duration-300 hover:scale-110  font-black leading-7 text-neutral-900 max-md:mt-7 "
                    >
                      <img
                        key={id}
                        loading="lazy"
                        src={imgUrl}
                        className=" aspect-square"
                      />

                      <div className="mt-11 text-center uppercase max-md:mt-10 max-md:mr-1">
                        {name}
                      </div>
                      <div className="mt-3.5 text-center text-lg leading-8 text-neutral-700 max-md:mr-1">
                        {description}
                      </div>
                      <div className="mt-6 text-center uppercase max-md:mr-1">
                        {price}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;

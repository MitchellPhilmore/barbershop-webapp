"use client";
import prismadb from "@/lib/prismadb";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useProductStore } from "../product-store";
import { sanitizeString, sanitizeUrl, validatePrice } from "@/lib/utils";

const ImageWithPlaceholder = ({ src, alt, id }: {src:string, alt:string, id:string}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="aspect-square relative">
      {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>}
      <img
        key={` img-${id}`}
        src={src}
        alt={alt}
        className={`aspect-square transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  );
};

const Products = () => {
  const { items, setItems } = useProductStore();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        const sanitizedProducts = response.data.map(
          ({ name, id, description, price, imgUrl }: any) => {
            return {
              id,
              name: sanitizeString(name),
              description: sanitizeString(description),
              price: validatePrice(price),
              imgUrl
            };
          }
        );
        setItems(sanitizedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex flex-row w-full ">
        <div className=" aspect-square grid lg:grid-cols-3 gap-4 p-4 ">
          {items.map(({ id, name, description, price, imgUrl }) => {
            return (
              <div
                key={id}
                className=" p-10 flex-wrap  py-px mt-10 max-w-full  max-md:pr-5"
              >
                <div className="flex  max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col sm:flex-col  max-md:ml-0 max-md:w-full">
                    <Link
                      href={`/shop/${id}`}
                      key={` product-${id}`}
                      className="flex cursor-pointer  flex-col grow text-xl transition-transform duration-300 hover:scale-110  font-black leading-7 text-neutral-900 max-md:mt-7 "
                    >
                     
                      <ImageWithPlaceholder src={imgUrl} id={id} alt="img"/>
                      <div className="mt-11 text-center uppercase max-md:mt-10 max-md:mr-1">
                        {name}
                      </div>
                      <div className="mt-3.5 text-center text-lg leading-8 text-neutral-700 s max-md:mr-1">
                        {description}
                      </div>
                      <div className="mt-6 text-center uppercase max-md:mr-1">
                        ${price}
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

"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { useRouter } from "next/router";

import { Input } from "@/components/ui/input";
import { useCartStore } from "@/app/cart-store";
import { useProductModal } from "./product-modal";
import { CartModal } from "./cart-modal";
import { on } from "events";
import { Button } from "@/components/ui/button";

interface Product {
  id: String;
  imgUrl: String;
  name: String;
  description: String;
  userId: String;
  price: String;
  createdAt: String;
  updatedAt: String;
}

const Hero = () => {
  const [product, setProduct] = useState<any>([]);
  const params = useParams();
  const [quantity, setQuantity] = useState(0);
  const { addItem, updateItemQuantity, items, setSelectedProduct } =
    useCartStore();
  const isOpen = useProductModal((state) => state.isOpen);
  const onOpen = useProductModal((state) => state.onOpen);
  console.log("works");

  useEffect(() => {
    axios.get(`/api/products/${params.id}`).then(({ data }) => {
      setProduct(data);
      setSelectedProduct(data);
    });
  }, [isOpen, onOpen]);

  console.log(product);
  const { name, id, imgUrl, description, price } = product;
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-neutral-900 max-md:px-5">
      <div className="justify-center mt-5 w-full max-w-[1292px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={imgUrl}
              className="self-stretch my-auto w-full aspect-square max-w-[670px] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-lg max-w-[530px] max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-black text-white uppercase leading-[65.88px] max-md:max-w-full max-md:text-4xl">
                {name}
              </div>
              <div className="mt-4 text-lg leading-8 text-white max-md:max-w-full">
                {description}
              </div>
              <div className="flex flex-wrap gap-3 content-start py-px mt-6 text-2xl">
                <div className="font-medium text-white leading-[118%]">
                  ${price}
                </div>
              </div>
              <div className=" w-[60%] flex gap-5 justify-center mt-10 font-semibold tracking-widest text-white uppercase max-md:flex-wrap">
                <Input
                  min={0}
                  onChange={(e: any) => {
                    setQuantity(parseInt(e.target.value));
                  }}
                  className="text-white bg-transparent"
                  type="number"
                />
              </div>
              <Button
                disabled={(quantity <= 0 || isNaN(quantity))}
                onClick={() => {
                  addItem({
                    id,
                    name,
                    price,
                    quantity,
                    imgUrl,
                    description,
                  });
                  onOpen();
                }}
                className=" disabled:cursor-not-allowed w-[60%] justify-center items-center px-16 py-8 mt-6 font-black cursor-pointer text-center  hover:bg-[#C09B6B] uppercase bg-orange-200 leading-[111%] text-neutral-900 max-md:px-5 max-md:max-w-full"
              >
                Add to Cart
              </Button>
              {isOpen && product && (
                <CartModal count={quantity} product={product} isOpen={isOpen} />
              )}
              <div className="shrink-0 mt-10 h-px bg-neutral-700 max-md:max-w-full" />
              <div className="mt-10 font-black text-white uppercase leading-[133%] max-md:max-w-full">
                Why buy our products?
              </div>
              <div className="mt-3 mr-8 text-lg leading-8 text-zinc-100 max-md:mr-2.5 max-md:max-w-full">
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                <br />
                mauris ultrices cursus sit amet dictum sit
              </div>
              <div className="flex gap-2.5 mt-6 text-base font-bold leading-5 text-white max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/86296e93e719f13a21448b9192893157f18fcf29364747dcf0d21f0af612d560?"
                  className="shrink-0 aspect-square w-[22px]"
                />
                <div className="max-md:max-w-full">
                  High-quality materials only
                </div>
              </div>
              <div className="flex gap-2.5 mt-4 text-base font-bold leading-5 text-white max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/20551e481f940cae6f3b8a9dcaf25dfebbeb925b6f653b580ed280405796b7c9?"
                  className="shrink-0 aspect-square w-[22px]"
                />
                <div className="max-md:max-w-full">30-day return warranty</div>
              </div>
              <div className="flex gap-2.5 mt-4 text-base font-bold leading-5 text-white max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b6ddb563ad75111dcbdf7c081828d3e974320f14bc8ce07cafd6d794fc11b22?"
                  className="shrink-0 aspect-square w-[22px]"
                />
                <div className="max-md:max-w-full">Worldwide shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

"use client";

import Link from "next/link";
import { Hero } from "../about/hero";
import { useCartStore } from "../cart-store";
import { useEffect } from "react";
import { useProductModal } from "../shop/[id]/product-modal";
import { CartModal } from "../shop/[id]/cart-modal";
import { MobileNav } from "./mobile-nav";

export const Nav = () => {
  const { items, setSelectedProduct } = useCartStore();
  const isOpen = useProductModal((state) => state.isOpen);
  const onOpen = useProductModal((state) => state.onOpen);

  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <>
    <MobileNav/>
    <div className=" absolute top-0 w-full hidden  justify-center items-center px-16 py-8 text-base font-black leading-5 uppercase bg-[#1d1d1e] max-md:px-5 lg:flex">
      <div className="flex gap-5 justify-between items-center w-full max-w-[1292px] max-md:flex-wrap max-md:max-w-full">
        <Link href={"/"}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/253d522dfdb3a95b05c4c08239e4c4c0eed3aa78b52918ffb7be2604a7c561dc?"
            className=" cursor-pointer shrink-0 self-stretch my-auto max-w-full aspect-[5.88] w-[173px]"
          />
        </Link>
        <div className="flex gap-5 self-stretch pl-4 my-auto text-white whitespace-nowrap max-md:flex-wrap">
          <Link href={"/about"}>About</Link>

          <Link href={"/services"} className="grow cursor-pointer">
            Services
          </Link>
          <Link href={"/shop"} className="grow cursor-pointer">
            Shop
          </Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className="flex gap-10 justify-between self-stretch">
          <div className="flex gap-0 my-auto text-white">
            <div onClick={onOpen} className="cursor-pointer">
              Cart (
            </div>
            <div className="text-center">{items.length}</div>
            <div>)</div>
          </div>
          {isOpen && items && (
            <CartModal count={0} product={items} isOpen={isOpen} />
          )}
          <Link
            href={"/contact"}
            className="justify-center px-5 py-6 text-center bg-orange-200 text-neutral-900  hover:bg-[#C09B6B] cursor-pointer"
          >
            Book an appointment
          </Link>
        </div>
      </div>
    </div>
    
    </>
  );
};

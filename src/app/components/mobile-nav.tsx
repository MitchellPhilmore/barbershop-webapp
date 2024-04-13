"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useState } from "react";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative md:hidden sm:hidden bg-[#1d1d1e] ">
      <button className="p-4 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          ></path>
        </svg>
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block absolute md:relative bg-white shadow-md md:shadow-none md:bg-transparent left-0 right-0 mt-2`}
      >
        <ul className="flex text-white flex-col md:flex-row items-center md:space-x-8 bg-[#1d1d1e]">
          <li>
            <Link href={"/"} className=" text-white block py-2 px-4 text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="block py-2 px-4 text-sm text-white"
            >
              About
            </Link>
          </li>
          <li>
            <a href={"/shop"} className="block py-2 px-4 text-sm text-white ">
              Shop
            </a>
          </li>
          <li>
            <a
              href={"/services"}
              className="block py-2 px-4 text-sm text-white "
            >
              Services
            </a>
          </li>
          <li>
            <a href={"contact"} className="block py-2 px-4 text-sm text-white ">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

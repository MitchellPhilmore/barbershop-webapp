"use client";
import { useSearchParams } from "next/navigation";
import Hero from "./hero";
import ProductInformation from "./product-information";
import { MoreProducts } from "./more-products";
import { useProductStore } from "@/app/product-store";

const ProductDetails = () => {
  const id = useSearchParams().get("product");

  return (
    <>
      <div className="w-full  mt-10">
        <Hero />
        <ProductInformation />
        <MoreProducts />
      </div>
    </>
  );
};

export default ProductDetails;

"use client";
import { useParams, useSearchParams } from "next/navigation";
import Hero from "./hero";
import ProductInformation from "./product-information";
import { MoreProducts } from "./more-products";
import { useProductStore } from "@/app/product-store";
import { useEffect, useState } from "react";
import { useCartStore } from "@/app/cart-store";
import { useProductModal } from "./product-modal";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState<any>([]);
  const params = useParams();
  const isOpen = useProductModal((state) => state.isOpen);
  const onOpen = useProductModal((state) => state.onOpen);

  useEffect(() => {
    axios.get(`/api/products/${params.id}`).then(({ data }) => {
      setProduct(data);
    });
  }, [isOpen, onOpen]);

  console.log(product);
  const { detailedDescription, description, additionalInformation } = product;

  return (
    <>
      <div className="w-full  lg:mt-10">
        <Hero />
        <ProductInformation
          description={description}
          additionalInformation={additionalInformation}
          detailedDescription={detailedDescription}
        />
        <MoreProducts />
      </div>
    </>
  );
};

export default ProductDetails;

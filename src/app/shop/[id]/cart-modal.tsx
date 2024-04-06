import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useProductModal } from "./product-modal";
import { useEffect } from "react";
import { useCartStore } from "@/app/cart-store";
import { Input } from "@/components/ui/input";

import axios from "axios";


export function CartModal({
  isOpen,
  count,
  product,
}: {
  isOpen: boolean;
  count: number;
  product: any;
}) {
  const { addItem, selectedProduct, removeItem, items } = useCartStore();
  const { onClose } = useProductModal();

  const onCheckout = async  () => {
    console.log(items)
    const response = await axios.post(`http://localhost:3000/api/checkout`, {
      productIds: items.map((item:any) => item.id),
      quantity: items.map((item:any) => item.quantity)
     
    })
    window.location = response.data.url
  }
  

  useEffect(() => {
    console.log(items);
    if (!items.length) {
      onClose();
    }
  }, [selectedProduct, items, removeItem, isOpen]);
  const productModal = useProductModal();
  console.log(product);

  function calculateTotal(cartItems: any) {
    return cartItems.reduce((total: any, item: any) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  const total = calculateTotal(items);
  return (
    <>
      <AlertDialog open={isOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Your Cart</AlertDialogTitle>
            <AlertDialogDescription>
              {items &&
                items.map((item) => {
                  return (
                    <div className="mt-10 mb-10 flex gap-7">
                      <img className="flex h-20 w-20" src={`${item.imgUrl}`} />
                      <div className="flex-col self-end">
                        <p className="font-black text-xl">{item.name}</p>
                        <p className="text-lg italic font-semibold">
                          {item.price}
                        </p>

                        <p
                          onClick={() => removeItem(item.id)}
                          className="underline cursor-pointer hover:text-orange-500 mt-5"
                        >
                          Remove
                        </p>
                      </div>
                      <p className="text-lg italic flex justify-end h-10 ">
                        <div className=" w-1/2 relative border-b-2 border-gray-300 border-animate focus-within:border-none">
                          <Input
                            id="count"
                            onBlur={(e) => {
                              if (parseInt(e.target.value) <= 0) {
                                removeItem(item.id);
                              }
                            }}
                            min={"0"}
                            type="number"
                            className="text-2xl border-none text-black placeholder-white w-full pb-1 shadow-lg focus:shadow-none outline-none ring-0 border-0 p-2"
                            defaultValue={item.quantity}
                          />
                          <hr />
                        </div>
                      </p>
                      <hr />
                    </div>
                  );
                })}
              <div className="flex justify-between">
                <p className="font-bold text-xl text-black uppercase ">
                  Subtotal:
                </p>
                <p className="font-bold text-xl text-black "> ${total}</p>
              </div>
              <div className="z-100">
                {/* <StripeWrapper/> */}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="product-modal mt-10 mb-10 ">
            <AlertDialogCancel
              className=" mt-10"
              onClick={() => productModal.onClose()}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={onCheckout}
              className="uppercase bg-[#C09B6B]  hover:bg-orange-400"
            >
              Continue to checkout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

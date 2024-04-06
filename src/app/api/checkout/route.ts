import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  const { productIds, quantity } = await req.json();
  console.log("--->", productIds);

  if (!productIds || productIds.length == 0) {
    return new NextResponse("Product ids are required", { status: 400 });
  }
  const products = await prismadb.products.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });
  const lineItems: any = [];

  products.forEach((product, index) => {
    lineItems.push({
      quantity: quantity[index],
      price_data: {
        currency: "USD",
        product_data: {
          name: product.name,
          images: ["https://placehold.co/600x400/000000/FFFFFF/png"],
        },
        unit_amount: parseInt(product.price) * 100,
      },
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    success_url: "http://localhost:3000/order-confirmation",
    cancel_url: "http://localhost:3000/",
  });
  return NextResponse.json({ url: session.url });
}

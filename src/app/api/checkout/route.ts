import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request, res: Response) {
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
          images: [product.imgUrl],
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
    success_url:
      "https://barbershop-webapp-glt8clne5-mitchs-projects-9ddff321.vercel.app/order-confirmation",
    cancel_url:
      "https://barbershop-webapp-6n0pdculz-mitchs-projects-9ddff321.vercel.app/",
  });
  return NextResponse.json({ url: session.url });
}

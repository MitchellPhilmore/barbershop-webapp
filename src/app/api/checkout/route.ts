import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";
import initMiddleware from "@/lib/init-middleware";
import Cors from "cors";

const cors = initMiddleware(
  Cors({
    origin:
      "https://barbershop-webapp-glt8clne5-mitchs-projects-9ddff321.vercel.app/",
  
  })
);

export async function POST(req: Request, res: Response) {
  await cors(req, res);
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
    success_url: "https://barbershop-webapp.vercel.app/order-confirmation",
    cancel_url: "https://barbershop-webapp.vercel.app/",
  });
  return NextResponse.json({ url: session.url });
}

import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
  try {
    const products = await prismadb?.products.findMany();

    return NextResponse.json(products);
  } catch (error) {
    console.log("[Products]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

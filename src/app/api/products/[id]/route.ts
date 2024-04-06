import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    console.log(params.id);
    const products = await prismadb?.products.findFirst({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(products);
  } finally {
  }
}

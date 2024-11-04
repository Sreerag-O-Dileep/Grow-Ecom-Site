import { NextResponse } from "next/server";
import { fetchFilteredProducts, fetchFilteredProductsCount } from "@/lib/data";
import { ProductType } from "@/lib/definitions";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  console.log("searchParams",searchParams)
  const { type, page, query, sort = null, filter = null } = Object.fromEntries(searchParams.entries());

  try {
      const [products, totalPages] = await Promise.all([
        fetchFilteredProducts(type as ProductType, Number(page), filter as string, sort as string, query as string),
        fetchFilteredProductsCount(type as ProductType, filter as string, query as string)
      ]);
      
      return NextResponse.json({ products, totalPages });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch product data." },
      { status: 500 }
    );
  }
}

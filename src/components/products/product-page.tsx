import ProductCard from "@/components/products/product-card";
import Pagination from "@/components/pagination";
import Search from "@/components/search";
import { Filter } from "@/components/filter";
import { ProductType } from "@/lib/definitions";
import ProductCardLoader from "@/components/skeleton-loader";
import { fetchFilteredProducts, fetchFilteredProductsCount } from '@/lib/data';
import TextSection from "@/components/texts";
import { Suspense } from "react";

interface ProductPageProps {
    currentPage: number;
    query: string;
    type: ProductType;
    sort: string | null;
    category: string | null;
}

export default async function ProductPage({ type, currentPage, query, category, sort }: ProductPageProps) {
    const [products, totalPages] = await Promise.all([
        fetchFilteredProducts(type, currentPage, category, sort, query),
        fetchFilteredProductsCount(type, category, query)
    ]);

    const headings = {
        plant: { heading: 'Plants', subHeading: 'Discover Your Perfect Green Companion' },
        pot: { heading: 'Planting Pots', subHeading: 'Find the Perfect Pot for Your Plants' },
        gift: { heading: 'Corporate Gift Hampers', subHeading: 'Give the Gift of Green: Corporate Plant Hampers for Every Need' },
    };

    const { heading, subHeading } = headings[type];

    return (
        <Suspense>
            <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                    <TextSection textType='heading' className="mb-2" textContent={heading} />
                    <TextSection textType='description' className="mb-2" textContent={subHeading} />
                </div>
                <div className="flex flex-row gap-2 h-8 items-center">
                    <Filter />
                    <Search placeholder={heading} />
                </div>
            </div>
            <div className="container mx-auto min-h-[calc(100vh-23rem)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {false ? (
                    Array.from({ length: 8 }).map((_, index) => (
                        <ProductCardLoader key={index} />
                    ))
                ) : products?.length ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="col-span-full text-center mt-20">No products found.</p>
                )}
            </div>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} type={type} />
            </div>
        </Suspense>
    );
}

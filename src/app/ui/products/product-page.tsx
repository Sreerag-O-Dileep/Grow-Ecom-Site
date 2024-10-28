import ProductCard from "@/app/ui/products/product-card";
import { fetchProducts, fetchProductsCount } from "@/app/lib/data";
import Pagination from "./pagination";
import { ProductType } from "@/app/lib/definitions";
import Search from "./search";
import { Filter } from "../shared/filter";

interface ProductPageProps {
    currentPage: number;
    query: string;
    type: ProductType
}

export default async function ProductPage({ type, currentPage, query }: ProductPageProps) {
    const totalPagesCount = await fetchProductsCount(type, query);
    const products = await fetchProducts(type, currentPage, query)
    const headings: { [key: string]: { heading: string, subHeading: string } } = {
        plant: {
            heading: 'Plants',
            subHeading: 'Discover Your Perfect Green Companion'
        },
        pot: {
            heading: 'Planting Pots',
            subHeading: 'Find the Perfect Pot for Your Plants'
        },
        gift: {
            heading: 'Corporate Gift Hampers',
            subHeading: 'Give the Gift of Green: Corporate Plant Hampers for Every Need'
        },
    };
    const { heading, subHeading } = headings[type];


    return (
        <>
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className="text-2xl pb-2 font-bold">{heading}</h1>
                    <h2 className="text-md pb-6">{subHeading}</h2>
                </div>
                <div className="flex flex-row gap-2 h-8 items-center ">
                    <Filter />
                    <Search placeholder={`Search ${heading}...`} />
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPagesCount} />
            </div>
        </>
    )
}
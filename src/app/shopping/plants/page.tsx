import ProductPage from "@/components/products/product-page";

interface PageProps {
    searchParams?: {
        query?: string;
        page?: string;
    };
}
export default function page({ searchParams }: PageProps) {
    const currentPage = Number(searchParams?.page) || 1;
    const query = searchParams?.query || '';
    return <ProductPage type={'plant'} currentPage={currentPage} query={query} />
}
import ProductPage from "@/components/products/product-page";

interface PageProps {
    searchParams?: {
        query?: string;
        page?: string;
        category?: string;
        sort?: string;
    };
}
export default function page({ searchParams }: PageProps) {
    const { page = 1, query = '', category = null, sort = null } = searchParams || {};
    
    return <ProductPage type={'plant'} currentPage={Number(page)} query={query} category={category} sort={sort} />
}
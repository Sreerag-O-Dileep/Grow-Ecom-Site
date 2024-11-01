'use client'
import { useEffect, useMemo, useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setItems, setPage, setSearchQuery } from "@/redux/product-slice";
import ProductCard from "@/components/products/product-card";
import Pagination from "@/components/pagination";
import Search from "@/components/search";
import { Filter } from "@/components/filter";
import { ProductType } from "@/lib/definitions";
import ProductCardLoader from "../skeleton-loader";


interface ProductPageProps {
    currentPage: number;
    query: string;
    type: ProductType;
}

export default function ProductPage({ type, currentPage, query }: ProductPageProps) {
    const dispatch = useDispatch();
    const { items, pagination, filterCriteria } = useSelector((state: RootState) => state.product);
    const [loading, setLoading] = useState(false);

    const fetchItems = async () => {
        setLoading(true);
        try {
            const url = new URL('/api/product', window.location.origin);
            url.searchParams.append('type', type);
            url.searchParams.append('page', String(currentPage));
            
            if (query) url.searchParams.append('query', query);
            if (filterCriteria?.sort) url.searchParams.append('sort', filterCriteria.sort);
            if (filterCriteria?.filter.length > 0) url.searchParams.append('filter', filterCriteria.filter.join(','));
            
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch items');
            
            const data = await response.json();
            dispatch(setItems({ type, items: data.products, total: data.totalPages }));
        } catch (error) {
            console.error("Error fetching items:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
        dispatch(setPage({ type, page: currentPage }));
        dispatch(setSearchQuery(query));
    }, [currentPage, type, query, filterCriteria, dispatch]);

    const { heading, subHeading } = useMemo(() => ({
        plant: { heading: 'Plants', subHeading: 'Discover Your Perfect Green Companion' },
        pot: { heading: 'Planting Pots', subHeading: 'Find the Perfect Pot for Your Plants' },
        gift: { heading: 'Corporate Gift Hampers', subHeading: 'Give the Gift of Green: Corporate Plant Hampers for Every Need' },
    }[type]), [type]);

    return (
        <>
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className="text-2xl pb-2 font-bold">{heading}</h1>
                    <h2 className="text-md pb-6">{subHeading}</h2>
                </div>
                <div className="flex flex-row gap-2 h-8 items-center">
                    <Filter />
                    <Search placeholder={`Search ${heading}...`} />
                </div>
            </div>
            <div className="container mx-auto min-h-[calc(100vh-19.5rem)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {loading ? (
                    Array.from({ length: 8 }).map((_, index) => (
                        <ProductCardLoader key={index}/>
                    ))) : (
                    items[type]?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                )}
            </div>

            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={pagination[type]?.total || 0} type={type} />
            </div>
        </>
    );
}

import ProductInfo from "@/components/products/product-info-page";

export default function Page({ params }: { params: { id: string } }) {
    const product_id = params.id;
    return (
        <>
            <ProductInfo product_id={product_id} />
        </>
    )
}
import ProductInfo from "@/app/ui/products/product-info";

export default function Page({ params }: { params: { id: string } }) {
    const product_id = params.id;
    return (
        <>
            <ProductInfo product_id={product_id} />
        </>
    )
}
'use client'
import { toast } from "react-toastify";
import { useDebouncedCallback } from "use-debounce";
import ActionButtons from "@/components/action-buttons";
import { CartProvider, useCart } from "@/context/cart-context";
import { Product } from "@/lib/definitions";


interface ProductPurchaseButtonsProps {
    productData: Product;
    className?: string;
}

export default function ProductPurchaseButtons({ productData, className = '' }: ProductPurchaseButtonsProps) {
    const { addItemToCart } = useCart();
    const { id, name, image, discountedprice: discountedPrice, usagetype, type } = productData;

    const addToCart = useDebouncedCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        addItemToCart({ id, name, discountedprice: discountedPrice, image, usagetype, type, quantity: 1 });
        toast.success('Product added to basket');
    }, 300)

    return (
        <CartProvider>
            <div className={className}>
                <ActionButtons
                    button1={{
                        buttonType: 'secondary',
                        label: 'Add to Basket',
                        onClick: addToCart,
                    }}
                    button2={{
                        buttonType: 'primary',
                        label: 'Buy Now'
                    }} />
            </div>
        </CartProvider>
    )
}
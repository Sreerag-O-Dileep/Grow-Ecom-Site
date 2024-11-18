'use client'
import { useMemo } from "react";
import { useCart } from "@/context/cart-context";
import Button from "@/components/button";
import TextSection from "@/components/texts";

export default function CartTotal() {
    const { cart } = useCart();

    const subTotal = useMemo(() => {
        return cart.reduce((acc, product) => acc + product.discountedprice * product.quantity, 0);
    }, [cart]);

    return ((cart.length > 0) && (
        <div className="flex flex-col w-full my-4 items-end" >
            <div className="flex flex-row gap-3">
                <TextSection textType="heading" className="mb-4 text-black" textContent={`Subtotal (${cart.length} ${cart.length > 1 ? 'items' : 'item'}):`} />
                <TextSection textType="heading" className="text-red-600 font-bold mb-8 w-20 text-right" textContent={`${subTotal}`} />
            </div>
            <Button className="w-full md:w-1/3" slim type="primary" label="Proceed to Payment" />
        </div >
    ))
}
'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/cart-context';
import TextSection from '@/components/texts';
import PriceText from '@/components/price-text';
import Button from '@/components/button';


export default function CartItem() {
    const { cart, addItemToCart, removeItemFromCart } = useCart();
    if (cart.length == 0) {
        return (
            <div className="col-span-full text-center mt-28">
                <TextSection className="mb-2" textType="subHeading" textContent="Your Basket is Empty" />
                <Link href="/shopping/plants">
                    <TextSection textType="paragraph" className="text-black hover:text-green-600" textContent="Shop for plants, planters, and gift items on our shopping pages." />
                </Link>
            </div>
        )
    }

    return (
        <>
            {cart.map((item, index) => (
                <div key={index} className="flex flex-row justify-between w-full py-2 border-b-2 content-center">
                    <div className="flex flex-row gap-10">
                        <Image src={item.image} alt={item.name} width={100} height={50} />
                        <div className="md:w-80">
                            <TextSection textType="subHeading" className="mb-2" textContent={item.name} />
                            <hr />
                            <TextSection textType="paragraph" className="text-orange-600 my-1" textContent={`Category: ${item.type}, ${item.usagetype}`} />
                        </div>
                    </div>
                    <div>
                        <PriceText discountedPrice={item.discountedprice} originalPrice={item.discountedprice} discount={0} className="mt-4" />
                        <TextSection textType="description" className="mb-2" textContent="Inclusive of all taxes" />
                    </div>
                    <div className="flex flex-row gap-2 justify-between items-center mb-2">
                        <Button type="icon-only" icon="-" slim className="w-10 text-2xl" onClick={() => removeItemFromCart(item)} />
                        <TextSection textType="subHeading" textContent={`Qty: ${item.quantity}`} />
                        <Button type="icon-only" icon="+" slim className="w-10 text-2xl" onClick={() => addItemToCart(item)} />
                    </div>
                    <div className="w-20 text-right">
                        <PriceText discountedPrice={item.discountedprice * item.quantity} originalPrice={item.discountedprice * item.quantity} discount={0} className="mt-4" />
                    </div>
                </div>
            ))}
        </>
    );
}

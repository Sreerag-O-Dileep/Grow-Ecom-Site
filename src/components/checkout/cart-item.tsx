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
                <TextSection className="mb-2 text-black" textType="subHeading" textContent="Your Basket is Empty" />
                <Link href="/shopping/plants">
                    <TextSection textType="paragraph" className="text-black hover:text-green-600" textContent="Shop for plants, planters, and gift items on our shopping pages." />
                </Link>
            </div>
        )
    }

    return (
        <>
            {cart.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col md:flex-row justify-between w-full py-2 border-b-2 items-start md:items-center"
                >
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center w-full md:w-auto">
                        <Image src={item.image} alt={item.name} width={100} height={50} />
                        <div className="w-full sm:w-80">
                            <TextSection textType="subHeading" className="mb-2 text-black" textContent={item.name} />
                            <hr className="my-1" />
                            <TextSection
                                textType="paragraph"
                                className="text-orange-600 my-1"
                                textContent={`Category: ${item.type}, ${item.usagetype}`}
                            />
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4">
                        <PriceText
                            discountedPrice={item.discountedprice}
                            originalPrice={item.discountedprice}
                            className="mt-4"
                        />
                        <TextSection
                            textType="description"
                            className="mb-2 text-black"
                            textContent="Inclusive of all taxes"
                        />
                    </div>
                    <div className="flex flex-row gap-2 justify-between items-center mt-4 md:mt-0 w-full md:w-auto">
                        <Button
                            type="icon-only"
                            icon="-"
                            slim
                            className="w-10 text-lg md:text-2xl"
                            onClick={() => removeItemFromCart(item)}
                        />
                        <TextSection
                            textType="subHeading"
                            textContent={`Qty: ${item.quantity}`}
    
                        />
                        <Button
                            type="icon-only"
                            icon="+"
                            slim
                            className="w-10 text-lg md:text-2xl"
                            onClick={() => addItemToCart(item)}
                        />
                    </div>
                    <div className="w-full md:w-20 text-right mt-4 md:mt-0">
                        <PriceText
                            discountedPrice={item.discountedprice * item.quantity}
                            originalPrice={item.discountedprice * item.quantity}
                        />
                    </div>
                </div>
            ))}

        </>
    );
}

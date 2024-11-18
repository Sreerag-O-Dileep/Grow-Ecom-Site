import Link from 'next/link';
import CartItem from '@/components/checkout/cart-item';
import CartTotal from '@/components/checkout/cart-total';
import TextSection from '@/components/texts';

export default function CartPage() {

    return (
        <div className="min-h-[calc(100vh-15rem)]">
            <TextSection textType="heading" className="mt-2 mb-1 text-black" textContent="Your Grow Shopping Basket" />
            <Link href="/shopping/plants">
                <TextSection textType="paragraph" className="text-black hover:text-green-600 mb-4" textContent="Go back to shopping Pages" />
            </Link>
            <CartItem />
            <CartTotal />
        </div>
    );
}

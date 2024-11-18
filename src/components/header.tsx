import Image from 'next/image';
import Link from 'next/link';
import CartIcon from './cart-icon';

export default function Header() {
    return (
        <header className="bg-transparent text-white w-full">
            <div className="container mx-auto flex justify-between items-center py-8 px-6">
                <div className="flex-shrink-0">
                    <Image
                        className="hidden md:block"
                        src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2020/07/grow-plant-store-logo-white.svg"
                        alt="Logo"
                        width={120}
                        height={24}
                    />
                    <Image
                        className="block md:hidden"
                        src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2020/07/grow-plant-store-logo-white.svg"
                        alt="Logo"
                        width={80}
                        height={16}
                    />
                </div>
                <nav className="md:flex md:items-center w-auto">
                    <div className="flex flex-col md:flex-row md:space-x-8">
                        <Link href="/" className="block py-2 md:py-0 hover:text-green-600">
                            Home
                        </Link>
                        <Link href="#" className="block py-2 md:py-0 hover:text-green-600">
                            About us
                        </Link>
                        <Link href="#" className="block py-2 md:py-0 hover:text-green-600">
                            Testimonials
                        </Link>
                        <Link href="/checkout/cart" className="block py-2 md:py-0 hover:text-green-600 relative">
                            <CartIcon />
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

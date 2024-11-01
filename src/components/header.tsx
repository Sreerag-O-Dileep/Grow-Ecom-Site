'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-transparent text-white">
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

                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-200 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                <nav className={`${isOpen ? "block" : "hidden"} md:flex md:items-center w-full md:w-auto`}>
                    <div className="flex flex-col md:flex-row md:space-x-8 ">
                        <Link href="/" className="block py-2 md:py-0 hover:text-green-600">
                            Home
                        </Link>
                        <Link href="#" className="block py-2 md:py-0 hover:text-green-600">
                            About us
                        </Link>
                        <Link href="#" className="block py-2 md:py-0 hover:text-green-600">
                            Testimonials
                        </Link>
                        <Link
                            href="#"
                            className="block py-2 md:py-0 hover:text-green-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

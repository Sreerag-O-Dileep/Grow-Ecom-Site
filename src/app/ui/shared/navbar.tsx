'use client'
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const links = [
        { name: 'Plants', href: '/dashboard/plants' },
        { name: 'Planters', href: '/dashboard/planters' },
        { name: 'Corporte Gifting', href: '/dashboard/gifting' },
        { name: 'Offers', href: '/dashboard/offers' },
        { name: 'Care Instructions', href: '/dashboard/care' }
    ];
    const pathName = usePathname();
    return (
        <nav className="flex flex-row gap-4 md:gap-16 h-16 items-center w-full px-4 md:px-8 text-sm md:text-base bg-white text-black shadow-2xl">
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                    >
                        <p className={clsx("hover:text-green-600", {
                            'font-bold text-green-600': pathName.startsWith(link.href),
                        },)}>{link.name}</p>
                    </Link>
                )
            })}
        </nav>
    )
}

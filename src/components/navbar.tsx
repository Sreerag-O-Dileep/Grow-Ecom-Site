'use client'
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Navbar() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const links = [
        { name: 'Plants', href: '/shopping/plants' },
        { name: 'Planters', href: '/shopping/planters' },
        { name: 'Corporte Gifting', href: '/shopping/gifting' },
        { name: 'Offers', href: '/shopping/offers' },
        { name: 'Care Instructions', href: '/shopping/care' }
    ];
    const pathName = usePathname();

    const clearFilters = () => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        params.delete('query');
        params.delete('category');
        params.delete('sort');
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <nav className="flex flex-row gap-4 md:gap-16 h-16 items-center w-full px-4 md:px-8 text-sm md:text-base bg-white text-black shadow-2xl">
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={clearFilters}
                    >
                        <p className={clsx("hover:text-green-600", {
                            'font-bold text-green-600': pathName?.startsWith(link.href),
                        },)}>{link.name}</p>
                    </Link>
                )
            })}
        </nav>
    )
}

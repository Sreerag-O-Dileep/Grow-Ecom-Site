'use client'
import Image from 'next/image';
import { Product } from '@/app/lib/definitions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProductCard({ product }: { product: Product }) {
    const router = useRouter()
    const productType = { plant: 'plants', pot: 'planters', gift: 'gifting' };
    console.log(product)
    const { id, name, image, rating, reviews, originalprice: originalPrice, discountedprice: discountedPrice, discount, description, type } = product;
    const parentPage = productType[type];

    const handleMouseEnter = () => {
        router.prefetch(`/dashboard/${parentPage}/${id}`);
      };

    return (
        <Link
            href={`/dashboard/${parentPage}/${id}`}
            prefetch={false}
        >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:cursor-pointer" onMouseEnter={handleMouseEnter}>
                <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                    <Image src={image} alt="Plant Gift" width={400} height={200} />
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-green-600 font-semibold">
                            ⭐ {rating} | {reviews} reviews
                        </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-1">{name}</h3>
                    <div className="mb-2">
                        <span className="text-xl font-bold text-red-600">₹{discountedPrice}</span>
                        <span className="text-gray-500 line-through ml-2">₹{originalPrice}</span>
                        <span className="text-green-600 ml-2">({discount}% OFF)</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{description}</p>
                    <div className="flex flex-row gap-2">
                    <button className=" w-60 bg-orange-300 text-white py-2 rounded-lg hover:bg-orange-400 transition duration-200">
                        Add to Basket
                    </button>
                    <button className=" w-60 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-500 transition duration-200">
                        Buy Now
                    </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

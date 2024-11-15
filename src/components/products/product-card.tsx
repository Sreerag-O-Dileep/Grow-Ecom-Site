import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/definitions';
import TextSection from '@/components/texts';
import PriceText from '@/components/price-text';
import RatingText from '@/components/rating-text';
import ProductPurchaseButtons from '@/components/products/product-purchase-buttons';

export default function ProductCard({ product }: { product: Product }) {
    const productType = { plant: 'plants', pot: 'planters', gift: 'gifting' };
    const { id, name, image, rating, reviews, originalprice: originalPrice, discountedprice: discountedPrice, discount, description, usagetype, type } = product;
    const parentPage = productType[type];

    return (

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:cursor-pointer" >
            <Link
                href={`/shopping/${parentPage}/${id}`}
            >
                <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                    <Image src={image} alt="Plant Gift" width={400} height={200} />
                </div>
                <div className="px-4 pt-4">
                    <RatingText rating={rating} reviews={reviews} className='mb-2' />
                    <TextSection textType="sectionHeading" className='mb-1 text-black' textContent={name} />
                    <PriceText discountedPrice={discountedPrice} originalPrice={originalPrice} discount={discount} className='mb-2' />
                    <TextSection textType="paragraph" textContent={description} className='text-gray-600 mb-2' />
                    <TextSection textType="paragraph" textContent={`Type: ${usagetype}`} className='text-green-600 mb-4' />
                </div>
            </Link>
            <div className="px-4 pb-4">
                <ProductPurchaseButtons productData={product} />
            </div>
        </div>
    );
}

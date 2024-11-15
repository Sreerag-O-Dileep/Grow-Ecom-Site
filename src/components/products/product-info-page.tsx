import Image from "next/image";
import { getProductById } from "@/lib/data"
import TextSection from "@/components/texts";
import PriceText from "@/components/price-text";
import RatingText from "@/components/rating-text";
import { Product } from "@/lib/definitions";
import ProductPurchaseButtons from "@/components/products/product-purchase-buttons";

export default async function ProductInfo({ product_id }: { product_id: string }) {
    const productData: Product = await getProductById(product_id)
    const { name, image, rating, reviews, originalprice: originalPrice, discountedprice: discountedPrice, discount, description, usagetype, type } = productData;
    const indoorDescription = 'Indoor plants are a popular way to bring nature into your home, adding beauty and a calming ambiance to indoor spaces. They help improve air quality, reduce stress, and enhance mood. Varieties like pothos, snake plants, and peace lilies are easy to care for and thrive in low-light conditions, making them perfect for homes and offices. Indoor plants require regular watering, occasional sunlight, and a bit of attention to flourish, making them an ideal addition for plant enthusiasts and beginners alike.';
    const outdoorDescription = 'Outdoor plants are perfect for adding color, texture, and life to gardens, patios, and balconies. They range from flowering plants like roses and marigolds to lush shrubs, ornamental grasses, and hardy succulents. These plants typically need more sunlight, varying water levels, and well-drained soil to thrive in outdoor conditions. Outdoor plants can transform landscapes, attracting pollinators, providing shade, and even yielding fruits or vegetables. With a little care, they add beauty and biodiversity to any outdoor space.';

    return (
        <div className="flex flex-col md:flex-row gap-10 w-full md:w-4/5">
            <Image src={image} alt={name} width={400} height={200} />
            <div className="relative">
                <TextSection textType="heading" className="mb-2" textContent={name} />
                <TextSection textType="subHeading" className="mb-1" textContent={description} />
                <RatingText rating={rating} reviews={reviews} className='mb-4' />
                <hr />
                <PriceText discountedPrice={discountedPrice} originalPrice={originalPrice} discount={discount} className='mt-4' />
                <TextSection textType="description" className="mb-2" textContent="Inclusive of all taxes" />
                <TextSection textType="paragraph" className="text-orange-600 mb-1" textContent={`Category : ${type}, ${usagetype}`} />
                <TextSection textType="paragraph" className="text-gray-500 mb-6 text-justify" textContent={usagetype == 'indoor' ? indoorDescription : outdoorDescription} />
                <ProductPurchaseButtons className="w-full md:w-2/3" productData={productData} />
            </div>
        </div>
    )
}
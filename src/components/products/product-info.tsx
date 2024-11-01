import Image from "next/image";
import { getProductById } from "@/lib/data"


export default async function ProductInfo({ product_id }: { product_id: string }) {
    const productData = await getProductById(product_id)
    const {name, image, rating, reviews, originalprice: originalPrice, discountedprice: discountedPrice, discount, description, type } = productData;

    return (
        <>
            <div className="flex flex-row gap-10">
                <Image src={image} alt={name} width={400} height={200} />
                <div className="relative">
                    <h1 className="text-2xl pb-3 font-bold">{name}</h1>
                    <p className="text-gray-600 text-xl mb-1">{description}</p>
                    <p className="text-orange-600 text-sm mb-4">{`Category : ${type}`}</p>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-md text-green-600 font-semibold">
                            Customer review : ⭐ {rating} | {reviews} reviews
                        </span>
                    </div>
                    <hr></hr>
                    <div  className="mt-4">
                        <span className="text-2xl font-bold text-red-600">₹{discountedPrice}</span>
                        <span className="text-gray-500 line-through ml-2">₹{originalPrice}</span>
                        <span className="text-green-600 ml-2">({discount}% OFF)</span>
                    </div>
                    <p className="text-md mb-3">Inclusive of all taxes</p>
                    <div className="absolute bottom-0 flex flex-row gap-2">
                    <button className=" w-60 bg-orange-300 text-white py-2 rounded-lg hover:bg-orange-400 transition duration-200">
                        Add to Basket
                    </button>
                    <button className=" w-60 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-500 transition duration-200">
                        Buy Now
                    </button>
                    </div>
                </div>
            </div>
        </>
    )
}
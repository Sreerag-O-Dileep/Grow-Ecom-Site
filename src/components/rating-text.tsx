import TextSection from "@/components/texts"
import clsx from "clsx"

interface RatingTextProps {
    rating: number;
    reviews: number;
    className?: string;
}

const RatingText = ({ rating, reviews, className='' }: RatingTextProps) => {
    return (
        <div className={`flex justify-between items-center ${className}`}>
            <TextSection
                textType="paragraph"
                textContent={`⭐ ${rating} | ${reviews} reviews`}
                className={clsx(
                    'font-semibold',
                    {
                        "text-green-600": rating > 4,
                        "text-orange-400": rating >= 2 && rating <= 4,
                        "text-red-400": rating < 2
                    }
                )}
            />
        </div>
    )
}

export default RatingText
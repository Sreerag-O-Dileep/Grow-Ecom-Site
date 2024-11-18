interface PriceTextProps {
    originalPrice: number;
    discountedPrice: number;
    discount?: number;
    className?: string;
}
const PriceText = ({ originalPrice, discountedPrice, discount = 0, className = '' }: PriceTextProps) => {
    return (
        <div className={className}>
            <span className="text-xl font-bold text-red-600">₹{discountedPrice}</span>
            {originalPrice !== discountedPrice && (
                <>
                    <span className="text-gray-500 line-through ml-2">₹{originalPrice}</span>
                    <span className="text-green-600 ml-2">({discount}% OFF)</span>
                </>
            )}
        </div>
    );
};

export default PriceText

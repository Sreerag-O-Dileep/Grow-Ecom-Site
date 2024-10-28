export type ProductType = 'plant' | 'pot' | 'gift'

export interface Product {
    id: number,
    name: string,
    image: string,
    rating: number,
    reviews: number,
    originalprice: number,
    discountedprice: number,
    discount: number,
    description: string,
    type: ProductType,
}
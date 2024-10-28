import { sql } from "@vercel/postgres";
import { Product } from "./definitions";

const ITEMS_PER_PAGE = 8;

export async function fetchProducts(type: string, offset:number, query:string) :Promise<Product[]> {
    try {
        console.log('Fetching revenue data...',type,offset, query);
        const data = await sql`
        SELECT * FROM products
        WHERE 
            type = ${type} AND
            name ILIKE ${`%${query}%`}
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
        `;
        console.log('Data',data.rows);
        return data.rows as Product[];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch product data.');
    }
}

export async function fetchProductsCount(type: string, query:string) {
    try {
        console.log('Fetching revenue data...',type);
        const data = await sql`
        SELECT COUNT(*) FROM products
        WHERE 
            type = ${type} AND
            name ILIKE ${`%${query}%`}
    `;
        const totalPages = Math.ceil(Number(data.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch product data.');
    }
}

export async function getProductById(id:string) {
    try {
        const data = await sql`
        SELECT * FROM products
        WHERE id = ${id}`;
            console.log(data)
        const productData = data.rows[0];
    return productData;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch product data.');
    }
}

import { sql } from "@vercel/postgres";
import { Product, ProductType } from "./definitions";

const ITEMS_PER_PAGE = 8;

export async function getProductById(id: string): Promise<Product> {
  try {
    console.log(`Fetching plant data with id:${id}`);
    const data = await sql`
        SELECT * FROM products
        WHERE id = ${id}`;
    const productData = data.rows[0];
    return productData as Product;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product data.");
  }
}

export async function fetchFilteredProducts(
  type: ProductType,
  page: number,
  category?: string | null,
  sort?: string | null,
  query?: string
): Promise<Product[]> {
  try {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    console.log(
      `Fetching product data with type:${type}, offset:${offset}, query:${query}, category:${category}, sort:${sort}`
    );
    const sortOrder =
      sort === "Price low to high"
        ? "ASC"
        : sort === "Price high to low"
        ? "DESC"
        : null;
    const queryParams = [];
    const baseQuery = `SELECT * FROM products`;
    const whereConditions = [`type = $1`];
    queryParams.push(type);

    const categoryArray = category?.split(",").map((item) => item.toLowerCase());
    if (categoryArray && categoryArray.length) {
      whereConditions.push(
        `usagetype IN (${categoryArray.map((_, i) => `$${i + 2}`).join(", ")})`
      );
      queryParams.push(...categoryArray);
    }
    if (query) {
      whereConditions.push(`name ILIKE $${queryParams.length + 1}`);
      queryParams.push(`%${query}%`);
    }

    const whereCondition = `WHERE ${whereConditions.join(" AND ")}`;

    const sortCondition = sortOrder
      ? `ORDER BY discountedprice ${sortOrder}`
      : "";
    const pagination = `LIMIT $${queryParams.length + 1} OFFSET $${
      queryParams.length + 2
    }`;

    queryParams.push(ITEMS_PER_PAGE, offset);

    const sqlQuery = `
        ${baseQuery}
        ${whereCondition}
        ${sortCondition}
        ${pagination}
        `;
    const data = await sql.query(sqlQuery, queryParams);
    return data.rows as Product[];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product data.");
  }
}

export async function fetchFilteredProductsCount(
  type: ProductType,
  category?: string | null,
  query?: string
) {
  try {
    console.log(
      `Fetching product count with type:${type}, query:${query}, filter:${category}`
    );
    const queryParams = [];
    const baseQuery = `SELECT COUNT(*) FROM products`;
    const whereConditions = [`type = $1`];
    queryParams.push(type);

    const categoryArray = category?.split(",").map((item) => item.toLowerCase());

    if (categoryArray && categoryArray.length) {
      whereConditions.push(
        `usagetype IN (${categoryArray.map((_, i) => `$${i + 2}`).join(", ")})`
      );
      queryParams.push(...categoryArray);
    }
    if (query) {
      whereConditions.push(`name ILIKE $${queryParams.length + 1}`);
      queryParams.push(`%${query}%`);
    }

    const whereCondition = `WHERE ${whereConditions.join(" AND ")}`;

    const sqlQuery = `
    ${baseQuery}
    ${whereCondition}
    `;
    console.log({
      query: `${baseQuery} ${whereCondition} ${queryParams}`,
    });
    const data = await sql.query(sqlQuery, queryParams);
    const totalPages = Math.ceil(Number(data.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product data.");
  }
}

// import { db } from '@vercel/postgres';
// import { giftProducts, planters, plants } from '../lib/placeholder-data';
// import { Product } from '../lib/definitions';

// const client = await db.connect();

// async function seedProducts(products: Array<Product>) {

//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//       CREATE TABLE IF NOT EXISTS products (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         image VARCHAR(255) NOT NULL,
//         rating FLOAT NOT NULL,
//         reviews INT NOT NULL,
//         originalPrice INT NOT NULL,
//         discountedPrice INT NOT NULL,
//         discount INT NOT NULL,
//         description TEXT NOT NULL,
//         type VARCHAR(255) NOT NULL
//       );
//     `;

//   const insertedProducts = await Promise.all(
//     products.map(
//       (product) => client.sql`
//           INSERT INTO products (name, image, rating, reviews, originalPrice, discountedPrice, discount, description, type)
//           VALUES (${product.name}, ${product.image}, ${product.rating}, ${product.reviews}, ${product.originalPrice}, ${product.discountedPrice}, ${product.discount}, ${product.description}, ${product.type})
//           ON CONFLICT (id) DO NOTHING;
//         `,
//     ),
//   );

//   return insertedProducts;
// }

// export async function GET() {
//   try {
//     await client.sql`BEGIN`;
//     await seedProducts(plants);
//     await seedProducts(planters);
//     await seedProducts(giftProducts);
//     await client.sql`COMMIT`;

//     return Response.json({ message: 'Database seeded successfully' });
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     return Response.json({ error }, { status: 500 });
//   }
// }
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Check if data exists
    const count = await prisma.product.count();
    if (count > 0) {
        console.log('Database already has data. Skipping seed.');
        return;
    }

    console.log('Seeding database...');

    const products = [
        {
            name: 'Modern Sofa',
            price: 499.99,
            description: 'A comfortable modern sofa with premium fabric and ergonomic design. Perfect for your living room.',
            category: 'Living Room',
            imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80'
        },
        {
            name: 'Wooden Dining Table',
            price: 199.99,
            description: 'Solid oak wood dining table. Seats 6 people comfortably. A masterpiece of craftsmanship.',
            category: 'Dining Room',
            imageUrl: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80'
        },
        {
            name: 'Executive Office Chair',
            price: 149.99,
            description: 'Ergonomic office chair with lumbar support and adjustable height. Boost your productivity.',
            category: 'Office',
            imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80'
        },
        {
            name: 'Minimalist Lamp',
            price: 89.99,
            description: 'Sleek floor lamp with adjustable brightness. Adds a warm ambiance to any room.',
            category: 'Lighting',
            imageUrl: 'https://images.unsplash.com/photo-1507473886913-36bd6f513f56?w=800&q=80'
        },
        {
            name: 'Velvet Armchair',
            price: 299.99,
            description: 'Luxurious velvet armchair in midnight blue. The perfect reading spot.',
            category: 'Living Room',
            imageUrl: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80'
        }
    ];

    for (const product of products) {
        await prisma.product.create({ data: product });
    }

    console.log('Database seeded successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

import { notFound } from 'next/navigation';
import ProductDetails from './ProductDetails';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    imageUrl: string;
}

// Separate function for data fetching to handle caching and error logic
async function getProduct(id: string): Promise<Product | null> {
    try {
        const res = await fetch(`http://localhost:4000/api/products/${id}`, {
            cache: 'no-store', // Ensure fresh data, or use 'force-cache' if data is static
        });

        if (!res.ok) return null;

        return res.json();
    } catch (error) {
        console.error('Failed to fetch product:', error);
        return null;
    }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        return notFound(); // Or a custom 404 component
    }

    return <ProductDetails product={product} />;
}


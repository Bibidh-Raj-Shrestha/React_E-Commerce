import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    images: string[];
    rating: number;
    discountPercentage: number;
}

export default function ProductGrid() {

    const [products, setProducts] = useState<Product[]>([]);
    const [visibleCount, setVisibleCount] = useState(12);

    useEffect(() => {
        async function getProduct() {
            const request = await fetch("http://localhost:3000/products");
            if (!request.ok) {
                console.log("error");
            }
            const data: Product[] = await request.json();
            setProducts(data);
        }
        getProduct();
    }, []);
    return (<>
        <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full 
                    place-contents-center mt-5 mb-10">
            {
                products.slice(0, visibleCount).map((product) => (
                    <ProductCard product={product} />
                ))
            }
        </div>
        <div className="w-full flex justify-center ">
            <button
                className="border p-3 text-2xl w-2xl font-semibold cursor-pointer"
                onClick={() => setVisibleCount(prev => prev + 12)}>
                Load More
            </button>
        </div>

    </>)
}
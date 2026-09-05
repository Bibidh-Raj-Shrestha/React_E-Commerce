import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";

import type {Product} from "./types";

export default function ProductGrid() {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";

    

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
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );
    return (<>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full 
                    place-contents-center mt-8 mb-10">
            {
                filteredProducts.slice(0, visibleCount).map((product) => (
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
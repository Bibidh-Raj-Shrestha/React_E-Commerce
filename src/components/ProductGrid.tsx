// ProductGrid.tsx

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";

import type { Product, ProductResponse } from "../types/types";

type ProductGridProps = {
    sort?: string;
};

export default function ProductGrid({sort = "default"}: ProductGridProps) {
    const API = import.meta.env.VITE_API_URL;
    const limit = 12;

    const [searchParams] = useSearchParams();

    const query = searchParams.get("query") || "";
    const category = searchParams.get("category") || "";

    const [products, setProducts] = useState<Product[]>([]);
    const [skip, setSkip] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setProducts([]);
        setSkip(0);
        setHasMore(true);
    }, [query, category]);

    useEffect(() => {
        async function getProduct() {
            setLoading(true);

            try {
                let url = "";

                if (category) {
                    url = `${API}/products/category/${category}?limit=${limit}&skip=${skip}`;
                } else if (query) {
                    url = `${API}/products/search?q=${query}&limit=${limit}&skip=${skip}`;
                } else {
                    url = `${API}/products?limit=${limit}&skip=${skip}`;
                }

                const request = await fetch(url);

                if (!request.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data: ProductResponse = await request.json();

                setProducts((prev) => {
                    if (skip === 0) {
                        return data.products;
                    }

                    return [...prev, ...data.products];
                });

                setHasMore(
                    skip + data.products.length < data.total
                );
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        getProduct();
    }, [API, skip, query, category]);

    // Sort the already-fetched products.
    const sortedProducts = [...products].sort((a, b) => {
        if (sort === "low-high") {
            return a.price - b.price;
        }

        if (sort === "high-low") {
            return b.price - a.price;
        }

        return 0;
    });

    if (loading && products.length === 0)
        return <p className="p-5">Loading...</p>;

    if (!loading && products.length === 0)
        return (
            <div className="flex flex-col items-center min-h-[50vh] mt-10">
                <p className="bg-gray-200 px-3 py-1">
                    Product not Found
                </p>

                <span className="block bg-gray-500 my-2 w-30 h-0.5"></span>

                <span className="block bg-gray-500 my-2 w-20 h-0.5"></span>
            </div>
        );

    return (
        <>
            <div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                gap-3 sm:gap-5 w-full px-3 sm:px-5 lg:px-0 mt-6 sm:mt-8 mb-8 sm:mb-10"
            >
                {sortedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

            <div className="w-full flex justify-center px-4 mb-8">
                {hasMore && (
                    <button
                        className="border w-full sm:w-auto sm:min-w-60 lg:min-w-80 p-3 
                        text-lg sm:text-xl lg:text-2xl font-semibold cursor-pointer 
                        bg-blue-50 hover:bg-blue-100 rounded-xl transition"
                        onClick={() =>
                            setSkip((prev) => prev + limit)
                        }
                    >
                        Load More
                    </button>
                )}
            </div>
        </>
    );
}
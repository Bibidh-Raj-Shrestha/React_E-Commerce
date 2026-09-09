import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";

import type { Product, ProductResponse } from "../types/types";

export default function ProductGrid() {
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

                setProducts(prev => {
                    if (skip === 0) {
                        return data.products;
                    }

                    return [...prev, ...data.products];
                });

                setHasMore(skip + data.products.length < data.total);

            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }

        getProduct();
    }, [API, skip, query, category]);

    if (loading && products.length === 0)
        return (<p>Loading...</p>);
    if (!loading && products.length === 0)
        return (
            <>
                <div className="flex flex-col items-center lg:h-[60vh] mt-10">
                    <p className="bg-gray-200">
                        Product not Found
                    </p>
                    <span className="block bg-gray-500 lg:m-0 my-2 w-30 h-0.5"></span>
                    <span className="block bg-gray-500 my-2 w-20 h-0.5"></span>
                </div>  
            </>
        );
    return (
        <>
            <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                            gap-5 w-full place-content-center mt-8 mb-10"
            >
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

            <div className="w-full flex justify-center">
                {hasMore && (
                    <button
                        className="border p-3 text-2xl w-2xl font-semibold
                                    cursor-pointer bg-blue-50 hover:bg-blue-100"
                        onClick={() => setSkip(prev => prev + limit)}
                    >
                        Load More
                    </button>
                )}
            </div>
        </>
    );
}
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RiCashFill, RiRestartLine, RiShieldLine } from "@remixicon/react";
import RatingStars from "../components/RatingStar";
import ReviewCard from "../components/ReviewCard";

import type { Product } from "../components/types";


export default function ProductsDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function getProduct() {
            try {
                const request = await fetch(`http://localhost:3000/products/${id}`);
                if (!request.ok) {
                    throw new Error("Failed to fetch the product");
                }
                const data: Product = await request.json();
                setProduct(data);
            } catch (error) {
                setError("Unable to load product");
            }
        }
        getProduct();
    }, [id]);

    if (product === undefined)
        return (<>Product not found</>);
    return (<>
        <div className="flex flex-col lg:flex-row gap-8 mt-10 p-4 border rounded-xl">
            <div>
                <img src={product.images[0]}
                    alt={product.title}
                    className="w-full max-w-md object-contain" />
            </div>
            <div className="flex flex-col justify-between flex-1">
                <div className="flex flex-col">
                    <p className="text-3xl">{product.title}</p>
                    <div className="flex">
                        <RatingStars rating={product.rating} />
                        <span>
                            | {product.reviews.length} Reviews
                        </span>
                    </div>
                </div>

                <div className="text-xl flex flex-col gap-2">
                    <div className="flex gap-2">
                        <RiCashFill />
                        <span>Cash on delivery available</span>
                    </div>
                    <div className="flex gap-2">
                        <RiRestartLine />
                        <span>{product.returnPolicy}</span>
                    </div>
                    <div className="flex gap-2">
                        <RiShieldLine />
                        <span>{product.warrantyInformation}</span>
                    </div>

                </div>

                <div className="flex flex-col">
                    <span className="text-2xl font-semibold">
                        Rs. {((product.price * 140) * (1 - product.discountPercentage / 100)).toFixed(0)}
                    </span>
                    <span>
                        <span className="text-gray-500">
                            <del>
                                Rs. {(product.price * 140).toFixed(0)}
                            </del>
                        </span>

                        <span>
                            -{product.discountPercentage}%
                        </span>
                    </span>
                    <div className="flex gap-2">
                        <button className="w-full sm:w-50 text-xl p-3 font-semibold cursor-pointer
                                    bg-blue-300 hover:bg-blue-400">
                            Buy Now
                        </button>
                        <button className="w-full sm:w-50 text-xl p-3 font-semibold cursor-pointer 
                                    bg-orange-300 hover:bg-orange-400">
                            Add to Cart
                        </button>
                    </div>
                </div>

            </div>
        </div>
        <div className="w-full lg:w-[78%] flex flex-col mt-10 p-2 border rounded-xl">
            <span>
                <h2>Reviews</h2>
            </span>
            <div className="flex flex-col">
                {product.reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>

        </div>
    </>)
}
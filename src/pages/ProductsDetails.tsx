import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { RiCashFill, RiRestartLine, RiShieldLine } from "@remixicon/react";
import RatingStars from "../components/RatingStar";
import ReviewCard from "../components/ReviewCard";
import CartContext from "../context/CartContext";
import QuantityCounter from "../components/QuantityCounter";

import { useAuth } from "../context/AuthContext";

import type { Product } from "../types/types";

export default function ProductsDetails() {
    const { addToCart } = useContext(CartContext)!;

    const API = import.meta.env.VITE_API_URL;
    const { id } = useParams();
    const [product, setProduct] = useState<Product>();
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(0);

    const { isLoggedIn } = useAuth();

    useEffect(() => {
        async function getProduct() {
            try {
                const request = await fetch(`${API}/products/${id}`);
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

    const [showPopup, setShowPopup] = useState(false);

    // your existing product logic...

    function handleAddToCart() {
        if (!product || !isLoggedIn) {
            
            return;
        }
        addToCart({ product, quantity });
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 1500);

    }

    if (error)
        return (<>Error:{error}</>)
    if (product === undefined)
        return (<>Loading..</>);
    return (<>
        <div className="w-full flex lg:w-[78%] lg:flex-row gap-8 mt-10 p-4 border rounded-xl">
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

                    <div className="flex items-center gap-3 my-3">
                        <span className="font-medium">Quantity:</span>
                        <QuantityCounter quantity={quantity}
                            onIncrease={() => setQuantity(prev => prev + 1)}
                            onDecrease={() => setQuantity(prev => Math.max(0, prev - 1))} />

                    </div>

                    <div className="flex gap-2 [&_button]:rounded-xl">
                        <button className="w-full sm:w-50 text-xl p-2 lg:p-3 font-semibold cursor-pointer
                                    bg-blue-300 hover:bg-blue-400">
                            Buy Now
                        </button>
                        <button className="w-full sm:w-50 text-xl lg:p-3 font-semibold cursor-pointer 
                                    bg-orange-300 hover:bg-orange-400"
                            onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                        <div
                            className={`
                                fixed top-20 right-5
                                bg-black text-white
                                px-5 py-3 rounded-xl shadow-lg
                                transition-all duration-300
                                ${showPopup
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-10 pointer-events-none"
                                }
                            `}>
                            Added to Cart
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="w-full lg:w-[78%] flex flex-col mt-10 p-2 border rounded-xl">
            <h2 className="text-2xl font-semibold">
                Reviews
            </h2>
            <div className="flex flex-col">
                {product.reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>

        </div>
    </>)
}
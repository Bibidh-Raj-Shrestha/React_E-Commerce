import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RiCashFill, RiRestartLine, RiShieldLine } from "@remixicon/react";
import RatingStars from "../components/RatingStar";
import ReviewCard from "../components/ReviewCard";
import CartContext from "../context/CartContext";
import QuantityCounter from "../components/QuantityCounter";
import LoginRequired from "../components/LoginRequired";

import { useAuth } from "../context/AuthContext";

import type { Product } from "../types/types";

export default function ProductsDetails() {
    const { addToCart } = useContext(CartContext)!;
    const navigate = useNavigate();

    const API = import.meta.env.VITE_API_URL;
    const { id } = useParams();

    const [product, setProduct] = useState<Product>();
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(0);

    const { isLoggedIn } = useAuth();

    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [checkLog, setCheckLog] = useState<boolean>(false);

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

    function handleAddToCart() {
        if (!product || !isLoggedIn) {
            setCheckLog(true);
            return;
        }

        addToCart({ product, quantity });

        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
        }, 1500);
    }

    if (error) {
        return <>Error: {error}</>;
    }

    if (product === undefined) {
        return <>Loading..</>;
    }

    return (
        <>
            {/* Product Details */}
            <div
                className="
                    w-full
                    lg:w-[78%]
                    mx-auto
                    flex flex-col lg:flex-row
                    gap-6 lg:gap-8
                    mt-5 lg:mt-10
                    p-4 sm:p-6
                    border rounded-xl
                "
            >

                {/* Product Image */}
                <div
                    className="
                        w-full lg:w-1/2
                        flex justify-center items-center
                    "
                >
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className="
                            w-full
                            h-64 sm:h-80 lg:h-96
                            object-contain
                        "
                    />
                </div>


                {/* Product Information */}
                <div
                    className="
                        w-full lg:w-1/2
                        flex flex-col
                        gap-6
                    "
                >

                    {/* Title + Rating */}
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl sm:text-3xl font-medium">
                            {product.title}
                        </p>

                        <div className="flex items-center gap-2 flex-wrap">
                            <RatingStars rating={product.rating} />

                            <span className="text-gray-600">
                                | {product.reviews.length} Reviews
                            </span>
                        </div>
                    </div>


                    {/* Product Features */}
                    <div className="text-base sm:text-lg lg:text-xl flex flex-col gap-3">

                        <div className="flex items-start gap-3">
                            <RiCashFill className="shrink-0 mt-1" />
                            <span>
                                Cash on delivery available
                            </span>
                        </div>

                        <div className="flex items-start gap-3">
                            <RiRestartLine className="shrink-0 mt-1" />
                            <span>
                                {product.returnPolicy}
                            </span>
                        </div>

                        <div className="flex items-start gap-3">
                            <RiShieldLine className="shrink-0 mt-1" />
                            <span>
                                {product.warrantyInformation}
                            </span>
                        </div>

                    </div>


                    {/* Price + Quantity + Buttons */}
                    <div className="flex flex-col">

                        {/* Price */}
                        <span className="text-2xl font-semibold">
                            Rs.{" "}
                            {(
                                (product.price * 140) *
                                (1 - product.discountPercentage / 100)
                            ).toFixed(0)}
                        </span>

                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-gray-500">
                                <del>
                                    Rs. {(product.price * 140).toFixed(0)}
                                </del>
                            </span>

                            <span className="text-red-500 font-medium">
                                -{product.discountPercentage}%
                            </span>
                        </div>


                        {/* Quantity */}
                        <div className="flex items-center gap-3 my-4 flex-wrap">
                            <span className="font-medium">
                                Quantity:
                            </span>

                            <QuantityCounter
                                quantity={quantity}
                                onIncrease={() =>
                                    setQuantity(prev => prev + 1)
                                }
                                onDecrease={() =>
                                    setQuantity(prev =>
                                        Math.max(0, prev - 1)
                                    )
                                }
                            />
                        </div>


                        {/* Buttons */}
                        <div
                            className="
                                flex flex-col sm:flex-row
                                gap-3
                                [&_button]:rounded-xl
                            "
                        >
                            <button
                                className=" w-full sm:w-1/2 text-lg sm:text-xl p-3 font-semibold cursor-pointer  bg-blue-300
                                            hover:bg-blue-400 transition"
                                onClick={() =>
                                    isLoggedIn
                                        ? navigate("/cart")
                                        : setCheckLog(true)
                                }
                            >
                                Buy Now
                            </button>

                            <button
                                className=" w-full sm:w-1/2 text-lg sm:text-xl p-3 font-semibold cursor-pointer  bg-orange-300
                                hover:bg-orange-400 transition"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            {/* Added to Cart Popup */}
            <div
                className={` fixed top-5 sm:top-20 right-3 sm:right-5 z-50  bg-black text-white px-4 sm:px-5 
                    py-3 rounded-xl shadow-lg transition-all duration-300
                    ${
                        showPopup
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-10 pointer-events-none"
                    }
                `}
            >
                Added to Cart
            </div>


            {/* Login Popup */}
            <LoginRequired
                open={checkLog}
                onClose={() => setCheckLog(false)}
                onLogin={() => navigate("/login")}
                onRegister={() => navigate("/register")}
            />


            {/* Reviews */}
            <div
                className=" w-full lg:w-[78%] mx-auto flex flex-col mt-6 lg:mt-10 p-4 sm:p-6 border rounded-xl"
            >
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Reviews
                </h2>

                <div className="flex flex-col mt-3">
                    {product.reviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            review={review}
                        />
                    ))}
                </div>
            </div>
        </>
    );
} 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RiStarFill, RiStarHalfFill, RiStarLine, RiCashFill, RiRestartLine, RiShieldLine } from "@remixicon/react";

interface Review {
    rating: number;
    comment: string;
    reviewerName: string;
}
interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    images: string[];
    rating: number;
    discountPercentage: number;
    reviews: Review[];
    returnPolicy: string;
    warrantyInformation: string;
}

export default function ProductsDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product>();
    useEffect(() => {
        async function getProduct() {
            const request = await fetch(`http://localhost:3000/products/${id}`);
            if (!request.ok) {
                console.log("error");
            }
            const data: Product = await request.json();
            setProduct(data);
            console.log(data);
        }
        getProduct();
    }, []);

    if (product === undefined)
        return (<>Product not found</>);
    return (<>
        <div className="flex mt-10 p-4 border rounded-xl">
            <div>
                <img src={product.images[0]} alt="" width={400} />
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                    <p className="text-3xl">{product.title}</p>
                    <div className="flex">
                        {Array.from({ length: 5 }).map((_, index) => {
                            const starNumber = index + 1;

                            if (product.rating >= starNumber) {
                                return <span key={index}>
                                    <RiStarFill color="gold" />
                                </span>;
                            }
                            if (product.rating >= starNumber - 0.5) {
                                return <span key={index}>
                                    <RiStarHalfFill color="gold" />
                                </span>;
                            }

                            return <span key={index}>
                                <RiStarLine color="gold" />
                            </span>;
                        })}
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
                    <div className="flex gap-2 [&_span]:w-50 [&_span]:text-xl
                                [&_span]:p-3 [&_span]:font-semibold [&_span]:cursor-pointer">
                        <span className="bg-blue-300 text-center hover:bg-blue-400">
                            Buy Now
                        </span>
                        <span className="bg-orange-300 text-center hover:bg-orange-400">
                            Add to Cart
                        </span>
                    </div>
                </div>

            </div>
        </div>
        <div className="w-[78%] flex flex-col mt-10 p-2 border rounded-xl">
            <span>
                <h2>Reviews</h2>
            </span>
            <div className="flex flex-col">
                {product.reviews.map((review) => (
                    <div className="flex flex-col border rounded-xl mb-2 p-2">
                        <div className="flex">{
                            Array.from({ length: 5 }).map((_, index) => {
                                const starNumber = index + 1;

                                if (product.rating >= starNumber) {
                                    return <span key={index}>
                                        <RiStarFill color="gold" />
                                    </span>;
                                }
                                if (product.rating >= starNumber - 0.5) {
                                    return <span key={index}>
                                        <RiStarHalfFill color="gold" />
                                    </span>;
                                }

                                return <span key={index}>
                                    <RiStarLine color="gold" />
                                </span>;
                            })}

                        </div>
                        <span className="text-gray-500">
                            {review.reviewerName}
                        </span>
                        <span>
                            {review.comment}
                        </span>
                    </div>

                ))}
            </div>

        </div>
    </>)
}
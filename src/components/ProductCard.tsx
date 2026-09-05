import { RiStarFill, RiStarHalfFill, RiStarLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    images: string[];
    rating: number;
    discountPercentage: number;
}
interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const navigate = useNavigate();
    return (<>
        <div className="border h-90 w-full rounded-2xl flex flex-col justify-evenly cursor-pointer hover:shadow-2xl
                        p-2"
            onClick={()=>navigate(`/products/${product.id}`)}>
            <img src={product.images[0]} alt="asd" />
            <div className="pl-2">
                <span className="">
                    {product.title}
                </span>
                <div>
                    <span className="text-2xl">
                        Rs. {((product.price*140)*(1-product.discountPercentage/100)).toFixed(0)}
                    </span>

                    <span className="text-gray-500">
                        -{product.discountPercentage}%
                    </span>
                </div>
                <div>
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
                    </div>
                </div>
            </div>

        </div>
    </>)
}
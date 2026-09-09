import { useNavigate } from "react-router-dom";
import type {Product} from "./types";
import RatingStars from "./RatingStar";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const navigate = useNavigate();
    return (<>
        <div className="border lg:h-95` w-full rounded-2xl flex flex-col justify-evenly cursor-pointer 
                        hover:shadow-2xl p-2 "
                        onClick={()=>navigate(`/products/${product.id}`)}>
            <img src={product.images[0]} alt="asd" />
            <div className="pl-2">
                <span className="">
                    {product.title}
                </span>
                <div className="flex flex-col">
                    <span className="text-xl lg:text-2xl">
                        Rs. {((product.price*140)*(1-product.discountPercentage/100)).toFixed(0)}
                    </span>

                    <span className="text-gray-500">
                        -{product.discountPercentage}%
                    </span>
                </div>
                <div>
                    <div className="flex">
                        <RatingStars rating={product.rating}/>
                    </div>
                </div>
            </div>

        </div>
    </>)
}
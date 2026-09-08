import { useContext } from "react";
import CartContext from "../components/CartContext"

import QuantityCounter from "./QuantityCounter";

import type { CartItem } from "./types";

export default function CartCard({product,quantity}:CartItem){
    const { increaseCart,decreaseCart} = useContext(CartContext)!;
    return(<>
        <div className="flex items-center gap-6 border rounded-2xl p-5 w-full max-w-4xl">
            <img
                src={product.images[0]}
                alt={product.title}
                className="w-40 h-40 object-contain rounded-xl"
            />
            <div className="flex flex-col justify-between min-h-40 flex-1">

                <div>
                    <p className="text-lg font-semibold">
                        {product.title}
                    </p>

                    <p className="text-xl font-bold mt-2">
                        ${product.price}
                    </p>
                </div>

                <div className="mt-4">
                    <QuantityCounter quantity={quantity}
                                    onIncrease={()=>increaseCart(product.id)}
                                    onDecrease={()=>decreaseCart(product.id)}/>
                </div>

            </div>

            <div className="flex flex-col items-end justify-between min-h-40">

                <div className="text-right">
                    <p className="text-sm text-gray-500">
                        Total
                    </p>

                    <p className="text-xl font-bold">
                        $100
                    </p>
                </div>

                <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800">
                    Buy Now
                </button>

            </div>

        </div>
    </>);
}
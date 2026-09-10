import { useCart } from "../context/CartContext";
import QuantityCounter from "./QuantityCounter";
import type { CartItem } from "../types/types";

export default function CartCard({ product, quantity }: CartItem) {

    const {
        removeFromCart,
        increaseCart,
        decreaseCart
    } = useCart();

    const priceInNPR =
        product.price * 140 *
        (1 - product.discountPercentage / 100);

    const totalPrice = priceInNPR * quantity;

    return (
        <div className="mb-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 border rounded-2xl p-3 sm:p-4 w-full max-w-4xl">

            <div className="shrink-0">
                <img src={product.images[0]} alt={product.title} className="w-28 h-28 sm:w-36 sm:h-36 object-contain rounded-xl" />
            </div>

            <div className="flex flex-col flex-1 w-full sm:w-auto text-center sm:text-left">

                <p className="text-base sm:text-lg font-semibold line-clamp-2">
                    {product.title}
                </p>

                <p className="text-lg sm:text-xl font-bold mt-2">
                    Rs {priceInNPR.toFixed(0)}
                </p>

                <div className="mt-3 sm:mt-4 flex justify-center sm:justify-start">
                    <QuantityCounter
                        quantity={quantity}
                        onIncrease={() => increaseCart(product.id)}
                        onDecrease={() => decreaseCart(product.id)}
                    />
                </div>

            </div>

            <div className="flex flex-col items-center sm:items-end gap-3 w-full sm:w-auto">

                <div className="text-center sm:text-right">
                    <p className="text-sm text-gray-500">
                        Total
                    </p>

                    <p className="text-lg sm:text-xl font-bold">
                        Rs {totalPrice.toFixed(0)}
                    </p>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none bg-black text-white px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 transition">
                        Buy Now
                    </button>

                    <button onClick={() => removeFromCart(product.id)} className="flex-1 sm:flex-none bg-red-400 text-white px-4 sm:px-5 py-2 rounded-xl hover:bg-red-500 transition">
                        Delete
                    </button>
                </div>

            </div>

        </div>
    );
}
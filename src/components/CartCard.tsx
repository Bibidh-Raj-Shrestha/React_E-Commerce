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
        <div className="mb-5 flex flex-col sm:flex-row items-center gap-5 border rounded-2xl p-4 w-full max-w-4xl">

            {/* Product Image */}
            <div className="shrink-0">
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-32 h-32 sm:w-36 sm:h-36 object-contain rounded-xl"
                />
            </div>

            {/* Product Information */}
            <div className="flex flex-col flex-1 w-full sm:w-auto">

                <p className="text-lg font-semibold line-clamp-2">
                    {product.title}
                </p>

                <p className="text-xl font-bold mt-2">
                    Rs {priceInNPR.toFixed(0)}
                </p>

                <div className="mt-4">
                    <QuantityCounter
                        quantity={quantity}
                        onIncrease={() => increaseCart(product.id)}
                        onDecrease={() => decreaseCart(product.id)}
                    />
                </div>

            </div>

            {/* Total + Actions */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between gap-4 w-full sm:w-auto">

                <div className="text-left sm:text-right">
                    <p className="text-sm text-gray-500">
                        Total
                    </p>

                    <p className="text-xl font-bold">
                        Rs {totalPrice.toFixed(0)}
                    </p>
                </div>

                <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
                    Buy Now
                </button>

                <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-400 text-white px-5 py-2 rounded-xl hover:bg-red-500 transition"
                >
                    Delete
                </button>

            </div>

        </div>
    );
}
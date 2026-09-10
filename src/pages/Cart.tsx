import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartCard from "../components/CartCard";

export default function Cart() {
    const { cartProducts } = useContext(CartContext)!;

    const total = cartProducts.reduce((sum, item) => {
        const price =
            (item.product.price * 140) *
            (1 - item.product.discountPercentage / 100);

        return sum + price * item.quantity;
    }, 0);

    if (cartProducts.length === 0)
        return (
            <div className="w-full min-h-[50vh] flex items-center justify-center">
                <p className="text-lg sm:text-xl text-gray-600">
                    No item currently in cart
                </p>
            </div>
        );

    return (
        <div className="w-full flex flex-col items-center px-3 sm:px-5">

            <div className="w-full flex flex-col items-center mt-5">
                {cartProducts.map((items) => (
                    <CartCard
                        key={items.product.id}
                        product={items.product}
                        quantity={items.quantity}
                    />
                ))}
            </div>

            <div className="w-full max-w-4xl border rounded-2xl p-4 sm:p-5 mt-2 sm:mt-5 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-lg sm:text-xl font-bold">
                        Total: Rs {total.toFixed(0)}
                    </p>

                    <button className="w-full sm:w-auto bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition">
                        Checkout
                    </button>
                </div>
            </div>

        </div>
    );
}
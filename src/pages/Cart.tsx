import { useContext } from "react"
import CartContext from "../context/CartContext"
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
        return (<>
            <p>No item currently in cart</p>
        </>)
    return (<>
        <div className="w-full mt-5 flex flex-col items-center">
            {cartProducts.map((items) => (
                <CartCard
                    product={items.product}
                    quantity={items.quantity}
                />
            ))}
        </div>
        <div className="w-full max-w-4xl border rounded-2xl p-5 mt-5">
            <p className="text-xl font-bold">
                Total: Rs {total.toFixed(0)}
            </p>

            <button className="bg-black text-white px-5 py-2 rounded-xl mt-3">
                Checkout
            </button>
        </div>
    </>)
}
import { useContext } from "react"
import CartContext from "../context/CartContext"
import CartCard from "../components/CartCard";

export default function Cart() {
    const { cartProducts } = useContext(CartContext)!;

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

    </>)
}
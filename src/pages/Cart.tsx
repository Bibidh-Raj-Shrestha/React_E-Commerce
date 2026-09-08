import { useContext } from "react"
import CartContext from "../components/CartContext"
import CartCard from "../components/CartCard";

export default function Cart() {
    const { cartProducts} = useContext(CartContext)!;

    if (cartProducts.length === 0)
        return (<>
            <p>No item currently in cart</p>
        </>)
    return (<>
        {cartProducts.map((items)=>(
            <CartCard 
                product ={items.product}
                quantity={items.quantity}
            />
        ))}
    </>)
}
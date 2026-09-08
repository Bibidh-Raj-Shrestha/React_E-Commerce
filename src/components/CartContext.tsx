import { createContext, useState } from "react";
import type { CartItem } from "./types";



interface CartContextType {
    cartProducts: CartItem[];
    addToCart: (item: CartItem) => void;
    // removeFromCart: (id: number) => void;
    clearCart: () => void;

    increaseCart: (id: number) => void;
    decreaseCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

function CartProvider({ children }: { children: React.ReactNode }) {

    const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

    function addToCart({ product, quantity }: CartItem) {
        quantity = (quantity === 0) ? quantity + 1 : quantity;
        setCartProducts(prev => [...prev, { product, quantity }]);
    }

    // function removeFromCart(id: number) {
    //     setCartProducts(prev =>
    //         prev.filter(product => product.id !== id)
    //     );
    // }

    function clearCart() {
        setCartProducts([]);
    }

    function increaseCart(id: number) {
        setCartProducts(prev => prev.map(item => {
            return item.product.id == id ? { ...item, quantity: item.quantity + 1 } : item;
        }))
    }
    function decreaseCart(id: number) {

        setCartProducts(prev =>
            prev.map(item => {
                return item.product.id == id ?
                    { ...item, quantity: Math.max(1,item.quantity - 1) } : item;
            }))
    }

    return (
        <CartContext.Provider value={{
            cartProducts,
            addToCart,
            clearCart,
            increaseCart,
            decreaseCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider };
export default CartContext;
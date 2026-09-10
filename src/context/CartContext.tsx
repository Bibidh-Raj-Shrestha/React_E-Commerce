import { createContext, useState, useContext } from "react";
import type { CartItem } from "../types/types";



interface CartContextType {
    cartProducts: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;

    increaseCart: (id: number) => void;
    decreaseCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

function CartProvider({ children }: { children: React.ReactNode }) {

    const local_items: CartItem[] = JSON.parse(localStorage.getItem("cartItems") || "[]");

    const [cartProducts, setCartProducts] = useState<CartItem[]>(local_items ? local_items : []);

    function addToCart({ product, quantity }: CartItem) {
        quantity = quantity === 0 ? 1 : quantity;

        setCartProducts(prev => {
            const existingItem = prev.find(
                item => item.product.id === product.id
            );
            if (existingItem) {
                return prev.map(item =>
                    item.product.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + quantity
                        }
                        : item
                );
            }

            const newlist = [...prev, { product, quantity }];
            localStorage.setItem("cartItems", JSON.stringify(newlist))
            return newlist;
        });
    }

    function removeFromCart(id: number) {
        setCartProducts(prev =>
            prev.filter(item => item.product.id !== id)
        );
    }

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
                return item.product.id === id ?
                    { ...item, quantity: Math.max(1, item.quantity - 1) } : item;
            }))
    }

    return (
        <CartContext.Provider value={{
            cartProducts,
            addToCart,
            removeFromCart,
            clearCart,
            increaseCart,
            decreaseCart
        }}>
            {children}
        </CartContext.Provider>
    );
}
export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used inside CartProvider");
    }

    return context;
}
export { CartProvider };
export default CartContext;
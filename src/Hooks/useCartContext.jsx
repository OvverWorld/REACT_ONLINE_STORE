import {createContext} from "react";
import useCart from "./useCart";
const CartContext = createContext(null)
function CartProvider({children}) {
const cartData = useCart()
    return (
            <CartContext.Provider  value={cartData}>
                {children}
            </CartContext.Provider>
    )
}

export {CartProvider,CartContext};
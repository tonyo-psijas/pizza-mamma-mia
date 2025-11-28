import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {

   const [listaPizzas, setListaPizzas] = useState([])

   return(
    <CartContext.Provider value={{ listaPizzas, setListaPizzas }}>
        {children}
    </CartContext.Provider>
   )
}

export default CartProvider
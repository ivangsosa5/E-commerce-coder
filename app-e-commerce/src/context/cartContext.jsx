import { createContext, useState } from "react";

export const cartContext = createContext()

export function CartProvider({children}){

    const [cartList, setCartList] = useState([])

    const addItem = ({id, name, price, quantity})=>{

        setCartList({id, name, price, quantity})

    }

    const removeItem = (id)=>{

        const cartListFiltered = cartList.filter(cartList => cartList.id !== id)

        setCartList(cartListFiltered)

    }

    const clearItems = ()=>{

        setCartList([])
    }

    const isInCart = ()=>{//validacion de items en carrito/contador?


    }

    return (

        <cartContext.Provider value={{cartList, addItem, removeItem, clearItems, isInCart }}>
            {children}
        </cartContext.Provider>
    )
}






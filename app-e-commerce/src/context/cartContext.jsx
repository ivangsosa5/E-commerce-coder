import { createContext, useState } from "react";

export const cartContext = createContext()

export function CartProvider({children}){

    const [cartList, setCartList] = useState([]);
    const [cartCount, setCartCount] = useState(0)

    const isInCartIndex = (id)=>{
        return cartList.findIndex(item=>item.id === id)
    }

    const addItem = ({id, name, price, quantity})=>{
        // const isInCartIndex = cartList.findIndex(item=>item.id === id) 
            const finded = isInCartIndex(id)
            if(finded >= 0){
                console.log('esta funcionando')
                const newCart = structuredClone(cartList)
                newCart[finded].quantity += quantity
                setCartList(newCart)
                setCartCount(cartCount + quantity)//quede aca, todo ok con el incremente del contador en widget. Falta restar al contador al eliminar un producto del carrito 
                
                }else{
                    setCartList(prevState=>([...prevState, {id, name, price, quantity}]))
                    setCartCount(cartCount + quantity)
                }

        }
    
    const removeItem = ({id, quantity})=>{
            // const finded = isInCartIndex(id)
            const cartListFiltered = cartList.filter(cartList => cartList.id !== id)
            setCartList(cartListFiltered)
            setCartCount(cartCount - quantity)
    
        }
    
    const clearItems = ()=>{
    
            setCartList([])
            setCartCount(0)
        }
        
    return (

        <cartContext.Provider value={{cartList, addItem, removeItem, clearItems, cartCount }}>
            {children}
        </cartContext.Provider>
    )

    }









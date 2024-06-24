import { createContext,useEffect,useState } from "react";

export const CartContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: () => {
            return null;
        },
        cartItems: [],
        addItemToCart: () => {},
        cartItemCount:0,
    }
)

const addCartItem = (cartItems,productToAdd) => {
    //find if cartItems already contains the product to add.
    const existingCartItem = cartItems.find((cartItem) => { 
        return (cartItem.id === productToAdd.id);
    })

    if(existingCartItem){
        return cartItems.map( (cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem )
    }
    
    return [...cartItems,{...productToAdd, quantity:1}]
} 

export const CartProvider = ({children}) => {

    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [cartItemCount,setCartItemCount] = useState(0);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems,product));
    }

    const countItem = () => {
        const count = cartItems.reduce((sum,item)=>{
            return sum + item.quantity;
        },0)
        setCartItemCount(count);
    }

    useEffect(countItem,[cartItems]);

    const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,cartItemCount};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
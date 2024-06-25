
import { createContext,useEffect,useState } from "react";

export const CartContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: () => {
            return null;
        },
        cartItems: [],
        addItemToCart: () => {},
        removeItemFromCart: () => {},
        clearItemFromCart: () => {},
        cartItemCount:0,
        cartTotal:0
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

const removeCartItem = (cartItems, cartItemToRemove) => {
    //find if cartItems already contains the product to remove.
    const existingCartItem = cartItems.find((cartItem) => { 
        return (cartItem.id === cartItemToRemove.id);
    })
    if(existingCartItem.quantity === 1){
        return cartItems.filter((item) => (item.id !== cartItemToRemove.id))
    }

    return cartItems.map( 
        (cartItem) => cartItem.id === cartItemToRemove.id 
        ? 
        {...cartItem, quantity: cartItem.quantity - 1} 
        : 
        cartItem )
}

const clearCartItem = (cartItems,cartItemToClear) => {
    return cartItems.filter((item) => (item.id !== cartItemToClear.id))
}

export const CartProvider = ({children}) => {

    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [cartItemCount,setCartItemCount] = useState(0);
    const [cartTotal,setCartTotal] = useState(0);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems,product));
    }

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems,product));
    }

    const clearItemFromCart = (product) => {
        setCartItems(clearCartItem(cartItems,product));
    }

    const countItem = () => {
        const count = cartItems.reduce((sum,item)=>{
            return sum + item.quantity;
        },0)
        setCartItemCount(count);
    }

    const calculateTotal = () => {
        const total = cartItems.reduce((sum,item) => {
            return sum + item.price * item.quantity;
        },0)
        setCartTotal(total);
    }

    useEffect(countItem,[cartItems]);
    useEffect(calculateTotal,[cartItems]);

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItemCount,
        cartTotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
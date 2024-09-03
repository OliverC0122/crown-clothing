
import { createContext,useReducer } from "react";

import {createAction} from '../utils/reducer/reducer.utils';

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
        cartCount:0,
        cartTotal:0
    }
)


const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const cartReducer = (state,action) => {
    const {type, payload} = action;

    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }

        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }

        default:
            throw new Error(`Unhandled type of ${type} in CartReducer`);
    }

}

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

    const [state, dispatch] = useReducer(cartReducer,INITIAL_STATE);
    const {cartItems,cartCount,isCartOpen,cartTotal} = state;
    
    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((sum,item)=>{
            return sum + item.quantity;
        },0);
    
        const newCartTotal = newCartItems.reduce((sum,item) => {
            return sum + item.price * item.quantity;
        },0);

        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS,
            {
                cartItems: newCartItems,
                cartTotal: newCartTotal, 
                cartCount: newCartCount
            }
        ))
    
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool))    
    }

    const addItemToCart = (product) => {
        const newCartItems = addCartItem(cartItems,product);
        updateCartItemsReducer(newCartItems);

    }

    const removeItemFromCart = (product) => {
        const newCartItems = removeCartItem(cartItems,product);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (product) => {
        const newCartItems = clearCartItem(cartItems,product);
        updateCartItemsReducer(newCartItems);
    }

    // const countItem = () => {
    //     const count = cartItems.reduce((sum,item)=>{
    //         return sum + item.quantity;
    //     },0)
    //     setCartItemCount(count);
    // }

    // const calculateTotal = () => {
    //     const total = cartItems.reduce((sum,item) => {
    //         return sum + item.price * item.quantity;
    //     },0)
    //     setCartTotal(total);
    // }

    // useEffect(countItem,[cartItems]);
    // useEffect(calculateTotal,[cartItems]);

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartCount,
        cartTotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
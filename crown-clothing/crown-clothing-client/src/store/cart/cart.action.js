import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

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

export const addItemToCart = (cartItems, product) => {
    const newCartItems = addCartItem(cartItems,product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}

export const removeItemFromCart = (cartItems, product) => {
    const newCartItems = removeCartItem(cartItems,product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}
export const clearItemFromCart = (cartItems, product) => {
    const newCartItems = clearCartItem(cartItems,product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}

export const setIsCartOpen = (boolean) => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
}
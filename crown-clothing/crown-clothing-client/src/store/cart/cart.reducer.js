import { createSlice } from "@reduxjs/toolkit";

const addCartItem = (cartItems,productToAdd) => {
    //find if cartItems already contains the product to add.
    const existingCartItem = cartItems.find((cartItem) => { 
        return (cartItem._id === productToAdd._id);
    })

    if(existingCartItem){
        return cartItems.map( (cartItem) => cartItem._id === productToAdd._id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem )
    }
    
    return [...cartItems,{...productToAdd, quantity:1}]
} 

const removeCartItem = (cartItems, cartItemToRemove) => {
    //find if cartItems already contains the product to remove.
    const existingCartItem = cartItems.find((cartItem) => { 
        return (cartItem._id === cartItemToRemove._id);
    })
    if(existingCartItem.quantity === 1){
        return cartItems.filter((item) => (item._id !== cartItemToRemove._id))
    }

    return cartItems.map( 
        (cartItem) => cartItem._id === cartItemToRemove._id 
        ? 
        {...cartItem, quantity: cartItem.quantity - 1} 
        : 
        cartItem )
}

const clearCartItem = (cartItems,cartItemToClear) => {
    return cartItems.filter((item) => (item._id !== cartItemToClear._id))
}



const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        addItemToCart(state,action){
            state.cartItems = addCartItem(state.cartItems,action.payload);
        },
        removeItemFromCart(state, action){
            state.cartItems = removeCartItem(state.cartItems,action.payload);
        },
        clearItemFromCart(state,action){
            state.cartItems = clearCartItem(state.cartItems,action.payload);
        },
        setIsCartOpen(state,action) {
            state.isCartOpen = action.payload;
        },
        clearAllCartItems(state, action) {
            state.cartItems = [];
        }

    }
})


export const {
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    clearAllCartItems
}  = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

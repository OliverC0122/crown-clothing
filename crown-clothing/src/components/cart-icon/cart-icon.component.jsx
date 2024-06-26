import { useContext } from 'react';
import {ItemCount,CartIconContainer,ShoppingIcon} from './cart-icon.styles.jsx'
import { CartContext } from '../../contexts/cart.context';



const CartIcon = () => {

    const {cartItemCount} = useContext(CartContext);

    const {isCartOpen,setIsCartOpen} = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
    
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>

    )
}

export default CartIcon;
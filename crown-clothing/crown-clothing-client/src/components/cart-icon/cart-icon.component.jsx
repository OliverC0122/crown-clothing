import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
// import { setIsCartOpen } from '../../store/cart/cart.action';
import { setIsCartOpen } from '../../store/cart/cart.reducer';


const CartIcon = () => {

    const cartCount = useSelector(selectCartCount);

    const isCartOpen = useSelector(selectIsCartOpen);

    const dispatch = useDispatch();

    const toggleIsCartOpen = () => {
        // setIsCartOpen(!isCartOpen);
        dispatch(setIsCartOpen(!isCartOpen));
    }
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>

    )
}

export default CartIcon;
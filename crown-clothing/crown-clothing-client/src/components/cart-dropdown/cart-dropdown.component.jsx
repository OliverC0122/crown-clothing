
import Button from '../button/button.component';
import './cart-dropdown.style.scss'
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useTranslation } from 'react-i18next';

const CartDropdown = () => {
    const { t } = useTranslation();

    const cartItems = useSelector(selectCartItems);
    
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
    }
    return (
        <div className='cart-dropdown-container'>  
            <div className='cart-items'>
            {cartItems.map((item) => <CartItem key={item._id} cartItem={item}/>)}
            </div>
            <Button onClick={goToCheckOutHandler}>{t("Go to Checkout")}</Button>
        </div>
    )
}

export default CartDropdown;
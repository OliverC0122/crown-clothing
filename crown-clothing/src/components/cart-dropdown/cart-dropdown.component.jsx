import { useContext } from 'react';
import Button from '../button/button.component';
import './cart-dropdown.styles.jsx'
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { CartItems,CartDropdownContainer, EmptyMessage } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>  
            <CartItems>
            {cartItems.length ?
                (cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>))
                :
                (<EmptyMessage>
                    Give your cart some Love!
                </EmptyMessage>) 
            }

            </CartItems>
            <Button onClick={goToCheckOutHandler}>Go to CheckOut</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;
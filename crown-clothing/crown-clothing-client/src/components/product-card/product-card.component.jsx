import './product-card.style.scss';
import Button from '../button/button.component';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';



const ProductCard = ({product}) => {

    const {_id,name,imageUrl,price} = product;

    const navigate = useNavigate();
    const handleProductClick = () => navigate(`/products/display/${_id}`);

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addProductToCart = () => dispatch(addItemToCart(cartItems,product));

    return (
        <div className='product-card-container' onClick={handleProductClick}>
            <img src={imageUrl} alt={`${name}`}/>

            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>
        </div>
    )
}


export default ProductCard;
import './product-card.style.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';



const ProductCard = ({product}) => {

    const {_id,name,imageUrl,price} = product;

    const navigate = useNavigate();
    const handleProductClick = () => navigate(`/products/display/${_id}`);

    

    const {addItemToCart} = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    
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
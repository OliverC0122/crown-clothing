import './product-card.style.scss';
import Button from '../button/button.component';

import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.reducer';
import { useTranslation } from 'react-i18next';


const ProductCard = ({product}) => {

    const { t } = useTranslation();
    const {_id,name,imageUrl,price} = product;

    const navigate = useNavigate();
    const handleProductClick = () => navigate(`/products/display/${_id}`);
    const dispatch = useDispatch();

    const addProductToCart = () => dispatch(addItemToCart(product));

    return (
        <div className='product-card-container' onClick={handleProductClick}>
            <img src={imageUrl} alt={`${name}`}/>

            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>{t("Add to Cart")}</Button>
        </div>
    )
}


export default ProductCard;
import api from "../../api/axios/axiosConfig";
import { useEffect, useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import './product-display.styles.scss';

import Button from "../../components/button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { addItemToCart } from "../../store/cart/cart.reducer";
import { useTranslation } from "react-i18next";



const ProductDisplay = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentUser)

    const dispatch = useDispatch();


    const addProductToCart = () => dispatch(addItemToCart(product));

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await api.get(`/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getProduct();
    }, [id]);



    const handleEdit = () => {
        navigate(`/products/display/${id}/edit`);
        
    };

    const handleDelete = () => {

        try {
            api.delete(`/products/${id}`);
            navigate('/products');  

        }catch (error) {
            console.error(error);
        }

    };

    if (!product) {
        return <h1>Loading...</h1>;
    }

    const { name, imageUrl, price } = product;

    return (
        <div className="product-display">
            <h1>{name}</h1>
            <img src={imageUrl} alt={name} />
            <p>{t("Price")}: ${price}</p>

            {currentUser ? (
            <div className="product-display__buttons">
                <button onClick={handleEdit} className="edit-button">Edit</button>
                <button onClick={handleDelete} className="delete-button">Delete</button>
            </div>) :
            (<Button buttonType='inverted' onClick={addProductToCart}>{t("Add to Cart")}</Button>)
            }
        </div>
    );
};

export default ProductDisplay;
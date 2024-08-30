import api from "../../api/axios/axiosConfig";
import { useEffect, useState, useContext } from "react";
import { useParams,useNavigate } from "react-router-dom";
import './product-display.styles.scss';

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import Button from "../../components/button/button.component";



const ProductDisplay = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    const { currentUser } = useContext(UserContext);

    const {addItemToCart} = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    


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
            const res = api.delete(`/products/${id}`);
            console.log(res);
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
            <p>Price: ${price}</p>

            {currentUser ? (
            <div className="product-display__buttons">
                <button onClick={handleEdit} className="edit-button">Edit</button>
                <button onClick={handleDelete} className="delete-button">Delete</button>
            </div>) :
            (<Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>)
            }
        </div>
    );
};

export default ProductDisplay;
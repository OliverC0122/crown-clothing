import './category.styles.scss'
import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState, useCallback } from 'react'; // Import useCallback
import api from '../../api/axios/axiosConfig';
import ProductCard from '../../components/product-card/product-card.component';
import { useTranslation } from 'react-i18next';

const Category = () => {

    const { t } = useTranslation();
    const {category} = useParams();
    const [products,setProducts] = useState();

    const getProducts = useCallback(async () => {
        try {
            const response = await api.get(`/categories/${category}`);
            setProducts(response.data.products);
        } catch (error) {
            console.error(error);
        }
    }, [category]);

    useEffect(() => {
        getProducts();
    }, [getProducts]);


    return (
        <Fragment>
            <h2 className='category-title'>{t(category)}</h2>
            {
                <div className='category-container'>
                    {products && products.map((product)=>{
                        return (
                            <ProductCard product={product} key={product._id}/>
                        )
                    })}
                </div>
            }
        </Fragment>
    )
}

export default Category;
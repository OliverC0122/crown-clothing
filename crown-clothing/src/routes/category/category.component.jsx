import { CategoryContainer, 
        CategoryTitle
 } from './category.styles'
import { useParams } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';


const Category = () => {

    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products,setProducts] = useState(categoriesMap[category]);

    useEffect( () => {
        setProducts(categoriesMap[category]);
    },[category,categoriesMap]);


    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products && products.map((product)=>{
                    return (
                        <ProductCard product={product} key={product.id}/>
                    )
                })}
            </CategoryContainer>
        </Fragment>
    )
}

export default Category;
import { Fragment } from "react";

import './categories-preview.scss'

import CategoryPreview from "../../components/category-preview/category-preview.component"
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";

const CategoriesPreview = () => {

    // const {categoriesMap} = useContext(CategoriesContext);

    const categories = useSelector(selectCategories);

    return ( 
        <Fragment>
            {categories.map(category => {
                const {title, products} = category;
                return <CategoryPreview key={title} title={title} products = {products}/>
                    
            })}
        </Fragment>
        )
}

export default CategoriesPreview;
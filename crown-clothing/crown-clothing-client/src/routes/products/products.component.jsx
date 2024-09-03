
import {Routes,Route} from "react-router-dom";

import './products.styles.scss';

import CategoriesPreview from '../categories-preview/categories-preview';
import Category from "../category/category.component";



const Products = () => {
    return(
            <Routes>

                <Route index element={<CategoriesPreview/>}/>
                <Route path=":category" element={<Category/>}/>

            </Routes>

    )
}

export default Products;
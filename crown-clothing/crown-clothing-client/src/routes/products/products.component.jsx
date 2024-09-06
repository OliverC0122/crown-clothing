
import {Routes,Route} from "react-router-dom";

import './products.styles.scss';

import CategoriesPreview from '../categories-preview/categories-preview';
import Category from "../category/category.component";
import { fetchCategoriesStart } from "../../store/categories/category.action";


import { useEffect } from 'react';

import { useDispatch } from 'react-redux';




const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStart());

    },[dispatch])

    return(
            <Routes>

                <Route index element={<CategoriesPreview/>}/>
                <Route path=":category" element={<Category/>}/>

            </Routes>

    )
}

export default Products;

import {Routes,Route} from "react-router-dom";

import './products.styles.scss';

import CategoriesPreview from '../categories-preview/categories-preview';
import Category from "../category/category.component";


import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchCategoriesAsync } from '../../store/categories/category.action.js';





const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesAsync());

    },[dispatch])

    return(
            <Routes>

                <Route index element={<CategoriesPreview/>}/>
                <Route path=":category" element={<Category/>}/>

            </Routes>

    )
}

export default Products;
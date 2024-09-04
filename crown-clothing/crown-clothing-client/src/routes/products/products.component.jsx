
import {Routes,Route} from "react-router-dom";

import './products.styles.scss';

import CategoriesPreview from '../categories-preview/categories-preview';
import Category from "../category/category.component";


import { useEffect } from 'react';
import api from '../../api/axios/axiosConfig.js'
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/category.action.js';




const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getCategories = async () => {
            
            const response = await api.get('/categories');
            const categoriesArray = response.data;
            dispatch(setCategories(categoriesArray));

        }
        getCategories();

    },[dispatch])

    return(
            <Routes>

                <Route index element={<CategoriesPreview/>}/>
                <Route path=":category" element={<Category/>}/>

            </Routes>

    )
}

export default Products;
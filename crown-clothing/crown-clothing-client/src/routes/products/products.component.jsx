
import {Routes,Route} from "react-router-dom";

import './products.styles.scss';

import CategoriesPreview from '../categories-preview/categories-preview';
import Category from "../category/category.component";
import { setCategories } from "../../store/categories/category.reducer";
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import api from  '../../api/axios/axiosConfig'


const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getCategories = async () => {
            const res = await api.get('/categories');
            const categoriesArray = res.data;
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
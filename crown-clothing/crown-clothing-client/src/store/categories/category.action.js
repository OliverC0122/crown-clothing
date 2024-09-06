import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './category.types';
import api from '../../api/axios/axiosConfig.js'

export const setCategories = 
    (categories) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categories);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
        createAction(
            CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
            categoriesArray
        );

export const fetchCategoriesFailed = (error) =>
        createAction(
            CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
            error
        );
    

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const response = await api.get('/categories');
        const categoriesArray = response.data;
        fetchCategoriesSuccess(categoriesArray);
        
    }catch(err){
        dispatch(fetchCategoriesFailed(err));
    }
}
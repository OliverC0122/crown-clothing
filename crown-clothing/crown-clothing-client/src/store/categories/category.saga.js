
import { takeLatest, all, call, put} from 'redux-saga/effects';
import api from '../../api/axios/axiosConfig';
import { fetchCategoriesSuccess, 
         fetchCategoriesFailed 
    } from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
    try {
        const response = yield call(api.get,'/categories');
        const categoriesArray = response.data;
        yield put(fetchCategoriesSuccess(categoriesArray));
        
    }catch(err){
        yield put(fetchCategoriesFailed(err));
    }

}
export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync )
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}
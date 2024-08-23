import {createContext, useEffect, useState } from "react";

// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import api from  '../api/axios/axiosConfig';

export const CategoriesContext = createContext({
    categoriesMap:{},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap,setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            // const categoryMap = await getCategoriesAndDocuments();
            const categoryMap = (await api.get('/categories')).data;
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();

    },[])

    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
};
import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../Utils/firebase/firebase.utils.jsx";

import { getCategoriesandDocuments } from "../Utils/firebase/firebase.utils.jsx";

export const CartegoriesContext = createContext({categoriesMap:{},})

export const CategoriesProvider = ({children})=>{
    const [categoriesMap,setCategoriesMap] = useState({});
     
    useEffect(()=>{
    const getCategoryMap = async()=>{
      const categoryMap = await getCategoriesandDocuments();
      console.log(categoryMap)
    setCategoriesMap(categoryMap)
    }
      
      
      getCategoryMap();
    },[])

    const value = {categoriesMap}

    return (
        <CartegoriesContext.Provider value={value} >{children}</CartegoriesContext.Provider>
    )
}
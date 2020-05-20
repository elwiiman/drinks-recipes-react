import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//Create context
export const CategoriesContext = createContext();

//Provider  is where functions and state are
const CategoriesProvider = (props) => {
  // create state of Context
  const [categories, setCategories] = useState([]);

  //execute API  for categories calling
  useEffect(() => {
    const obtainCategories = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const response = await axios.get(url);
      setCategories(response.data.drinks);
    };

    obtainCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;

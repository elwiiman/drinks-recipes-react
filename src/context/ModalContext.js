import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ModalContext = createContext();

const ModalProvider = (props) => {
  //state for provider
  const [idRecipe, setIdRecipe] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  //once we have a recipe, call the API
  useEffect(() => {
    const obtainRecipeByApi = async () => {
      if (!idRecipe) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
      const response = await axios.get(url);
      setSelectedRecipe(response.data.drinks[0]);
    };

    obtainRecipeByApi();
  }, [idRecipe]);

  return (
    <ModalContext.Provider
      value={{ selectedRecipe, setSelectedRecipe, setIdRecipe }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//create context
export const RecipesContext = createContext();

//Provider  is where functions and state are
const RecipesProvider = (props) => {
  const [search, setSearch] = useState({ ingridient: "", category: "" });
  const [recipes, setRecipes] = useState([]);
  const [enableCallApi, setEnableCallApi] = useState(false);

  const { ingridient, category } = search;

  useEffect(() => {
    if (enableCallApi) {
      const callApiForRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingridient}&c=${category}`;
        const response = await axios.get(url);
        setRecipes(response.data.drinks);
      };

      callApiForRecipes();
    }
  }, [search]);

  return (
    <RecipesContext.Provider value={{ setSearch, setEnableCallApi, recipes }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;

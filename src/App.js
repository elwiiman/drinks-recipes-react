import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListRecipes from "./components/ListRecipes";
import CategoriesProvider from "./context/CatagoriesContext";
import RecipesProvider from "./context/RecipesContext";

function App() {
  return (
    <RecipesProvider>
      <CategoriesProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>
          <ListRecipes />
        </div>
      </CategoriesProvider>
    </RecipesProvider>
  );
}

export default App;

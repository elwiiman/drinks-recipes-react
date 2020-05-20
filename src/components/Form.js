import React, { useContext, useState } from "react";
import { CategoriesContext } from "../context/CatagoriesContext";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {
  const { categories } = useContext(CategoriesContext);
  const { setSearch, setEnableCallApi } = useContext(RecipesContext);

  const [selection, setSelection] = useState({
    ingridient: "",
    category: "",
  });

  const { ingridient, category } = selection;

  //function to execute in change of every element in form
  const readInput = (e) => {
    setSelection({ ...selection, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearch(selection);
        setEnableCallApi(true);
      }}
      className="col-12"
    >
      <fieldset className="text-center">
        <legend className="mb-4">
          Search Drinks by Category or Ingredient
        </legend>
      </fieldset>

      <div className="row">
        <div className="col-md-4">
          <input
            name="ingridient"
            className="form-control"
            type="text"
            placeholder="Search by ingridient"
            onChange={readInput}
            value={ingridient}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            onChange={readInput}
            value={category}
          >
            <option value="">-- Select a category --</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search Drinks"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;

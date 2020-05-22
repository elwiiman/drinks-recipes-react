import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({ recipe }) => {
  //modal configuration, comes from material UI
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //extract from Modal Context
  const { selectedRecipe, setSelectedRecipe, setIdRecipe } = useContext(
    ModalContext
  );

  //Show and format ingridients
  const showIngridients = (recipe) => {
    let ingridients = [];
    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingridients.push(
          <li>
            {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingridients;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img
          className="card-img-top"
          src={recipe.strDrinkThumb}
          alt={`${recipe.strDrink}`}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              setIdRecipe(recipe.idDrink);
              handleOpen();
            }}
          >
            See Recipe
          </button>
          <Modal
            open={open}
            onClose={() => {
              setIdRecipe(null);
              handleClose();
              setSelectedRecipe({});
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{selectedRecipe.strDrink}</h2>
              <h3 className="mt-4">Instructions</h3>
              <p>{selectedRecipe.strInstructions}</p>
              <img
                className="img-fluid my-4"
                src={selectedRecipe.strDrinkThumb}
                alt={selectedRecipe.strDrink}
              />
              <h3>Ingridients and Quantities</h3>
              <ul>{showIngridients(selectedRecipe)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  //state for provider
  const [idRecipe, setIdRecipe] = useState(null);

  return (
    <ModalContext.Provider value={{ setIdRecipe }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

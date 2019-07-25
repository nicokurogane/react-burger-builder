import React from "react";

import IngredientRender from "../ingredientrender/IngredientRender";

import "./burger-ui.css";

const BurgerUI = ({ ingredients }) => {
  return (
    <div className="burger-render-container">
      <div className="buns top-bun"> </div>
      {ingredients.map((currentIng, index) => {
        return <IngredientRender ingredientName={currentIng} key={index} />;
      })}
      <div className="buns bottom-bun"> </div>
    </div>
  );
};

export default BurgerUI;

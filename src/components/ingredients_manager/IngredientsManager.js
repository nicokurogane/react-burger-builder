import React from "react";
import IngredientHandler from "./../ingredient_handler/IngredientHandler";

import "./ingredient-manager.css";

const IngredientsManager = props => {
  const { onAddIngredient, onDeleteIngredient, ingredients } = props;
  return (
    <div className="ingredient-manager-container">
      {ingredients.map(ingredient => {
        return (
          <IngredientHandler
            ingredientName={ingredient.name}
            onAddIngredient={onAddIngredient}
            onDeleteIngredient={onDeleteIngredient}
            key={ingredient.id}
          />
        );
      })}
    </div>
  );
};

export default IngredientsManager;

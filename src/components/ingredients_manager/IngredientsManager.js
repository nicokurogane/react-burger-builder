import React from 'react'
import  IngredientHandler from "./../ingredient_handler/IngredientHandler";
import Meat from '../../classes/meat.js';

import './ingredient-manager.css';

const IngredientsManager = (props) => {
    const { ingredients, onAddIngredient } = props;
    return (
        <div className="ingredient-manager-container">
            <IngredientHandler 
                ingredients={ingredients} 
                classToHandle = {Meat} 
                onAddIngredient={onAddIngredient}
            />
        </div>
    );
}


export default IngredientsManager;
import React from 'react'
import IngredientHandler from "./../ingredient_handler/IngredientHandler";
import Meat from '../../classes/meat.js';
import Cheese from '../../classes/cheese.js';
import Salad from '../../classes/salad.js';

import './ingredient-manager.css';

const IngredientsManager = (props) => {
    const { onAddIngredient, onDeleteIngredient } = props;
    return (
        <div className="ingredient-manager-container">
            <IngredientHandler
                classToHandle={Meat}
                onAddIngredient={onAddIngredient}
                onDeleteIngredient={onDeleteIngredient}
            />

            <IngredientHandler
                classToHandle={Cheese}
                onAddIngredient={onAddIngredient}
                onDeleteIngredient={onDeleteIngredient}
            />

            <IngredientHandler
                classToHandle={Salad}
                onAddIngredient={onAddIngredient}
                onDeleteIngredient={onDeleteIngredient}
            />
        </div>
    );
}


export default IngredientsManager;
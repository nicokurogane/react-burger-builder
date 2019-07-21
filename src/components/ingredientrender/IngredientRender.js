import React from 'react';

import './ingredient-render.css';

const IngredientRender = (props) => {

    return (
        <div className="ingredient-render-container">  
           <div className={props.ingredient.cssClass}></div>
        </div>
    );
};


export default IngredientRender;
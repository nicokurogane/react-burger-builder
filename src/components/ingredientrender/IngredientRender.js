import React from 'react';

import './ingredient-render.css';

const IngredientRender = ({ingredientName}) => {

    return (
        <div className="ingredient-render-container">  
           <div className={`${ingredientName}-ingredient`}></div>
        </div>
    );
};


export default IngredientRender;
import React from 'react';


import './ingredient-render.css';

const IngredientRender = (props) => {

    const renderElement = (ingredient) => {
        return<div className={ingredient.cssClass}></div>
    };

    return (
        <div className="ingredient-render-container">  
            {renderElement(props.ingredient)}
        </div>
    );
};


export default IngredientRender;
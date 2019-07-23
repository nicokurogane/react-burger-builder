import React from 'react';

import './ingredient-handler.css';

class IngredientHandler extends React.Component {

    addIngredient = () => {
        this.props.onAddIngredient(this.props.ingredientName);
    }

    deleteIngredient = () => {
       this.props.onDeleteIngredient(this.props.ingredientName);
    }

    render() {
        return (
            <div className="ingredient-handler-container">
                <button onClick={this.addIngredient} >add 1 {this.props.ingredientName}</button>
                <button onClick={this.deleteIngredient} >remove 1 {this.props.ingredientName}</button>
            </div>
        );
    }
}


export default IngredientHandler;
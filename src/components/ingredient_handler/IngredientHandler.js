import React from 'react';
import Storage from './../../classes/utility/storage.js';

import './ingredient-handler.css';

class IngredientHandler extends React.Component {

    addIngredient = () => {
        this.props.onAddIngredient( new this.props.classToHandle());
    }

    deleteIngredient = () => {
       this.props.onDeleteIngredient(this.props.classToHandle);
    }

    render() {
        return (
            <div className="ingredient-handler-container">
                <button onClick={this.addIngredient} >add 1 {this.props.classToHandle.name}</button>
                <button onClick={this.deleteIngredient} >remove 1 {this.props.classToHandle.name}</button>
            </div>
        );
    }
}


export default IngredientHandler;
import React from "react";

import "./ingredient-handler.css";

class IngredientHandler extends React.Component {
  addIngredient = () => {
    this.props.onAddIngredient(this.props.ingredientName);
  };

  deleteIngredient = () => {
    this.props.onDeleteIngredient(this.props.ingredientName);
  };

  render() {
   // const { countIngredient } = this.props;
    return (
      <div className="ingredient-handler-container">
        <button onClick={this.addIngredient}>
          add 1 {this.props.ingredientName}
        </button>

        <button  style={{display: this.props.subTotal>0 ? 'block':'none'}}  onClick={this.deleteIngredient} >
          remove 1 {this.props.ingredientName}
        </button>
      </div>
    );
  }
}

export default IngredientHandler;

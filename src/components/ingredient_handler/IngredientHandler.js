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
    return (
      <div className="ingredient-handler-container">
        <div className="buttons-container">
          <button onClick={this.addIngredient} className="add-button">
            add 1 {this.props.ingredientName}
          </button>

          <button
            style={{ opacity: this.props.subTotal > 0 ? 1 : 0 }}
            onClick={this.deleteIngredient}
            className="remove-button"
          >
            remove 1 {this.props.ingredientName}
          </button>
        </div>
      </div>
    );
  }
}

export default IngredientHandler;

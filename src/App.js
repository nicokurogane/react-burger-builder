import React from "react";
import Storage from "./utility/storage";
import BurgerUI from "./components/burger_ui/BurgerUI";
import BillingUI from "./components/billing_ui/BillingUI";

import ingredientsApi from "./data/ingredients.js";

import "./App.css";

class App extends React.Component {
  state = { hamburger: [] };

  render() {
    const { hamburger } = this.state;
    return (
      <div className="App">
        <BurgerUI ingredients={hamburger} />
        <BillingUI
          ingredients={hamburger}
          reference={ingredientsApi}
          onAddIngredient={this.addIngredientToBurger}
          onDeleteIngredient={this.deleteIngredient}
        >
          <div>
            <button onClick={this.addBurgerToOrder}>Order Burger!</button>
            <button onClick={this.getLastOrderedBurger}>PreviousBurger</button>
          </div>
        </BillingUI>
      </div>
    );
  }

  addIngredientToBurger = newIngredient => {
    this.setState({
      hamburger: this.state.hamburger.concat(newIngredient)
    });
  };

  deleteIngredient = ingredientToDelete => {
    const { hamburger } = this.state;
    let indexToDelete = hamburger.findIndex(
      ingredient => ingredient === ingredientToDelete
    );

    if (indexToDelete === -1) return;

    let newArray = hamburger.filter(
      (ingredient, index) => index !== indexToDelete
    );
    this.setState({
      hamburger: newArray
    });
  };

  addBurgerToOrder = () => {
    Storage.saveBurgerToLocalStorage(this.state.hamburger);
  };

  getLastOrderedBurger = () =>{
    let array = Storage.getBurgerFromLocalStorage();
    this.setState({
      hamburger: array
    });
  }

}

export default App;

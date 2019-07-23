import React from "react";
import BurgerUI from "./components/burger_ui/BurgerUI";
import BillingUI from "./components/billing_ui/BillingUI";
import IngredientsManager from "./components/ingredients_manager/IngredientsManager";

import ingredientsApi from "./data/ingredients.js";

import "./App.css";

class App extends React.Component {
  state = { hamburger: [] };

  // componentDidMount() {
  //   let temp = Storage.getBurgerFromLocalStorage().map(object => {
  //     if (object.name === "meat") {
  //       return new Meat();
  //     } else if (object.name === "salad") {
  //       return new Salad();
  //     } else if (object.name === "cheese") {
  //       return new Cheese();
  //     }
  //   });
  //   this.setState({
  //     ingredients: temp
  //   });
  // }

  render() {
    return (
      <>
        <div className="App">
          <BurgerUI ingredients={this.state.hamburger} />
          <BillingUI ingredients={this.state.hamburger} />
        </div>
        <IngredientsManager
          ingredients={ingredientsApi}
          onAddIngredient={this.addIngredientToBurger}
          onDeleteIngredient={this.deleteIngredient}
        />
      </>
    );
  }

  addIngredientToBurger = newIngredient => {
    this.setState({
      hamburger: this.state.hamburger.concat(newIngredient)
    });
  };

  deleteIngredient = ingredientToDelete => {
    let indexToDelete = this.state.hamburger.findIndex(
      ingredient => ingredient === ingredientToDelete
    );

    if (indexToDelete === -1) return;

    let newArray = this.state.hamburger.filter(
      (ingredient, index) => index !== indexToDelete
    );
    this.setState(
      {
        hamburger: newArray
      },
      () => {
        console.log(this.state.hamburger);
      }
    );
  };
}

export default App;

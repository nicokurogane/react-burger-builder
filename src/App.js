import React from "react";
import Storage from "./classes/utility/storage.js";
import Meat from './classes/meat.js';
import Cheese from './classes/cheese.js';
import Salad from './classes/salad.js';
import BurgerUI from "./components/burgerrender/BurgerUI";
import BillingUI from "./components/billing_ui/BillingUI";
import IngredientsManager from "./components/ingredients_manager/IngredientsManager";

import "./App.css";


class App extends React.Component {
  state = { ingredients: [] };

  componentDidMount() {
    let temp = Storage.getBurgerFromLocalStorage();
    let temp2 = temp.map(object => {
      if (object.name === "meat") {
        return new Meat();
      } else if (object.name === "salad") {
        return new Salad();
      } else if (object.name === "cheese") {
        return new Cheese();
      }
    });
    this.setState({
      ingredients: temp2
    });
  }

  render() {
    return (
      <>
        <div className="App">
          <BurgerUI ingredients={this.state.ingredients} />
          <BillingUI ingredients={this.state.ingredients} />
        </div>
        <IngredientsManager
          ingredients={this.state.ingredients}
          onAddIngredient={this.addIngredientToBurger}
          onDeleteIngredient={this.deleteIngredient}
        />
      </>
    );
  }

  addIngredientToBurger = newIngredient => {
    this.setState(
      {
        ingredients: this.state.ingredients.concat(newIngredient)
      },
      () => {
        Storage.saveBurgerToLocalStorage(this.state.ingredients);
      }
    );
  };

  deleteIngredient = classToFind => {
    let indexToDelete = this.state.ingredients.findIndex(ingredient => {
      return ingredient instanceof classToFind;
    });

    if (indexToDelete === -1) return;

    let newArray = this.state.ingredients.filter(
      (ingredient, index) => index !== indexToDelete
    );
    this.setState(
      {
        ingredients: newArray
      },
      () => {
        Storage.saveBurgerToLocalStorage(this.state.ingredients);
      }
    );
  };
}

export default App;

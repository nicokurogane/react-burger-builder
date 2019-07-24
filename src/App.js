import React from "react";
import Storage from "./utility/storage";
import BurgerUI from "./components/burger_ui/BurgerUI";
import BillingUI from "./components/billing_ui/BillingUI";

import ingredientsApi from "./data/ingredients";

import "./App.css";

class App extends React.Component {
  state = { hamburger: [], shouldMessageHide: true, alertMessage: "" };

  render() {
    const { hamburger, shouldMessageHide } = this.state;
    return (
      <div className="App">
        <BurgerUI ingredients={hamburger} />
        <BillingUI
          ingredients={hamburger}
          reference={ingredientsApi}
          onAddIngredient={this.addIngredientToBurger}
          onDeleteIngredient={this.deleteIngredient}
        >
          <div className="order-buttons-container">
            <button onClick={this.addBurgerToOrder} className="take-order-button">
              Order Burger!
            </button>
            <button onClick={this.getLastOrderedBurger} className="load-order-button">
              Previous Burger
            </button>
          </div>
        </BillingUI>
        <div
          className="message-container"
          style={{ opacity: shouldMessageHide ? 0 : 1 }}
        >
          {this.state.alertMessage}
        </div>
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
    this.showMessage("Your order was taken!");
    this.setState({
      hamburger: []
    });
  };

  getLastOrderedBurger = () => {

    let array = Storage.getBurgerFromLocalStorage();
    this.setState({
      hamburger: array
    });
    this.showMessage("Loaded last taken order.");
  };

  showMessage(message) {
    this.setState({
      shouldMessageHide: false,
      alertMessage: message
    });

    setTimeout(() => {
      this.setState({
        shouldMessageHide: true
      });
    }, 4000);
  }
}

export default App;

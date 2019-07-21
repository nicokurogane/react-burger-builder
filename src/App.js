import React from 'react';
import Meat from './classes/meat.js';
import Salad from './classes/salad.js';
import Cheese from './classes/cheese.js'

import BurgerUI from './components/burgerrender/BurgerUI';
import BillingUI from './components/billing_ui/BillingUI';
import IngredientsManager from './components/ingredients_manager/IngredientsManager';

import './App.css';

//esto se ira al state
//const ingredients = [new Meat(), new Cheese(), new Salad(), new Meat(), new Cheese(), new Salad()];

class App extends React.Component {

  state = { ingredients: [] }

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
    this.setState({
      ingredients: this.state.ingredients.concat(newIngredient)
    });
  }

  deleteIngredient = classToFind =>{
    let indexToDelete = this.state.ingredients.findIndex(ingredient =>{
       return ingredient instanceof classToFind;
    });

    if(indexToDelete === -1) return;

    let newArray = this.state.ingredients.filter((ingredient, index) => index !== indexToDelete );
    this.setState({
      ingredients: [...newArray]
    });

  }

}

export default App;

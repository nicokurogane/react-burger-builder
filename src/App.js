import React from 'react';
import Meat from './classes/meat.js';
import Salad from './classes/salad.js';
import Cheese from './classes/cheese.js'

import BurgerUI from './components/burgerrender/BurgerUI';
import  BillingUI from './components/billing_ui/BillingUI';

import './App.css';

//esto se ira al state
const ingredients = [new Meat(), new Salad(), new Cheese()];

function App() {
  return (
    <div className="App">
      <BurgerUI ingredients={ingredients} />
      <BillingUI ingredients={ingredients}/>
    </div>
  );

}

/*
const printIngredientType = () => {
  ingredients.forEach(ingredient =>{
    console.log( ingredient.constructor.name);
  });
} 
*/
export default App;

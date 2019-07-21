import React from 'react';
import Meat from './classes/meat.js';
import Salad from './classes/salad.js';
import Cheese from './classes/cheese.js'

import BurgerUI from './components/burgerrender/BurgerUI';
import  BillingUI from './components/billing_ui/BillingUI';

import './App.css';

//esto se ira al state
const ingredients = [new Meat(),  new Cheese(), new Salad(), new Meat(),  new Cheese(), new Salad() ];

function App() {
  return (
    <div className="App">
      <BurgerUI ingredients={ingredients} />
      <BillingUI ingredients={ingredients}/>
    </div>
  );

}

export default App;

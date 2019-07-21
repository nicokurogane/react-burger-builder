import React from 'react';
import Meat from './../../classes/meat.js';
import Cheese from './../../classes/cheese.js';
import Salad from './../../classes/salad.js';
import BillingSubTotal from './../billing_subtotal/BillingSubTotal';
import './billing-ui.css';

class BillingUI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 1,
            meatQuantity: 0,
            meatSubTotal: 0,
            cheeseQuantity: 0,
            cheeseSubTotal: 0,
            saladSubTotal: 0,
            saladQuantity: 0
        }
    }

    //FORCING A RE-RENDER
    //https://www.freecodecamp.org/news/force-refreshing-a-react-child-component-the-easy-way-6cdbb9e6d99c/
    componentWillReceiveProps(props) {
        const { ingredients } = this.props;
        if( props.ingredients.length !== ingredients.length){
            this.updatePrices( props.ingredients);
        }
    }

    updatePrices = (ingredients) => {
        this.setState({
            total: this.getTotal(ingredients)
        });
        this.getSubTotalPerIngredient(ingredients);
    }

    getTotal(arrayToReduce) {
        let total = arrayToReduce.reduce((acc, currentIngredient) => acc + currentIngredient.price, 0);
        total += 1;
        return total;
    }

    getSubTotalPerIngredient(ingredientsArray) {
        let meatTotal = 0;
        let meatQuantity = 0;
        let cheeseTotal = 0;
        let cheeseQuantity = 0;
        let saladTotal = 0;
        let saladQuantity = 0;

        ingredientsArray.forEach(currentIngredient => {
            if (currentIngredient instanceof Meat) {
                meatTotal += currentIngredient.price;
                meatQuantity++;
            } else if (currentIngredient instanceof Cheese) {
                cheeseTotal += currentIngredient.price;
                cheeseQuantity++;
            } else if (currentIngredient instanceof Salad) {
                saladTotal += currentIngredient.price;
                saladQuantity++;
            }
        });

        this.setState({
            meatSubTotal: meatTotal,
            meatQuantity: meatQuantity,
            cheeseSubTotal: cheeseTotal,
            cheeseQuantity: cheeseQuantity,
            saladSubTotal: saladTotal,
            saladQuantity: saladQuantity,
        });
    }

    render() {
        return (
            <div className="billing-ui-container" >
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Units</th>
                            <th>Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <BillingSubTotal
                            ingredientName={"Meat"}
                            quantity={this.state.meatQuantity}
                            subTotal={this.state.meatSubTotal}
                        />
                        <BillingSubTotal
                            ingredientName={"Cheese"}
                            quantity={this.state.cheeseQuantity}
                            subTotal={this.state.cheeseSubTotal}
                        />
                        <BillingSubTotal
                            ingredientName={"Salad"}
                            quantity={this.state.saladQuantity}
                            subTotal={this.state.saladSubTotal}
                        />
                    </tbody>
                </table>

                <span className="bill-total">{`Total: ${this.state.total}`}</span>
            </div>
        );
    }


}

export default BillingUI;
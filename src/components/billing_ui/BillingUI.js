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
            total: null,
            meatQuantity: null,
            meatSubTotal: null,
            cheeseQuantity: null,
            cheeseSubTotal: null,
            saladSubTotal: null,
            saladQuantity: null
        }
    }

    componentDidMount() {
        const { ingredients } = this.props;
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
            <div className="billing-ui-container">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Units</th>
                        <th>Sub Total</th>
                    </tr>
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
                </table>

                <span className="bill-total">{`Total: ${this.state.total}`}</span>
            </div>
        );
    }


}

export default BillingUI;
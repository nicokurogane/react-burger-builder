import React from "react";
import CurrencyConversor from "../../utility/currencyconversor.js";
import IngredientHandler from "./../ingredient_handler/IngredientHandler";
import BillingSubTotal from "./../billing_subtotal/BillingSubTotal";
import "./billing-ui.css";

class BillingUI extends React.Component {
  constructor(props) {
    super(props);
    let pricesMap = new Map();
    this.props.reference.forEach(priceObject => {
      pricesMap.set(priceObject.name, priceObject.price);
    });

    this.state = {
      total: 1,
      meatQuantity: 0,
      meatSubTotal: 0,
      cheeseQuantity: 0,
      cheeseSubTotal: 0,
      saladSubTotal: 0,
      saladQuantity: 0,
      prices: pricesMap
    };
  }

  updatePrices = ingredients => {
    this.setState({
      total: this.getTotal(ingredients)
    });
    this.getSubTotalPerIngredient(ingredients);
  };

  getTotal(arrayToReduce) {
    let total = arrayToReduce.reduce(
      (acc, currentIngredient) =>
        acc + this.state.prices.get(currentIngredient),
      0
    );
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
    //refactor this after UI
    ingredientsArray.forEach(currentIngredient => {
      const { prices } = this.state;
      switch (currentIngredient) {
        case "meat":
          meatTotal += prices.get(currentIngredient);
          meatQuantity++;
          break;
        case "salad":
          saladTotal += prices.get(currentIngredient);
          saladQuantity++;
          break;
        case "cheese":
          cheeseTotal += prices.get(currentIngredient);
          cheeseQuantity++;
          break;
        default:
          break;
      }
    });

    this.setState({
      meatSubTotal: meatTotal,
      meatQuantity: meatQuantity,
      cheeseSubTotal: cheeseTotal,
      cheeseQuantity: cheeseQuantity,
      saladSubTotal: saladTotal,
      saladQuantity: saladQuantity
    });
  }

  render() {
    const {
      meatQuantity,
      meatSubTotal,
      cheeseQuantity,
      cheeseSubTotal,
      saladSubTotal,
      saladQuantity,
      total
    } = this.state;

    const { onAddIngredient, onDeleteIngredient } = this.props;

    return (
      <div className="billing-ui-container">
        <div>
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
                quantity={meatQuantity}
                subTotal={meatSubTotal}
              />
              <BillingSubTotal
                ingredientName={"Cheese"}
                quantity={cheeseQuantity}
                subTotal={cheeseSubTotal}
              />
              <BillingSubTotal
                ingredientName={"Salad"}
                quantity={saladQuantity}
                subTotal={saladSubTotal}
              />
            </tbody>
          </table>
          <span className="bill-total">{`Total: ${total}`}</span>{" "}
          <div>
            <select onChange={event => this.changePricesCurrency(event)}>
              {CurrencyConversor.getCurrencies().map(currency => {
                return (
                  <option value={currency} key={currency}>
                    {currency}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div>
          <IngredientHandler
            ingredientName={"meat"}
            onAddIngredient={onAddIngredient}
            onDeleteIngredient={onDeleteIngredient}
            subTotal={meatSubTotal}
          />
          <IngredientHandler
            ingredientName={"cheese"}
            onAddIngredient={onAddIngredient}
            onDeleteIngredient={onDeleteIngredient}
            subTotal={cheeseSubTotal}
          />
          <IngredientHandler
            ingredientName={"salad"}
            onAddIngredient={onAddIngredient}
            onDeleteIngredient={onDeleteIngredient}
            subTotal={saladSubTotal}
          />
        </div>
        <div className="props-children">{this.props.children}</div>
      </div>
    );
  }

  changePricesCurrency = e => {
    let tempPrices = this.state.prices;
    for (let key of tempPrices.keys()) {
      if (e.target.value === "USD") {
        tempPrices.set(
          key,
          CurrencyConversor.euroToDollar(tempPrices.get(key))
        );
      } else if (e.target.value === "EUR") {
        tempPrices.set(
          key,
          CurrencyConversor.dollarToEuro(tempPrices.get(key))
        );
      }
    }

    this.setState({
      prices: tempPrices
    },()=>{
      this.updatePrices(this.props.ingredients);
    });
  }

  componentDidUpdate(prevProps) {
    const { ingredients } = this.props;

    if (prevProps.ingredients.length !== ingredients.length) {
      this.updatePrices(ingredients);
    }
  }
}

export default BillingUI;

import React from "react";
import CurrencyConversor from "./../../utility/currencyconversor.js";

import "./billing-subtotal.css";

const BillingSubTotal = props => {
  const { ingredientName, quantity, subTotal, currency } = props;
  return (
    <tr>
      <td>{ingredientName}</td>
      <td>{quantity}</td>
      <td>{CurrencyConversor.formatNumberCurrency(currency, subTotal)}</td>
    </tr>
  );
};

export default BillingSubTotal;

import React from 'react';

const BillingSubTotal = (props) => {
    const {ingredientName, quantity, subTotal} = props;
    return ( 
        <tr>
            <td>{ingredientName}</td>
            <td>{quantity}</td>
            <td>{subTotal}</td>
        </tr>
     );
}
 
export default BillingSubTotal;
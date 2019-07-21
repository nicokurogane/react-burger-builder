import React from 'react';

class BillingUI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: null
        }
    }

    componentDidMount() {
        const { ingredients } = this.props;
        this.setState({
            total: this.getTotal(ingredients)
        });
    }

    getTotal(arrayToReduce) {
        return arrayToReduce.reduce((acc, currentIngredient) => acc + currentIngredient.price, 0);
    }

    render() {
        return (
            <div className="billing-ui-container">
                <span className="bill-total">{this.state.total}</span>
            </div>
        );
    }


}

export default BillingUI;
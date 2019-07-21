import React from 'react';

class IngredientHandler extends React.Component {

    addIngredient = () => {
    //    console.log( new this.props.classToHandle());
        this.props.onAddIngredient( new this.props.classToHandle());
    }

    deleteIngredient = () => {
        console.log("no alo!");
    }

    render() {
        return (
            <div>
                <button onClick={this.addIngredient} >add 1 Meat</button>
                <button onClick={this.deleteIngredient} >remove 1 meat</button>
            </div>
        );
    }
}


export default IngredientHandler;
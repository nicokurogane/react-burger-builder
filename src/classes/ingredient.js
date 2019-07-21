class Ingredient {
    constructor(name, price,cssClass){

        /*if(this.constructor === Ingredient){
            throw new TypeError('Abstract class "Ingredient" cannot be instantiated directly.');
        }*/

        this.name = name;
        this.price = price;
        this.cssClass= cssClass;
    }

}

export default Ingredient;
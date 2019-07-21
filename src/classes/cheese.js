import Ingredient from './ingredient.js';

class Cheese extends Ingredient{
    constructor(){
        super('cheese',0.50,'cheese-ingredient')
    }
}

export default Cheese;
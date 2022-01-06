export default class Datastore {

    constructor() {
        this.datastore = { 
            recipes: {
                "Spaghetti and Meatballs": {
                    ingredients: ["Spaghetti", "Meatballs", "Tomato Sauce", "Parmesan Cheese"],
                    steps: ["Step1", "Step 2", "Step3"]
                }
            },
            steps: ["Preheat oven to 400F", "Chop asparagus and add to bowl", "Add olive oil to bowl"]
        };
        this.ingredients = [];
    }

    // cache ingredients from db
    setIngredients(ingredients) {
        this.ingredients = ingredients;
    }

    // get cached ingredients
    getIngredients() {
        return this.ingredients;
    }

    // recipeName = string
    // ingredients = Ingredient[]
    // steps = string[]
    addRecipe(recipeName, ingredientsList, stepsList) {
        this.datastore.recipes[recipeName] = { ingredients: ingredientsList, steps: stepsList }
    }

    getRecipe(recipeName) {
        return this.datastore.recipes[recipeName];
    }

    getAllRecipes() {
        return this.datastore.recipes;
    }

    addIngredient(v) {
        this.datastore.ingredients = [...this.datastore.ingredients, v];
        this.print();
    }

    read(k) {
        return this.datastore[k];
    }

    readAll() {
        return this.datastore;
    }

    clearAllIngredients() {
        this.datastore = { ingredients: [] };
    }

    print() {
        console.log(this.datastore);
    }

}
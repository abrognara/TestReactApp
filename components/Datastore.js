export default class Datastore {

    constructor() {
        this.datastore = { ingredients: ["Olive Oil", "Minced Garlic", "Salt", "Pepper"] };
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
import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 4),
    new Ingredient('Onions', 2)
  ];

  // addIngredient = new EventEmitter<Ingredient>();

  getShoppingList() {
    return this.ingredients.slice();
    // Returns a copy
    // Thus, a new added ingredient gets added to the original array, and not to the copy.
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
    // To add the new data and send the copy of the new data
  }

  // We want to add multiple ingredients from the recipe list
  // Created a new method for the same
  addIngredients(ingredients: Ingredient[]) {
  // Downside is that we emit a lot of events, and an addition of even 30 recipes can blow the app
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    // Better option is to add all ingredients in one go and then emit our event.
    // ES6 operator - spread operator,
    // It allows us to turn an arrow of elements -> list of elements
    // The ... seperates all the ingredients into list of single ingredients
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }

}

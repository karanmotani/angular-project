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

}

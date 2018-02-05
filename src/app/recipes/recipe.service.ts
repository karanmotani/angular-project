import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Description 1',
      'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fspaghetti-meatballs-tomato-basil-sauce-ck.jpg%3Fitok%3DV5A6yYNW&w=700&q=85',
      [
        new Ingredient('Tomatoes', 4),
        new Ingredient('Onions', 2)
      ]),
    new Recipe(
      'Test Recipe 2',
      'Description 2',
      'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fspaghetti-meatballs-tomato-basil-sauce-ck.jpg%3Fitok%3DV5A6yYNW&w=700&q=85',
      [
        new Ingredient('Potatoes', 4),
        new Ingredient('Chillies', 3)
      ])
  ]

  getRecipes() {
    // Slice - To return a copy of the array instead of the original one
    return this.recipes.slice();
  }
}

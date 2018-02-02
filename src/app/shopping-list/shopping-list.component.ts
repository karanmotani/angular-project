import { Component, OnInit, ContentChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 4),
    new Ingredient('Onions', 2)
  ];

  constructor() { }

  ngOnInit() {
  }

  getAddedIngredient(addedIngredient) {
    // this.ingredients.push(new Ingredient(addedIngredient.name, addedIngredient.quantity))
    this.ingredients.push(addedIngredient)
  }

}

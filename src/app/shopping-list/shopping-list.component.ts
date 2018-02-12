import { Component, OnInit, ContentChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList();

    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (changedIngredients: Ingredient[]) => {
          this.ingredients = changedIngredients;
        }
      )

    // this.shoppingListService.addIngredient
    //   .subscribe(
    //     (addedIngredient: Ingredient) => {
    //       this.ingredients.push(addedIngredient)
    //     }
    //   )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // getAddedIngredient(addedIngredient) {
  //   this.ingredients.push(new Ingredient(addedIngredient.name, addedIngredient.quantity))
  //   this.ingredients.push(addedIngredient)
  // }

}

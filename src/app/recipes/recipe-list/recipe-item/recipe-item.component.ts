import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // Create a property which we want to bind
  // It should have the same name which we are using in the template to render the data
  // It should have the same type as of the data we are rendering in the template
  @Input() recipe: Recipe;
  // Sends no information, argument set to void
  // @Output() recipeSelected = new EventEmitter<void>();



  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}

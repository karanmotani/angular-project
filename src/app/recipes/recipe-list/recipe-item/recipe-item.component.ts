import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // Create a property which we want to bind
  // It should have the same name which we are using in the template to render the data
  // It should have the same type as of the daat we are rendering in the template
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}

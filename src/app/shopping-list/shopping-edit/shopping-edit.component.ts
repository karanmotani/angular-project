import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName: string = this.nameInput.nativeElement.value;
    const ingAmt: number = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmt)
    // this.ingredientAdded.emit(ingObject);
    // this.shoppingListService.addIngredient.emit(ingObject);
    this.shoppingListService.addIngredient(newIngredient);
  }

}

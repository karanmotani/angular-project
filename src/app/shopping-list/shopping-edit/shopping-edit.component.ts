import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName: string = this.nameInput.nativeElement.value;
    const ingAmt: number = this.amountInput.nativeElement.value;
    const ingObject = new Ingredient(ingName, ingAmt)
    this.ingredientAdded.emit(ingObject);
  }

}

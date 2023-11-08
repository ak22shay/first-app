import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Butter chicken',
      'Indian dish',
      'https://masalaandchai.com/wp-content/uploads/2022/03/Butter-Chicken.jpg'
    ),
    new Recipe(
      'Biriyani',
      'Indian rice dish',
      'https://healux.in/wp-content/uploads/2020/11/ChickenBiryani.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  constructor() {}
  ngOnInit(): void {}
}

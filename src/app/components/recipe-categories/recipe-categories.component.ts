import { Component, OnInit } from '@angular/core';
import { IRecipeCategory } from './recipeCateogry';

@Component({
  selector: 'cb-recipe-categories',
  templateUrl: './recipe-categories.component.html',
  styleUrls: ['./recipe-categories.component.css']
})
export class RecipeCategoriesComponent implements OnInit {
  listTitle: string = "Recipes by categories";

  _categoryFilter: string;
  get categoryFilter(): string{
    return this._categoryFilter
  }
  set categoryFilter(value: string) {
    this._categoryFilter = value;
    this.filteredCategories = this.categoryFilter ? this.performFilter(this.categoryFilter) : this.categories;
  }

  filteredCategories: IRecipeCategory[];

  categories: IRecipeCategory[] = [
    {
      "categoryId": 8,
      "categoryName": "Appetizers",
      "description": "Before.",
      "thumbnail": "./assets/appetizers_thumbnail.jpg"
    },
    {
      "categoryId": 3,
      "categoryName": "Beef",
      "description": "Meuuuhhhh.",
      "thumbnail": "./assets/beef_thumbnail.jpg"
    },
    {
      "categoryId": 1,
      "categoryName": "Breakfast",
      "description": "What you eat in the morning.",
      "thumbnail": "./assets/breakfast_thumbnail.jpg"
    },
    {
      "categoryId": 7,
      "categoryName": "Pasta",
      "description": "OOO 'SOLE MIOO",
      "thumbnail": "./assets/pasta_thumbnail.jpg"
    },
    {
      "categoryId": 5,
      "categoryName": "Pork",
      "description": "Pork.",
      "thumbnail": "./assets/pork_thumbnail.jpg"
    },
    {
      "categoryId": 4,
      "categoryName": "Poultry",
      "description": "Winner winner chicken dinner.",
      "thumbnail": "./assets/poultry_thumbnail.jpg"
    },
    {
      "categoryId": 6,
      "categoryName": "Seafood",
      "description": "FISHIES.",
      "thumbnail": "./assets/seafood_thumbnail.jpeg"
    },
    {
      "categoryId": 2,
      "categoryName": "Soups",
      "description": "The most conforting meal.",
      "thumbnail": "./assets/soup_thumbnail.jpeg"
    },
    {
      "categoryId": 2,
      "categoryName": "Soups",
      "description": "The most conforting meal.",
      "thumbnail": "./assets/soup_thumbnail.jpeg"
    },
    {
      "categoryId": 2,
      "categoryName": "Soups",
      "description": "The most conforting meal.",
      "thumbnail": "./assets/soup_thumbnail.jpeg"
    },
    {
      "categoryId": 2,
      "categoryName": "Soups",
      "description": "The most conforting meal.",
      "thumbnail": "./assets/soup_thumbnail.jpeg"
    },
    {
      "categoryId": 2,
      "categoryName": "Soups",
      "description": "The most conforting meal.",
      "thumbnail": "./assets/soup_thumbnail.jpeg"
    },
  ];

  constructor() { 
    this.categoryFilter = "";
    this.filteredCategories = this.categories;
  }

  performFilter(nameFilter: string): IRecipeCategory[] {
    nameFilter = nameFilter.toLocaleLowerCase();
    return this.categories.filter((category: IRecipeCategory) => 
      category.categoryName.toLocaleLowerCase().indexOf(nameFilter) !== -1);
  }

  ngOnInit() {
  }

}

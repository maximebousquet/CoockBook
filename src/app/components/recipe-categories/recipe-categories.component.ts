import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cb-recipe-categories',
  templateUrl: './recipe-categories.component.html',
  styleUrls: ['./recipe-categories.component.css']
})
export class RecipeCategoriesComponent implements OnInit {

  listTitle: string = "Recipes by categories";
  categories: any[] = [
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
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import{ Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe= new Recipe('Dummy', 'Dymmy','http://images.media-allrecipes.com/userphotos/250x250/00/01/81/18101.jpg' )

  constructor() { }

  ngOnInit() {
  }

}
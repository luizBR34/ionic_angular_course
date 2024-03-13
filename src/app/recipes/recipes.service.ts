import { Injectable } from '@angular/core';
import { Recipe, RecipeImpl } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Feijoada',
      imageUrl:
        'https://cdn6.campograndenews.com.br/uploads/noticias/2021/04/30/fa4540b7c730c25c6fcbf7e353f56928b32bf513.jpg',
      ingredients: ['Beans', 'Onion rings', 'Salt'],
    },
    {
      id: 'r2',
      title: 'Tapioca',
      imageUrl:
        'https://www.comidaereceitas.com.br/wp-content/uploads/2007/11/tapioca.jpg',
      ingredients: ['Tapioca', 'Cheese', 'Butter'],
    },
    {
      id: 'r3',
      title: 'Pizza',
      imageUrl:
        'https://saldeflor.com.br/wp-content/uploads/2020/10/CAPABLOG-2-1-1024x640.jpg',
      ingredients: ['Onion Rings', 'Cheese', 'Bacon', 'Egg'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    //Pega todos os elementos do array recipes e adiciona num novo array
    // que é retornado. Ou seja, é feita uma copia.
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }
}

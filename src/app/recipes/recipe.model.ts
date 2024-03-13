export interface Recipe {
  id: string;
  title: string;
  imageUrl: string;
  ingredients: string[];
}

export class RecipeImpl implements Recipe {
  id: string;
  title: string;
  imageUrl: string;
  ingredients: string[];

  constructor() {
    this.id = '';
    this.title = '';
    this.imageUrl = '';
    this.ingredients = [];
  }
}

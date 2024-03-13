import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { RecipeImpl } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: RecipeImpl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.loadedRecipe = new RecipeImpl();
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.has('recipeId')) {
        const recipeId = paramMap.get('recipeId');
        if (recipeId !== null) {
          this.loadedRecipe.id =
            this.recipesService.getRecipe(recipeId).id ?? '';
          this.loadedRecipe.title =
            this.recipesService.getRecipe(recipeId).title ?? '';
          this.loadedRecipe.imageUrl =
            this.recipesService.getRecipe(recipeId).imageUrl ?? '';
          this.loadedRecipe.ingredients =
            this.recipesService.getRecipe(recipeId).ingredients ?? [];
        }
      }
      return;
    });
  }

  onDeleteRecipe() {
    this.alertCtrl
      .create({
        header: 'Are you sure?',
        message: 'Do you really want to delete the recipe?',
        buttons: [
          { text: 'Cancel', role: 'cancel' },
          {
            text: 'Delete',
            handler: () => {
              this.recipesService.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(['/recipes']);
            },
          },
        ],
      })
      .then((alertEl) => alertEl.present());
  }
}

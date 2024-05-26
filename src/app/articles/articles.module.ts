import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';

@NgModule({
  declarations: [
    ArticleDetailsComponent,
    ArticleListComponent,
    CategoriesComponent,
    FeaturedArticlesComponent,
    LatestArticlesComponent,
  ],
  imports: [CommonModule],
  exports: [LatestArticlesComponent],
})
export class ArticlesModule {}

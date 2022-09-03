import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { IonicModule } from '@ionic/angular';
import { ArticleComponent } from './article/article.component';



@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    ArticlesComponent
  ]
})
export class ComponentsModule { }

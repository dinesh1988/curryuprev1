import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ReadmePageComponent } from './ui/readme-page/readme-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { FaqComponent } from './faq/faq.component';
import { ProcessComponent } from './process/process.component';
import { ProductsComponent } from './products/products.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NewsComponent } from './news/news.component';
import { StorelocatorComponent } from './storelocator/storelocator.component';
import { AuthGuard } from './core/auth.guard';
import { CoreModule } from './core/core.module';
import { Recipe1Component} from './currycontent/recipe1/recipe1.component';
import { Recipe2Component} from './currycontent/recipe2/recipe2.component';
import { Recipe3Component} from './currycontent/recipe3/recipe3.component';
import { Recipe4Component} from './currycontent/recipe4/recipe4.component';

const routes: Routes = [
  { path: '', component: ReadmePageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'news', component: NewsComponent },
  { path: 'storelocator', component: StorelocatorComponent },
  { path: 'items', component: ItemsListComponent, canActivate: [AuthGuard] },
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  { path: 'recipe1', component: Recipe1Component },
 { path: 'recipe2', component: Recipe2Component },
 { path: 'recipe3', component: Recipe3Component },
     { path: 'recipe4', component: Recipe4Component },
  // uploads are lazy loaded
  { path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }

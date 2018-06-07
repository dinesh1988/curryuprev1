import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

///// Start FireStarter
//van-material

// Core
import { CoreModule } from './core/core.module';

// Shared/Widget
import { SharedModule } from './shared/shared.module'

// Feature Modules
import { AboutusModule } from './aboutus/aboutus.module';
import { ContactusModule } from './contactus/contactus.module';
import { NewsModule } from'./news/news.module';
import { StorelocatorModule } from './storelocator/storelocator.module';
import {FaqModule } from './faq/faq.module';
import { ProcessModule } from './process/process.module';
import { ItemModule } from './items/shared/item.module';
import { UploadModule } from './uploads/shared/upload.module';
import { UiModule } from './ui/shared/ui.module';
import { NotesModule } from './notes/notes.module'








import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { ProcessDetailComponent } from './ui/process-detail/process-detail.component';

import { RecipeModule} from './currycontent/recipe.module';
import { ProductsModule } from './products/products.module';
import { RecipesModule } from './recipes/recipes.module';









@NgModule({
  declarations: [
    AppComponent,
    ProcessDetailComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
   ContactusModule,
      NewsModule,
    StorelocatorModule,
    FaqModule,
    ProcessModule,
    CoreModule,
    SharedModule,
     AboutusModule,
    ItemModule,
    RecipeModule,
    ProductsModule,
    RecipesModule,
    UiModule,
    NotesModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

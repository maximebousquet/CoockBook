import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeCategoriesComponent } from './components/recipe-categories/recipe-categories.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeCategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

// Angular needs to know how the pieces of your app fit together and what other files and libraries the application requires. This info is called metadata
// some of the meta data is in the @component decorates that has been added to my component classes
// Other critical metadata is in @NgModule decorators.
// AppModule declares both app components, AppCompoennt and HeroesComponent.
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

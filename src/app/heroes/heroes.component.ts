import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";
@Component({
  selector: 'app-heroes', // CSS element selector
  templateUrl: './heroes.component.html', // location of the component's template file
  styleUrls: ['./heroes.component.css'] // the location of the component's private CSS styles
})
// ngOnInit is a lifecycle hook, angular call onInit shortly after creating a component.
// always export the component class so you can import it elsewhere .. like in the AppModule
export class HeroesComponent implements OnInit {

  // selectedHero: Hero =  {
  //   // the page no longer displays properly because you changed the hero from a string to an object
  //   id: 1,
  //   name:'Windstorm',
  // }
  heroes = HEROES;
  selectedHero?: Hero;  // now the app is broken, what happend exactly?
  // when the app start, the selectedHero is undefined by design
  // binding expression in the template that refer to properties of selectedHero must fail because there is no selected hero
  // solve it by using ngIf in heroes component 
 
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 
}

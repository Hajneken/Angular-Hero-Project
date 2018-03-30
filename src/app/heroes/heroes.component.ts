import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 selectedHero: Hero; // no selected hero when starting the app

 onSelect(hero: Hero): void {
   this.selectedHero = hero;
 }

 heroes: Hero[];

// this  would only because of its synchronous nature, returning mock heroes
//  getHeroes(): void {
//   this.heroes = this.heroService.getHeroes();
// }

// the following works asynchronously
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}

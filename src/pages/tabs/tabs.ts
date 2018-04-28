import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FavoritesPage} from "../favorites/favorites.ts";
import {LibraryPage} from "../library/library.ts";
@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs>
    <ion-tab [root]="favoritesPage" tabTitles="Favorites" tabIcon="star"></ion-tab>
    <ion-tab [root]="libraryPage" tabTitles="Library" tabIcon="book"></ion-tab>
  </ion-tabs>
    `,
})
export class TabsPage {
  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;
}

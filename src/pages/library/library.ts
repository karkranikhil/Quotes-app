import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from "../../data/quote.interface.ts"
import quotes from "../../data/quotes.ts"
@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  quoteCollection:{category:string, quotes:Quote[], icon:string}[];
  ngOnInit() {
    console.log(quotes)
    this.quoteCollection = quotes.data
  }

}

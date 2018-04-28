import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from "../../data/quote.interface.ts"
import quotes from "../../data/quotes.ts"
import {QuotesPage} from "../quotes/quotes";
@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  quoteCollection:{category:string, quotes:Quote[], icon:string}[];
  quotesPage=QuotesPage

  ngOnInit() {
    console.log(quotes)
    this.quoteCollection = quotes.data
  }


}

import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams, AlertController} from 'ionic-angular';
import {Quote} from '../../data/quote.interface.ts'
@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup:{category:string, quotes:Quote[], icon:string}
  constructor(
      public navParams: NavParams,
      private alertCtrl:AlertController
  ) {}
  // ionViewDidLoad(){
  //   this.quoteGroup = this.navParams.data;
  // }
  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }
  onAddToFavorite(selectedQuote: Quote){
   const alert = this.alertCtrl.create({
     title:'Add Quote',
     subtitle:'Are you sure?',
     message:'Are you sure you want to add the quote?',
     buttons:[
       {
         text:'Yes, go ahead',
         handler:()=>{
           console.log('ok')
         }
       },
       {
         text:'No, I changed my mind!',
         role:'cancel',
         handler:()=>{
           console.log('cancelled!')
         }
       }
     ]
   });

    alert.present();
  }
}

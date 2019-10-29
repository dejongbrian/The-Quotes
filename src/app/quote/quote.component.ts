import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Quotes';
  // quote = [];
  quote:Quote[] =[
    new Quote(1,'On a mission your worst enemy is idle time.', 'Nipsey Hussle', new Date(2007,7,13),0,0),
    new Quote(2,'He who laughs last,didnt get the joke','Dejong Brian', new Date(2016,7,7),0,0),
    new Quote(3,'Only I can change my life.','Dejong Brian',new Date(2020,1,12),0,0),
    new Quote(4,'The loudest one in the room is the weakest one in the room', 'Frank Lucas',new Date(1991,7,13),0,0),
    new Quote(5,'I am anything I need to be at any time', 'Frank Lucas',new Date(1990,10,10),0,0),
  ];

  toggleDetails(index){
    this.quote[index].showQuote = !this.quote[index].showQuote;
    // this.completeDate.showDate  = !this.completeDate[index].showDate;
  }
  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`You are about to delete. ${this.quote[index].name}.Press OK if your sure, cancel if your not`);
    
    if (toDelete) {
      this.quote.splice(index,1);
    }
  }
}
  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quote.push(quote);
  }

  voteBest(isupVote,index){
    if (isupVote){
      this.quote[index].upVote++
    }
  }
  voteWorst(isdownVote,index){
    if (isdownVote){
      this.quote[index].downVote++
    }
  }
 
 
  constructor() { }

  ngOnInit() {
  }

}

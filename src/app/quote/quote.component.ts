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
    new Quote(1,'On a mission your worst enemy is idle time.', 'Nipsey Hussle'),
    new Quote(2,'He who laughs last,didnt get the joke','Dejong Brian'),
    new Quote(3,'Only I can change my life.','Dejong Brian'),
    new Quote(4,'The loudest one in the room is the weakest one in the room', 'Frank Lucas'),
    new Quote(5,'I am anything I need to be at any time', 'Frank Lucas'),
  ];

  toggleDetails(index){
    this.quote[index].showQuote = !this.quote[index].showQuote;
  }
  completeGoal(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

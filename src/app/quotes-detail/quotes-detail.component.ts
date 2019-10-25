import { Component, OnInit,Input } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  title = 'Quotes';
  // quote = [];
  quote:Quote =[
    {id:1,name:'On a mission your worst enemy is idle time.', author:'Nipsey Hussle'},
    {id:2,name:'He who laughs last,didnt get the joke', author:'Dejong Brian'},
    {id:3,name:'Only I can change my life.',author:'Dejong Brian'},
    {id:4,name:'The loudest one in the room is the weakest one in the room', author:'Frank Lucas'},
    {id:5,name:'I am anything I need to be at any time', author:'Frank Lucas'}
  ]

  @Input() quote:Quote;
  constructor() { }

  ngOnInit() {
  }

}

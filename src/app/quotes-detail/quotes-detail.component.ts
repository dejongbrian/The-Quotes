import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() isupVote = new EventEmitter<boolean>();
  @Output() isdownVote = new EventEmitter<boolean>();

  quoteDone(complete: boolean) {
    this.isComplete.emit(complete);
  }

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  upVote(like: boolean) {
    this.isupVote.emit(like);
  }
  downVote(nolike: boolean) {
    this.isdownVote.emit(nolike);
  }
  constructor() { }


  ngOnInit() {
  }

}

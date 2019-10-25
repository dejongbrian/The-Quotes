import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quote = [];


  constructor(){
    this.quote =['On a mission your worst enemy is idle time.  Nipsey Hussle','Only I can change my life. Dejongbrian'
  ]
  }
  }

export class Quote {
  showQuote: boolean;
  constructor(public id:number,public name:string,public author:string, public completeDate: Date){
    this.showQuote=false;
 
 }
}
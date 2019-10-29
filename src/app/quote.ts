export class Quote {
  showQuote: boolean;
  constructor(public id:number,public name:string,public author:string, public completeDate: Date, public upVote:number=0, public downVote:number=0){
    this.showQuote=false;
 
 }
}
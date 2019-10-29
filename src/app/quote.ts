export class Quote {

  showQuote: boolean;

  constructor( public id:number, public name:string, public quote: string, public author: string, public completeDate:Date, public upVote: number,
  public downVote: number)

   {
    this.showQuote = false;

  }
}

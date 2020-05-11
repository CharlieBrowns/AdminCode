import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  
  @Output('pageSelected') playPage: EventEmitter<number> = new EventEmitter();


  selected: number = 1;

  numberOfItems: number = null;
  numberOfPages: number = null;
  pages: Array<number> = [];
  constructor() { 
    this.numberOfItems = 36;
    this.numberOfPages = this.numberOfItems/9;
    this.addPages(this.numberOfPages);

  }

  ngOnInit() {
  }
  addPages(numberOfPages: number) {
    for( var i = 0; i < numberOfPages; i++ ) {
      this.pages.push(i+1);
    }
  }
  changePage(page: number) {
    this.selected = page;
    this.playPage.emit(this.selected);
  }

}

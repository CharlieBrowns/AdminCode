import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggle: Boolean = false;

  @Output('sidebarToggle') playSidebarToggle: EventEmitter<Boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  playToggle() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
    this.playSidebarToggle.emit(this.toggle);
  }

}

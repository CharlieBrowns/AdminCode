import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  progreso1: Boolean;
  constructor(private userService : UserService) { }

  ngOnInit() {
    console.log("los items")
    this.getUser();
  }

  getUser() {
    const user = this.userService.getUserData()
    console.log("Mi usuario : " , user)
  }



}

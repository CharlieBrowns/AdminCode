import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  valor: Boolean = false;
  @Input() progreso: Boolean = false;

  constructor(
    public _userService: UserService
  ) { }

  ngOnInit() {
  }
  side(){
    console.log("asdasd");
    this.valor = !this.valor;
  }

}

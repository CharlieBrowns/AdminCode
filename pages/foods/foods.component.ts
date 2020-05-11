import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../../services/service.index';
import { Food } from '../../models/food.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  // modal
  modal: Boolean = true;

  // platillo seleccionado
  selected: number = null;

  // platillos
  foods: Array<any> = [];
  food: Food;

  // página seleccionada
  page: number = null;

  // button
  activatedButtons: Array<Boolean> = [];


  constructor(
    public _foodsService: FoodsService
  ) { 
    this.activatedButtons = [false, false, false];
    this.food = new Food('','','','','','','','',[]);
    console.log(this.food)
  }

  ngOnInit() {
    this.getFoods();
  }

  getFoods() {
    this.foods = this._foodsService.getFoods();
  }
  select(id: string) {
    this.selected = this._getPosition(id);
    this.food = this.foods[this.selected];
  }
  newFood(pos: number) {
    this.activatedButtons[pos] = !this.activatedButtons[pos];
    this.modal = false;
    this.food = new Food('','','','','','','','',[]);
  }
  editFood(pos: number) {
    this.activatedButtons[pos] = !this.activatedButtons[pos];
    this.modal = false;
    console.log(this.food);
  }
  removeFood(pos: number) {
    this.activatedButtons[pos] = !this.activatedButtons[pos];
  }

  save(form: NgForm) {
    console.log(form.value);
  }

  closeModal() {
    this.modal = true;
    this.activatedButtons = [false, false, false];
  }

  changePage(event: number) {
    console.log('pagina seleccionada ', event);
  }
  
  receiveFiles(event: File) {
    console.log(event);
    this.food.image.push(event);
    console.log(this.food.image);
  }


  receivePos(event: number) {
    console.log(event)
    console.log(this.food.image[event]);
    this.food.image.splice( event, 1 );
    console.log(this.food.image);


  }
  _getPosition(id: string) {
    for (var i = 0; i < this.foods.length; i++) {
      if(this.foods[i].id == id) return i;
    }
    return undefined;
  }

}

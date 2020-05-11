import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  myOrders;
  inProcess;
  response;

  constructor(private orderService : OrderService) { }

  ngOnInit() {
    this.socketOrders();
    this.withoutSocketOrders();
    this.takeInOrder();
  }

  takeInOrder() {
    // this.orderService.takeInProcess().subscribe(data => {
    //   console.log("las ordenes en proceso : " , data)
    //   this.inProcess = data;
    // })
  }

  takeOrder(confirmation, _id) {
    console.log("tu mama", confirmation, _id)
    this.orderService.TakeOrders(confirmation, _id).subscribe(data => {
      this.response = data
      console.log(`mi respuesta del servidor :  ${this.response.message} `)
    })
  }

  withoutSocketOrders() {
    console.log("deberia cargar esto!!!");
    this.orderService.getOrdersWithoutSocket().subscribe(data => {
      console.log("los datos de las ordenes", data)
      this.myOrders = data
    })
  }

  socketOrders() {
    this.orderService.getOrdersOpen().subscribe(data => {
      console.log(`los datos : ${data}`)
      this.myOrders = data
    })
  }
}

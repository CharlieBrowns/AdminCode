import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as io from 'socket.io-client';

// const httpOptions = {
//   headers: new HttpHeaders({ 
//     'Access-Control-Allow-Origin':'*',
//     'Authorization':'authkey',
//     'userid':'1'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  socket: any;
  
httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};
  constructor(private http : HttpClient) { 
      this.socket = io('https://bytecode-socket.herokuapp.com/admin', {
          'forceNew': true, query: {
              token: localStorage.getItem('token')
          }
      })
  }

  

  takeInProcess( ) {
    // return this.http.get(`http://localhost:5000/process`)
    // return this.http.get(`${environment.URL}/sale/processing/list`);
  }

  TakeOrders(confirmation, idOrder) {
     return this.http.post(`http://localhost:5000/prueba`, {confirmation, idOrder})
  }

  getOrdersWithoutSocket() {
      // return this.http.get(`${environment.URL}/sale/receive/list`,this.httpOptions);
      return this.http.get(`http://localhost:5000/prueba`, this.httpOptions);
  }

  getOrdersOpen() {
    return new Observable((subscriber) => {
        this.socket.on('new-sale', (data) => {
            subscriber.next(data);
        })
      })
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  foods: Array<any> = [];
  constructor() { }

  getFoods() {
    return [
      {
        id: '1',
        name: 'Platillo 1',
        description: 'manzana, platano, papaya, uva, cereales',
        price: 50.00,
        duration: '25 min',
        type: 'combo',
        calification: 40,
        state: 'habilitado',
        image: ['pizza.png','pizza.png','pizza.png','pizza.png']
      },
      {
        id: '2',
        name: 'Platillo 2',
        description: 'manzana, platano, papaya, uva, cereales',
        price: 50.00,
        duration: '25 min',
        type: 'combo',
        calification: 40,
        state: 'habilitado',
        image: ['pizza.png','pizza.png','pizza.png','pizza.png']
      },
      {
        id: '3',
        name: 'Platillo 3',
        description: 'manzana, platano, papaya, uva, cereales',
        price: 50.00,
        duration: '25 min',
        type: 'combo',
        calification: 40,
        state: 'habilitado',
        image: ['pizza.png','pizza.png','pizza.png','pizza.png']
      },
      {
        id: '4',
        name: 'Platillo 4',
        description: 'manzana, platano, papaya, uva, cereales',
        price: 50.00,
        duration: '25 min',
        type: 'combo',
        calification: 40,
        state: 'habilitado',
        image: ['pizza.png','pizza.png','pizza.png','pizza.png']
      },
      {
        id: '5',
        name: 'Platillo 5',
        description: 'manzana, platano, papaya, uva, cereales',
        price: 50.00,
        duration: '25 min',
        type: 'combo',
        calification: 40,
        state: 'habilitado',
        image: ['pizza.png','pizza.png','pizza.png','pizza.png']
      },
      {
        id: '6',
        name: 'Platillo 6',
        description: 'manzana, platano, papaya, uva, cereales',
        price: 50.00,
        duration: '25 min',
        type: 'combo',
        calification: 40,
        state: 'habilitado',
        image: ['pizza.png','pizza.png','pizza.png','pizza.png']
      },
      {
        id: '7',
        name: 'Platillo 7',
        description: 'manzana, platano, papaya, uva, cereales',
        price: 50.00,
        duration: '25 min',
        type: 'combo',
        calification: 40,
        state: 'habilitado',
        image: ['pizza.png','pizza.png','pizza.png','pizza.png']
      },
      {
        id: '8',
        name: 'Platillo 8',
        description: 'manzana, platano, papaya, uva, cereales',
        price: 50.00,
        duration: '25 min',
        type: 'combo',
        calification: 40,
        state: 'habilitado',
        image: ['pizza.png','pizza.png','pizza.png','pizza.png']
      },
      {
        id: '9',
        name: 'Platillo 9',
        description: 'manzana, platano, papaya, uva, cereales',
        price: 50.00,
        duration: '25 min',
        type: 'combo',
        calification: 40,
        state: 'habilitado',
        image: ['pizza.png','pizza.png','pizza.png','pizza.png']
      },
      {
        id: '10',
        name: 'Platillo 10',
        description: 'manzana, platano, papaya, uva, cereales',
        price: 50.00,
        duration: '25 min',
        type: 'combo',
        calification: 40,
        state: 'habilitado',
        image: ['pizza.png','pizza.png','pizza.png','pizza.png']
      }
    ]
  }
}

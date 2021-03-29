import { Component, OnInit } from '@angular/core';

import { OrderService } from './order.service';
import { RadioOption } from './../shared/radio/radio.option.model';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ]

  constructor(private oderService: OrderService) { }

  ngOnInit() {
  }

  cartItems(): CartItem[]{
    return this.oderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.oderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.oderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.oderService.remove(item)
  }

}

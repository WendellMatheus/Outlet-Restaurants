import { Component, OnInit } from '@angular/core';

import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from 'app/shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ]

  constructor(private oderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.oderService.itemsValue()
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

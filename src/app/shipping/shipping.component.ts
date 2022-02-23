import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService, ShippingPrice } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  shipmentCosts: Observable<ShippingPrice[]> = this.cartService.getChipmentPrices();
  constructor(private cartService: CartService) { }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, products } from './products';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(
   private httpClient: HttpClient
  ) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  count() {
    return this.items.length;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getChipmentPrices() {
    return this.httpClient.get<ShippingPrice[]>('/assets/shipping.json');
  }
}

export interface ShippingPrice {
  type: string,
  price: number
}

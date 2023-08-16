import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItem: any[] = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.cartItem.push(...product);
    this.productList.next(product);
  }
  addToCart(product: any) {
    this.cartItem.push(product);
    this.productList.next(this.cartItem);
    this.getTotalPrice();
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItem.forEach((item: any) => {
      grandTotal += item.total;
    });
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItem.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItem.splice(index, 1);
      }
    });

    this.productList.next(this.cartItem);
  }
  removeAllCart() {
    this.cartItem = [];
    this.productList.next(this.cartItem);
  }
}

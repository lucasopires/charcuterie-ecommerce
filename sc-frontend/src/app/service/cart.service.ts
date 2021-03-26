import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Cart } from '../entities/cart';
import { Item } from '../entities/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private CARTS_API = "http://localhost:8080/api/v1/carts";

  constructor(private http: HttpClient) { }

  addProductToCart(product) {
    let cart = this.getCart();
    var item: Item = new Item();
    item.product = product;
    item.quantity
  }

  getCart() {
    let cart = localStorage.getItem('cart');
    if (cart == null) {
      this.createEmptyCart().subscribe(resp => {
        localStorage.setItem('cart', "" + resp.body);
      });
    }
    return localStorage.getItem('cart');
  }

  createEmptyCart(): Observable<HttpResponse<Cart>> {
    return this.http.post<Cart>(
      this.CARTS_API, null,
      { observe: 'response' });
  }

}

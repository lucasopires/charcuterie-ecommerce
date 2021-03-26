import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/entities/item';
import { Product } from 'src/app/entities/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.productService.findAll().subscribe(resp => {
      if (resp.body !== null) {
        for (const product of resp.body) {
          this.products.push(product);
        }
      }
    });
  }

  addProductToCart(product) {
   // this.productService.cre
  }

}

import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/entities/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

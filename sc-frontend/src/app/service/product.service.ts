import { Injectable } from '@angular/core';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [
      {
        id: "1xyz",
        rate: 'img/stars.png',
        imageUrl: 'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/159859737_116931503746594_2571240189553997425_n.jpg?tp=1&_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=110&_nc_ohc=lxX77wYVkIoAX8ESLmt&oh=ac0c8288d03468a1debad08ee550e416&oe=60779BA3',
        price: 200,
        name: 'Super Board',
        description: 'This board is the best'
      },
      {
        id: "2xyz",
        rate: 'img/stars.png',
        imageUrl: 'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/159859737_116931503746594_2571240189553997425_n.jpg?tp=1&_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=110&_nc_ohc=lxX77wYVkIoAX8ESLmt&oh=ac0c8288d03468a1debad08ee550e416&oe=60779BA3',
        price: 200,
        name: 'Super Board',
        description: 'This board is the best'
      },
      {
        id: "3xyz",
        rate: 'img/stars.png',
        imageUrl: 'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/159859737_116931503746594_2571240189553997425_n.jpg?tp=1&_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=110&_nc_ohc=lxX77wYVkIoAX8ESLmt&oh=ac0c8288d03468a1debad08ee550e416&oe=60779BA3',
        price: 200,
        name: 'Super Board',
        description: 'This board is the best'
      },
      {
        id: "4xyz",
        rate: 'img/stars.png',
        imageUrl: 'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/159859737_116931503746594_2571240189553997425_n.jpg?tp=1&_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=110&_nc_ohc=lxX77wYVkIoAX8ESLmt&oh=ac0c8288d03468a1debad08ee550e416&oe=60779BA3',
        price: 200,
        name: 'Super Board',
        description: 'This board is the best'
      },
      {
        id: "5xyz",
        rate: 'img/stars.png',
        imageUrl: 'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/159859737_116931503746594_2571240189553997425_n.jpg?tp=1&_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=110&_nc_ohc=lxX77wYVkIoAX8ESLmt&oh=ac0c8288d03468a1debad08ee550e416&oe=60779BA3',
        price: 200,
        name: 'Super Board',
        description: 'This board is the best'
      },
      {
        id: "6xyz",
        rate: 'img/stars.png',
        imageUrl: 'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/159859737_116931503746594_2571240189553997425_n.jpg?tp=1&_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=110&_nc_ohc=lxX77wYVkIoAX8ESLmt&oh=ac0c8288d03468a1debad08ee550e416&oe=60779BA3',
        price: 200,
        name: 'Super Board',
        description: 'This board is the best'
      },
      {
        id: "7xyz",
        rate: 'img/stars.png',
        imageUrl: 'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/159859737_116931503746594_2571240189553997425_n.jpg?tp=1&_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=110&_nc_ohc=lxX77wYVkIoAX8ESLmt&oh=ac0c8288d03468a1debad08ee550e416&oe=60779BA3',
        price: 200,
        name: 'Super Board',
        description: 'This board is the best'
      }];
  }

  findAll(): Product[] {
    return this.products;
  }
}

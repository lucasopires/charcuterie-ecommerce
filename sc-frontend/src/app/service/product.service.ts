import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private PRODUCTS_API = "http://localhost:8080/api/v1/products";

  constructor(private http: HttpClient) { }

  findAll(): Observable<HttpResponse<Product[]>> {
    return this.http.get<Product[]>(
      this.PRODUCTS_API, 
      { observe: 'response' });
  }

}

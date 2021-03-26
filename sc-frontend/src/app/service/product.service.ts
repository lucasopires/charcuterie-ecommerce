import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private REST_API_SERVER = "http://localhost:8080/api/v1/products";

  constructor(private http: HttpClient) { }

  findAll(): Observable<HttpResponse<Product[]>> {
    return this.http.get<Product[]>(
      this.REST_API_SERVER, 
      { observe: 'response' });
  }

}

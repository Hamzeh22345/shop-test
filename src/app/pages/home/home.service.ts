import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(@Inject(HttpClient) private http: HttpClient) {}
  getAllProducts(pageSize: number) {
    return this.http.get(`https://fakestoreapi.com/products?limit=${pageSize}`);
  }
}

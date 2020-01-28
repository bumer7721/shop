import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Array<ProductModel> {
    return [
      new ProductModel(1, 'AMD Ryzen 7 3700X', 5, true),
      new ProductModel(2, 'Intel Core i7-8700K', 3, true),
      new ProductModel(3, 'AMD Ryzen 5 3600', 1, true),
      new ProductModel(4, 'Intel Core i5-9600K', 0, false)
    ];
  }
}
